import HomeHeader from "@/components/HomeHeader";
import type { GalleryFilter, GalleryLocale } from "@/lib/gallery/types";

// The gallery uses the same menu as the rest of the site.
export default function GalleryHeader({ locale }: { locale: GalleryLocale; slug?: string; category?: GalleryFilter }) {
  return <HomeHeader locale={locale} variant="page" />;
}
