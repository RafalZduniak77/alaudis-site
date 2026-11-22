import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("de", "historia");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SeoJsonLd locale="de" page="historia" />
      {children}
    </>
  );
}
