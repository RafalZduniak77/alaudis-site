import { GalleryAlbumPage, galleryMetadata } from "@/components/gallery/GalleryPages";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = galleryMetadata("de");
export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <GalleryAlbumPage locale="de" params={params} />;
}
