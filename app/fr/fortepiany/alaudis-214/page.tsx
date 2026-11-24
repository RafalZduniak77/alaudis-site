// ==========================================================
// MODEL PAGE - ALAUDIS LEO 214
// ==========================================================
// Wersja językowa: FR
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelSoundCharacter from "@/components/ModelSoundCharacter";
import HomeHero from "@/components/HomeHero";
import ModelBespokeOffer from "@/components/ModelBespokeOffer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("fr", "model214");

export default function ModelAlaudis214Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="fr" page="model214" />
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <HomeHero
        headingTitle
        alt="ALAUDIS LEO 214"
        eyebrow="Modèle premium"
        title={["ALAUDIS", "LEO 214"]}
        description="Plus profond, plus présent et plus proche du caractère de concert. ALAUDIS LEO 214 a été conçu pour ceux qui recherchent une respiration sonore plus ample, une projection plus large et une présence plus marquée."
        actions={[
          { href: "/fr/konfigurator?model=214", label: "Ouvrir le configurateur" },
          { href: "/fr/odkryj-modele?model=214", label: "Voir en 3D" },
        ]}
        scroll="Faire défiler vers le bas"
      />

      <ModelStorySignature model="214" language="FR" />

      <ModelSoundCharacter
        eyebrow="Caractère sonore"
        lead="ALAUDIS LEO 214 développe le langage sonore de la marque vers une plus grande échelle et une présence plus affirmée."
        text="Il offre un son plus ouvert, un grave plus profond et un médium plus projeté, tout en conservant culture, élégance et noblesse musicale."
      />

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Destination
            </p>
            <h3 className="mt-4 text-2xl font-light">Salon et scène de chambre</h3>
            <p className="mt-5 leading-8 text-white">Idéal pour les résidences spacieuses, les salons de musique privés, les hôtels boutique et les scènes de chambre.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Intérieurs cibles
            </p>
            <h3 className="mt-4 text-2xl font-light">Espace, lumière, présence</h3>
            <p className="mt-5 leading-8 text-white">Il s’intègre particulièrement bien dans les intérieurs premium modernes, les appartements classiques et les espaces de réception.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identité du modèle
            </p>
            <h3 className="mt-4 text-2xl font-light">Entre élégance et ampleur</h3>
            <p className="mt-5 leading-8 text-white">ALAUDIS LEO 214 conserve la classe visuelle d’un modèle premium tout en offrant une échelle sonore plus développée.</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS LEO 214 en finitions premium
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/3.jpg" alt="ALAUDIS LEO 214 - 1" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/5.jpg" alt="ALAUDIS LEO 214 - 2" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/2.jpg" alt="ALAUDIS LEO 214 - 3" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <ModelBespokeOffer language="FR" model="214" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Prochaine étape
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configurez ALAUDIS LEO 214 ou découvrez-le en 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Accédez au configurateur pour choisir la finition et les détails, ou découvrez le modèle en 3D.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/fr/konfigurator?model=214"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Ouvrir le configurateur
            </Link>

            <Link
              href="/fr/odkryj-modele?model=214"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Voir en 3D
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
