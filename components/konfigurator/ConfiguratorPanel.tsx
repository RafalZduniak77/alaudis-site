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
import Link from "next/link";
import ActionMenu from "./ActionMenu";
import { ALAUDIS_MODEL_IDS, getAlaudisModelName, type AlaudisModelId } from "@/components/alaudisModels";
import { polishOptionLabel } from "./data";

// ----------------------------------------------------------
// TYPY PROPSÓW
// ----------------------------------------------------------
type ConfiguratorPanelProps = {
  model: AlaudisModelId;
  modelName: string;
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

type LanguageKey = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";

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

  if (pathname === "/es/konfigurator" || pathname.startsWith("/es/konfigurator")) {
    return "ES";
  }

  if (pathname === "/it/konfigurator" || pathname.startsWith("/it/konfigurator")) {
    return "IT";
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

  if (language === "ES") {
    return {
      offerTitlePlaceholder: "Título de la oferta...",
      tabs: {
        obudowa: "MUEBLE",
        akustyka: "ACÚSTICA",
        mechanizm: "MECANISMO",
      },
      sections: {
        obudowa: "Mueble",
        akustyka: "Acústica",
        mechanizm: "Mecanismo",
      },
    };
  }

  if (language === "IT") {
    return {
      offerTitlePlaceholder: "Titolo dell’offerta...",
      tabs: {
        obudowa: "MOBILE",
        akustyka: "ACUSTICA",
        mechanizm: "MECCANICA",
      },
      sections: {
        obudowa: "Mobile",
        akustyka: "Acustica",
        mechanizm: "Meccanica",
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

const MODEL_LABEL: Record<LanguageKey, string> = {
  PL: "Wybór modelu",
  EN: "Choose the model",
  DE: "Modell wählen",
  FR: "Choisir le modèle",
  ES: "Elegir el modelo",
  IT: "Scegli il modello",
};

function translateOption(value: string, language: LanguageKey) {
  if (language === "PL") return polishOptionLabel(value);

  const mapEN: Record<string, string> = {
    "Bialy poliester połysk": "White polyester gloss",
    "Czarny Poliester połysk": "Black polyester gloss",
    "Ferrari poliester połysk": "Red polyester gloss (Ferrari red)",
    "Heban polerowany": "Polished ebony",
    "Okleina Jabłoń Indyjska -połysk": "Indian apple veneer gloss",

    "Dno rezonansowe Strunz": "Strunz soundboard",
    "Dno rezonansowe Ciresa": "Ciresa soundboard",
    "Lakierowanie dna rezonansowego mat": "Soundboard lacquer matte",
    "Lakierowanie dna rezonansowego połysk": "Soundboard lacquer gloss",
    "Mostki rezonansowe klon": "Maple bridges",
    "Mostki rezonansowe buk": "Beech bridges",
    "Kolor ramy złoty": "Gold plate color",
    "Kolor ramy srebrny": "Silver plate color",
    "Struny stalowe Röslau": "Röslau steel strings",
    "Struny stalowe Paulello": "Paulello steel strings",
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
    "Mechanizm Louis Renner": "Louis Renner action",
    "Mechanizm Abel": "Abel action",
    "Młotki Alaudis": "Alaudis hammers",
    "Młotki Louis Renner": "Louis Renner hammers",
    "Młotki Abel": "Abel hammers",
    "Tłumiki Alaudis": "Alaudis dampers",
    "Tłumiki Louis Renner": "Louis Renner dampers",
    "Tłumiki Abel": "Abel dampers",
  };

  const mapDE: Record<string, string> = {
    "Bialy poliester połysk": "Weißer Polyester Hochglanz",
    "Czarny Poliester połysk": "Schwarzer Polyester Hochglanz",
    "Ferrari poliester połysk": "Roter Polyester Hochglanz (Ferrari-Rot)",
    "Heban polerowany": "Polierter Ebenholz",
    "Okleina Jabłoń Indyjska -połysk": "Indischer Apfelbaumfurnier Hochglanz",

    "Dno rezonansowe Strunz": "Strunz Resonanzboden",
    "Dno rezonansowe Ciresa": "Ciresa Resonanzboden",
    "Lakierowanie dna rezonansowego mat": "Resonanzboden Lack matt",
    "Lakierowanie dna rezonansowego połysk": "Resonanzboden Lack hochglanz",
    "Mostki rezonansowe klon": "Ahornstege",
    "Mostki rezonansowe buk": "Buchenstege",
    "Kolor ramy złoty": "Rahmenfarbe Gold",
    "Kolor ramy srebrny": "Rahmenfarbe Silber",
    "Struny stalowe Röslau": "Röslau Stahlsaiten",
    "Struny stalowe Paulello": "Paulello Stahlsaiten",
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
    "Mechanizm Louis Renner": "Louis Renner Mechanik",
    "Mechanizm Abel": "Abel Mechanik",
    "Młotki Alaudis": "Alaudis Hämmer",
    "Młotki Louis Renner": "Louis Renner Hämmer",
    "Młotki Abel": "Abel Hämmer",
    "Tłumiki Alaudis": "Alaudis Dämpfer",
    "Tłumiki Louis Renner": "Louis Renner Dämpfer",
    "Tłumiki Abel": "Abel Dämpfer",
  };

  const mapFR: Record<string, string> = {
    "Bialy poliester połysk": "Polyester blanc brillant",
    "Czarny Poliester połysk": "Polyester noir brillant",
    "Ferrari poliester połysk": "Polyester rouge brillant (rouge Ferrari)",
    "Heban polerowany": "Ébène poli",
    "Okleina Jabłoń Indyjska -połysk": "Placage pommier indien brillant",

    "Dno rezonansowe Strunz": "Table d’harmonie Strunz",
    "Dno rezonansowe Ciresa": "Table d’harmonie Ciresa",
    "Lakierowanie dna rezonansowego mat": "Vernis table d’harmonie mat",
    "Lakierowanie dna rezonansowego połysk": "Vernis table d’harmonie brillant",
    "Mostki rezonansowe klon": "Chevalets en érable",
    "Mostki rezonansowe buk": "Chevalets en hêtre",
    "Kolor ramy złoty": "Couleur du cadre or",
    "Kolor ramy srebrny": "Couleur du cadre argent",
    "Struny stalowe Röslau": "Cordes acier Röslau",
    "Struny stalowe Paulello": "Cordes acier Paulello",
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
    "Mechanizm Louis Renner": "Mécanique Louis Renner",
    "Mechanizm Abel": "Mécanique Abel",
    "Młotki Alaudis": "Marteaux Alaudis",
    "Młotki Louis Renner": "Marteaux Louis Renner",
    "Młotki Abel": "Marteaux Abel",
    "Tłumiki Alaudis": "Étouffoirs Alaudis",
    "Tłumiki Louis Renner": "Étouffoirs Louis Renner",
    "Tłumiki Abel": "Étouffoirs Abel",
  };

  const mapES: Record<string, string> = {
    "Bialy poliester połysk": "Poliéster blanco, alto brillo",
    "Czarny Poliester połysk": "Poliéster negro, alto brillo",
    "Ferrari poliester połysk": "Poliéster rojo, alto brillo (rojo Ferrari)",
    "Heban polerowany": "Ébano pulido",
    "Okleina Jabłoń Indyjska -połysk":
      "Chapa de manzano indio, alto brillo",

    "Dno rezonansowe Strunz": "Tabla armónica Strunz",
    "Dno rezonansowe Ciresa": "Tabla armónica Ciresa",
    "Lakierowanie dna rezonansowego mat": "Barnizado mate de la tabla armónica",
    "Lakierowanie dna rezonansowego połysk":
      "Barnizado brillante de la tabla armónica",
    "Mostki rezonansowe klon": "Puentes de arce",
    "Mostki rezonansowe buk": "Puentes de haya",
    "Kolor ramy złoty": "Color del bastidor: dorado",
    "Kolor ramy srebrny": "Color del bastidor: plateado",
    "Struny stalowe Röslau": "Cuerdas de acero Röslau",
    "Struny stalowe Paulello": "Cuerdas de acero Paulello",
    "Struny basowe Heller": "Cuerdas graves Heller",
    "Struny basowe SAP Renovation": "Cuerdas graves SAP Renovation",
    "Kołki stroikowe niklowane": "Clavijas de afinación niqueladas",
    "Kołki stroikowe Blau": "Clavijas de afinación Blau",
    "Kolor sukna czerwony": "Color del fieltro: rojo",
    "Kolor sukna biały": "Color del fieltro: blanco",
    "Kolor sukna czarny": "Color del fieltro: negro",

    "Klawiatura Alaudis SAP Renovation": "Teclado Alaudis SAP Renovation",
    "Klawiatura Kluge": "Teclado Kluge",
    "Mechanizm Alaudis SAP Renovation": "Mecanismo Alaudis SAP Renovation",
    "Mechanizm Louis Renner": "Mecanismo Louis Renner",
    "Mechanizm Abel": "Mecanismo Abel",
    "Młotki Alaudis": "Macillos Alaudis",
    "Młotki Louis Renner": "Macillos Louis Renner",
    "Młotki Abel": "Macillos Abel",
    "Tłumiki Alaudis": "Apagadores Alaudis",
    "Tłumiki Louis Renner": "Apagadores Louis Renner",
    "Tłumiki Abel": "Apagadores Abel",
  };

  const mapIT: Record<string, string> = {
    "Bialy poliester połysk": "Poliestere bianco, lucido a specchio",
    "Czarny Poliester połysk": "Poliestere nero, lucido a specchio",
    "Ferrari poliester połysk":
      "Poliestere rosso, lucido a specchio (rosso Ferrari)",
    "Heban polerowany": "Ebano lucidato",
    "Okleina Jabłoń Indyjska -połysk":
      "Impiallacciatura di melo indiano, lucida",

    "Dno rezonansowe Strunz": "Tavola armonica Strunz",
    "Dno rezonansowe Ciresa": "Tavola armonica Ciresa",
    "Lakierowanie dna rezonansowego mat":
      "Verniciatura opaca della tavola armonica",
    "Lakierowanie dna rezonansowego połysk":
      "Verniciatura lucida della tavola armonica",
    "Mostki rezonansowe klon": "Ponticelli in acero",
    "Mostki rezonansowe buk": "Ponticelli in faggio",
    "Kolor ramy złoty": "Colore del telaio: oro",
    "Kolor ramy srebrny": "Colore del telaio: argento",
    "Struny stalowe Röslau": "Corde in acciaio Röslau",
    "Struny stalowe Paulello": "Corde in acciaio Paulello",
    "Struny basowe Heller": "Corde dei bassi Heller",
    "Struny basowe SAP Renovation": "Corde dei bassi SAP Renovation",
    "Kołki stroikowe niklowane": "Caviglie nichelate",
    "Kołki stroikowe Blau": "Caviglie Blau",
    "Kolor sukna czerwony": "Colore del feltro: rosso",
    "Kolor sukna biały": "Colore del feltro: bianco",
    "Kolor sukna czarny": "Colore del feltro: nero",

    "Klawiatura Alaudis SAP Renovation": "Tastiera Alaudis SAP Renovation",
    "Klawiatura Kluge": "Tastiera Kluge",
    "Mechanizm Alaudis SAP Renovation": "Meccanica Alaudis SAP Renovation",
    "Mechanizm Louis Renner": "Meccanica Louis Renner",
    "Mechanizm Abel": "Meccanica Abel",
    "Młotki Alaudis": "Martelletti Alaudis",
    "Młotki Louis Renner": "Martelletti Louis Renner",
    "Młotki Abel": "Martelletti Abel",
    "Tłumiki Alaudis": "Smorzatori Alaudis",
    "Tłumiki Louis Renner": "Smorzatori Louis Renner",
    "Tłumiki Abel": "Smorzatori Abel",
  };

  if (language === "EN") return mapEN[value] || value;
  if (language === "DE") return mapDE[value] || value;
  if (language === "FR") return mapFR[value] || value;
  if (language === "ES") return mapES[value] || value;
  if (language === "IT") return mapIT[value] || value;

  return value;
}

export default function ConfiguratorPanel({
  model,
  modelName,
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
    <div className="configurator-options relative z-20 flex min-h-0 w-full flex-col bg-white/5 backdrop-blur-2xl lg:absolute lg:right-0 lg:top-0 lg:h-full lg:max-w-[520px] lg:border-l lg:border-white/10">
      {/* ====================================================
          GÓRA PANELU - TYTUŁ OFERTY
         ==================================================== */}
      <div className="shrink-0 px-4 pb-3 pt-3 sm:px-6 lg:pb-4 lg:pt-8">
        {/* Nazwa modelu dla wyszukiwarek i czytników ekranu; widoczny jest wybór modelu poniżej. */}
        <h1 className="sr-only">{modelName}</h1>
        {/* WYBÓR MODELU: ten sam konfigurator dla trzech fortepianów (adres ?model=…). */}
        <nav aria-label={MODEL_LABEL[language]} className="grid grid-cols-3 gap-1.5 lg:mb-0 lg:gap-2">
          {ALAUDIS_MODEL_IDS.map((id) => (
            <Link
              key={id}
              href={`${pathname}?model=${id}`}
              replace
              scroll={false}
              aria-current={id === model ? "page" : undefined}
              className={`rounded-full border px-2 py-2 text-center text-[10px] font-light uppercase tracking-[0.12em] transition lg:whitespace-nowrap lg:px-1 lg:py-2.5 lg:text-[10.5px] lg:tracking-[0.07em] ${
                id === model
                  ? "border-[#dec38c] bg-[#dec38c] text-black"
                  : "border-white/20 text-[#dec38c] hover:border-[#dec38c]"
              }`}
            >
              {getAlaudisModelName(id)}
            </Link>
          ))}
        </nav>
      </div>

      {/* ====================================================
          ZAKŁADKI
         ==================================================== */}
      <div
        ref={tabsContainerRef}
        className="relative flex shrink-0 border-b border-white/10"
      >
        {(["obudowa", "akustyka", "mechanizm"] as ConfigTab[]).map((tab) => (
          <button
            key={tab}
            ref={tabRefs[tab]}
            onClick={() => onScrollToSection(tab)}
            className={`min-h-11 min-w-0 flex-1 px-1 py-2.5 text-[11px] tracking-[0.08em] sm:text-xs lg:min-h-0 lg:py-3.5 lg:text-[13px] ${
              activeTab === tab ? "text-white" : "text-white"
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
        className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 lg:space-y-8 lg:py-5"
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
          >
            <h3 className="mb-2.5 text-[11px] uppercase tracking-[0.18em] text-white/78 lg:mb-3 lg:text-xs">
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
                  aria-pressed={isActive}
                  className={`mb-1.5 w-full rounded-lg border px-3 py-2.5 text-left text-[13px] leading-5 transition lg:mb-2 lg:px-3.5 lg:text-sm ${
                    isActive
                      ? "border-white/30 bg-white/10 backdrop-blur-md"
                      : "border-transparent bg-white/5 hover:bg-white/10"
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
        offerTitle={offerTitle}
        setOfferTitle={setOfferTitle}
        titlePlaceholder={labels.offerTitlePlaceholder}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onSave={onSave}
        onSend={onSend}
        onPdf={onPdf}
      />
    </div>
  );
}
