import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("de", "model178");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SeoJsonLd locale="de" page="model178" />
      {children}
    </>
  );
}
