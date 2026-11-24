import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";
import AlaudisStory from "@/components/AlaudisStory";

export const metadata = pageMetadata("de", "home");

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="de" page="home" />
      {/* ====================================================
          BANER (components/HomeHero.tsx) + MENU
         ==================================================== */}
      <HomeHeader locale="de" />
      <HomeHero
        alt="Alaudis – der neue polnische Flügel"
        eyebrow="Der neue polnische Flügel"
        title={["Handwerk,", "Detail, Identität."]}
        actions={[
          { href: "/de/konfigurator", label: "Konfigurator öffnen" },
          { href: "/de/odkryj-modele?model=178", label: "Modelle in 3D entdecken" },
        ]}
        scroll="Nach unten scrollen"
      />


      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      <AlaudisStory language="DE" />

      {/* ====================================================
          KONTAKTBEREICH
         ==================================================== */}
      <section
        id="kontakt"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Private Beratung
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Sprechen wir über Ihren Alaudis
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Kontaktieren Sie uns, um über Modell, Ausführung, Klangcharakter und
            die individuelle Komposition Ihres Alaudis-Flügels zu sprechen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/de/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Kontaktieren Sie uns
            </Link>

            <Link
              href="/de/odwiedz-atelier"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Atelier besuchen
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          GESCHICHTSBEREICH
         ==================================================== */}

      {/* MOBILE: klickbarer Block */}
      <Link
        href="/de/kontakt"
        className="block bg-neutral-950 px-6 py-20 text-center sm:hidden"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/88">
          Alaudis Kontakt
        </p>

        <h2 className="mt-4 text-3xl font-light text-white">
          Finden Sie Ihren Flügel
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
          Sprechen Sie mit uns über Modelle, Ausführungen und
          Konfigurationsmöglichkeiten. Vereinbaren Sie eine persönliche Beratung
          oder einen Besuch in unserem Atelier.
        </p>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white">
            Kontakt
          </span>
        </div>
      </Link>


      <Footer />
    </main>
  );
}
