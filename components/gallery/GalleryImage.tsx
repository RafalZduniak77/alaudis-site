import type { GalleryPhoto } from "@/lib/gallery/types";
import { photoUrl, photoWidths } from "@/lib/gallery/images";

export default function GalleryImage({ photo, alt, sizes, eager = false }: { photo: GalleryPhoto; alt: string; sizes: string; eager?: boolean }) {
  return (
    // The CMS image CDN supplies responsive, compressed variants directly.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={photoUrl(photo, 640)} srcSet={photoWidths(photo).map(width => `${photoUrl(photo, width)} ${width}w`).join(", ")} sizes={sizes} alt={alt} width={photo.width} height={photo.height} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" style={photo.lqip ? { backgroundImage: `url(${photo.lqip})`, backgroundSize: "cover" } : undefined} />
  );
}

