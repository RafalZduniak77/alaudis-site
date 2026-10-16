// ==========================================================
// MODEL PAGE - ALAUDIS DREAM 275
// ==========================================================
// To jest osobna podstrona premium dla modelu ALAUDIS DREAM 275.
//
// Za co odpowiada ten plik:
// 1. pokazuje hero modelu 275
// 2. korzysta ze wspólnego górnego paska ModelPageTopBar
// 3. opisuje charakter brzmienia
// 4. pokazuje przeznaczenie modelu
// 5. pokazuje docelowe wnętrza i sceny
// 6. pokazuje galerię zdjęć
// 7. daje 2 główne wejścia:
//    - do konfiguratora
//    - do podglądu 3D
// 8. kończy się stopką Footer
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcia modelu
// - teksty sekcji
// - tytuł modelu
// - opisy charakteru
// - linki CTA
// - aktywny język w górnym pasku
//
// Ważne:
// - rozwijane menu języków nie jest kodowane tutaj ręcznie
// - bierze się z komponentu ModelPageTopBar
// - jeśli chcesz zmienić wygląd listy PL / EN / DE,
//   robisz to w: components/ModelPageTopBar.tsx
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function ModelAlaudis275Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
          - zawsze widoczny
          - powrót po lewej
          - logo na środku
          - języki po prawej
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          HERO MODELU
         ==================================================== */}
      <section className="hero-copy relative overflow-hidden border-b border-white/10 pt-28">
        {/* TŁO HERO */}
        <div className="absolute inset-0">
          <Image
            src="/galeria-home/3.jpg"
            alt="ALAUDIS DREAM 275"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/88">
              Model koncertowy
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              <span className="block text-[13px] tracking-[0.35em] sm:text-base">ALAUDIS </span>
              <span className="mt-3 block">DREAM 275</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/92 sm:text-base">
              Największa forma koncertowa Alaudis, stworzona dla pełnej skali
              brzmienia, szerokiej projekcji i scenicznej obecności. To model
              dla przestrzeni, w których instrument nie tylko dopełnia wnętrze,
              ale staje się jego głównym głosem i centralnym punktem całej
              kompozycji.
            </p>

            {/* ==================================================
                CTA HERO
               ================================================== */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/konfigurator?model=275"
                className="rounded-full border border-white/35 bg-black/55 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Otwórz konfigurator
              </Link>

              <Link
                href="/odkryj-modele?model=275"
                className="rounded-full border border-white/35 bg-black/40 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Zobacz w 3D
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ModelStorySignature model="275" language="PL" />

      {/* ====================================================
          CHARAKTER BRZMIENIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Charakter brzmienia
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Monumentalny, nośny, w pełni koncertowy
            </h2>
          </div>

          <div className="space-y-6 text-white/90">
            <p className="leading-8">
              ALAUDIS DREAM 275 otwiera pełną skalę języka brzmieniowego marki.
              Oferuje rozległą projekcję, głęboki fundament basowy, szeroki
              oddech harmoniczny i sceniczną nośność, która pozwala instrumentowi
              swobodnie wypełniać większe przestrzenie.
            </p>

            <p className="leading-8">
              To model dla tych, którzy oczekują maksymalnej obecności:
              wielkiego wolumenu, rozbudowanej palety dynamicznej i pełnego
              koncertowego charakteru. Zachowuje kulturę i szlachetność Alaudis,
              ale rozwija je do formy najbardziej ekspansywnej i reprezentacyjnej.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          PRZEZNACZENIE + WNĘTRZA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* PRZEZNACZENIE */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Przeznaczenie
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Scena, sala koncertowa, rezydencja premium
            </h3>

            <p className="mt-5 leading-8 text-white/90">
              Stworzony do sal koncertowych, dużych przestrzeni reprezentacyjnych,
              instytucji artystycznych oraz najbardziej wymagających prywatnych
              wnętrz, w których fortepian ma oferować pełną projekcję i wielką
              sceniczną obecność.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Docelowe wnętrza i sceny
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Skala, architektura, prestiż
            </h3>

            <p className="mt-5 leading-8 text-white/90">
              Najlepiej odnajduje się w przestrzeniach o dużym oddechu:
              reprezentacyjnych salonach, salach koncertowych, hotelach klasy
              luxury oraz wnętrzach, w których instrument ma mieć charakter
              dominujący, niepodważalnie centralny i wybitnie prestiżowy.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Tożsamość modelu
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Największa forma Alaudis
            </h3>

            <p className="mt-5 leading-8 text-white/90">
              ALAUDIS DREAM 275 reprezentuje szczytową skalę marki, instrument o
              najbardziej rozbudowanej osobowości, największym oddechu i
              najbardziej koncertowej naturze. To Alaudis w swojej najbardziej
              pełnej, monumentalnej i scenicznej postaci.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          GALERIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Galeria
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS DREAM 275 w skali koncertowej
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="ALAUDIS DREAM 275 - widok 1"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.JPG"
                alt="ALAUDIS DREAM 275 - widok 2"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="ALAUDIS DREAM 275 - widok 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          KOŃCOWE CTA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Następny krok
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Skonfiguruj ALAUDIS DREAM 275 lub zobacz go w 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
            Przejdź do konfiguratora, aby dopasować wykończenie i detale, albo
            zobacz model w podglądzie 3D i sprawdź jego skalę, proporcje oraz
            sceniczną obecność w przestrzeni.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/konfigurator?model=275"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Otwórz konfigurator
            </Link>

            <Link
              href="/odkryj-modele?model=275"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Zobacz w 3D
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
