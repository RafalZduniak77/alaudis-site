"use client";

// ==========================================================
// MODEL PAGE - ALAUDIS 178
// ==========================================================
// To jest osobna podstrona premium dla modelu Alaudis 178.
//
// Za co odpowiada ten plik:
// 1. pokazuje hero modelu 178
// 2. korzysta ze wspólnego górnego paska ModelPageTopBar
// 3. opisuje charakter brzmienia
// 4. pokazuje przeznaczenie modelu
// 5. pokazuje docelowe wnętrza
// 6. pokazuje galerię zdjęć
// 7. pozwala otworzyć zdjęcie w dużym podglądzie
// 8. daje 2 główne wejścia:
//    - do konfiguratora
//    - do podglądu 3D
// 9. kończy się stopką Footer
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

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

// ==========================================================
// TYP ZDJĘCIA GALERII
// ==========================================================
type GalleryImage = {
  src: string;
  alt: string;
};

// ==========================================================
// LISTA ZDJĘĆ
// ==========================================================
const galleryImages: GalleryImage[] = [
  {
    src: "/galeria-home/10.jpg",
    alt: "Alaudis 178 - widok 1",
  },
  {
    src: "/galeria-home/11.jpg",
    alt: "Alaudis 178 - widok 2",
  },
  {
    src: "/galeria-home/12.jpg",
    alt: "Alaudis 178 - widok 3",
  },
];

export default function ModelAlaudis178Page() {
  // ========================================================
  // STAN LIGHTBOXA
  // ========================================================
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  // ========================================================
  // OTWIERANIE LIGHTBOXA
  // ========================================================
  const openLightbox = (image: GalleryImage) => {
    setActiveImage(image);
  };

  // ========================================================
  // ZAMYKANIE LIGHTBOXA
  // ========================================================
  const closeLightbox = () => {
    setActiveImage(null);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          HERO MODELU
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        {/* TŁO HERO */}
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

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Model premium
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 178
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Subtelny, szlachetny i wyrafinowany. Alaudis 178 został pomyślany
              jako fortepian do wnętrz premium, w których liczy się elegancja
              formy, muzyczna kultura brzmienia i codzienna przyjemność
              obcowania z instrumentem.
            </p>

            {/* ==================================================
                CTA HERO
               ================================================== */}
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
              Liryczny, zrównoważony, elegancki
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              Alaudis 178 oferuje dźwięk o wyraźnej kulturze brzmienia —
              klarowny, śpiewny i naturalnie uporządkowany. To instrument,
              który nie dominuje przestrzeni agresją, lecz buduje atmosferę
              klasy, spokoju i muzycznej głębi.
            </p>

            <p className="leading-8">
              Jego charakter najlepiej określają: subtelna projekcja,
              szlachetna średnica, miękko prowadzona góra i bas o eleganckiej
              podstawie. To model, który brzmi dojrzale i wyrafinowanie nawet
              w kameralnym otoczeniu.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          PRZEZNACZENIE + WNĘTRZA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Przeznaczenie
            </p>

            <h3 className="mt-4 text-2xl font-light">Codzienna sztuka gry</h3>

            <p className="mt-5 leading-8 text-white/68">
              Idealny do prywatnych salonów muzycznych, apartamentów premium,
              butikowych przestrzeni oraz dla pianistów, którzy szukają
              instrumentu łączącego klasę wizualną z dojrzałą muzykalnością.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Docelowe wnętrza
            </p>

            <h3 className="mt-4 text-2xl font-light">Elegancja i proporcja</h3>

            <p className="mt-5 leading-8 text-white/68">
              Najlepiej odnajduje się we wnętrzach nowoczesnych, klasycznych,
              art déco i soft luxury — tam, gdzie detal, światło, materiały
              i obecność instrumentu tworzą wspólną kompozycję.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Tożsamość modelu
            </p>

            <h3 className="mt-4 text-2xl font-light">Forma premium</h3>

            <p className="mt-5 leading-8 text-white/68">
              Alaudis 178 został pomyślany jako instrument dla osób, które
              oczekują nie tylko jakości wykonania, lecz także piękna
              codziennego obcowania z fortepianem jako obiektem klasy premium.
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
            Alaudis 178 w wykończeniach premium
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openLightbox(image)}
                className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 text-left transition duration-300 hover:scale-[1.01] hover:border-white/20"
                aria-label={`Otwórz zdjęcie ${index + 1} w większym formacie`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
                  Powiększ
                </div>
              </button>
            ))}
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
            Skonfiguruj Alaudis 178 lub zobacz go w 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Przejdź do konfiguratora, aby wybrać wykończenie i detale, albo
            zobacz model w przestrzeni 3D i sprawdź, jak prezentuje się we
            wnętrzu.
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
          LIGHTBOX
         ==================================================== */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* PRZYCISK ZAMKNIĘCIA */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:border-white hover:bg-white hover:text-black"
            aria-label="Zamknij podgląd zdjęcia"
          >
            ×
          </button>

          {/* KONTENER ZDJĘCIA */}
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

      {/* ====================================================
          FOOTER
         ==================================================== */}
      <Footer />
    </main>
  );
}
