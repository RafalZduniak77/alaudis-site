"use client";

// ==========================================================
// MODEL PAGE - ALAUDIS 178
// ==========================================================

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/galeria-home/10.jpg",
    alt: "Alaudis 178 - Ansicht 1",
  },
  {
    src: "/galeria-home/11.jpg",
    alt: "Alaudis 178 - Ansicht 2",
  },
  {
    src: "/galeria-home/12.jpg",
    alt: "Alaudis 178 - Ansicht 3",
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
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/galeria-home/10.jpg"
            alt="Alaudis 178"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Premium-Modell
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 178
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Subtil, edel und raffiniert. Alaudis 178 wurde als Flügel für
              Premium-Interieurs gedacht, in denen Eleganz der Form,
              musikalische Kultur des Klangs und die tägliche Freude am Umgang
              mit dem Instrument eine zentrale Rolle spielen.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/de/konfigurator?model=178"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Konfigurator öffnen
              </Link>

              <Link
                href="/de/odkryj-modele"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                In 3D ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Klangcharakter
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Lyrisch, ausgewogen, elegant
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              Alaudis 178 bietet einen Klang mit ausgeprägter Klangkultur —
              klar, singend und natürlich geordnet. Es ist ein Instrument, das
              einen Raum nicht durch Aggressivität dominiert, sondern eine
              Atmosphäre von Klasse, Ruhe und musikalischer Tiefe aufbaut.
            </p>

            <p className="leading-8">
              Sein Charakter lässt sich am besten durch subtile Projektion,
              einen edlen Mitteltonbereich, weich geführte Höhen und einen Bass
              mit eleganter Grundlage beschreiben. Dieses Modell klingt selbst
              in einem intimen Umfeld reif und raffiniert.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Bestimmung
            </p>

            <h3 className="mt-4 text-2xl font-light">Tägliche Kunst des Spiels</h3>

            <p className="mt-5 leading-8 text-white/68">
              Ideal für private Musiksalons, Premium-Apartments, Boutique-Räume
              und für Pianisten, die ein Instrument suchen, das visuelle Klasse
              mit reifer Musikalität verbindet.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Zielinterieurs
            </p>

            <h3 className="mt-4 text-2xl font-light">Eleganz und Proportion</h3>

            <p className="mt-5 leading-8 text-white/68">
              Am besten entfaltet es sich in modernen, klassischen, Art-déco-
              und Soft-Luxury-Interieurs — dort, wo Detail, Licht, Materialien
              und die Präsenz des Instruments eine gemeinsame Komposition
              bilden.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Modellidentität
            </p>

            <h3 className="mt-4 text-2xl font-light">Premium-Form</h3>

            <p className="mt-5 leading-8 text-white/68">
              Alaudis 178 wurde für Menschen konzipiert, die nicht nur höchste
              Verarbeitungsqualität erwarten, sondern auch die Schönheit des
              täglichen Kontakts mit dem Flügel als Premium-Objekt.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Alaudis 178 in Premium-Ausführungen
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 text-left transition duration-300 hover:scale-[1.01] hover:border-white/20"
                aria-label={`Bild ${index + 1} in größerem Format öffnen`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                  Vergrößern
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Nächster Schritt
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Konfigurieren Sie Alaudis 178 oder sehen Sie ihn in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Gehen Sie zum Konfigurator, um Ausführung und Details zu wählen,
            oder sehen Sie das Modell in einer 3D-Umgebung und prüfen Sie, wie
            es sich im Interieur präsentiert.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/de/konfigurator?model=178"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Konfigurator öffnen
            </Link>

            <Link
              href="/de/odkryj-modele"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              In 3D ansehen
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
            aria-label="Bildvorschau schließen"
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
            aria-label="Vorheriges Bild"
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
            aria-label="Nächstes Bild"
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
