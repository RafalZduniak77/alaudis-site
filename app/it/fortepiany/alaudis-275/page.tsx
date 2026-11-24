// ==========================================================
// MODEL PAGE - ALAUDIS DREAM 275
// ==========================================================
// To jest osobna podstrona premium dla modelu ALAUDIS DREAM 275.
// Wersja językowa: IT
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
import ModelSoundCharacter from "@/components/ModelSoundCharacter";
import HomeHero from "@/components/HomeHero";
import ModelBespokeOffer from "@/components/ModelBespokeOffer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("it", "model275");

export default function ModelAlaudis275Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="it" page="model275" />
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
          - zawsze widoczny
          - powrót po lewej
          - logo na środku
          - języki po prawej
         ==================================================== */}
      <ModelPageTopBar backHref="/it" activeLanguage="IT" />

      {/* ====================================================
          HERO MODELU
         ==================================================== */}
      <HomeHero
        headingTitle
        alt="ALAUDIS DREAM 275"
        eyebrow="Modello da concerto"
        title={["ALAUDIS", "DREAM 275"]}
        description="La massima espressione concertistica di Alaudis, creata per la piena ampiezza del suono, un’ampia proiezione e la presenza scenica. È un modello per gli spazi in cui lo strumento non si limita a completare l’interno, ma ne diventa la voce principale e il punto centrale dell’intera composizione."
        actions={[
          { href: "/it/konfigurator?model=275", label: "Apri il configuratore" },
          { href: "/it/odkryj-modele?model=275", label: "Guardalo in 3D" },
        ]}
        scroll="Scorri verso il basso"
      />

      <ModelStorySignature model="275" language="IT" />

      {/* ====================================================
          CHARAKTER BRZMIENIA
         ==================================================== */}
      <ModelSoundCharacter
        eyebrow="Carattere del suono"
        lead="ALAUDIS DREAM 275 dispiega in tutta la sua ampiezza il linguaggio sonoro del marchio. Offre una proiezione estesa, un profondo fondamento nei bassi, un ampio respiro armonico e una portata scenica che consente allo strumento di riempire con naturalezza gli ambienti più ampi."
        text="È un modello per chi si aspetta la massima presenza: grande volume, una tavolozza dinamica ampia e un pieno carattere da concerto. Conserva la finezza e la nobiltà di Alaudis, ma le sviluppa nella forma più espansiva e rappresentativa."
      />

      {/* ====================================================
          PRZEZNACZENIE + WNĘTRZA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* PRZEZNACZENIE */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Destinazione
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Palcoscenico, sala da concerto, residenza di prestigio
            </h3>

            <p className="mt-5 leading-8 text-white">
              Creato per sale da concerto, grandi spazi di rappresentanza,
              istituzioni artistiche e gli interni privati più esigenti, in cui
              il pianoforte a coda deve offrire una proiezione piena e una
              grande presenza scenica.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Interni e palcoscenici ideali
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Grandezza, architettura, prestigio
            </h3>

            <p className="mt-5 leading-8 text-white">
              Si esprime al meglio negli spazi di ampio respiro: saloni di
              rappresentanza, sale da concerto, hotel di lusso e interni in cui
              lo strumento deve avere un carattere dominante,
              indiscutibilmente centrale e di altissimo prestigio.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identità del modello
            </p>

            <h3 className="mt-4 text-2xl font-light">
              La massima espressione di Alaudis
            </h3>

            <p className="mt-5 leading-8 text-white">
              ALAUDIS DREAM 275 rappresenta il vertice del marchio: uno
              strumento dalla personalità più sviluppata, dal respiro più ampio
              e dalla natura più concertistica. È Alaudis nella sua forma più
              piena, monumentale e scenica.
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
            Galleria
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS DREAM 275 in dimensione da concerto
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="ALAUDIS DREAM 275 - vista 1"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="ALAUDIS DREAM 275 - vista 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="ALAUDIS DREAM 275 - vista 3"
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
      <ModelBespokeOffer language="IT" model="275" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Il prossimo passo
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configura ALAUDIS DREAM 275 o guardalo in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Passa al configuratore per definire finitura e dettagli, oppure
            guarda il modello nell’anteprima 3D e verificane le dimensioni, le
            proporzioni e la presenza scenica nello spazio.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/it/konfigurator?model=275"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Apri il configuratore
            </Link>

            <Link
              href="/it/odkryj-modele?model=275"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Guardalo in 3D
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
