import type { GalleryPhoto } from "./types";

export function photoUrl(photo: GalleryPhoto, width: number, quality = 80) {
  const size = Math.min(width, photo.width);
  if (photo.url.startsWith("/")) {
    return `/_next/image?url=${encodeURIComponent(photo.url)}&w=${[256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840].find(w => w >= size) || 3840}&q=75`;
  }
  const url = new URL(photo.url);
  if (url.hostname !== "cdn.sanity.io") throw new Error("Unsupported gallery image host");
  url.searchParams.set("w", String(size));
  url.searchParams.set("fit", "max");
  url.searchParams.set("auto", "format");
  url.searchParams.set("q", String(quality));
  return url.toString();
}

export const photoWidths = (photo: GalleryPhoto) => photo.url.startsWith("/")
  ? [384, 640, 828, 1080, 1200, 1920, 2048, 3840].filter(width => width <= photo.width)
  : [...new Set([320, 640, 960, 1440, 1920, 2560, 3840].map(width => Math.min(width, photo.width)))];

