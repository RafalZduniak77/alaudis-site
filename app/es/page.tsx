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

export const metadata = pageMetadata("es", "home");

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="es" page="home" />
      {/* ====================================================
          BANER (components/HomeHero.tsx) + MENU
         ==================================================== */}
      <HomeHeader locale="es" />
      <HomeHero
        alt="Alaudis: el nuevo piano de cola polaco"
        eyebrow="El nuevo piano de cola polaco"
        title={["Artesanía,", "detalle, identidad."]}
        actions={[
          { href: "/es/konfigurator", label: "Abra el configurador" },
          { href: "/es/odkryj-modele?model=178", label: "Descubra los modelos en 3D" },
        ]}
        scroll="Desplácese hacia abajo"
      />


      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      <AlaudisStory language="ES" />

      {/* ====================================================
          SECTION CONTACT
         ==================================================== */}
      <section
        id="contacto"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Consulta privada
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Hablemos de su Alaudis
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Póngase en contacto con nosotros para hablar del modelo, el acabado, el
            carácter del instrumento y la composición personalizada de su piano de
            cola Alaudis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/es/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Póngase en contacto
            </Link>

            <Link
              href="/es/odwiedz-atelier"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Visite el atelier
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION HISTOIRE
         ==================================================== */}

      {/* MOBILE: bloc cliquable */}
      <Link
        href="/es/kontakt"
        className="block bg-neutral-950 px-6 py-20 text-center sm:hidden"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/88">
          Contacto Alaudis
        </p>

        <h2 className="mt-4 text-3xl font-light text-white">
          Encuentre su piano de cola
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
          Hable con nosotros sobre los modelos, los acabados y las posibilidades
          de configuración. Concierte una consulta privada o una visita al
          atelier.
        </p>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white">
            Contacto
          </span>
        </div>
      </Link>


      <Footer />
    </main>
  );
}
