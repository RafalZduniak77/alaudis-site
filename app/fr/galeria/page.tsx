import { GalleryIndexPage, galleryMetadata } from "@/components/gallery/GalleryPages";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = galleryMetadata("fr");
export default function Page({ searchParams }: { searchParams: Promise<{ dzial?: string }> }) {
  return <GalleryIndexPage locale="fr" searchParams={searchParams} />;
}
