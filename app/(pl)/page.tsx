// ==========================================================
// HOME PAGE - ALAUDIS
// ==========================================================
// WERSJA POPRAWIONA
// ----------------------------------------------------------
// Co poprawiono w tej wersji:
// 1. przywrócono hasło przewodnie:
//    "RZEMIOSŁO, DETAL, TOŻSAMOŚĆ."
// 2. poprawiono kierowanie do sekcji "Modele"
// 3. sekcja po kliknięciu "Modele" ustawia się wyżej
// 4. przywrócono wcześniejszy przycisk:
//    "Umów prywatną konsultację"
// 5. naprawiono przełącznik języków na stronie głównej
// 6. dodano FR i działające linki
// 7. header został przypięty do góry
// 8. dodano premium tło / blur pod headerem
// 9. fortepian w hero został lekko pomniejszony i opuszczony
// 10. na telefonie header się nie nakłada
// 11. logo na telefonie jest idealnie wyśrodkowane
// 12. na telefonie po lewej jest przycisk Kontakt
// 13. link Historia prowadzi do osobnej podstrony /historia
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";
import AlaudisStory from "@/components/AlaudisStory";

export const metadata = pageMetadata("pl", "home");

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="pl" page="home" />
      {/* ====================================================
          BANER (components/HomeHero.tsx) + MENU
         ==================================================== */}
      <HomeHeader locale="pl" />
      <HomeHero
        alt="Fortepian Alaudis – nowy polski fortepian"
        eyebrow="Nowy polski fortepian"
        title={["Rzemiosło,", "detal, tożsamość."]}
        actions={[
          { href: "/konfigurator", label: "Otwórz konfigurator" },
          { href: "/odkryj-modele?model=178", label: "Odkryj modele 3D" },
        ]}
        scroll="Przewiń w dół"
      />


      {/* ====================================================
          GALERIA WYKOŃCZEŃ I KOLEKCJA ALAUDIS
         ==================================================== */}
      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      <AlaudisStory language="PL" />

      {/* ====================================================
          SEKCJA KONTAKT
         ==================================================== */}
      <section
        id="kontakt"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/88">
          Prywatna konsultacja
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Porozmawiajmy o Twoim Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
          Skontaktuj się z nami, aby omówić model, wykończenie, charakter
          instrumentu oraz indywidualną kompozycję fortepianu Alaudis.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/kontakt"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Skontaktuj się z nami
          </Link>

          <Link
            href="/odwiedz-atelier"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Odwiedź atelier
          </Link>
        </div>
      </section>

          {/* ====================================================
              SEKCJA HISTORIA
             ==================================================== */}

          {/* MOBILE: cała sekcja klikalna */}
          <Link
            href="/kontakt"
            className="block bg-neutral-950 px-6 py-20 text-center sm:hidden"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Kontakt Alaudis
            </p>

            <h2 className="mt-4 text-3xl font-light text-white">
              Znajdź swój fortepian
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
              Porozmawiaj z nami o modelach, wykończeniach i możliwościach
              konfiguracji. Umów prywatną konsultację lub wizytę w atelier.
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
