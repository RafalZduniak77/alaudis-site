import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { SeoLocale } from "@/lib/seo";
import "@/app/globals.css";

// Wspólny szkielet dokumentu. Każda wersja językowa ma własny
// layout główny, dzięki czemu <html lang> odpowiada językowi strony.
export default function RootShell({
  lang,
  children,
}: {
  lang: SeoLocale;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
