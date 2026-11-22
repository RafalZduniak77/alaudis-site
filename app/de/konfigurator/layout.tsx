import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("de", "konfigurator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SeoJsonLd locale="de" page="konfigurator" />
      {children}
    </>
  );
}
