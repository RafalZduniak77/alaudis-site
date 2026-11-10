"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ALAUDIS_MODEL_IDS, getAlaudisModelName } from "./alaudisModels";
import { alaudisStoryContent, type StoryLanguage } from "./alaudisStoryContent";

// ==========================================================
// FOOTER - ALAUDIS
// ==========================================================
// Co zawiera ta wersja:
// 1. kolumna ALAUDIS
// 2. link Facebook Alaudis
// 3. kolumny MODELS / CONFIGURATOR / COMPANY
// 4. automatyczne rozpoznawanie języka z adresu
// 5. linki w footerze nie wracają już do polskiej wersji
// ==========================================================

const FACEBOOK_ALAUDIS_URL =
  "https://www.facebook.com/profile.php?id=61579105662197&locale=pl_PL";

const SAP_RENOVATION: Record<
  StoryLanguage,
  { href: string; since: string; newTab: string }
> = {
  PL: {
    href: "https://sap-haendler.vercel.app/haendler/pl/",
    since: "od 1990 roku",
    newTab: "otwiera się w nowej karcie",
  },
  EN: {
    href: "https://sap-haendler.vercel.app/haendler/en/",
    since: "since 1990",
    newTab: "opens in a new tab",
  },
  DE: {
    href: "https://sap-haendler.vercel.app/haendler/",
    since: "seit 1990",
    newTab: "öffnet in einem neuen Tab",
  },
  FR: {
    href: "https://sap-haendler.vercel.app/haendler/fr/",
    since: "depuis 1990",
    newTab: "s’ouvre dans un nouvel onglet",
  },
};

// ----------------------------------------------------------
// ROZPOZNAWANIE PREFIKSU JĘZYKA
// ----------------------------------------------------------
// Przykłady:
// /fr/fortepiany/alaudis-178 -> /fr
// /en/fortepiany/alaudis-178 -> /en
// /de/fortepiany/alaudis-178 -> /de
// /fortepiany/alaudis-178    -> ""
// ----------------------------------------------------------
function getLanguagePrefix(pathname: string) {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "/en";
  }

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    return "/de";
  }

  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    return "/fr";
  }

  return "";
}

export default function Footer() {
  const pathname = usePathname() || "/";
  const langPrefix = getLanguagePrefix(pathname);
  const language = (langPrefix.slice(1).toUpperCase() || "PL") as StoryLanguage;
  const story = alaudisStoryContent[language];
  const sapRenovation = SAP_RENOVATION[language];

  // --------------------------------------------------------
  // LINKI WEWNĘTRZNE Z PREFIXEM JĘZYKA
  // --------------------------------------------------------
  const configuratorUrl = `${langPrefix}/konfigurator`;
  const aboutUrl = `${langPrefix}/historia`;
  const factoryUrl = `${langPrefix}/historia`;
  const contactUrl = `${langPrefix}/kontakt`;

  return (
    <footer className="border-t border-white/6 bg-black px-6 py-16 sm:px-10 lg:px-16">
      {/* ====================================================
          GŁÓWNA SIATKA FOOTERA
         ==================================================== */}
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* ==================================================
            KOLUMNA 1 - ALAUDIS
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            ALAUDIS
          </p>

          <p className="mt-8 text-[15px] text-white/92">Polish Grand Piano</p>

          <Link
            href={`${aboutUrl}#alaudis-story`}
            className="mt-3 block max-w-[260px] text-sm leading-6 text-white/70 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {story.closing}
          </Link>

          <Link
            href={FACEBOOK_ALAUDIS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-[15px] text-white/90 transition hover:text-white"
          >
            Facebook Alaudis
          </Link>
        </div>

        {/* ==================================================
            KOLUMNA 2 - MODELS
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            MODELS
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white/92">
            {ALAUDIS_MODEL_IDS.map((model) => (
              <Link
                key={model}
                href={`${langPrefix}/fortepiany/alaudis-${model}`}
                className="transition hover:text-white/90"
              >
                {getAlaudisModelName(model)}
              </Link>
            ))}
          </div>
        </div>

        {/* ==================================================
            KOLUMNA 3 - CONFIGURATOR
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            CONFIGURATOR
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white/92">
            <Link
              href={configuratorUrl}
              className="transition hover:text-white/90"
            >
              Choose finish
            </Link>

            <Link
              href={configuratorUrl}
              className="transition hover:text-white/90"
            >
              Choose color
            </Link>

            <Link
              href={configuratorUrl}
              className="transition hover:text-white/90"
            >
              Accessories
            </Link>
          </div>
        </div>

        {/* ==================================================
            KOLUMNA 4 - COMPANY
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            COMPANY
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white/92">
            <Link href={aboutUrl} className="transition hover:text-white/90">
              About
            </Link>

            <Link href={factoryUrl} className="transition hover:text-white/90">
              Factory
            </Link>

            <Link href={contactUrl} className="transition hover:text-white/90">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* ====================================================
          DÓŁ FOOTERA
         ==================================================== */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center gap-6 border-t border-white/10 pt-8 text-center">
        <a
          href={sapRenovation.href}
          hrefLang={language.toLowerCase()}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 flex-col items-center justify-center gap-2 rounded-full border border-[#d3bd8b]/60 bg-black/10 px-6 py-3 text-sm text-[#cfb675] transition-colors hover:border-[#dac18a] hover:bg-[#dac18a] hover:text-[#080808] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cfb675] sm:flex-row sm:gap-3"
        >
          <span className="uppercase tracking-[0.16em]">SAP Renovation</span>
          <span aria-hidden="true" className="hidden text-white/30 transition-colors group-hover:text-[#080808]/40 sm:inline">
            ·
          </span>
          <span className="inline-flex items-center gap-2 text-white/70 transition-colors group-hover:text-[#080808]">
            {sapRenovation.since}
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </span>
          <span className="sr-only"> ({sapRenovation.newTab})</span>
        </a>
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          © 2026 ALAUDIS
        </p>
      </div>
    </footer>
  );
}
