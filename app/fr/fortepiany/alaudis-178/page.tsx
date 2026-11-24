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
    alt: "ALAUDIS ONE 178 - vue 1",
  },
  {
    src: "/galeria-home/11.jpg",
    alt: "ALAUDIS ONE 178 - vue 2",
  },
  {
    src: "/galeria-home/12.jpg",
    alt: "ALAUDIS ONE 178 - vue 3",
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
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <HomeHero
        headingTitle
        alt="ALAUDIS ONE 178"
        eyebrow="Modèle premium"
        title={["ALAUDIS", "ONE 178"]}
        description="Subtil, noble et raffiné. ALAUDIS ONE 178 a été pensé comme un piano à queue pour des intérieurs premium, où comptent l’élégance de la forme, la culture musicale du son et le plaisir quotidien de vivre avec l’instrument."
        actions={[
          { href: "/fr/konfigurator?model=178", label: "Ouvrir le configurateur" },
          { href: "/fr/odkryj-modele?model=178", label: "Voir en 3D" },
        ]}
        scroll="Faire défiler vers le bas"
      />

      <ModelStorySignature model="178" language="FR" />

      <ModelSoundCharacter
        eyebrow="Caractère sonore"
        lead="ALAUDIS ONE 178 offre un son d’une grande culture sonore, clair, chantant et naturellement ordonné. C’est un instrument qui ne domine pas l’espace par l’agressivité, mais construit une atmosphère de classe, de calme et de profondeur musicale."
        text="Son caractère se définit le mieux par une projection subtile, un médium noble, un aigu conduit avec douceur et une basse à la base élégante. C’est un modèle qui sonne avec maturité et raffinement, même dans un environnement intime."
      />

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Destination
            </p>

            <h3 className="mt-4 text-2xl font-light">
              L’art quotidien du jeu
            </h3>

            <p className="mt-5 leading-8 text-white">
              Idéal pour les salons musicaux privés, les appartements premium,
              les espaces boutique et pour les pianistes qui recherchent un
              instrument alliant classe visuelle et musicalité mûre.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Intérieurs de destination
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Élégance et proportion
            </h3>

            <p className="mt-5 leading-8 text-white">
              Il trouve naturellement sa place dans les intérieurs modernes,
              classiques, art déco et soft luxury, là où le détail, la lumière,
              les matériaux et la présence de l’instrument forment une seule
              composition.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identité du modèle
            </p>

            <h3 className="mt-4 text-2xl font-light">Forme premium</h3>

            <p className="mt-5 leading-8 text-white">
              ALAUDIS ONE 178 a été pensé pour les personnes qui attendent non
              seulement une haute qualité de fabrication, mais aussi la beauté
              du contact quotidien avec le piano à queue comme objet de classe
              premium.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS ONE 178 dans des finitions premium
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 text-left transition duration-300 hover:scale-[1.01] hover:border-white/20"
                aria-label={`Ouvrir l’image ${index + 1} en grand format`}
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
                  Agrandir
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ModelBespokeOffer language="FR" model="178" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Étape suivante
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configurez ALAUDIS ONE 178 ou voyez-le en 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Accédez au configurateur pour choisir la finition et les détails, ou
            voyez le modèle dans un environnement 3D afin de découvrir comment
            il se présente dans un intérieur.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/fr/konfigurator?model=178"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Ouvrir le configurateur
            </Link>

            <Link
              href="/fr/odkryj-modele?model=178"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Voir en 3D
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
            aria-label="Fermer l’aperçu de l’image"
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
            aria-label="Image précédente"
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
            aria-label="Image suivante"
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

