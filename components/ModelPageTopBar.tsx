// ==========================================================
// MODEL PAGE TOP BAR
// ==========================================================
// To jest wspólny górny pasek dla podstron modeli premium.
//
// Za co odpowiada ten plik:
// 1. pokazuje zawsze widoczny przycisk Powrót po lewej
// 2. pokazuje logo Alaudis na środku
// 3. pokazuje przełącznik języka po prawej
// 4. jest przyklejony do góry ekranu podczas scrolla
// 5. daje spójny wygląd na wszystkich podstronach modeli
//
// Co tutaj najłatwiej zmieniasz:
// - link przycisku Powrót
// - aktywny język
// - wygląd przycisków językowych
// - pozycję i styl całego paska
//
// Ważne:
// - Na tym etapie PL jest aktywne
// - EN i DE są przygotowane wizualnie pod kolejne tłumaczenia
// ==========================================================

"use client";

import Image from "next/image";
import Link from "next/link";

type LanguageKey = "PL" | "EN" | "DE";

type ModelPageTopBarProps = {
  backHref?: string;
  activeLanguage?: LanguageKey;
};

const LANGUAGES: LanguageKey[] = ["PL", "EN", "DE"];

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
              PRAWA STRONA - WERSJE JĘZYKOWE
             ================================================== */}
          <div className="justify-self-end">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur-md">
              {LANGUAGES.map((lang) => {
                const isActive = lang === activeLanguage;

                return (
                  <button
                    key={lang}
                    type="button"
                    disabled={!isActive}
                    className={
                      isActive
                        ? "rounded-full border border-white/35 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white"
                        : "rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/55"
                    }
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
