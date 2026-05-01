// ==========================================================
// MODEL PAGE - ALAUDIS 275
// ==========================================================
// To jest osobna podstrona premium dla modelu Alaudis 275.
// Wersja językowa: EN
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
      <ModelPageTopBar backHref="/en" activeLanguage="EN" />

      {/* ====================================================
          HERO MODELU
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        {/* TŁO HERO */}
        <div className="absolute inset-0">
          <Image
            src="/galeria-home/3.jpg"
            alt="Alaudis 275"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Concert model
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 275
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              The largest concert form of Alaudis — created for full tonal
              scale, wide projection and stage presence. This is a model for
              spaces where the instrument not only completes the interior, but
              becomes its main voice and the central point of the entire
              composition.
            </p>

            {/* ==================================================
                CTA HERO
               ================================================== */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/en/konfigurator"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Open configurator
              </Link>

              <Link
                href="/en/odkryj-modele"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                View in 3D
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
              Sound character
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Monumental, projecting, fully concert-like
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              Alaudis 275 opens the full scale of the brand’s tonal language.
              It offers extensive projection, a deep bass foundation, a broad
              harmonic breath and stage carrying power that allows the
              instrument to fill larger spaces freely.
            </p>

            <p className="leading-8">
              This model is for those who expect maximum presence: great volume,
              an expanded dynamic palette and a full concert character. It
              preserves the culture and nobility of Alaudis, but develops them
              into the most expansive and representative form.
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
              Purpose
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Stage, concert hall, premium residence
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Created for concert halls, large representative spaces, artistic
              institutions and the most demanding private interiors, where the
              piano must offer full projection and a grand stage presence.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Target interiors and stages
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Scale, architecture, prestige
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              It is best suited to spaces with great breath: representative
              salons, concert halls, luxury hotels and interiors where the
              instrument is meant to have a dominant, unmistakably central and
              highly prestigious character.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Model identity
            </p>

            <h3 className="mt-4 text-2xl font-light">
              The largest Alaudis form
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Alaudis 275 represents the peak scale of the brand — an
              instrument with the most developed personality, the greatest
              breath and the most concert-like nature. This is Alaudis in its
              fullest, most monumental and most stage-oriented form.
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
            Gallery
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Alaudis 275 in concert scale
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis 275 - view 1"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.JPG"
                alt="Alaudis 275 - view 2"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis 275 - view 3"
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
            Next step
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configure Alaudis 275 or view it in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Go to the configurator to adapt the finish and details, or view the
            model in 3D preview and check its scale, proportions and stage
            presence in space.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/konfigurator"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Open configurator
            </Link>

            <Link
              href="/en/odkryj-modele"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              View in 3D
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
