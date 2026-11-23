import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import AlaudisARPreview from "@/components/AlaudisARPreview";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("de", "odkryjModele");

export default function OdkryjModelePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="de" page="odkryjModele" />
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section id="podglad-3d" className="scroll-mt-24 bg-black px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <h1 className="sr-only">Modelle entdecken</h1>
        <div className="mx-auto max-w-7xl">
          <Suspense fallback={<div className="min-h-[640px] rounded-[36px] bg-[#070707]" />}>
            <AlaudisARPreview intro={"Sehen Sie den Flügel in 3D, drehen Sie ihn, zoomen Sie hinein und prüfen Sie, wie er in einem realen Interieur wirkt. Das ist der erste Schritt zum vollständigen Alaudis-Erlebnis: Konfigurator + AR-Vorschau."} />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
