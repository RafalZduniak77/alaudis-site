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
        <PianoHeroImage alt="Alaudis grand piano" />

        {/* ==================================================
            DELIKATNA NAKŁADKA
           ================================================== */}
        <div className="absolute inset-0 z-10 bg-black/4" />

        {/* ==================================================
            HEADER
           ================================================== */}
        <HomeHeader locale="pl" />

        {/* ==================================================
            ŚRODEK HERO
           ================================================== */}
        <div className="home-hero-content relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl pt-16 sm:pt-20">
            <p className="home-hero-eyebrow mb-5 text-[11px] uppercase tracking-[0.48em] text-white/90">
              Alaudis Atelier
            </p>

            <h1 className="home-hero-title text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Rzemiosło,
              <br />
              detal, tożsamość.
            </h1>

            <p className="home-hero-description mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              Każdy Alaudis powstaje z połączenia rzemiosła, proporcji,
              szlachetnego materiału i indywidualnego charakteru brzmienia.
            </p>

            <div className="home-hero-actions mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Otwórz konfigurator
              </Link>

              <Link
                href="/kontakt"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Umów prywatną konsultację
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            DÓŁ HERO
           ================================================== */}
        <div className="home-hero-scroll absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/88">
            Przewiń w dół
          </p>
        </div>
      </section>

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
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Prywatna konsultacja
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Porozmawiajmy o Twoim Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Skontaktuj się z nami, aby omówić model, wykończenie, charakter
          instrumentu oraz indywidualną kompozycję fortepianu Alaudis.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/konfigurator"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Otwórz konfigurator
          </Link>

          <Link
            href="/kontakt"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Skontaktuj się z nami
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
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Kontakt Alaudis
            </p>

            <h2 className="mt-4 text-3xl font-light text-white">
              Znajdź swój fortepian
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
              Porozmawiaj z nami o modelach, wykończeniach i możliwościach
              konfiguracji. Umów prywatną konsultację lub wizytę w atelier.
            </p>

            <div className="mt-10">
              <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white">
                Kontakt
              </span>
            </div>
          </Link>

          {/* DESKTOP / TABLET: zwykła sekcja */}
          <section
            id="historia"
            className="hidden bg-neutral-950 px-6 py-20 text-center sm:block sm:px-10 lg:px-16"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Dziedzictwo i rzemiosło
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Świat Alaudis
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
              Poznaj filozofię marki, proces tworzenia instrumentów oraz rzemiosło,
              które nadaje każdemu Alaudis jego indywidualną tożsamość.
            </p>
          </section>

      <Footer />
    </main>
  );
}
