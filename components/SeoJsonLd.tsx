import { pageSchema, type SeoLocale, type SeoPage } from "@/lib/seo";

// Dane strukturalne schema.org dla wyszukiwarek (niewidoczne na stronie).
export default function SeoJsonLd({
  locale,
  page,
}: {
  locale: SeoLocale;
  page: SeoPage;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(pageSchema(locale, page)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
