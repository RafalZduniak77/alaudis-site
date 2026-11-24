import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import AlaudisARPreview from "@/components/AlaudisARPreview";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("it", "odkryjModele");

export default function OdkryjModelePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="it" page="odkryjModele" />
      <ModelPageTopBar backHref="/it" activeLanguage="IT" />

      <section id="podglad-3d" className="scroll-mt-24 bg-black px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <h1 className="sr-only">Scopri i modelli</h1>
        <div className="mx-auto max-w-7xl">
          <Suspense fallback={<div className="min-h-[640px] rounded-[36px] bg-[#070707]" />}>
            <AlaudisARPreview />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
