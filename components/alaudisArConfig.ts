// ==========================================================
// ALAUDIS AR CONFIG
// ==========================================================
// Ten plik zbiera w jednym miejscu całą konfigurację modułu
// podglądu 3D / AR na stronie Alaudis.
//
// Za co odpowiada ten plik:
// 1. definiuje listę modeli dostępnych do wyboru
// 2. ustawia etykiety widoczne w selectcie
// 3. przypisuje ścieżki do plików modeli
// 4. trzyma domyślne tło salonu
// 5. ustawia parametry widoku 3D / kamery
// 6. trzyma treść kart informacyjnych pod podglądem
//
// WAŻNE:
// W tej wersji ustawiamy DWA warianty do wyboru:
// - Czarny
// - Czerwony
//
// Na ten moment:
// - Czarny    -> /models/alaudis-demo.glb
// - Czerwony -> /models/czerwony-polysk.glb
// ==========================================================

export type ModelOption = {
  id: string;     // wewnętrzny identyfikator modelu
  label: string;  // nazwa widoczna na stronie
  file: string;   // ścieżka do pliku modelu
};

// ----------------------------------------------------------
// MODELE DOSTĘPNE W WYBORZE
// ----------------------------------------------------------
export const MODEL_OPTIONS: ModelOption[] = [
  {
    id: "czarny",
    label: "Czarny",
    file: "/models/alaudis-demo.glb",
  },
  {
    id: "czerwony",
    label: "Czerwony",
    file: "/models/czerwony-polysk.glb",
  },
];

// ----------------------------------------------------------
// DOMYŚLNE TŁO SALONU
// ----------------------------------------------------------
export const DEFAULT_ROOM_IMAGE = "/wnetrze-default.jpg";

// ----------------------------------------------------------
// USTAWIENIA WIDOKU 3D
// ----------------------------------------------------------
export const MODEL_VIEWER_SETTINGS = {
  // wysokość sekcji z modelem
  stageHeight: "78vh",
  stageMinHeight: 640,

  // jasność modelu
  exposure: "0.72",

  // ustawienie kamery na starcie
  cameraOrbit: "42deg 78deg 92%",
  minCameraOrbit: "auto auto 55%",
  maxCameraOrbit: "auto auto 230%",

  // kąt widzenia
  fieldOfView: "28deg",

  // NAJWAŻNIEJSZE:
  // większa wartość = model niżej
  // mniejsza wartość = model wyżej
  cameraTargetY: "4.20m",
};

// ----------------------------------------------------------
// KARTY INFORMACYJNE POD PODGLĄDEM
// ----------------------------------------------------------
export const INFO_CARDS = [
  {
    eyebrow: "Sygnatura Alaudis",
    title: "Cyfrowy podgląd premium",
    text: "Możesz przełączać wersje wykończeń i sprawdzać, jak fortepian wygląda we wnętrzu premium albo na własnym tle.",
    featured: true,
  },
  {
    eyebrow: "Tryb",
    title: "Podgląd 3D i 360",
    text: "Możesz obracać model, przybliżać go i oglądać fortepian z różnych perspektyw w zależności od wybranego wariantu.",
    featured: false,
  },
  {
    eyebrow: "Wykończenie",
    title: "Lista modeli",
    text: "Model możesz zmieniać w selektorze wariantów, przełączając czarny i czerwony.",
    featured: false,
  },
  {
    eyebrow: "Następny etap",
    title: "Finalne wykończenia",
    text: "Kolejny krok to następne dopracowane wersje pokazowe, w tym kolejne forniry i warianty premium.",
    featured: false,
  },
];
