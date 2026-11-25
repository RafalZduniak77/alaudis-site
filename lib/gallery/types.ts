export const galleryLocales = ["pl", "en", "de", "fr", "es", "it"] as const;
export type GalleryLocale = (typeof galleryLocales)[number];
export type LocalizedText = Partial<Record<GalleryLocale, string>>;
export type GalleryCategory = "instruments" | "craft" | "events";
export const galleryFilters = ["instruments", "craft", "events", "video"] as const;
export type GalleryFilter = (typeof galleryFilters)[number];
export function isGalleryFilter(value: string): value is GalleryFilter { return galleryFilters.includes(value as GalleryFilter); }

export type GalleryPhoto = {
  _key: string;
  url: string;
  width: number;
  height: number;
  lqip?: string;
  caption: LocalizedText;
  seoDescription?: LocalizedText;
  alt: LocalizedText;
  author?: string;
};

export type GalleryAlbum = {
  _id: string;
  _updatedAt: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  seoTitle?: LocalizedText;
  seoDescription?: LocalizedText;
  category: GalleryCategory;
  date?: string;
  location?: string;
  author?: string;
  cover: GalleryPhoto;
  photoCount: number;
};

export type AlbumPageData = GalleryAlbum & { photos: GalleryPhoto[] };
export type GalleryVideo = Omit<GalleryAlbum, "category" | "photoCount" | "slug"> & {
  category: "video";
  video: { url: string; mimeType: string };
  duration?: number;
};
export type GalleryItem = GalleryAlbum | GalleryVideo;
export type AlbumList = { items: GalleryItem[]; total: number; demo: boolean };
export const PHOTO_BATCH_SIZE = 24;
export const ALBUM_BATCH_SIZE = 12;
export const galleryPath = (locale: GalleryLocale) => `${locale === "pl" ? "" : `/${locale}`}/galeria`;
export const localize = (text: LocalizedText | undefined, locale: GalleryLocale) => text?.[locale]?.trim() || text?.pl?.trim() || "";
export function isGalleryLocale(value: string): value is GalleryLocale { return galleryLocales.includes(value as GalleryLocale); }


// Each film has its own page: /galeria/film/<slug>. The slug comes from the document id
// (the „gallery-video-” prefix is dropped), so it never changes when a title is edited.
export const VIDEO_ID_PREFIX = "gallery-video-";
export const videoSlug = (id: string) => (id.startsWith(VIDEO_ID_PREFIX) ? id.slice(VIDEO_ID_PREFIX.length) : id).toLowerCase();
export const videoPath = (locale: GalleryLocale, id: string) => `${galleryPath(locale)}/film/${videoSlug(id)}`;
export type VideoPageData = {
  _id: string; _createdAt: string; _updatedAt: string;
  title: LocalizedText; description?: LocalizedText; section: "sound" | "craft";
  date?: string; location?: string; author?: string; duration?: number;
  cover: GalleryPhoto; video: { url: string; mimeType: string; size?: number };
};
export type VideoSummary = Pick<VideoPageData, "_id" | "_createdAt" | "_updatedAt" | "title" | "description" | "section" | "date" | "duration" | "cover" | "video">;
