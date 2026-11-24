// ==========================================================
// MODEL PAGE - ALAUDIS LEO 214
// ==========================================================
// To jest osobna podstrona premium dla modelu ALAUDIS LEO 214.
//
// Za co odpowiada ten plik:
// 1. pokazuje hero modelu 214
// 2. korzysta ze wspólnego górnego paska ModelPageTopBar
// 3. opisuje charakter brzmienia
// 4. pokazuje przeznaczenie modelu
// 5. pokazuje docelowe wnętrza
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
import ModelSoundCharacter from "@/components/ModelSoundCharacter";
import HomeHero from "@/components/HomeHero";
import ModelBespokeOffer from "@/components/ModelBespokeOffer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("pl", "model214");

export default function ModelAlaudis214Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="pl" page="model214" />
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
      <HomeHero
        headingTitle
        alt="ALAUDIS LEO 214"
        eyebrow="Model premium"
        title={["ALAUDIS", "LEO 214"]}
        description="Głębszy, bardziej obecny i bardziej koncertowy w charakterze. ALAUDIS LEO 214 został pomyślany jako model dla tych, którzy oczekują większego oddechu brzmienia, szerszej projekcji i jeszcze mocniej zaznaczonej obecności instrumentu we wnętrzu premium."
        actions={[
          { href: "/konfigurator?model=214", label: "Otwórz konfigurator" },
          { href: "/odkryj-modele?model=214", label: "Zobacz w 3D" },
        ]}
        scroll="Przewiń w dół"
      />

      <ModelStorySignature model="214" language="PL" />

      {/* ====================================================
          CHARAKTER BRZMIENIA
         ==================================================== */}
      <ModelSoundCharacter
        eyebrow="Charakter brzmienia"
        lead="ALAUDIS LEO 214 rozwija język brzmieniowy marki w kierunku większej skali i mocniejszej obecności. Oferuje dźwięk bardziej otwarty, głębszy w basie i bardziej nośny w średnicy, zachowując przy tym kulturę, elegancję i muzyczną szlachetność."
        text="To model dla osób, które chcą czuć większy oddech instrumentu: szerszą projekcję, bardziej wyczuwalny wolumen i bogatszą paletę dynamiczną. Nadal pozostaje wyrafinowany, ale z bardziej zdecydowaną sceniczną obecnością."
      />

      {/* ====================================================
          PRZEZNACZENIE + WNĘTRZA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* PRZEZNACZENIE */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Przeznaczenie
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Salon i scena kameralna
            </h3>

            <p className="mt-5 leading-8 text-white">
              Idealny do przestronnych rezydencji, prywatnych sal muzycznych,
              butikowych hoteli i kameralnych scen, gdzie instrument ma być nie
              tylko piękny, ale również bardziej wyraźny i nośny brzmieniowo.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Docelowe wnętrza
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Przestrzeń, światło, obecność
            </h3>

            <p className="mt-5 leading-8 text-white">
              Najlepiej odnajduje się we wnętrzach nowoczesnych premium,
              klasycznych apartamentach, salach reprezentacyjnych i
              przestrzeniach, w których fortepian ma stać się wyraźnym centrum
              kompozycji.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Tożsamość modelu
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Między elegancją a skalą
            </h3>

            <p className="mt-5 leading-8 text-white">
              ALAUDIS LEO 214 to propozycja dla tych, którzy chcą zachować klasę
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
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galeria
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS LEO 214 w wykończeniach premium
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="ALAUDIS LEO 214 - widok 1"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="ALAUDIS LEO 214 - widok 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="ALAUDIS LEO 214 - widok 3"
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
      <ModelBespokeOffer language="PL" model="214" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Następny krok
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Skonfiguruj ALAUDIS LEO 214 lub zobacz go w 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Przejdź do konfiguratora, aby dopasować wykończenie i detale, albo
            zobacz model w podglądzie 3D i sprawdź jego obecność w przestrzeni.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/konfigurator?model=214"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Otwórz konfigurator
            </Link>

            <Link
              href="/odkryj-modele?model=214"
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
