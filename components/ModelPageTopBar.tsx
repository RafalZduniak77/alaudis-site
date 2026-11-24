// ==========================================================
// GÓRNY PASEK PODSTRON
// ==========================================================
// Podstrony używają tego samego menu co strona główna
// (Modele / Historia / Rzemiosło · logo · W kadrze · język).
// ==========================================================

import HomeHeader from "./HomeHeader";

type LanguageKey = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";

type ModelPageTopBarProps = {
  /** Zachowane dla zgodności — logo w menu prowadzi na stronę główną. */
  backHref?: string;
  activeLanguage?: LanguageKey;
};

export default function ModelPageTopBar({ activeLanguage = "PL" }: ModelPageTopBarProps) {
  return <HomeHeader locale={activeLanguage.toLowerCase() as "pl" | "en" | "de" | "fr" | "es" | "it"} variant="page" />;
}
