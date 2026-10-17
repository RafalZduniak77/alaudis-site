export const galleryLocales = ["pl", "en", "de", "fr"] as const;
export type GalleryLocale = (typeof galleryLocales)[number];
export type LocalizedText = Partial<Record<GalleryLocale, string>>;
export type GalleryCategory = "instruments" | "craft" | "events";

export type GalleryPhoto = {
  _key: string;
  url: string;
  width: number;
  height: number;
  lqip?: string;
  caption: LocalizedText;
  alt: LocalizedText;
  author?: string;
};

export type GalleryAlbum = {
  _id: string;
  _updatedAt: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  category: GalleryCategory;
  date?: string;
  location?: string;
  author?: string;
  cover: GalleryPhoto;
  photoCount: number;
};

export type AlbumPageData = GalleryAlbum & { photos: GalleryPhoto[] };
export type AlbumList = { items: GalleryAlbum[]; total: number; demo: boolean };
export const PHOTO_BATCH_SIZE = 24;
export const ALBUM_BATCH_SIZE = 12;
export const galleryPath = (locale: GalleryLocale) => `${locale === "pl" ? "" : `/${locale}`}/galeria`;
export const localize = (text: LocalizedText | undefined, locale: GalleryLocale) => text?.[locale]?.trim() || text?.pl?.trim() || "";
export function isGalleryLocale(value: string): value is GalleryLocale { return galleryLocales.includes(value as GalleryLocale); }

