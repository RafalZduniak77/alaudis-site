// ==========================================================
// HOME PAGE - ALAUDIS
// ==========================================================
// To jest główny plik strony głównej Alaudis.
//
// Za co odpowiada ten plik:
// 1. buduje cały homepage
// 2. pokazuje hero z dużym zdjęciem w tle
// 3. wyświetla górne menu z linkami
// 4. pokazuje centralny slogan i przyciski CTA
// 5. osadza sekcję przewijanych modeli
// 6. pokazuje sekcję modeli 178 / 214 / 275
// 7. pozwala klikać w karty modeli i przechodzić na podstrony
// 8. pokazuje sekcję kontakt
// 9. pokazuje sekcję historia
// 10. dodaje footer na końcu
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcie hero
// - napisy w headerze
// - slogan główny
// - teksty przycisków
// - opisy modeli
// - linki kart modeli
// - treści sekcji kontakt i historia
// - kolejność sekcji
//
// Najważniejsze importy:
// - ScrollModelsShowcase -> sekcja przewijanych modeli
// - Footer               -> stopka strony
// - Link                 -> klikalne przejścia do podstron modeli
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          HERO
         ==================================================== */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Fortepian Alaudis"
          fill
          priority
          className="object-cover object-center"
        />

        {/* ==================================================
            HEADER
            - menu po lewej
            - logo na środku
            - przycisk po prawej
           ================================================== */}
        <header className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto grid max-w-7xl grid-cols-3 items-start px-6 pt-12 pb-6 lg:px-10">
            {/* LEWA STRONA - MENU */}
            <div className="ml-8 flex items-center gap-4">
              <a
                href="#modele"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Modele
              </a>

              <a
                href="#kontakt"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Kontakt
              </a>

              <a
                href="#historia"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Historia
              </a>
            </div>

            {/* ŚRODEK - LOGO */}
            <div className="justify-self-center pt-2">
              <Image
                src="/logo-alaudis.png"
                alt="Logo Alaudis"
                width={77}
                height={25}
                priority
                className="h-auto w-[60px] object-contain opacity-95 md:w-[77px]"
              />
            </div>

            {/* PRAWA STRONA - CTA */}
            <div className="justify-self-end">
              <a
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Wejdź
              </a>
            </div>
          </div>
        </header>

        {/* ==================================================
            ŚRODEK HERO
            - mały napis
            - główny slogan
            - dwa przyciski
           ================================================== */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-4xl pt-16">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Calendario Alaudis
            </p>

            <h1 className="text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
              Rzemiosło,
              <br />
              detal, tożsamość.
            </h1>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/odkryj-modele"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Odkryj modele
              </a>

              <a
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Otwórz konfigurator
              </a>
            </div>
          </div>
        </div>

        {/* ==================================================
            DÓŁ HERO
            - wskaźnik przewijania
           ================================================== */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Przewiń w dół
          </p>
        </div>
      </section>

      {/* ====================================================
          SEKCJA PRZEWIJANYCH MODELI
         ==================================================== */}
      <ScrollModelsShowcase />

      {/* ====================================================
          SEKCJA MODELI
          - każda karta prowadzi do osobnej podstrony modelu
         ==================================================== */}
      <section
        id="modele"
        className="grid gap-6 bg-neutral-950 px-6 py-20 sm:px-10 lg:grid-cols-3 lg:px-16"
      >
        {/* ==================================================
            MODEL 178
           ================================================== */}
        <Link
          href="/fortepiany/alaudis-178"
          className="block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Model
          </p>
          <h2 className="mt-4 text-3xl font-light">Alaudis 178</h2>
          <p className="mt-5 leading-7 text-white/68">
            Zrównoważony fortepian o eleganckiej obecności, lirycznej
            wrażliwości i wyrafinowanych proporcjach do wyjątkowych wnętrz.
          </p>
        </Link>

        {/* ==================================================
            MODEL 214
           ================================================== */}
        <Link
          href="/fortepiany/alaudis-214"
          className="block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Model
          </p>
          <h2 className="mt-4 text-3xl font-light">Alaudis 214</h2>
          <p className="mt-5 leading-7 text-white/68">
            Koncertowa wizja Alaudis — głębsza, odważniejsza i stworzona do
            przestrzeni, w których dźwięk i design muszą pozostać
            niezapomniane.
          </p>
        </Link>

        {/* ==================================================
            MODEL 275
           ================================================== */}
        <Link
          href="/fortepiany/alaudis-275"
          className="block rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:from-white/15 hover:to-white/[0.05]"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Model
          </p>
          <h2 className="mt-4 text-3xl font-light">Alaudis 275</h2>
          <p className="mt-5 leading-7 text-white/68">
            Największy model koncertowy Alaudis — pełna skala brzmienia,
            projekcja i charakter sceniczny klasy premium.
          </p>
        </Link>
      </section>

      {/* ====================================================
          SEKCJA KONTAKT
         ==================================================== */}
      <section
        id="kontakt"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Kontakt
        </p>
        <h2 className="mt-4 text-3xl font-light text-white">Alaudis</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Skontaktuj się z nami, aby porozmawiać o modelach, indywidualnym
          wykończeniu oraz konfiguracji fortepianu Alaudis.
        </p>
      </section>

      {/* ====================================================
          SEKCJA HISTORIA
         ==================================================== */}
      <section
        id="historia"
        className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Historia
        </p>
        <h2 className="mt-4 text-3xl font-light text-white">
          Dziedzictwo Alaudis
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Poznaj historię marki, filozofię tworzenia fortepianów oraz świat
          rzemiosła, który stoi za wyjątkowym charakterem Alaudis.
        </p>
      </section>

      {/* ====================================================
          FOOTER
         ==================================================== */}
      <Footer />
    </main>
  );
}
