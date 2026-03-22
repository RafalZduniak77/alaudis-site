// ==========================================================
// ODKRYJ MODELE PAGE - ALAUDIS
// ==========================================================
// To jest główny plik strony "Odkryj modele".
//
// Za co odpowiada ten plik:
// 1. buduje całą stronę odkrywania modeli
// 2. korzysta ze wspólnego górnego paska ModelPageTopBar
// 3. pokazuje hero z tłem i nagłówkiem strony
// 4. pokazuje opis sekcji 3D / AR
// 5. osadza moduł AlaudisARPreview
// 6. dodaje Footer na końcu strony
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcie hero w tle
// - tytuł strony
// - opis pod tytułem
// - link przycisku Powrót
// - aktywny język w górnym pasku
// - odstępy sekcji
//
// Najważniejsze importy:
// - ModelPageTopBar  -> wspólny górny pasek
// - AlaudisARPreview -> moduł 3D / AR
// - Footer           -> stopka strony
// ==========================================================

import Image from "next/image";
import Footer from "@/components/Footer";
import AlaudisARPreview from "@/components/AlaudisARPreview";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function OdkryjModelePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
          - zawsze widoczny
          - powrót po lewej
          - logo na środku
          - języki po prawej
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          HERO STRONY
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        {/* TŁO HERO */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Alaudis background"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 px-6 pb-16 pt-8 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Alaudis AR Experience
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[60px] lg:leading-[1.05]">
              Odkryj modele
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 sm:text-base">
              Obejrzyj fortepian w 3D, obróć go, przybliż i sprawdź, jak wygląda
              w realnym wnętrzu. To pierwszy krok do pełnego doświadczenia
              Alaudis: konfigurator + AR preview.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          SEKCJA MODUŁU 3D / AR
         ==================================================== */}
      <section className="bg-black px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AlaudisARPreview />
        </div>
      </section>

      {/* ====================================================
          FOOTER
         ==================================================== */}
      <Footer />
    </main>
  );
}
