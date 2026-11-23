import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import AlaudisARPreview from "@/components/AlaudisARPreview";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("fr", "odkryjModele");

export default function OdkryjModelePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="fr" page="odkryjModele" />
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <section id="podglad-3d" className="scroll-mt-24 bg-black px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <h1 className="sr-only">Découvrir les modèles</h1>
        <div className="mx-auto max-w-7xl">
          <Suspense fallback={<div className="min-h-[640px] rounded-[36px] bg-[#070707]" />}>
            <AlaudisARPreview intro={"Regardez le piano en 3D, faites-le pivoter, zoomez et découvrez son apparence dans un intérieur réel. C’est la première étape vers l’expérience complète Alaudis : configurateur + aperçu AR."} />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
