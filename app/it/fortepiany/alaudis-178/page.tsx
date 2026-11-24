"use client";

// ==========================================================
// MODEL PAGE - ALAUDIS ONE 178
// ==========================================================

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelSoundCharacter from "@/components/ModelSoundCharacter";
import HomeHero from "@/components/HomeHero";
import ModelBespokeOffer from "@/components/ModelBespokeOffer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/galeria-home/10.jpg",
    alt: "ALAUDIS ONE 178 - vista 1",
  },
  {
    src: "/galeria-home/11.jpg",
    alt: "ALAUDIS ONE 178 - vista 2",
  },
  {
    src: "/galeria-home/12.jpg",
    alt: "ALAUDIS ONE 178 - vista 3",
  },
];

export default function ModelAlaudis178Page() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showPrevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      activeImageIndex === 0 ? galleryImages.length - 1 : activeImageIndex - 1
    );
  };

  const showNextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      activeImageIndex === galleryImages.length - 1 ? 0 : activeImageIndex + 1
    );
  };

  const activeImage =
    activeImageIndex !== null ? galleryImages[activeImageIndex] : null;

  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/it" activeLanguage="IT" />

      <HomeHero
        headingTitle
        alt="ALAUDIS ONE 178"
        eyebrow="Modello di alta gamma"
        title={["ALAUDIS", "ONE 178"]}
        description="Delicato, nobile e raffinato. ALAUDIS ONE 178 è stato pensato come un pianoforte a coda per interni di pregio, in cui contano l’eleganza della forma, la finezza musicale del suono e il piacere quotidiano di vivere accanto allo strumento."
        actions={[
          { href: "/it/konfigurator?model=178", label: "Apri il configuratore" },
          { href: "/it/odkryj-modele?model=178", label: "Guardalo in 3D" },
        ]}
        scroll="Scorri verso il basso"
      />

      <ModelStorySignature model="178" language="IT" />

      <ModelSoundCharacter
        eyebrow="Carattere del suono"
        lead="ALAUDIS ONE 178 offre un suono di spiccata finezza timbrica, limpido, cantabile e naturalmente ordinato. È uno strumento che non domina lo spazio con aggressività, ma costruisce un’atmosfera di classe, quiete e profondità musicale."
        text="A definirne al meglio il carattere sono una proiezione delicata, un registro centrale nobile, acuti condotti con morbidezza e bassi dal fondamento elegante. È un modello che suona maturo e raffinato anche in un ambiente raccolto."
      />

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Destinazione
            </p>

            <h3 className="mt-4 text-2xl font-light">
              L’arte quotidiana del suonare
            </h3>

            <p className="mt-5 leading-8 text-white">
              Ideale per salotti musicali privati, appartamenti di lusso e spazi
              boutique, e per i pianisti che cercano uno strumento capace di
              unire classe estetica e musicalità matura.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Interni ideali
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Eleganza e proporzione
            </h3>

            <p className="mt-5 leading-8 text-white">
              Trova la sua collocazione ideale in interni moderni, classici, art
              déco e soft luxury, là dove dettaglio, luce, materiali e presenza
              dello strumento formano un’unica composizione.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identità del modello
            </p>

            <h3 className="mt-4 text-2xl font-light">Forma d’eccellenza</h3>

            <p className="mt-5 leading-8 text-white">
              ALAUDIS ONE 178 è stato pensato come uno strumento per chi si
              aspetta non solo qualità costruttiva, ma anche la bellezza del
              rapporto quotidiano con il pianoforte a coda come oggetto di
              alta gamma.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galleria
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS ONE 178 in finiture di pregio
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 text-left transition duration-300 hover:scale-[1.01] hover:border-white/20"
                aria-label={`Apri l’immagine ${index + 1} in formato grande`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/4 to-transparent" />

                <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                  Ingrandisci
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ModelBespokeOffer language="IT" model="178" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Il prossimo passo
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configura ALAUDIS ONE 178 o guardalo in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Passa al configuratore per scegliere finitura e dettagli, oppure
            guarda il modello in un ambiente 3D e scopri come si presenta
            in un interno.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/it/konfigurator?model=178"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Apri il configuratore
            </Link>

            <Link
              href="/it/odkryj-modele?model=178"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Guardalo in 3D
            </Link>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:border-white hover:bg-white hover:text-black"
            aria-label="Chiudi l’anteprima dell’immagine"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
            className="absolute left-5 top-1/2 z-[110] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-3xl text-white transition hover:border-white hover:bg-white hover:text-black"
            aria-label="Immagine precedente"
          >
            ←
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
            className="absolute right-5 top-1/2 z-[110] flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-3xl text-white transition hover:border-white hover:bg-white hover:text-black"
            aria-label="Immagine successiva"
          >
            →
          </button>

          <div
            className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-[24px] border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

