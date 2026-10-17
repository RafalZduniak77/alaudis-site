"use client";

import { useState } from "react";
import Link from "next/link";
import { galleryPath, localize, type AlbumList, type GalleryCategory, type GalleryLocale } from "@/lib/gallery/types";
import { galleryCopy } from "@/lib/gallery/i18n";
import GalleryImage from "./GalleryImage";
import styles from "./Gallery.module.css";

export default function AlbumCards({ initial, locale, category }: { initial: AlbumList; locale: GalleryLocale; category?: GalleryCategory }) {
  const [albums, setAlbums] = useState(initial.items);
  const [total, setTotal] = useState(initial.total);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const copy = galleryCopy[locale];
  async function loadMore() {
    if (loading) return;
    setLoading(true); setError(false);
    try {
      const response = await fetch(`/api/gallery/albums?offset=${albums.length}${category ? `&category=${category}` : ""}`, { cache: "no-store" });
      if (!response.ok) throw new Error();
      const data: AlbumList = await response.json();
      setTotal(data.total);
      setAlbums(current => [...current, ...data.items.filter(a => !current.some(existing => existing._id === a._id))]);
    } catch { setError(true); } finally { setLoading(false); }
  }
  return <>
    <div className={styles.albums} aria-busy={loading}>
      {albums.map((album, index) => <Link key={album._id} href={`${galleryPath(locale)}/${album.slug}`} prefetch={false} className={styles.albumCard}>
        <div className={styles.albumImage}><GalleryImage photo={album.cover} alt={localize(album.cover.alt, locale) || localize(album.title, locale)} sizes="(min-width: 1500px) 680px, (min-width: 760px) 45vw, 92vw" eager={index < 2} /><span className={styles.albumCount}>{copy.photos}: {album.photoCount}</span><span className={styles.albumArrow} aria-hidden="true">↗</span></div>
        <div className={styles.cardInfo}><p className={styles.eyebrow}>{copy[album.category]}</p><h2>{localize(album.title, locale)}</h2><p>{localize(album.description, locale)}</p><span className={styles.cardAction}>{copy.openAlbum} <span aria-hidden="true">→</span></span></div>
      </Link>)}
    </div>
    {!albums.length && <p className={styles.empty}>{copy.empty}</p>}
    {error && <p role="alert" className={styles.status}>{copy.error}</p>}
    {albums.length < total && <div className={styles.loadMore}><button className={styles.button} onClick={loadMore} disabled={loading}>{loading ? copy.loading : copy.more}</button></div>}
  </>;
}

