// ==========================================================
// ODKRYJ MODELE PAGE
// ==========================================================
// To jest główny plik strony "Odkryj modele".
//
// Za co odpowiada ten plik:
// 1. buduje całą stronę
// 2. pokazuje górny hero section z tłem
// 3. pokazuje przycisk Powrót i przycisk Konfigurator
// 4. wyświetla logo Alaudis
// 5. pokazuje nagłówek i opis strony
// 6. osadza moduł 3D / AR: AlaudisARPreview
// 7. dodaje Footer na końcu strony
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcie hero w tle
// - tytuł strony
// - opis pod tytułem
// - link przycisku Powrót
// - link przycisku Konfigurator
// - wielkość paddingów i odstępów
//
// Najważniejsze importy:
// - Footer             -> stopka strony
// - AlaudisARPreview   -> główny moduł 3D / AR
// ==========================================================

import Image from "next/image";
import Footer from "@/components/Footer";
import AlaudisARPreview from "@/components/AlaudisARPreview";

export default function OdkryjModelePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          HERO SECTION
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">
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
            GÓRNY PASEK
            - Powrót
            - Logo
            - Konfigurator
           ================================================== */}
        <header className="relative z-20">
          <div className="mx-auto grid max-w-7xl grid-cols-3 items-start px-6 pt-12 pb-6 lg:px-10">
            {/* LEWA STRONA - POWRÓT */}
            <div className="ml-8 flex items-center gap-4">
              <a
                href="/"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Powrót
              </a>
            </div>

            {/* ŚRODEK - LOGO */}
            <div className="justify-self-center pt-2">
              <Image
                src="/logo-alaudis.png"
                alt="Logo Alaudis"
                width={77}
                height={25}
                priority
                className="h-auto w-[60px] object-contain opacity-95 md:w-[77px]"
              />
            </div>

            {/* PRAWA STRONA - KONFIGURATOR */}
            <div className="justify-self-end">
              <a
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Konfigurator
              </a>
            </div>
          </div>
        </header>

        {/* ==================================================
            NAGŁÓWEK STRONY
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
          SEKCJA Z MODUŁEM 3D / AR
         ==================================================== */}
      <section className="bg-black px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AlaudisARPreview />
        </div>
      </section>

      {/* ====================================================
          STOPKA
         ==================================================== */}
      <Footer />
    </main>
  );
}
