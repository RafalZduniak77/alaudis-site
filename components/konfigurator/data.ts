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
// 5. obsługuje zdjęcia dla modeli:
//    - Alaudis 178
//    - Alaudis 214
//    - Alaudis 275
//
// Co tutaj najłatwiej zmieniasz:
// - nazwy opcji
// - ilość opcji w sekcjach
// - przypisanie opcji do grup
// - zdjęcia do podglądu
// - zdjęcie domyślne
//
// Ważne:
// - model 178 korzysta z obecnych zdjęć
// - model 214 korzysta z kopii zdjęć z dopiskiem -214
// - model 275 korzysta z kopii zdjęć z dopiskiem -275
//
// Przykład:
// /konfigurator?model=178 -> Bialy poliester połysk.png
// /konfigurator?model=214 -> Bialy poliester połysk-214.png
// /konfigurator?model=275 -> Bialy poliester połysk-275.png
// ==========================================================

import { OptionsMap } from "./types";

// ----------------------------------------------------------
// MODELE KONFIGURATORA
// ----------------------------------------------------------
export type ConfiguratorModel = "178" | "214" | "275";

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
// BAZOWA MAPA ZDJĘĆ PODGLĄDU DLA MODELU 178
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
    "/konfigurator/lakierowanie dna rezonansowego mat.jpg",

  "Lakierowanie dna rezonansowego połysk":
    "/konfigurator/lakierowanie dna rezonansowego połysk.jpg",

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

  "Kołki stroikowe Blau":
    "/konfigurator/kołki stroikowe blau.jpg",

  "Kolor sukna czerwony":
    "/konfigurator/kolor sukna czerwony.jpg",

  "Kolor sukna biały":
    "/konfigurator/kolor sukna biały.jpg",

  "Kolor sukna czarny":
    "/konfigurator/kolor sukna czarny.jpg",

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

// ----------------------------------------------------------
// DODAWANIE SUFIKSU MODELU DO ZDJĘCIA
// ----------------------------------------------------------
// Przykład:
// /konfigurator/Bialy poliester połysk.png
// -> /konfigurator/Bialy poliester połysk-214.png
//
// /konfigurator/mostki-klon.JPG
// -> /konfigurator/mostki-klon-275.JPG
// ----------------------------------------------------------
function addModelSuffixToImagePath(
  imagePath: string,
  model: ConfiguratorModel
) {
  if (model === "178") {
    return imagePath;
  }

  const lastDotIndex = imagePath.lastIndexOf(".");

  if (lastDotIndex === -1) {
    return imagePath;
  }

  const pathWithoutExtension = imagePath.slice(0, lastDotIndex);
  const extension = imagePath.slice(lastDotIndex);

  return `${pathWithoutExtension}-${model}${extension}`;
}

// ----------------------------------------------------------
// POBIERANIE ZDJĘCIA DLA MODELU
// ----------------------------------------------------------
// Ta funkcja jest używana w KonfiguratorShell.tsx.
// Dzięki niej jeden konfigurator obsługuje 178 / 214 / 275.
// ----------------------------------------------------------
export function getPreviewImageForModel(
  optionName: string,
  model: ConfiguratorModel
) {
  const baseImage = previewImageMap[optionName];

  if (!baseImage) {
    return defaultPreviewImage;
  }

  return addModelSuffixToImagePath(baseImage, model);
}

// ----------------------------------------------------------
// SPRAWDZANIE MODELU Z ADRESU
// ----------------------------------------------------------
// Jeśli ktoś poda błędny model, wracamy do 178.
// ----------------------------------------------------------
export function normalizeConfiguratorModel(
  model: string | null
): ConfiguratorModel {
  if (model === "214") {
    return "214";
  }

  if (model === "275") {
    return "275";
  }

  return "178";
}
