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
//
// UWAGA:
// Podmieniłem ścieżki plików na dokładne nazwy, które podałeś:
// - Bialy poliester połysk.png
// - Czarny Poliester połysk.png
// - Ferrari poliester połysk.png
// - Heban polerowany.png
// - Okleina Jabłoń Indyjska -połysk.png
// ==========================================================

import { OptionsMap } from "./types";

// ----------------------------------------------------------
// LISTA OPCJI KONFIGURATORA
// ----------------------------------------------------------
// options dzieli wszystkie wybory na 3 sekcje:
// - obudowa
// - akustyka
// - mechanizm
export const options: OptionsMap = {
  obudowa: [
    "Biały poliester połysk",
    "Czarny Poliester połysk",
    "Efekt zachodu połysk",
    "Okleina Jabłoń Indyjska połysk",
    "Okleina Macassar połysk",
    "Okleina Machoń płomienny połysk",
    "Okleina Palisander Santos połysk",
    "Okleina Orzech Włoski połysk",
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
// groupMap mówi konfiguratorowi, które opcje należą do tej samej grupy.
//
// Przykład:
// - "Dno rezonansowe Strunz" i "Dno rezonansowe Chiresse"
//   należą do grupy "dno"
//   czyli użytkownik powinien wybrać tylko jedną z nich
//
// Dzięki temu w akustyce i mechanizmie możesz mieć
// po jednej aktywnej opcji z każdej grupy.
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
// previewImageMap przypisuje obraz do wybranej opcji.
// Gdy użytkownik kliknie daną opcję, konfigurator może
// wyświetlić odpowiednie zdjęcie po lewej stronie / w preview.
export const previewImageMap: Record<string, string> = {
  // --------------------------------------------------------
  // OBUDOWA
  // --------------------------------------------------------
  "Biały poliester połysk": "/konfigurator/Bialy poliester połysk.png",
  "Czarny Poliester połysk": "/konfigurator/Czarny Poliester połysk.png",
  "Efekt zachodu połysk": "/konfigurator/Ferrari poliester połysk.png",
  "Okleina Jabłoń Indyjska połysk": "/konfigurator/Okleina Jabłoń Indyjska -połysk.png",
  "Okleina Macassar połysk": "/konfigurator/Heban polerowany.png",
  "Okleina Machoń płomienny połysk": "/konfigurator/Okleina Machoń płomienny-połysk.jpg",
  "Okleina Palisander Santos połysk": "/konfigurator/Okleina Palisander Santos -połysk.jpg",
  "Okleina Orzech Włoski połysk": "/konfigurator/Okleina Orzech Włoski- połysk.jpg",

  // --------------------------------------------------------
  // AKUSTYKA
  // --------------------------------------------------------
  "Mostki rezonansowe klon": "/konfigurator/mostki-klon.JPG",
  "Mostki rezonansowe buk": "/konfigurator/mostki-buk.JPG",
  "Dno rezonansowe Strunz": "/konfigurator/dno-strunz.jpg",
  "Dno rezonansowe Chiresse": "/konfigurator/dno-chiresse.jpg",
  "Lakierowanie dna rezonansowego mat": "/konfigurator/dno mat-strunz.jpg",
  "Lakierowanie dna rezonansowego połysk": "/konfigurator/dno połysk-chiresse.jpg",

  // --------------------------------------------------------
  // MECHANIZM
  // --------------------------------------------------------
  "Młotki Alaudis": "/konfigurator/mlotki-alaudis.jpg",
  "Młotki Renner": "/konfigurator/mlotki-renner.jpg",
  "Młotki Abbel": "/konfigurator/mlotki-abbel.jpg",

  "Mechanizm Alaudis SAP Renovation": "/konfigurator/mechanizm-alaudis.jpg",
  "Mechanizm Renner": "/konfigurator/mechanizm-renner.jpg",
  "Mechanizm Abbel": "/konfigurator/mechanizm-abbel.jpg",
};

// ----------------------------------------------------------
// DOMYŚLNE ZDJĘCIE PODGLĄDU
// ----------------------------------------------------------
// To zdjęcie pokazuje się na starcie, zanim użytkownik
// wybierze konkretną opcję z konfiguratora.
export const defaultPreviewImage = "/hero.jpg";
