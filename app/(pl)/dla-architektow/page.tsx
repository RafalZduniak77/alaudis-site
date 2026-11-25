//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - DLA ARCHITEKTÓW
// ==========================================================
// WERSJA UPROSZCZONA PREMIUM
// ----------------------------------------------------------
// Co poprawiono:
// 1. usunięto duże pola / przyciski wyboru z hero
// 2. hero zostało bardziej spokojne i luksusowe
// 3. zostawiono elegancki przekaz + przewijanie w dół
// 4. końcowe CTA zostało uproszczone do jednego głównego kroku
// 5. całość jest bardziej premium i mniej przeładowana
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("pl", "dlaArchitektow");

export default function DlaArchitektowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="pl" page="dlaArchitektow" />
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      <section className="bg-neutral-950 px-6 pb-24 pt-32 sm:pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Inspiracja projektowa
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Skala, materiał, obecność
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
          src="/galeria-home/3.jpg"
                alt="Alaudis - inspiracja projektowa 1"
                fill
                priority
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
          src="/galeria-home/5.jpg"
                alt="Alaudis - inspiracja projektowa 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
          src="/galeria-home/2.jpg"
                alt="Alaudis - inspiracja projektowa 3"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Opis pod zdjęciem — tekst nie zasłania fortepianu */}
      <section className="hero-intro border-b border-white/10 bg-black px-6 py-14 text-center sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div aria-hidden="true" className="mx-auto mb-8 h-px w-12 bg-[#d3bd8b]/70" />
          <div>
            <p className="mx-auto mt-0 max-w-3xl text-sm leading-8 text-white sm:text-base sm:leading-9">
              Alaudis może stać się integralną częścią rezydencji, apartamentu,
              hotelu lub przestrzeni reprezentacyjnej, nie jako zwykły obiekt,
              lecz jako świadomie dobrany element kompozycji wnętrza.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/95 sm:text-[15px] sm:leading-8">
              Współpracujemy przy projektach, w których liczą się proporcja,
              materiał, światło, charakter i obecność instrumentu w przestrzeni
              klasy premium.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                01
              </p>

              <h2 className="mt-4 text-2xl font-light text-white">
                Dobór modelu do skali wnętrza
              </h2>

              <p className="mt-5 leading-8 text-white">
                Pomagamy dobrać wielkość i charakter modelu do proporcji
                przestrzeni, od salonów i apartamentów po większe rezydencje,
                lobby i reprezentacyjne strefy hotelowe.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h2 className="mt-4 text-2xl font-light text-white">
                Wykończenie spójne z projektem
              </h2>

              <p className="mt-5 leading-8 text-white">
                Rozmawiamy o tonie materiału, połysku, charakterze powierzchni,
                kolorystyce i detalach tak, aby instrument współtworzył
                narrację wnętrza zamiast być przypadkowym dodatkiem.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03
              </p>

              <h2 className="mt-4 text-2xl font-light text-white">
                Konsultacja projektowa premium
              </h2>

              <p className="mt-5 leading-8 text-white">
                Współpraca może rozpocząć się od prywatnej rozmowy projektowej,
                w której wspólnie ustalamy kierunek: model, obecność w
                przestrzeni, wykończenie i finalny efekt wizualny.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">Rezydencje</h2>
              <p className="mt-4 leading-7 text-white">
                Fortepian jako centralny element salonu, biblioteki lub strefy
                reprezentacyjnej.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">
                Apartamenty premium
              </h2>
              <p className="mt-4 leading-7 text-white">
                Dobór modelu do mniejszej, ale bardzo świadomie zaprojektowanej
                przestrzeni.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">Hotele premium</h2>
              <p className="mt-4 leading-7 text-white">
                Obecność instrumentu w lobby, apartamentach i przestrzeniach
                o wysokim znaczeniu wizerunkowym.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">
                Przestrzenie reprezentacyjne
              </h2>
              <p className="mt-4 leading-7 text-white">
                Projekty, w których liczy się prestiż, skala, detal i mocna
                tożsamość wnętrza.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Rozmowa projektowa
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Zacznijmy od kierunku projektu
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Jeśli pracujesz nad rezydencją, apartamentem, hotelem lub wnętrzem
            reprezentacyjnym, możemy rozpocząć od spokojnej rozmowy o modelu,
            wykończeniu i roli instrumentu w całej kompozycji przestrzeni.
          </p>

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Umów rozmowę projektową
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
