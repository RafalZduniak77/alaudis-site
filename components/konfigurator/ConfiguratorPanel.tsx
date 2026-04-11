//
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
// 8. automatycznie zmienia język na podstawie adresu
// 9. tłumaczy widoczne nazwy opcji bez zmiany logiki data.ts
// ==========================================================

"use client";

import { RefObject, useMemo } from "react";
import { usePathname } from "next/navigation";
import { ConfigTab, OptionsMap, SelectedState } from "./types";
import ActionMenu from "./ActionMenu";

// ----------------------------------------------------------
// TYPY PROPSÓW
// ----------------------------------------------------------
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

type LanguageKey = "PL" | "EN" | "DE" | "FR";

// ----------------------------------------------------------
// ROZPOZNAWANIE JĘZYKA
// ----------------------------------------------------------
function getLanguageFromPathname(pathname: string): LanguageKey {
  if (pathname === "/en/konfigurator" || pathname.startsWith("/en/konfigurator")) {
    return "EN";
  }

  if (pathname === "/de/konfigurator" || pathname.startsWith("/de/konfigurator")) {
    return "DE";
  }

  if (pathname === "/fr/konfigurator" || pathname.startsWith("/fr/konfigurator")) {
    return "FR";
  }

  return "PL";
}

// ----------------------------------------------------------
// ETYKIETY JĘZYKOWE
// ----------------------------------------------------------
function getLabels(language: LanguageKey) {
  if (language === "EN") {
    return {
      offerTitlePlaceholder: "Offer title...",
      tabs: {
        obudowa: "CABINET",
        akustyka: "ACOUSTICS",
        mechanizm: "ACTION",
      },
      sections: {
        obudowa: "Cabinet",
        akustyka: "Acoustics",
        mechanizm: "Action",
      },
    };
  }

  if (language === "DE") {
    return {
      offerTitlePlaceholder: "Angebotstitel...",
      tabs: {
        obudowa: "GEHÄUSE",
        akustyka: "AKUSTIK",
        mechanizm: "MECHANIK",
      },
      sections: {
        obudowa: "Gehäuse",
        akustyka: "Akustik",
        mechanizm: "Mechanik",
      },
    };
  }

  if (language === "FR") {
    return {
      offerTitlePlaceholder: "Titre de l’offre...",
      tabs: {
        obudowa: "CAISSE",
        akustyka: "ACOUSTIQUE",
        mechanizm: "MÉCANIQUE",
      },
      sections: {
        obudowa: "Caisse",
        akustyka: "Acoustique",
        mechanizm: "Mécanique",
      },
    };
  }

  return {
    offerTitlePlaceholder: "Tytuł oferty...",
    tabs: {
      obudowa: "OBUDOWA",
      akustyka: "AKUSTYKA",
      mechanizm: "MECHANIZM",
    },
    sections: {
      obudowa: "obudowa",
      akustyka: "akustyka",
      mechanizm: "mechanizm",
    },
  };
}

