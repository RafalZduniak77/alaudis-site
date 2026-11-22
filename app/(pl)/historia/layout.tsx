import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("pl", "historia");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SeoJsonLd locale="pl" page="historia" />
      {children}
    </>
  );
}
