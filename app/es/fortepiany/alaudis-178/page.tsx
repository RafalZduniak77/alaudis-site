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
    alt: "ALAUDIS ONE 178, vista 1",
  },
  {
    src: "/galeria-home/11.jpg",
    alt: "ALAUDIS ONE 178, vista 2",
  },
  {
    src: "/galeria-home/12.jpg",
    alt: "ALAUDIS ONE 178, vista 3",
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
      <ModelPageTopBar backHref="/es" activeLanguage="ES" />

      <HomeHero
        headingTitle
        alt="ALAUDIS ONE 178"
        eyebrow="Modelo de alta gama"
        title={["ALAUDIS", "ONE 178"]}
        description="Sutil, noble y refinado. ALAUDIS ONE 178 ha sido concebido como un piano de cola para interiores de alta gama, en los que cuentan la elegancia de la forma, la cultura musical del sonido y el placer cotidiano de convivir con el instrumento."
        actions={[
          { href: "/es/konfigurator?model=178", label: "Abra el configurador" },
          { href: "/es/odkryj-modele?model=178", label: "Véalo en 3D" },
        ]}
        scroll="Desplácese hacia abajo"
      />

      <ModelStorySignature model="178" language="ES" />

      <ModelSoundCharacter
        eyebrow="Carácter sonoro"
        lead="ALAUDIS ONE 178 ofrece un sonido de marcada cultura musical: claro, cantable y naturalmente ordenado. Es un instrumento que no domina el espacio con agresividad, sino que crea una atmósfera de clase, serenidad y profundidad musical."
        text="Lo que mejor define su carácter es una proyección sutil, unos medios nobles, unos agudos conducidos con suavidad y unos graves de fundamento elegante. Es un modelo que suena maduro y refinado incluso en un entorno íntimo."
      />

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Destino
            </p>

            <h3 className="mt-4 text-2xl font-light">
              El arte cotidiano de tocar
            </h3>

            <p className="mt-5 leading-8 text-white">
              Ideal para salones de música privados, apartamentos de lujo y
              espacios boutique, así como para pianistas que buscan un
              instrumento que una la distinción visual con una musicalidad
              madura.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Interiores idóneos
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Elegancia y proporción
            </h3>

            <p className="mt-5 leading-8 text-white">
              Encuentra su lugar natural en interiores modernos, clásicos, art
              déco y soft luxury, allí donde el detalle, la luz, los materiales
              y la presencia del instrumento forman una sola composición.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identidad del modelo
            </p>

            <h3 className="mt-4 text-2xl font-light">Forma de alta gama</h3>

            <p className="mt-5 leading-8 text-white">
              ALAUDIS ONE 178 ha sido concebido como un instrumento para quienes
              esperan no solo calidad de factura, sino también la belleza de
              convivir a diario con el piano de cola como objeto de alta
              gama.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galería
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS ONE 178 en acabados de alta gama
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 text-left transition duration-300 hover:scale-[1.01] hover:border-white/20"
                aria-label={`Abrir la imagen ${index + 1} en tamaño grande`}
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
                  Ampliar
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ModelBespokeOffer language="ES" model="178" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Siguiente paso
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configure ALAUDIS ONE 178 o véalo en 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Acceda al configurador para elegir el acabado y los detalles, o vea
            el modelo en un entorno 3D y compruebe cómo luce en un interior.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/es/konfigurator?model=178"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Abra el configurador
            </Link>

            <Link
              href="/es/odkryj-modele?model=178"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Véalo en 3D
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
            aria-label="Cerrar la vista previa de la imagen"
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
            aria-label="Imagen anterior"
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
            aria-label="Imagen siguiente"
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

