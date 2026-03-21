// ==========================================================
// CONFIGURATOR PANEL
// ==========================================================
// To jest prawy panel konfiguratora.
//
// Za co odpowiada ten plik:
// 1. pokazuje pole tytułu oferty
// 2. pokazuje zakładki:
//    - obudowa
//    - akustyka
//    - mechanizm
// 3. pokazuje listę opcji dla każdej sekcji
// 4. zaznacza aktywną opcję
// 5. obsługuje przewijanie do sekcji po kliknięciu zakładki
// 6. pokazuje czerwoną linię pod aktywną zakładką
// 7. na dole wyświetla ActionMenu
//
// Co tutaj najłatwiej zmieniasz:
// - wygląd panelu po prawej
// - wygląd zakładek
// - wygląd listy opcji
// - wysokość sekcji
// - paddingi i odstępy
//
// Najważniejsze propsy:
// - offerTitle           -> tytuł oferty
// - setOfferTitle        -> zmiana tytułu oferty
// - activeTab            -> aktualna aktywna zakładka
// - selected             -> aktualnie wybrane opcje
// - options              -> lista opcji dla sekcji
// - groupMap             -> mapowanie opcji do grup
// - onSelect             -> co zrobić po wyborze opcji
// - onScrollToSection    -> przewijanie do sekcji
// - menuOpen             -> czy ActionMenu jest otwarte
// ==========================================================

"use client";

import { RefObject } from "react";
import { ConfigTab, OptionsMap, SelectedState } from "./types";
import ActionMenu from "./ActionMenu";

// ----------------------------------------------------------
// TYPY PROPSÓW
// ----------------------------------------------------------
// Ten komponent dostaje z zewnątrz wszystkie dane potrzebne
// do wyświetlania panelu i obsługi kliknięć.
type ConfiguratorPanelProps = {
  offerTitle: string;
  setOfferTitle: (value: string) => void;
  activeTab: ConfigTab;
  selected: SelectedState;
  options: OptionsMap;
  groupMap: Record<string, string>;
  scrollRef: RefObject<HTMLDivElement | null>;
  obudowaRef: RefObject<HTMLDivElement | null>;
  akustykaRef: RefObject<HTMLDivElement | null>;
  mechanizmRef: RefObject<HTMLDivElement | null>;
  underlineRef: RefObject<HTMLDivElement | null>;
  tabsContainerRef: RefObject<HTMLDivElement | null>;
  tabRefs: {
    obudowa: RefObject<HTMLButtonElement | null>;
    akustyka: RefObject<HTMLButtonElement | null>;
    mechanizm: RefObject<HTMLButtonElement | null>;
  };
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  onSelect: (tab: ConfigTab, value: string) => void;
  onScrollToSection: (tab: ConfigTab) => void;
  onSave: () => void;
  onSend: () => void;
  onPdf: () => void;
};

export default function ConfiguratorPanel({
  offerTitle,
  setOfferTitle,
  activeTab,
  selected,
  options,
  groupMap,
  scrollRef,
  obudowaRef,
  akustykaRef,
  mechanizmRef,
  underlineRef,
  tabsContainerRef,
  tabRefs,
  menuOpen,
  setMenuOpen,
  onSelect,
  onScrollToSection,
  onSave,
  onSend,
  onPdf,
}: ConfiguratorPanelProps) {
  return (
    <div className="absolute right-0 top-0 flex h-full w-full max-w-[520px] flex-col border-l border-white/10 bg-white/5 backdrop-blur-2xl">
      {/* ====================================================
          GÓRA PANELU - TYTUŁ OFERTY
         ==================================================== */}
      <div className="p-6 pt-24">
        <input
          value={offerTitle}
          onChange={(e) => setOfferTitle(e.target.value)}
          placeholder="Tytuł oferty..."
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        />
      </div>

      {/* ====================================================
          ZAKŁADKI
          - obudowa
          - akustyka
          - mechanizm
         ==================================================== */}
      <div
        ref={tabsContainerRef}
        className="relative flex border-b border-white/10"
      >
        {(["obudowa", "akustyka", "mechanizm"] as ConfigTab[]).map((tab) => (
          <button
            key={tab}
            ref={tabRefs[tab]}
            onClick={() => onScrollToSection(tab)}
            className={`flex-1 py-5 ${
              activeTab === tab ? "text-white" : "text-white/70"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}

        {/* CZERWONA LINIA POD AKTYWNĄ ZAKŁADKĄ */}
        <div
          ref={underlineRef}
          className="absolute bottom-0 h-[2px] bg-red-500 transition-all duration-300"
        />
      </div>

      {/* ====================================================
          PRZEWIJANA ZAWARTOŚĆ PANELU
         ==================================================== */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-24 overflow-y-auto px-6 py-8"
      >
        {(["obudowa", "akustyka", "mechanizm"] as ConfigTab[]).map((section) => (
          <div
            key={section}
            ref={
              section === "obudowa"
                ? obudowaRef
                : section === "akustyka"
                  ? akustykaRef
                  : mechanizmRef
            }
            className="min-h-[80vh]"
          >
            {/* TYTUŁ SEKCJI */}
            <h3 className="mb-6 uppercase tracking-wider opacity-80">
              {section}
            </h3>

            {/* LISTA OPCJI W DANEJ SEKCJI */}
            {options[section].map((item) => {
              // Sprawdzenie czy dana opcja jest aktualnie wybrana
              const isActive =
                section === "obudowa"
                  ? selected.obudowa === item
                  : selected[section][groupMap[item]] === item;

              return (
                <button
                  key={item}
                  onClick={() => onSelect(section, item)}
                  className={`mb-3 w-full rounded-xl p-4 transition ${
                    isActive
                      ? "border border-white/30 bg-white/10 backdrop-blur-md"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* ====================================================
          DOLNE MENU AKCJI
         ==================================================== */}
      <ActionMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onSave={onSave}
        onSend={onSend}
        onPdf={onPdf}
      />
    </div>
  );
}
