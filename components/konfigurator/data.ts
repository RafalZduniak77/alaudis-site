import { OptionsMap } from "./types";

// 🔥 KLUCZE (TECHNICZNE)
export const options: OptionsMap = {
  obudowa: [
    "heban-polerowany",
    "palisander",
    "orzech-amerykanski",
    "orzech-wloski",
    "orzech-kaukaski",
    "orzech-czeczot",
    "bubinga",
    "mahon-pasiak",
    "mahon-piramidalny",
    "bialy-poliester",
    "czarny-poliester",
  ],
  akustyka: [
    "dno-strunz",
    "dno-chiresse",
    "lakier-mat",
    "lakier-polysk",
    "mostki-klon",
    "mostki-buk",
    "kolor-ramy-zloty",
    "kolor-ramy-srebrny",
    "struny-roslau",
    "struny-paulelo",
    "basowe-heller",
    "basowe-sap",
    "kolki-niklowane",
    "kolki-blau",
    "sukno-czerwone",
    "sukno-biale",
    "sukno-czarne",
  ],
  mechanizm: [
    "klawiatura-alaudis",
    "klawiatura-kluge",
    "mechanizm-alaudis",
    "mechanizm-renner",
    "mechanizm-abbel",
    "mlotki-alaudis",
    "mlotki-renner",
    "mlotki-abbel",
    "tlumiki-alaudis",
    "tlumiki-renner",
    "tlumiki-abbel",
  ],
};

// 🔥 NAZWY DO WYŚWIETLANIA (UI)
export const labelMap: Record<string, string> = {
  "heban-polerowany": "Heban polerowany",
  "palisander": "Palisander",
  "orzech-amerykanski": "Orzech amerykański",
  "orzech-wloski": "Orzech włoski",
  "orzech-kaukaski": "Orzech kaukaski",
  "orzech-czeczot": "Orzech czeczot",
  "bubinga": "Bubinga",
  "mahon-pasiak": "Mahoń pasiak",
  "mahon-piramidalny": "Mahoń piramidalny",
  "bialy-poliester": "Biały poliester",
  "czarny-poliester": "Czarny poliester",

  "dno-strunz": "Dno rezonansowe Strunz",
  "dno-chiresse": "Dno rezonansowe Chiresse",
  "lakier-mat": "Lakierowanie dna rezonansowego mat",
  "lakier-polysk": "Lakierowanie dna rezonansowego połysk",
  "mostki-klon": "Mostki rezonansowe klon",
  "mostki-buk": "Mostki rezonansowe buk",

  "klawiatura-alaudis": "Klawiatura Alaudis SAP Renovation",
  "klawiatura-kluge": "Klawiatura Kluge",
  "mechanizm-alaudis": "Mechanizm Alaudis SAP Renovation",
  "mechanizm-renner": "Mechanizm Renner",
  "mechanizm-abbel": "Mechanizm Abbel",
  "mlotki-alaudis": "Młotki Alaudis",
  "mlotki-renner": "Młotki Renner",
  "mlotki-abbel": "Młotki Abbel",
};

// 🔥 GRUPY
export const groupMap: Record<string, string> = {
  "dno-strunz": "dno",
  "dno-chiresse": "dno",
  "lakier-mat": "lakierDno",
  "lakier-polysk": "lakierDno",
  "mostki-klon": "mostki",
  "mostki-buk": "mostki",

  "struny-roslau": "struny",
  "struny-paulelo": "struny",
  "basowe-heller": "basowe",
  "basowe-sap": "basowe",
  "kolki-niklowane": "kolki",
  "kolki-blau": "kolki",
  "sukno-czerwone": "sukno",
  "sukno-biale": "sukno",
  "sukno-czarne": "sukno",

  "klawiatura-alaudis": "klawiatura",
  "klawiatura-kluge": "klawiatura",
  "mechanizm-alaudis": "mechanizm",
  "mechanizm-renner": "mechanizm",
  "mechanizm-abbel": "mechanizm",
  "mlotki-alaudis": "mlotki",
  "mlotki-renner": "mlotki",
  "mlotki-abbel": "mlotki",
  "tlumiki-alaudis": "tlumiki",
  "tlumiki-renner": "tlumiki",
  "tlumiki-abbel": "tlumiki",
};

// 🔥 OBRAZY (100% zgodne z plikami)
export const previewImageMap: Record<string, string> = {
  // OBUDOWA
  "heban-polerowany": "/konfigurator/heban-polerowany.jpg",
  "palisander": "/konfigurator/palisander.jpg",
  "orzech-amerykanski": "/konfigurator/orzech-amerykanski.jpg",
  "orzech-wloski": "/konfigurator/orzech-wloski.jpg",
  "orzech-kaukaski": "/konfigurator/orzech-kaukaski.jpg",
  "orzech-czeczot": "/konfigurator/orzech-czeczot.jpg",
  "bubinga": "/konfigurator/bubinga.jpg",
  "mahon-pasiak": "/konfigurator/mahon-pasiak.jpg",
  "mahon-piramidalny": "/konfigurator/mahon-piramidalny.jpg",
  "bialy-poliester": "/konfigurator/bialy-poliester.jpg",
  "czarny-poliester": "/konfigurator/czarny-poliester.jpg",

  // AKUSTYKA
  "mostki-klon": "/konfigurator/mostki-klon.jpg",
  "mostki-buk": "/konfigurator/mostki-buk.jpg",
  "dno-strunz": "/konfigurator/dno-strunz.jpg",
  "dno-chiresse": "/konfigurator/dno-chiresse.jpg",
  "lakier-mat": "/konfigurator/lakier-mat.jpg",
  "lakier-polysk": "/konfigurator/lakier-polysk.jpg",

  // MECHANIZM
  "mlotki-alaudis": "/konfigurator/mlotki-alaudis.jpg",
  "mlotki-renner": "/konfigurator/mlotki-renner.jpg",
  "mlotki-abbel": "/konfigurator/mlotki-abbel.jpg",
  "mechanizm-alaudis": "/konfigurator/mechanizm-alaudis.jpg",
  "mechanizm-renner": "/konfigurator/mechanizm-renner.jpg",
  "mechanizm-abbel": "/konfigurator/mechanizm-abbel.jpg",
};

export const defaultPreviewImage = "/hero.jpg";
