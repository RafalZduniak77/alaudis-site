// ==========================================================
// MODEL PAGE - ALAUDIS 214
// ==========================================================
// To jest osobna podstrona premium dla modelu Alaudis 214.
//
// Za co odpowiada ten plik:
// 1. pokazuje hero modelu 214
// 2. opisuje charakter brzmienia
// 3. pokazuje przeznaczenie modelu
// 4. pokazuje docelowe wnętrza
// 5. pokazuje galerię zdjęć
// 6. daje 2 główne wejścia:
//    - do konfiguratora
//    - do podglądu 3D
// 7. kończy się stopką Footer
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcia modelu
// - teksty sekcji
// - tytuł modelu
// - opisy charakteru
// - linki CTA
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ModelAlaudis214Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          HERO MODELU
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/galeria-home/3.jpg"
            alt="Alaudis 214"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* ==================================================
            GÓRNY PASEK
           ================================================== */}
        <header className="relative z-20">
          <div className="mx-auto grid max-w-7xl grid-cols-3 items-start px-6 pb-6 pt-12 lg:px-10">
            {/* LEWA STRONA - POWRÓT */}
            <div className="ml-8 flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Powrót
              </Link>
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
              <Link
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Konfigurator
              </Link>
            </div>
          </div>
        </header>

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Model premium
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 214
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Głębszy, bardziej obecny i bardziej koncertowy w charakterze.
              Alaudis 214 został pomyślany jako model dla tych, którzy oczekują
              większego oddechu brzmienia, szerszej projekcji i jeszcze mocniej
              zaznaczonej obecności instrumentu we wnętrzu premium.
            </p>

            {/* CTA HERO */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Otwórz konfigurator
              </Link>

              <Link
                href="/odkryj-modele"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Zobacz w 3D
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CHARAKTER BRZMIENIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Charakter brzmienia
            </p>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Pełniejszy, śpiewny, bardziej koncertowy
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              Alaudis 214 rozwija język brzmieniowy marki w kierunku większej
              skali i mocniejszej obecności. Oferuje dźwięk bardziej otwarty,
              głębszy w basie i bardziej nośny w średnicy, zachowując przy tym
              kulturę, elegancję i muzyczną szlachetność.
            </p>

            <p className="leading-8">
              To model dla osób, które chcą czuć większy oddech instrumentu:
              szerszą projekcję, bardziej wyczuwalny wolumen i bogatszą paletę
              dynamiczną. Nadal pozostaje wyrafinowany, ale z bardziej
              zdecydowaną sceniczną obecnością.
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
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Przeznaczenie
            </p>
            <h3 className="mt-4 text-2xl font-light">Salon i scena kameralna</h3>
            <p className="mt-5 leading-8 text-white/68">
              Idealny do przestronnych rezydencji, prywatnych sal muzycznych,
              butikowych hoteli i kameralnych scen, gdzie instrument ma być nie
              tylko piękny, ale również bardziej wyraźny i nośny brzmieniowo.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Docelowe wnętrza
            </p>
            <h3 className="mt-4 text-2xl font-light">
              Przestrzeń, światło, obecność
            </h3>
            <p className="mt-5 leading-8 text-white/68">
              Najlepiej odnajduje się we wnętrzach nowoczesnych premium,
              klasycznych apartamentach, salach reprezentacyjnych i przestrzeniach,
              w których fortepian ma stać się wyraźnym centrum kompozycji.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Tożsamość modelu
            </p>
            <h3 className="mt-4 text-2xl font-light">Między elegancją a skalą</h3>
            <p className="mt-5 leading-8 text-white/68">
              Alaudis 214 to propozycja dla tych, którzy chcą zachować klasę
              wizualną modelu premium, ale wejść w bardziej rozbudowaną skalę
              brzmienia i silniejszą sceniczną osobowość instrumentu.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          GALERIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Galeria
          </p>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Alaudis 214 w wykończeniach premium
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis 214 - widok 1"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.JPG"
                alt="Alaudis 214 - widok 2"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis 214 - widok 3"
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
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Następny krok
          </p>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Skonfiguruj Alaudis 214 lub zobacz go w 3D
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Przejdź do konfiguratora, aby dopasować wykończenie i detale, albo
            zobacz model w podglądzie 3D i sprawdź jego obecność w przestrzeni.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/konfigurator"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Otwórz konfigurator
            </Link>

            <Link
              href="/odkryj-modele"
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
