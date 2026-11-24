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

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";
import AlaudisStory from "@/components/AlaudisStory";

export const metadata = pageMetadata("it", "home");

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="it" page="home" />
      {/* ====================================================
          BANER (components/HomeHero.tsx) + MENU
         ==================================================== */}
      <HomeHeader locale="it" />
      <HomeHero
        alt="Alaudis – il nuovo pianoforte a coda polacco"
        eyebrow="Il nuovo pianoforte a coda polacco"
        title={["Artigianato,", "dettaglio, identità."]}
        actions={[
          { href: "/it/konfigurator", label: "Apri il configuratore" },
          { href: "/it/odkryj-modele?model=178", label: "Scopri i modelli in 3D" },
        ]}
        scroll="Scorri verso il basso"
      />


      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      <AlaudisStory language="IT" />

      {/* ====================================================
          SECTION CONTACT
         ==================================================== */}
      <section
        id="contatti"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Consulenza privata
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Parliamo del tuo Alaudis
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Contattaci per parlare del modello, della finitura, del carattere
            dello strumento e della composizione personalizzata del tuo
            pianoforte a coda Alaudis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/it/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Contattaci
            </Link>

            <Link
              href="/it/odwiedz-atelier"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Visita l’atelier
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION HISTOIRE
         ==================================================== */}

      {/* MOBILE: bloc cliquable */}
      <Link
        href="/it/kontakt"
        className="block bg-neutral-950 px-6 py-20 text-center sm:hidden"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/88">
          Contatti Alaudis
        </p>

        <h2 className="mt-4 text-3xl font-light text-white">
          Trova il tuo pianoforte a coda
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
          Parla con noi dei modelli, delle finiture e delle possibilità di
          configurazione. Prenota una consulenza privata o una visita
          all’atelier.
        </p>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white">
            Contatti
          </span>
        </div>
      </Link>


      <Footer />
    </main>
  );
}
