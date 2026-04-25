// ==========================================================
// CONFIGURATOR DATA
// ==========================================================
// To jest plik z danymi dla konfiguratora.
//
// Za co odpowiada ten plik:
// 1. przechowuje wszystkie opcje wyboru
// 2. grupuje opcje w logiczne kategorie
// 3. przypisuje zdjęcia podglądu do wybranej opcji
// 4. ustawia domyślny obraz podglądu
//
// Co tutaj najłatwiej zmieniasz:
// - nazwy opcji
// - ilość opcji w sekcjach
// - przypisanie opcji do grup
// - zdjęcia do podglądu
// - zdjęcie domyślne
//
// Najważniejsze obiekty:
// - options
// - groupMap
// - previewImageMap
// - defaultPreviewImage
// ==========================================================

import { OptionsMap } from "./types";

// ----------------------------------------------------------
// LISTA OPCJI KONFIGURATORA
// ----------------------------------------------------------
export const options: OptionsMap = {
  obudowa: [
    "Bialy poliester połysk",
    "Czarny Poliester połysk",
    "Ferrari poliester połysk",
    "Heban polerowany",
    "Okleina Jabłoń Indyjska -połysk",
  ],

  akustyka: [
    "Dno rezonansowe Strunz",
    "Dno rezonansowe Chiresse",
    "Lakierowanie dna rezonansowego mat",
    "Lakierowanie dna rezonansowego połysk",
    "Mostki rezonansowe klon",
    "Mostki rezonansowe buk",
    "Kolor ramy złoty",
    "Kolor ramy srebrny",
    "Struny stalowe Roslau",
    "Struny stalowe Paulelo",
    "Struny basowe Heller",
    "Struny basowe SAP Renovation",
    "Kołki stroikowe niklowane",
    "Kołki stroikowe Blau",
    "Kolor sukna czerwony",
    "Kolor sukna biały",
    "Kolor sukna czarny",
  ],

  mechanizm: [
    "Klawiatura Alaudis SAP Renovation",
    "Klawiatura Kluge",
    "Mechanizm Alaudis SAP Renovation",
    "Mechanizm Renner",
    "Mechanizm Abbel",
    "Młotki Alaudis",
    "Młotki Renner",
    "Młotki Abbel",
    "Tłumiki Alaudis",
    "Tłumiki Renner",
    "Tłumiki Abbel",
  ],
};

// ----------------------------------------------------------
// MAPOWANIE OPCJI DO GRUP
// ----------------------------------------------------------
export const groupMap: Record<string, string> = {
  "Dno rezonansowe Strunz": "dno",
  "Dno rezonansowe Chiresse": "dno",

  "Lakierowanie dna rezonansowego mat": "lakierDno",
  "Lakierowanie dna rezonansowego połysk": "lakierDno",

  "Mostki rezonansowe klon": "mostki",
  "Mostki rezonansowe buk": "mostki",

  "Kolor ramy złoty": "kolorRamy",
  "Kolor ramy srebrny": "kolorRamy",

  "Struny stalowe Roslau": "struny",
  "Struny stalowe Paulelo": "struny",

  "Struny basowe Heller": "basowe",
  "Struny basowe SAP Renovation": "basowe",

  "Kołki stroikowe niklowane": "kolki",
  "Kołki stroikowe Blau": "kolki",

  "Kolor sukna czerwony": "sukno",
  "Kolor sukna biały": "sukno",
  "Kolor sukna czarny": "sukno",

  "Klawiatura Alaudis SAP Renovation": "klawiatura",
  "Klawiatura Kluge": "klawiatura",

  "Mechanizm Alaudis SAP Renovation": "mechanizm",
  "Mechanizm Renner": "mechanizm",
  "Mechanizm Abbel": "mechanizm",

  "Młotki Alaudis": "mlotki",
  "Młotki Renner": "mlotki",
  "Młotki Abbel": "mlotki",

  "Tłumiki Alaudis": "tlumiki",
  "Tłumiki Renner": "tlumiki",
  "Tłumiki Abbel": "tlumiki",
};

// ----------------------------------------------------------
// MAPA ZDJĘĆ PODGLĄDU
// ----------------------------------------------------------
export const previewImageMap: Record<string, string> = {
  // --------------------------------------------------------
  // OBUDOWA
  // --------------------------------------------------------
  "Bialy poliester połysk": "/konfigurator/Bialy poliester połysk.png",
  "Czarny Poliester połysk": "/konfigurator/Czarny Poliester połysk-v2.png",
  "Ferrari poliester połysk": "/konfigurator/Ferrari poliester połysk.png",
  "Heban polerowany": "/konfigurator/Heban polerowany.png",
  "Okleina Jabłoń Indyjska -połysk":
    "/konfigurator/Okleina Jabłoń Indyjska -połysk.png",

  // --------------------------------------------------------
  // AKUSTYKA
  // --------------------------------------------------------
  "Mostki rezonansowe klon": "/konfigurator/mostki-klon.JPG",
  "Mostki rezonansowe buk": "/konfigurator/mostki-buk.JPG",

  "Dno rezonansowe Strunz": "/konfigurator/dno-strunz.jpg",
  "Dno rezonansowe Chiresse": "/konfigurator/dno-chiresse.jpg",

  "Lakierowanie dna rezonansowego mat":
    "/konfigurator/dno mat-strunz.jpg",
  "Lakierowanie dna rezonansowego połysk":
    "/konfigurator/dno połysk-chiresse.jpg",

  "Kolor ramy złoty": "/konfigurator/kolor ramy złoty.JPG",
  "Kolor ramy srebrny": "/konfigurator/kolor ramy srebny.png",

  "Struny stalowe Roslau":
    "/konfigurator/struny stalowe resalu.jpg",

  "Struny basowe Heller":
    "/konfigurator/struny basowe heller.jpg",

  "Struny basowe SAP Renovation":
    "/konfigurator/srtuny basowe sap.jpg",

  "Kołki stroikowe niklowane":
    "/konfigurator/kołki stroikowe niklowane.jpg",

  "Kolor sukna czerwony":
    "/konfigurator/kolor sukna czerwony.jpg",

  // --------------------------------------------------------
  // MECHANIZM
  // --------------------------------------------------------
  "Klawiatura Alaudis SAP Renovation":
    "/konfigurator/klawiatura Alaudis SAP.jpg",

  "Klawiatura Kluge":
    "/konfigurator/klawiatura Kluge.JPG",

  "Młotki Alaudis":
    "/konfigurator/mlotki-alaudis.jpg",

  "Młotki Renner":
    "/konfigurator/młotki Renner.JPG",

  "Młotki Abbel":
    "/konfigurator/młotki Abbel.JPG",

  "Mechanizm Alaudis SAP Renovation":
    "/konfigurator/mechanizm Alaudis SAP Renovation.jpg",

  "Mechanizm Renner":
    "/konfigurator/mechanizm Renner.jpg",

  "Mechanizm Abbel":
    "/konfigurator/mechanizm-abbel.jpg",

  "Tłumiki Alaudis":
    "/konfigurator/tłumiki alaudis.jpg",

  "Tłumiki Renner":
    "/konfigurator/tłumiki renner.jpg",
};

// ----------------------------------------------------------
// DOMYŚLNE ZDJĘCIE PODGLĄDU
// ----------------------------------------------------------
export const defaultPreviewImage = "/hero.png";
