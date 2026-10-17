import { GalleryAlbumPage, galleryAlbumMetadata } from "@/components/gallery/GalleryPages";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return galleryAlbumMetadata("en", params);
}
export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <GalleryAlbumPage locale="en" params={params} />;
}
