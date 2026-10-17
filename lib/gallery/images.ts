import type { GalleryPhoto } from "./types";

const localImageWidths = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

// Keep even very large photographer originals out of the viewer. The longest
// delivered edge is 4K, including portraits and panoramas; zoom uses these bounds.
export function photoDisplaySize(photo: Pick<GalleryPhoto, "width" | "height">) {
  const scale = Math.min(1, 3840 / Math.max(photo.width, photo.height));
  return { width: Math.max(1, Math.round(photo.width * scale)), height: Math.max(1, Math.round(photo.height * scale)) };
}

export function photoUrl(photo: GalleryPhoto, width: number, quality = 80) {
  const maxWidth = photoDisplaySize(photo).width;
  const size = Math.min(width, maxWidth);
  if (photo.url.startsWith("/")) {
    const available = localImageWidths.filter(value => value <= maxWidth);
    return `/_next/image?url=${encodeURIComponent(photo.url)}&w=${available.find(value => value >= size) || available.at(-1) || 16}&q=75`;
  }
  const url = new URL(photo.url);
  if (url.hostname !== "cdn.sanity.io") throw new Error("Unsupported gallery image host");
  url.searchParams.set("w", String(size));
  url.searchParams.set("fit", "max");
  url.searchParams.set("auto", "format");
  url.searchParams.set("q", String(quality));
  return url.toString();
}

export function photoWidths(photo: GalleryPhoto) {
  const maxWidth = photoDisplaySize(photo).width;
  if (!photo.url.startsWith("/")) return [...new Set([320, 640, 960, 1440, 1920, 2560, 3840].map(width => Math.min(width, maxWidth)))];
  const widths = [384, 640, 828, 1080, 1200, 1920, 2048, 3840].filter(width => width <= maxWidth);
  return widths.length ? widths : [localImageWidths.filter(width => width <= maxWidth).at(-1) || 16];
}

