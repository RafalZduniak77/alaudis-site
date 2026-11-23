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
      <section className="bg-black px-6 pb-20 pt-32 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Zdjęcia atelier: jedno duże i dwa mniejsze */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src="/galeria-home/Salonik 1.jpg"
                alt="Atelier Alaudis - widok 1"
                fill
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
      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">
            Przestrzeń atelier
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Miejsce spotkania z Alaudis
          </h1>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Zobacz modele z bliska
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Poznaj skalę, linię i obecność fortepianu w realnej przestrzeni.
                Zobacz, jak model odbiera się nie na ekranie, lecz w fizycznym
                kontakcie z materiałem i detalem.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Porozmawiaj o wykończeniach
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Omów dobór wykończenia, charakter powierzchni, ton materiału i
                ogólną kompozycję instrumentu tak, aby harmonijnie odpowiadała
                architekturze oraz wnętrzu.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Ustal kierunek indywidualnej kompozycji
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Wizyta może stać się początkiem prywatnej konsultacji,
                rozmowy o modelu, charakterze instrumentu, zastosowaniu,
                preferowanej skali i całościowym języku Alaudis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SEKCJA - LOKALIZACJA / WIZYTA
         ==================================================== */}
      <section
        id="doswiadczenie"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">
            Lokalizacja
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Umów wizytę w atelier
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                01 · Doświadczenie wizyty
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Spotkanie z marką w jej naturalnym środowisku
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                W atelier możesz zobaczyć modele Alaudis w spokojnym, prywatnym kontekście, z bliska, bez pośpiechu, z możliwością rozmowy o proporcjach, wykończeniach, przeznaczeniu instrumentu i jego miejscu w konkretnej przestrzeni.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Prywatna rozmowa
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Spotkanie odbywa się w formule prywatnej rozmowy. Dzięki temu możemy spokojnie omówić modele, oczekiwaną skalę instrumentu, wykończenia premium oraz miejsce fortepianu w konkretnej przestrzeni.
              </p>
            </div>

            <div className="flex flex-col rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03 · Atelier / SAP Renovation
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Obozowa 18
                <br />
                62-800 Kalisz
              </h3>

              <p className="mt-5 leading-8 text-white/90">
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
      </section>

      {/* ====================================================
          KOŃCOWE CTA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Następny krok
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Zacznij od prywatnej rozmowy
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
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
