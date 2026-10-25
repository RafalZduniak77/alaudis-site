import "server-only";
import { cache } from "react";
import { galleryApiVersion, galleryDataset, galleryProjectId } from "./config";
import { demoAlbums } from "./demo";
import { ALBUM_BATCH_SIZE, PHOTO_BATCH_SIZE, type AlbumList, type AlbumPageData, type GalleryItem, type GalleryFilter, type GalleryPhoto } from "./types";

export const galleryIsDemo = !galleryProjectId;

import { photoProjection, albumProjection, published, galleryItemsFilter, galleryItemProjection, galleryItemsOrder } from "./queries";

async function query<T>(groq: string, params: Record<string, unknown> = {}): Promise<T> {
  if (!/^[a-z0-9]+$/.test(galleryProjectId)) throw new Error("Gallery project is not configured");
  const url = new URL(`https://${galleryProjectId}.api.sanity.io/v${galleryApiVersion}/data/query/${galleryDataset}`);
  url.searchParams.set("query", groq);
  url.searchParams.set("perspective", "published");
  for (const [key, value] of Object.entries(params)) url.searchParams.set(`$${key}`, JSON.stringify(value));
  // Read directly from Content Lake: no stale-while-revalidate window. A browser
  // refresh sees publishing, edits and unpublishing without a deployment/webhook.
  const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`Gallery read failed (${response.status})`);
  const body = await response.json();
  return body.result as T;
}

export async function getAlbums(category?: GalleryFilter, offset = 0): Promise<AlbumList> {
  if (galleryIsDemo) {
    const albums = demoAlbums.filter(a => !category || a.category === category);
    return { items: albums.slice(offset, offset + ALBUM_BATCH_SIZE).map(album => ({
      _id: album._id, _updatedAt: album._updatedAt, slug: album.slug, title: album.title,
      description: album.description, category: album.category, date: album.date,
      location: album.location, author: album.author, cover: album.cover, photoCount: album.photoCount,
    })), total: albums.length, demo: true };
  }
  const data = await query<{ items: GalleryItem[]; total: number }>(`{
    "total": count(*[${galleryItemsFilter}]),
    "items": *[${galleryItemsFilter}] | order(${galleryItemsOrder}) [${offset}...${offset + ALBUM_BATCH_SIZE}]{${galleryItemProjection}}
  }`, { category: category || null });
  return { ...data, demo: false };
}

// Deduplicate metadata and page reads within a single server render, never across requests.
export const getAlbum = cache(async (slug: string): Promise<AlbumPageData | null> => {
  if (galleryIsDemo) {
    const album = demoAlbums.find(a => a.slug === slug);
    return album ? { ...album, photos: album.photos.slice(0, PHOTO_BATCH_SIZE) } : null;
  }
  return query<AlbumPageData | null>(`*[${published} && slug.current == $slug][0]{
    ${albumProjection}, "photos": photos[defined(asset->url)][0...${PHOTO_BATCH_SIZE}]${photoProjection}
  }`, { slug });
});

export async function getAlbumPhotos(slug: string, offset: number) {
  if (galleryIsDemo) {
    const album = demoAlbums.find(a => a.slug === slug);
    return album ? { revision: album._updatedAt, total: album.photoCount, photos: album.photos.slice(offset, offset + PHOTO_BATCH_SIZE) } : null;
  }
  return query<{ revision: string; total: number; photos: GalleryPhoto[] } | null>(`*[${published} && slug.current == $slug][0]{
    "revision": _updatedAt, "total": count(photos[defined(asset->url)]),
    "photos": photos[defined(asset->url)][${offset}...${offset + PHOTO_BATCH_SIZE}]${photoProjection}
  }`, { slug });
}

