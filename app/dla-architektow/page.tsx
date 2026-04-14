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

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function DlaArchitektowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Alaudis dla architektów"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/74" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Współpraca projektowa
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Dla architektów
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Alaudis może stać się integralną częścią rezydencji, apartamentu,
              hotelu lub przestrzeni reprezentacyjnej — nie jako zwykły obiekt,
              lecz jako świadomie dobrany element kompozycji wnętrza.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              Współpracujemy przy projektach, w których liczą się proporcja,
              materiał, światło, charakter i obecność instrumentu w przestrzeni
              klasy premium.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#wspolpraca" className="block">
            <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
              <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
              Przewiń w dół
            </p>
          </a>
        </div>
      </section>

      <section
        id="wspolpraca"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Współpraca
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Fortepian jako część
              <br />
              architektury wnętrza
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              W projektach premium fortepian nie jest jedynie instrumentem. Może
              stać się punktem ciężkości salonu, dominantą przestrzeni
              reprezentacyjnej albo subtelnym, lecz wyraźnym znakiem charakteru
              miejsca.
            </p>

            <p className="leading-8">
              Dlatego Alaudis proponujemy jako element projektowy: świadomie
              dobierany do materiałów, światła, skali wnętrza, stylistyki mebli
              i zamierzonego języka całej realizacji.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Obszary współpracy
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Jak pracujemy z architektami i projektantami
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Dobór modelu do skali wnętrza
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Pomagamy dobrać wielkość i charakter modelu do proporcji
                przestrzeni — od salonów i apartamentów po większe rezydencje,
                lobby i reprezentacyjne strefy hotelowe.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Wykończenie spójne z projektem
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Rozmawiamy o tonie materiału, połysku, charakterze powierzchni,
                kolorystyce i detalach tak, aby instrument współtworzył
                narrację wnętrza zamiast być przypadkowym dodatkiem.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Konsultacja projektowa premium
              </h3>

              <p className="mt-5 leading-8 text-white/68">
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
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Typy realizacji
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Projekty, w których Alaudis odnajduje się naturalnie
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Rezydencje</h3>
              <p className="mt-4 leading-7 text-white/68">
                Fortepian jako centralny element salonu, biblioteki lub strefy
                reprezentacyjnej.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Apartamenty premium
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Dobór modelu do mniejszej, ale bardzo świadomie zaprojektowanej
                przestrzeni.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Hotele premium</h3>
              <p className="mt-4 leading-7 text-white/68">
                Obecność instrumentu w lobby, apartamentach i przestrzeniach
                o wysokim znaczeniu wizerunkowym.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Przestrzenie reprezentacyjne
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Projekty, w których liczy się prestiż, skala, detal i mocna
                tożsamość wnętrza.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Inspiracja projektowa
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Skala, materiał, obecność
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/Salonik 1.jpg"
                alt="Alaudis - inspiracja projektowa 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/Salonik 2.jpg"
                alt="Alaudis - inspiracja projektowa 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/Konferencyjna 1.jpg"
                alt="Alaudis - inspiracja projektowa 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Rozmowa projektowa
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Zacznijmy od kierunku projektu
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
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
