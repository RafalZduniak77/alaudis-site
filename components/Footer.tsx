"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ALAUDIS_MODEL_IDS, getAlaudisModelName } from "./alaudisModels";
import type { StoryLanguage } from "./alaudisStoryContent";
import { OPEN_CONSENT_EVENT } from "./CookieConsent";

const PRIVACY_POLICY: Record<StoryLanguage, string> = {
  PL: "Polityka prywatności",
  EN: "Privacy policy",
  DE: "Datenschutz",
  FR: "Politique de confidentialité",
};

const COOKIE_SETTINGS: Record<StoryLanguage, string> = {
  PL: "Ustawienia cookies",
  EN: "Cookie settings",
  DE: "Cookie-Einstellungen",
  FR: "Paramètres des cookies",
};

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

const FOOTER_COPY: Record<
  StoryLanguage,
  {
    tagline: string; models: string; configurator: string; company: string;
    finish: string; color: string; accessories: string;
    about: string; factory: string; tour: string; heritage: string; artists: string; news: string; contact: string;
  }
> = {
  PL: {
    tagline: "Polski fortepian koncertowy", models: "Modele", configurator: "Konfigurator", company: "Firma",
    finish: "Wybierz wykończenie", color: "Wybierz kolor", accessories: "Akcesoria",
    about: "O nas", factory: "Manufaktura", tour: "Zwiedzanie manufaktury", heritage: "Tradycja", artists: "Artyści", news: "Aktualności i prasa", contact: "Kontakt",
  },
  EN: {
    tagline: "Polish Grand Piano", models: "Models", configurator: "Configurator", company: "Company",
    finish: "Choose finish", color: "Choose color", accessories: "Accessories",
    about: "About", factory: "Factory", tour: "Manufactory tour", heritage: "Heritage", artists: "Artists", news: "News & Press", contact: "Contact",
  },
  DE: {
    tagline: "Polnischer Flügel", models: "Modelle", configurator: "Konfigurator", company: "Unternehmen",
    finish: "Oberfläche wählen", color: "Farbe wählen", accessories: "Zubehör",
    about: "Über uns", factory: "Manufaktur", tour: "Manufakturführung", heritage: "Tradition", artists: "Künstler", news: "Aktuelles & Presse", contact: "Kontakt",
  },
  FR: {
    tagline: "Piano à queue polonais", models: "Modèles", configurator: "Configurateur", company: "Entreprise",
    finish: "Choisir la finition", color: "Choisir la couleur", accessories: "Accessoires",
    about: "À propos", factory: "Manufacture", tour: "Visite de la manufacture", heritage: "Tradition", artists: "Artistes", news: "Actualités & presse", contact: "Contact",
  },
};

const FACEBOOK_ALAUDIS_URL =
  "https://www.facebook.com/profile.php?id=61579105662197&locale=pl_PL";

const SAP_RENOVATION: Record<
  StoryLanguage,
  { href: string; since: string; newTab: string; intro: string }
> = {
  PL: {
    href: "https://saprenovation.com/pl/",
    since: "od 1990 roku",
    intro: "ALAUDIS to marka SAP Renovation — jednego z europejskich liderów w renowacji i wykończeniu fortepianów.",
    newTab: "otwiera się w nowej karcie",
  },
  EN: {
    href: "https://saprenovation.com/en/",
    since: "since 1990",
    intro: "ALAUDIS is a brand of SAP Renovation — one of Europe’s leading specialists in piano restoration and finishing.",
    newTab: "opens in a new tab",
  },
  DE: {
    href: "https://saprenovation.com/de/",
    since: "seit 1990",
    intro: "ALAUDIS ist eine Marke von SAP Renovation — einem der führenden europäischen Spezialisten für die Restaurierung und Oberflächenveredelung von Flügeln.",
    newTab: "öffnet in einem neuen Tab",
  },
  FR: {
    href: "https://saprenovation.com/fr/",
    since: "depuis 1990",
    intro: "ALAUDIS est une marque de SAP Renovation — l’un des spécialistes européens de référence de la restauration et de la finition des pianos.",
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
  const sapRenovation = SAP_RENOVATION[language];
  const copy = FOOTER_COPY[language];

  // --------------------------------------------------------
  // LINKI WEWNĘTRZNE Z PREFIXEM JĘZYKA
  // --------------------------------------------------------
  const configuratorUrl = `${langPrefix}/konfigurator`;
  const aboutUrl = `${langPrefix}/historia`;

  return (
    <footer className="bg-black px-6 pb-16 pt-10 sm:px-10 lg:px-16">
      {/* ====================================================
          GŁÓWNA SIATKA FOOTERA
         ==================================================== */}
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/20 pt-14 md:grid-cols-2 lg:grid-cols-4">
        {/* ==================================================
            KOLUMNA 1 - ALAUDIS
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">
            ALAUDIS
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white">
            <Link href={`${langPrefix}/zwiedzanie-manufaktury`} className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none">
              {copy.tour}
            </Link>

            <Link href={`${langPrefix}/artysci`} className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none">
              {copy.artists}
            </Link>

            <Link href={`${langPrefix}/aktualnosci`} className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none">
              {copy.news}
            </Link>
          </div>
        </div>

        {/* ==================================================
            KOLUMNA 2 - MODELS
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">
            {copy.models}
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white">
            {ALAUDIS_MODEL_IDS.map((model) => (
              <Link
                key={model}
                href={`${langPrefix}/fortepiany/alaudis-${model}`}
                className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none"
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
          <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">
            {copy.configurator}
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white">
            <Link
              href={configuratorUrl}
              className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none"
            >
              {copy.finish}
            </Link>

            <Link
              href={configuratorUrl}
              className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none"
            >
              {copy.color}
            </Link>

            <Link
              href={configuratorUrl}
              className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none"
            >
              {copy.accessories}
            </Link>
          </div>
        </div>

        {/* ==================================================
            KOLUMNA 4 - COMPANY
           ================================================== */}
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">
            {copy.company}
          </p>

          <div className="mt-8 flex flex-col gap-4 text-[15px] text-white">
            <Link href={aboutUrl} className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none">
              {copy.about}
            </Link>

            <Link href={`${langPrefix}/tradycja`} className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none">
              {copy.heritage}
            </Link>

            <Link
              href={FACEBOOK_ALAUDIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition duration-300 ease-out hover:translate-x-1.5 hover:text-[#d3bd8b] focus-visible:translate-x-1.5 focus-visible:text-[#d3bd8b] motion-reduce:transform-none"
            >
              Facebook Alaudis
            </Link>
          </div>
        </div>
      </div>

      {/* ====================================================
          DÓŁ FOOTERA
         ==================================================== */}
      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center gap-6 border-t border-white/20 pt-10 text-center">
        <p className="max-w-xl text-sm leading-6 text-white/78">{sapRenovation.intro}</p>
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
          <span className="inline-flex items-center gap-2 text-white/84 transition-colors group-hover:text-[#080808]">
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
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            © 2025 ALAUDIS
          </p>
          <Link
            href={`${langPrefix}/polityka-prywatnosci`}
            className="text-xs uppercase tracking-[0.24em] text-white/72 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {PRIVACY_POLICY[language]}
          </Link>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
            className="text-xs uppercase tracking-[0.24em] text-white/72 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {COOKIE_SETTINGS[language]}
          </button>
        </div>
      </div>
    </footer>
  );
}
