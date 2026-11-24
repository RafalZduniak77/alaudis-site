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

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("pl", "odwiedzAtelier");

export default function OdwiedzAtelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="pl" page="odwiedzAtelier" />
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          SEKCJA - GALERIA
         ==================================================== */}
      <section className="bg-black px-6 pb-10 pt-32 sm:px-10 sm:pb-12 sm:pt-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Zdjęcia atelier: jedno duże i dwa mniejsze */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src="/galeria-home/Salonik 1.jpg"
                alt="Atelier Alaudis - widok 1"
                fill
                priority
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3]">
              <Image
                src="/galeria-home/Salonik 2.jpg"
                alt="Atelier Alaudis - widok 2"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3]">
              <Image
                src="/galeria-home/Konferencyjna 1.jpg"
                alt="Atelier Alaudis - widok 3"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SEKCJA - CZEGO DOŚWIADCZYSZ
         ==================================================== */}
      <section
        id="doswiadczenie"
        className="scroll-mt-20 bg-black px-3 pb-16 sm:px-6 sm:pb-20"
      >
        {/* Jasny panel z ciemnymi kartami — jak „Kolekcja ALAUDIS” na stronie głównej */}
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-5 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[#8a6d35]">
                Przestrzeń atelier
              </p>

              <h1 className="mt-4 text-3xl font-light leading-tight text-[#111] sm:text-4xl lg:text-5xl">
                Miejsce spotkania z Alaudis
              </h1>
            </div>

            <div className="mt-10 sm:mt-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Zobacz modele z bliska
              </h3>

              <p className="mt-5 leading-8 text-white">
                Poznaj skalę, linię i obecność fortepianu w realnej przestrzeni.
                Zobacz, jak model odbiera się nie na ekranie, lecz w fizycznym
                kontakcie z materiałem i detalem.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Porozmawiaj o wykończeniach
              </h3>

              <p className="mt-5 leading-8 text-white">
                Omów dobór wykończenia, charakter powierzchni, ton materiału i
                ogólną kompozycję instrumentu tak, aby harmonijnie odpowiadała
                architekturze oraz wnętrzu.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Ustal kierunek indywidualnej kompozycji
              </h3>

              <p className="mt-5 leading-8 text-white">
                Wizyta może stać się początkiem prywatnej konsultacji,
                rozmowy o modelu, charakterze instrumentu, zastosowaniu,
                preferowanej skali i całościowym języku Alaudis.
              </p>
            </div>
          </div>
            </div>

            <div className="mt-6 border-t border-black/10 pt-6 sm:mt-8 sm:pt-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                01 · Doświadczenie wizyty
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Spotkanie z marką w jej naturalnym środowisku
              </h3>

              <p className="mt-5 leading-8 text-white">
                W atelier możesz zobaczyć modele Alaudis w spokojnym, prywatnym kontekście, z bliska, bez pośpiechu, z możliwością rozmowy o proporcjach, wykończeniach, przeznaczeniu instrumentu i jego miejscu w konkretnej przestrzeni.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Prywatna rozmowa
              </h3>

              <p className="mt-5 leading-8 text-white">
                Spotkanie odbywa się w formule prywatnej rozmowy. Dzięki temu możemy spokojnie omówić modele, oczekiwaną skalę instrumentu, wykończenia premium oraz miejsce fortepianu w konkretnej przestrzeni.
              </p>
            </div>

            <div className="flex flex-col rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03 · Atelier / SAP Renovation
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Obozowa 18
                <br />
                62-800 Kalisz
              </h3>

              <p className="mt-5 leading-8 text-white">
                Wizyty najlepiej umawiać wcześniej, aby przygotować spokojne, prywatne spotkanie wokół modeli Alaudis i właściwie dopasować przebieg rozmowy do Twojego projektu.
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Link
                href="/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Umów prywatną rozmowę
              </Link>
              <Link
                href="/zwiedzanie-manufaktury"
                className="inline-flex rounded-full border border-[#d3bd8b]/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#d3bd8b] transition hover:bg-[#d3bd8b] hover:text-black"
              >
                Zwiedzanie manufaktury
              </Link>
            </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          KOŃCOWE CTA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Następny krok
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Zacznij od prywatnej rozmowy
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Najlepszym początkiem wizyty w atelier jest krótki kontakt, dzięki
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
