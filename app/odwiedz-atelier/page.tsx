//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - ODWIEDŹ ATELIER
// ==========================================================
// WERSJA UPROSZCZONA PREMIUM
// ----------------------------------------------------------
// Co poprawiono:
// 1. usunięto duże pola / przyciski wyboru z hero
// 2. hero zostało bardziej spokojne i luksusowe
// 3. zostawiono tylko elegancki przekaz + przewijanie w dół
// 4. niższe sekcje nadal prowadzą użytkownika dalej
// 5. całość wygląda bardziej premium i mniej "przeładowanie"
// 6. galeria została poprawiona do 3 zdjęć:
//    - 3.jpg
//    - 5.jpg
//    - 2.jpg
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function OdwiedzAtelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          HERO - PEŁNY EKRAN
         ==================================================== */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        {/* ==================================================
            TŁO HERO
           ================================================== */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Odwiedź atelier Alaudis"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Alaudis Atelier
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Odwiedź atelier
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Poznaj Alaudis w przestrzeni, w której rzemiosło, detal i
              charakter instrumentu spotykają się z prywatną rozmową o modelu,
              wykończeniu i indywidualnej kompozycji fortepianu.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              Wizyta w atelier to spokojny, osobisty moment spotkania z marką —
              nie tylko prezentacja modelu, ale doświadczenie jego skali,
              obecności i tożsamości.
            </p>
          </div>
        </div>

        {/* ==================================================
            WSKAŹNIK PRZEWIJANIA
           ================================================== */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#doswiadczenie" className="block">
            <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
              <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
              Przewiń w dół
            </p>
          </a>
        </div>
      </section>

      {/* ====================================================
          SEKCJA - CZEGO DOŚWIADCZYSZ
         ==================================================== */}
      <section
        id="doswiadczenie"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Doświadczenie wizyty
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Spotkanie z marką
              <br />
              w jej naturalnym środowisku
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/68">
              W atelier możesz zobaczyć modele Alaudis w spokojnym, prywatnym
              kontekście — z bliska, bez pośpiechu, z możliwością rozmowy o
              proporcjach, wykończeniach, przeznaczeniu instrumentu i jego
              miejscu w konkretnej przestrzeni.
            </p>
          </div>

          {/* ==================================================
              KARTY DOŚWIADCZENIA
             ================================================== */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Zobacz modele z bliska
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Poznaj skalę, linię i obecność fortepianu w realnej przestrzeni.
                Zobacz, jak model odbiera się nie na ekranie, lecz w fizycznym
                kontakcie z materiałem i detalem.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Porozmawiaj o wykończeniach
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Omów dobór wykończenia, charakter powierzchni, ton materiału i
                ogólną kompozycję instrumentu tak, aby harmonijnie odpowiadała
                architekturze oraz wnętrzu.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Ustal kierunek indywidualnej kompozycji
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Wizyta może stać się początkiem prywatnej konsultacji —
                rozmowy o modelu, charakterze instrumentu, zastosowaniu,
                preferowanej skali i całościowym języku Alaudis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SEKCJA - GALERIA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Przestrzeń atelier
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Miejsce spotkania z Alaudis
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Atelier Alaudis - widok 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Atelier Alaudis - widok 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Atelier Alaudis - widok 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SEKCJA - LOKALIZACJA / WIZYTA
         ==================================================== */}
      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Lokalizacja
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Umów wizytę w atelier
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/68">
              Spotkanie odbywa się w formule prywatnej rozmowy. Dzięki temu
              możemy spokojnie omówić modele, oczekiwaną skalę instrumentu,
              wykończenia premium oraz miejsce fortepianu w konkretnej
              przestrzeni.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Atelier / SAP Renovation
            </p>

            <p className="mt-5 text-2xl font-light text-white">
              Obozowa 18
              <br />
              62-800 Kalisz
            </p>

            <p className="mt-6 leading-8 text-white/68">
              Wizyty najlepiej umawiać wcześniej, aby przygotować spokojne,
              prywatne spotkanie wokół modeli Alaudis i właściwie dopasować
              przebieg rozmowy do Twojego projektu.
            </p>

            <div className="mt-8">
              <Link
                href="/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Umów prywatną rozmowę
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          KOŃCOWE CTA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Następny krok
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Zacznij od prywatnej rozmowy
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Najlepszym początkiem wizyty w atelier jest krótki kontakt — dzięki
            niemu przygotujemy spotkanie wokół odpowiedniego modelu, charakteru
            i kierunku indywidualnej kompozycji Alaudis.
          </p>

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Umów prywatną rozmowę
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          FOOTER
         ==================================================== */}
      <Footer />
    </main>
  );
}
