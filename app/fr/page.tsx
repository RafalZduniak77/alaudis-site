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

export const metadata = pageMetadata("fr", "home");

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="fr" page="home" />
      {/* ====================================================
          BANER (components/HomeHero.tsx) + MENU
         ==================================================== */}
      <HomeHeader locale="fr" />
      <HomeHero
        alt="Alaudis – le nouveau piano à queue polonais"
        eyebrow="Le nouveau piano polonais"
        title={["Artisanat,", "détail, identité."]}
        actions={[
          { href: "/fr/konfigurator", label: "Ouvrir le configurateur" },
          { href: "/fr/odkryj-modele?model=178", label: "Découvrir les modèles en 3D" },
        ]}
        scroll="Faire défiler vers le bas"
      />


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
            href="/fr/kontakt"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Contactez-nous
          </Link>

          <Link
            href="/fr/odwiedz-atelier"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Visiter l’atelier
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


      <Footer />
    </main>
  );
}
