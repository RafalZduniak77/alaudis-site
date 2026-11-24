// ==========================================================
// MODEL PAGE - ALAUDIS DREAM 275
// ==========================================================
// To jest osobna podstrona premium dla modelu ALAUDIS DREAM 275.
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

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import ModelBespokeOffer from "@/components/ModelBespokeOffer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("en", "model275");

export default function ModelAlaudis275Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="en" page="model275" />
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
      <HomeHero
        headingTitle
        alt="ALAUDIS DREAM 275"
        eyebrow="Concert model"
        title={["ALAUDIS", "DREAM 275"]}
        description="The largest concert form of Alaudis, created for full tonal scale, wide projection and stage presence. This is a model for spaces where the instrument not only completes the interior, but becomes its main voice and the central point of the entire composition."
        actions={[
          { href: "/en/konfigurator?model=275", label: "Open configurator" },
          { href: "/en/odkryj-modele?model=275", label: "View in 3D" },
        ]}
        scroll="Scroll down"
      />

      <ModelStorySignature model="275" language="EN" />

      {/* ====================================================
          CHARAKTER BRZMIENIA
         ==================================================== */}
      <section id="charakter" className="scroll-mt-24 bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.42em] text-[#e0ca96] before:h-px before:w-10 before:bg-[#d3bd8b]/70 after:h-px after:w-10 after:bg-[#d3bd8b]/70">
              Sound character
            </p>

            <h2 className="mt-7 text-balance text-[2rem] font-extralight leading-[1.12] tracking-[-0.01em] text-white sm:text-5xl lg:text-[4rem]">
              Monumental, projecting, fully concert-like
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-pretty text-white/88 sm:mt-12 [&>p:first-child]:text-[17px] [&>p:first-child]:leading-8 [&>p:first-child]:text-white sm:[&>p:first-child]:text-xl sm:[&>p:first-child]:leading-10">
            <p className="leading-8">
              ALAUDIS DREAM 275 opens the full scale of the brand’s tonal language.
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
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Purpose
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Stage, concert hall, premium residence
            </h3>

            <p className="mt-5 leading-8 text-white">
              Created for concert halls, large representative spaces, artistic
              institutions and the most demanding private interiors, where the
              piano must offer full projection and a grand stage presence.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Target interiors and stages
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Scale, architecture, prestige
            </h3>

            <p className="mt-5 leading-8 text-white">
              It is best suited to spaces with great breath: representative
              salons, concert halls, luxury hotels and interiors where the
              instrument is meant to have a dominant, unmistakably central and
              highly prestigious character.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Model identity
            </p>

            <h3 className="mt-4 text-2xl font-light">
              The largest Alaudis form
            </h3>

            <p className="mt-5 leading-8 text-white">
              ALAUDIS DREAM 275 represents the peak scale of the brand, an
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
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Gallery
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS DREAM 275 in concert scale
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="ALAUDIS DREAM 275 - view 1"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="ALAUDIS DREAM 275 - view 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="ALAUDIS DREAM 275 - view 3"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          KOŃCOWE CTA
         ==================================================== */}
      <ModelBespokeOffer language="EN" model="275" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Next step
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configure ALAUDIS DREAM 275 or view it in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Go to the configurator to adapt the finish and details, or view the
            model in 3D preview and check its scale, proportions and stage
            presence in space.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/konfigurator?model=275"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Open configurator
            </Link>

            <Link
              href="/en/odkryj-modele?model=275"
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