// ----------------------------------------------------------
// TŁUMACZENIA OPCJI
// ----------------------------------------------------------
function translateOption(value: string, language: LanguageKey) {
  if (language === "PL") return value;

  const mapEN: Record<string, string> = {
    "Bialy poliester połysk": "White polyester gloss",
    "Czarny Poliester połysk": "Black polyester gloss",
    "Ferrari poliester połysk": "Ferrari polyester gloss",
    "Heban polerowany": "Polished ebony",
    "Okleina Jabłoń Indyjska -połysk": "Indian apple veneer gloss",

    "Dno rezonansowe Strunz": "Strunz soundboard",
    "Dno rezonansowe Chiresse": "Chiresse soundboard",
    "Lakierowanie dna rezonansowego mat": "Soundboard lacquer matte",
    "Lakierowanie dna rezonansowego połysk": "Soundboard lacquer gloss",
    "Mostki rezonansowe klon": "Maple bridges",
    "Mostki rezonansowe buk": "Beech bridges",
    "Kolor ramy złoty": "Gold plate color",
    "Kolor ramy srebrny": "Silver plate color",
    "Struny stalowe Roslau": "Roslau steel strings",
    "Struny stalowe Paulelo": "Paulelo steel strings",
    "Struny basowe Heller": "Heller bass strings",
    "Struny basowe SAP Renovation": "SAP Renovation bass strings",
    "Kołki stroikowe niklowane": "Nickel tuning pins",
    "Kołki stroikowe Blau": "Blau tuning pins",
    "Kolor sukna czerwony": "Red felt color",
    "Kolor sukna biały": "White felt color",
    "Kolor sukna czarny": "Black felt color",

    "Klawiatura Alaudis SAP Renovation": "Alaudis SAP Renovation keyboard",
    "Klawiatura Kluge": "Kluge keyboard",
    "Mechanizm Alaudis SAP Renovation": "Alaudis SAP Renovation action",
    "Mechanizm Renner": "Renner action",
    "Mechanizm Abbel": "Abbel action",
    "Młotki Alaudis": "Alaudis hammers",
    "Młotki Renner": "Renner hammers",
    "Młotki Abbel": "Abbel hammers",
    "Tłumiki Alaudis": "Alaudis dampers",
    "Tłumiki Renner": "Renner dampers",
    "Tłumiki Abbel": "Abbel dampers",
  };

  const mapDE: Record<string, string> = {
    "Bialy poliester połysk": "Weißer Polyester Hochglanz",
    "Czarny Poliester połysk": "Schwarzer Polyester Hochglanz",
    "Ferrari poliester połysk": "Ferrari-Polyester Hochglanz",
    "Heban polerowany": "Polierter Ebenholz",
    "Okleina Jabłoń Indyjska -połysk": "Indischer Apfelbaumfurnier Hochglanz",

    "Dno rezonansowe Strunz": "Strunz Resonanzboden",
    "Dno rezonansowe Chiresse": "Chiresse Resonanzboden",
    "Lakierowanie dna rezonansowego mat": "Resonanzboden Lack matt",
    "Lakierowanie dna rezonansowego połysk": "Resonanzboden Lack hochglanz",
    "Mostki rezonansowe klon": "Ahornstege",
    "Mostki rezonansowe buk": "Buchenstege",
    "Kolor ramy złoty": "Rahmenfarbe Gold",
    "Kolor ramy srebrny": "Rahmenfarbe Silber",
    "Struny stalowe Roslau": "Roslau Stahlsaiten",
    "Struny stalowe Paulelo": "Paulelo Stahlsaiten",
    "Struny basowe Heller": "Heller Basssaiten",
    "Struny basowe SAP Renovation": "SAP Renovation Basssaiten",
    "Kołki stroikowe niklowane": "Vernickelte Stimmwirbel",
    "Kołki stroikowe Blau": "Blau Stimmwirbel",
    "Kolor sukna czerwony": "Filzfarbe Rot",
    "Kolor sukna biały": "Filzfarbe Weiß",
    "Kolor sukna czarny": "Filzfarbe Schwarz",

    "Klawiatura Alaudis SAP Renovation": "Alaudis SAP Renovation Klaviatur",
    "Klawiatura Kluge": "Kluge Klaviatur",
    "Mechanizm Alaudis SAP Renovation": "Alaudis SAP Renovation Mechanik",
    "Mechanizm Renner": "Renner Mechanik",
    "Mechanizm Abbel": "Abbel Mechanik",
    "Młotki Alaudis": "Alaudis Hämmer",
    "Młotki Renner": "Renner Hämmer",
    "Młotki Abbel": "Abbel Hämmer",
    "Tłumiki Alaudis": "Alaudis Dämpfer",
    "Tłumiki Renner": "Renner Dämpfer",
    "Tłumiki Abbel": "Abbel Dämpfer",
  };

  const mapFR: Record<string, string> = {
    "Bialy poliester połysk": "Polyester blanc brillant",
    "Czarny Poliester połysk": "Polyester noir brillant",
    "Ferrari poliester połysk": "Polyester Ferrari brillant",
    "Heban polerowany": "Ébène poli",
    "Okleina Jabłoń Indyjska -połysk": "Placage pommier indien brillant",

    "Dno rezonansowe Strunz": "Table d’harmonie Strunz",
    "Dno rezonansowe Chiresse": "Table d’harmonie Chiresse",
    "Lakierowanie dna rezonansowego mat": "Vernis table d’harmonie mat",
    "Lakierowanie dna rezonansowego połysk": "Vernis table d’harmonie brillant",
    "Mostki rezonansowe klon": "Chevalets en érable",
    "Mostki rezonansowe buk": "Chevalets en hêtre",
    "Kolor ramy złoty": "Couleur du cadre or",
    "Kolor ramy srebrny": "Couleur du cadre argent",
    "Struny stalowe Roslau": "Cordes acier Roslau",
    "Struny stalowe Paulelo": "Cordes acier Paulelo",
    "Struny basowe Heller": "Cordes basses Heller",
    "Struny basowe SAP Renovation": "Cordes basses SAP Renovation",
    "Kołki stroikowe niklowane": "Chevilles nickelées",
    "Kołki stroikowe Blau": "Chevilles Blau",
    "Kolor sukna czerwony": "Couleur du feutre rouge",
    "Kolor sukna biały": "Couleur du feutre blanc",
    "Kolor sukna czarny": "Couleur du feutre noir",

    "Klawiatura Alaudis SAP Renovation": "Clavier Alaudis SAP Renovation",
    "Klawiatura Kluge": "Clavier Kluge",
    "Mechanizm Alaudis SAP Renovation": "Mécanique Alaudis SAP Renovation",
    "Mechanizm Renner": "Mécanique Renner",
    "Mechanizm Abbel": "Mécanique Abbel",
    "Młotki Alaudis": "Marteaux Alaudis",
    "Młotki Renner": "Marteaux Renner",
    "Młotki Abbel": "Marteaux Abbel",
    "Tłumiki Alaudis": "Étouffoirs Alaudis",
    "Tłumiki Renner": "Étouffoirs Renner",
    "Tłumiki Abbel": "Étouffoirs Abbel",
  };

  if (language === "EN") return mapEN[value] || value;
  if (language === "DE") return mapDE[value] || value;
  if (language === "FR") return mapFR[value] || value;

  return value;
}

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
  const pathname = usePathname() || "/";
  const language = getLanguageFromPathname(pathname);
  const labels = useMemo(() => getLabels(language), [language]);

  return (
    <div className="absolute right-0 top-0 flex h-full w-full max-w-[520px] flex-col border-l border-white/10 bg-white/5 backdrop-blur-2xl">
      {/* ====================================================
          GÓRA PANELU - TYTUŁ OFERTY
         ==================================================== */}
      <div className="p-6 pt-24">
        <input
          value={offerTitle}
          onChange={(e) => setOfferTitle(e.target.value)}
          placeholder={labels.offerTitlePlaceholder}
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        />
      </div>

      {/* ====================================================
          ZAKŁADKI
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
            {labels.tabs[tab]}
          </button>
        ))}

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
            <h3 className="mb-6 uppercase tracking-wider opacity-80">
              {labels.sections[section]}
            </h3>

            {options[section].map((item) => {
              const isActive =
                section === "obudowa"
                  ? selected.obudowa === item
                  : selected[section][groupMap[item]] === item;

              return (
                <button
                  key={item}
                  onClick={() => onSelect(section, item)}
                  className={`mb-3 w-full rounded-xl p-4 text-left transition ${
                    isActive
                      ? "border border-white/30 bg-white/10 backdrop-blur-md"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {translateOption(item, language)}
                </button>
              );
            })}
          </div>
        ))}
      </div>

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
