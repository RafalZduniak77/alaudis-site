// ==========================================================
// HOME PAGE - ALAUDIS
// ==========================================================
// GŁÓWNY CEL TEJ WERSJI
// ----------------------------------------------------------
// Ta wersja homepage została przeredagowana tak, aby marka
// brzmiała bardziej premium i bardziej luksusowo.
//
// Główny kierunek komunikacji:
// "Alaudis nie jest fortepianem wybieranym z katalogu.
//  Jest fortepianem komponowanym indywidualnie."
//
// Co zmieniliśmy w tej wersji:
// 1. hero dostał nowe premium copy
// 2. główne hasło zostało ustawione na:
//    "Skomponuj swój Alaudis"
// 3. CTA zostały przerobione na bardziej luksusowe
// 4. sekcja modeli brzmi bardziej jak kolekcja
// 5. kontakt został przesunięty w stronę prywatnej konsultacji
// 6. historia została przesunięta w stronę rzemiosła i dziedzictwa
// 7. cała strona ma ton bardziej "commissioning / atelier"
//
// POPRAWKI TEJ WERSJI
// ----------------------------------------------------------
// 1. kliknięcie "Kolekcja" zjeżdża wyraźnie niżej
// 2. cały blok kolekcji ma większy oddech od góry
// 3. sekcja modeli dostała wyższy z-index
// 4. same karty modeli są nad wszystkimi ewentualnymi overlayami
// 5. poprawione pod klikalność modelu 275
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
            DELIKATNA CIEMNA NAKŁADKA
           ================================================== */}
        <div className="absolute inset-0 z-10 bg-black/30" />

        {/* ==================================================
            HEADER
           ================================================== */}
        <header className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto grid max-w-7xl grid-cols-3 items-start px-6 pb-6 pt-12 lg:px-10">
            {/* LEWA STRONA - MENU */}
            <div className="ml-8 flex items-center gap-4">
              <a
                href="#modele"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Kolekcja
              </a>

              <a
                href="#kontakt"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Konsultacja
              </a>

              <a
                href="#historia"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Dziedzictwo
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

            {/* PRAWA STRONA - MENU JĘZYKÓW */}
            <div className="justify-self-end">
              <details className="group relative">
                <summary className="list-none cursor-pointer rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black">
                  <span className="inline-flex items-center gap-2">
                    PL
                    <span className="text-[10px] transition group-open:rotate-180">
                      ▼
                    </span>
                  </span>
                </summary>

                <div className="absolute right-0 mt-3 min-w-[150px] overflow-hidden rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl">
                  <button
                    type="button"
                    className="w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                  >
                    PL
                  </button>

                  <button
                    type="button"
                    className="w-full px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    EN
                  </button>

                  <button
                    type="button"
                    className="w-full border-t border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    DE
                  </button>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* ==================================================
            ŚRODEK HERO
           ================================================== */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl pt-16">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Alaudis Atelier
            </p>

            <h1 className="text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Skomponuj
              <br />
              swój Alaudis
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              Fortepian tworzony indywidualnie — z wyselekcjonowanych materiałów,
              rzemiosła, proporcji i charakteru brzmienia.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-white px-8 py-4 text-sm uppercase tracking-[0.22em] text-black transition hover:border-white hover:bg-transparent hover:text-white"
              >
                Rozpocznij kompozycję
              </a>

              <a
                href="#kontakt"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Umów prywatną konsultację
              </a>
            </div>
          </div>
        </div>

        {/* ==================================================
            DÓŁ HERO
           ================================================== */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Odkryj kolekcję
          </p>
        </div>
      </section>

      {/* ====================================================
          SEKCJA PRZEWIJANYCH MODELI
         ==================================================== */}
      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      {/* ====================================================
          GŁÓWNY BLOK KOLEKCJI
          ----------------------------------------------------
          Tu trafia link #modele.
          Został mocno odsunięty od góry, żeby po kliknięciu
          nie lądować zbyt wysoko.
         ==================================================== */}
      <section
        id="modele"
        className="relative z-20 bg-neutral-950 scroll-mt-[260px] sm:scroll-mt-[300px] lg:scroll-mt-[360px]"
      >
        {/* ==================================================
            DUŻY ODDECH NAD KOLEKCJĄ
            --------------------------------------------------
            To właśnie zepchnie kolekcję niżej po kliknięciu.
           ================================================== */}
        <div className="h-24 sm:h-28 lg:h-36" />

        {/* ==================================================
            SEKCJA WPROWADZAJĄCA DO KOLEKCJI
           ================================================== */}
        <section className="px-6 pb-10 text-center sm:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Kolekcja Alaudis
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[58px] lg:leading-[1.08]">
            Trzy skale obecności.
            <br />
            Jedna filozofia rzemiosła.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-white/68 sm:text-[17px]">
            Każdy model Alaudis powstaje jako osobna interpretacja proporcji,
            charakteru i brzmienia — od wyrafinowanej obecności salonowej po pełną
            skalę fortepianu koncertowego.
          </p>
        </section>

        {/* ==================================================
            SEKCJA MODELI
            --------------------------------------------------
            relative + z-index dla pełnej klikalności kart
           ================================================== */}
        <section className="relative z-30 grid gap-6 px-6 pb-24 sm:px-10 lg:grid-cols-3 lg:px-16">
          {/* ==================================================
              MODEL 178
             ================================================== */}
          <Link
            href="/fortepiany/alaudis-178"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Model
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 178</h2>

            <p className="mt-5 leading-7 text-white/68">
              Liryczna interpretacja fortepianu klasy premium — elegancka,
              wyważona i stworzona do wnętrz, w których detal ma taką samą wagę
              jak dźwięk.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Skomponuj ten model
            </p>
          </Link>

          {/* ==================================================
              MODEL 214
             ================================================== */}
          <Link
            href="/fortepiany/alaudis-214"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Model
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 214</h2>

            <p className="mt-5 leading-7 text-white/68">
              Fortepian o głębszej obecności i szerszej projekcji — dla przestrzeni,
              które wymagają większej skali, wyrazistości i koncertowego charakteru.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Skomponuj ten model
            </p>
          </Link>

          {/* ==================================================
              MODEL 275
             ================================================== */}
          <Link
            href="/fortepiany/alaudis-275"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:from-white/15 hover:to-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Model
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 275</h2>

            <p className="mt-5 leading-7 text-white/68">
              Największa forma koncertowa Alaudis — pełna skala brzmienia,
              projekcja i sceniczna obecność zaprojektowana dla najbardziej
              wymagających przestrzeni.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Skomponuj ten model
            </p>
          </Link>
        </section>
      </section>

      {/* ====================================================
          SEKCJA KONTAKT / KONSULTACJA
         ==================================================== */}
      <section
        id="kontakt"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Prywatna konsultacja
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Porozmawiajmy o Twoim Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Skontaktuj się z nami, aby omówić model, wykończenie, charakter
          instrumentu oraz indywidualną kompozycję fortepianu Alaudis.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/konfigurator"
            className="rounded-full border border-white/35 bg-white px-8 py-4 text-sm uppercase tracking-[0.22em] text-black transition hover:border-white hover:bg-transparent hover:text-white"
          >
            Rozpocznij kompozycję
          </a>

          <a
            href="/kontakt"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </section>

      {/* ====================================================
          SEKCJA HISTORIA / DZIEDZICTWO
         ==================================================== */}
      <section
        id="historia"
        className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Dziedzictwo i rzemiosło
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Świat Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Poznaj filozofię marki, proces tworzenia instrumentów oraz rzemiosło,
          które nadaje każdemu Alaudis jego indywidualną tożsamość.
        </p>
      </section>

      {/* ====================================================
          FOOTER
         ==================================================== */}
      <Footer />
    </main>
  );
}
