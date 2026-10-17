// ==========================================================
// HOME PAGE - ALAUDIS
// ==========================================================
// VERSION AMÉLIORÉE
// ----------------------------------------------------------
// Ce qui a été amélioré dans cette version :
// 1. le slogan principal a été rétabli :
//    "ARTISANAT, DÉTAIL, IDENTITÉ."
// 2. la navigation vers la section « Modèles » a été améliorée
// 3. après le clic sur « Modèles », la section se place plus haut
// 4. l’ancien bouton a été rétabli :
//    "Réserver une consultation privée"
// 5. le sélecteur de langue fonctionne
// 6. le header est fixé
// 7. ajout d’un fond premium flouté sous le header
// 8. le piano du hero a été légèrement réduit
// 9. sur téléphone, le header ne se chevauche plus
// 10. sur téléphone, le logo est parfaitement centré
// 11. sur téléphone, il y a un bouton Contact à gauche
// 12. sur téléphone, le bloc Histoire est cliquable
// ==========================================================

import HomeHeader from "@/components/HomeHeader";
import PianoHeroImage from "@/components/PianoHeroImage";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";
import AlaudisStory from "@/components/AlaudisStory";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          HERO
         ==================================================== */}
      <section className="home-hero hero-copy relative min-h-screen overflow-hidden">
        <PianoHeroImage alt="Piano à queue Alaudis" />

        <div className="absolute inset-0 z-10 bg-black/4" />

        {/* ==================================================
            HEADER
           ================================================== */}
        <HomeHeader locale="fr" />

        {/* ==================================================
            CENTRE HERO
           ================================================== */}
        <div className="home-hero-content relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl pt-16 sm:pt-20">
            <p className="home-hero-eyebrow mb-5 text-[11px] uppercase tracking-[0.48em] text-white/90">
              Alaudis Atelier
            </p>

            <h1 className="home-hero-title text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Artisanat,
              <br />
              détail, identité.
            </h1>

            <p className="home-hero-description mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              Chaque Alaudis naît de l’union entre artisanat, proportion,
              matière noble et caractère sonore individuel.
            </p>

            <div className="home-hero-actions mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/fr/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Ouvrir le configurateur
              </Link>

              <Link
                href="/fr/kontakt"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Réserver une consultation privée
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            BAS HERO
           ================================================== */}
        <div className="home-hero-scroll absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/88">
            Faire défiler vers le bas
          </p>
        </div>
      </section>

      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      <AlaudisStory language="FR" />

      {/* ====================================================
          SECTION CONTACT
         ==================================================== */}
      <section
        id="contact"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Consultation privée
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Parlons de votre Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Contactez-nous pour discuter du modèle, de la finition, du caractère
          sonore et de la composition individuelle de votre piano Alaudis.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/fr/konfigurator"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Ouvrir le configurateur
          </Link>

          <Link
            href="/fr/kontakt"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* ====================================================
          SECTION HISTOIRE
         ==================================================== */}

      {/* MOBILE: bloc cliquable */}
      <Link
        href="/fr/kontakt"
        className="block bg-neutral-950 px-6 py-20 text-center sm:hidden"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Contact Alaudis
        </p>

        <h2 className="mt-4 text-3xl font-light text-white">
          Trouvez votre piano
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Échangeons sur les modèles, les finitions et les possibilités de
          configuration. Prenez rendez-vous pour une consultation privée ou une
          visite de notre atelier.
        </p>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white">
            Contact
          </span>
        </div>
      </Link>

      {/* DESKTOP / TABLETTE */}
      <section
        id="histoire"
        className="hidden bg-neutral-950 px-6 py-20 text-center sm:block sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Héritage et artisanat
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          L’univers Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Découvrez la philosophie de la marque, le processus de création des
          instruments et l’artisanat qui donne à chaque Alaudis sa propre
          identité.
        </p>
      </section>

      <Footer />
    </main>
  );
}
