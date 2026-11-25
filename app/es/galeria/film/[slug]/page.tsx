import { GalleryVideoPage, galleryVideoMetadata } from "@/components/gallery/GalleryPages";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return galleryVideoMetadata("es", params);
}
export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <GalleryVideoPage locale="es" params={params} />;
}
