//
// ==========================================================
// MODEL PAGE TOP BAR
// ==========================================================
// To jest wspólny górny pasek dla podstron Alaudis.
//
// Za co odpowiada ten plik:
// 1. pokazuje zawsze widoczny przycisk Powrót po lewej
// 2. pokazuje logo Alaudis na środku
// 3. pokazuje rozwijane menu języków po prawej
// 4. jest przyklejony do góry ekranu podczas scrolla
// 5. daje spójny wygląd na wszystkich podstronach
//
// Co tutaj najłatwiej zmieniasz:
// - link przycisku Powrót
// - aktywny język
// - wygląd rozwijanego menu języków
// - pozycję i styl całego paska
//
// Ważne:
// - ten komponent jest wspólny
// - po zmianie automatycznie poprawi się na wszystkich stronach,
//   które go używają
// - na tym etapie języki są przygotowane wizualnie
// ==========================================================

"use client";

import Image from "next/image";
import Link from "next/link";

// ==========================================================
// TYPY JĘZYKÓW
// ==========================================================
// Tutaj określamy dostępne wersje językowe.
// ==========================================================
type LanguageKey = "PL" | "EN" | "DE" | "FR";

type ModelPageTopBarProps = {
  backHref?: string;
  activeLanguage?: LanguageKey;
};

// ==========================================================
// KOMPONENT GŁÓWNY
// ==========================================================
// To jest wspólny header wszystkich ważnych podstron.
// ==========================================================
export default function ModelPageTopBar({
  backHref = "/",
  activeLanguage = "PL",
}: ModelPageTopBarProps) {
  return (
    <>
      {/* ====================================================
          STAŁY PASEK U GÓRY
         ==================================================== */}
      <div className="fixed inset-x-0 top-0 z-50">
        {/* DELIKATNE TŁO / BLUR */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-transparent backdrop-blur-md" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-3 items-center px-6 pb-4 pt-10 lg:px-10">
          {/* ==================================================
              LEWA STRONA - POWRÓT
             ================================================== */}
          <div className="flex items-center">
            <Link
              href={backHref}
              className="inline-flex rounded-full border border-white/35 bg-black/20 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Powrót
            </Link>
          </div>

          {/* ==================================================
              ŚRODEK - LOGO
             ================================================== */}
          <div className="justify-self-center">
            <Image
              src="/logo-alaudis.png"
              alt="Logo Alaudis"
              width={77}
              height={25}
              priority
              className="h-auto w-[60px] object-contain opacity-95 md:w-[77px]"
            />
          </div>

          {/* ==================================================
              PRAWA STRONA - ROZWIJANE MENU JĘZYKÓW
              - dokładnie w stylu strony głównej
             ================================================== */}
          <div className="justify-self-end">
            <details className="group relative">
              <summary className="list-none cursor-pointer rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black">
                <span className="inline-flex items-center gap-2">
                  {activeLanguage}
                  <span className="text-[10px] transition group-open:rotate-180">
                    ▼
                  </span>
                </span>
              </summary>

              <div className="absolute right-0 mt-3 min-w-[150px] overflow-hidden rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl">
                {/* AKTYWNY JĘZYK */}
                <button
                  type="button"
                  className={
                    activeLanguage === "PL"
                      ? "w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                      : "w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  }
                >
                  PL
                </button>

                <button
                  type="button"
                  className={
                    activeLanguage === "EN"
                      ? "w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                      : "w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  }
                >
                  EN
                </button>

                <button
                  type="button"
                  className={
                    activeLanguage === "DE"
                      ? "w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                      : "w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  }
                >
                  DE
                </button>

                <button
                  type="button"
                  className={
                    activeLanguage === "FR"
                      ? "w-full bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                      : "w-full px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  }
                >
                  FR
                </button>
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
