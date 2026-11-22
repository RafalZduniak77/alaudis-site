import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "konfigurator");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SeoJsonLd locale="en" page="konfigurator" />
      {children}
    </>
  );
}
