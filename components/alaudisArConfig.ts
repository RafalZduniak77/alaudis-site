// ==========================================================
// ALAUDIS AR CONFIG
// ==========================================================
// Ten plik zbiera w jednym miejscu całą konfigurację modułu
// podglądu 3D / AR na stronie Alaudis.
//
// Co tutaj ustawiasz:
// 1. listę modeli do wyboru
// 2. domyślne zdjęcie tła
// 3. ustawienia model-viewer (kamera, zoom, pozycja modelu)
// 4. teksty kart informacyjnych pod sekcją
//
// Najważniejsze pole do ustawiania wysokości fortepianu:
// cameraTargetY
// większa wartość = model niżej
// mniejsza wartość = model wyżej
// ==========================================================

export type ModelOption = {
  id: string;     // wewnętrzny identyfikator modelu
  label: string;  // nazwa widoczna na stronie
  file: string;   // ścieżka do pliku .glb
};

// ----------------------------------------------------------
// MODELE DOSTĘPNE W WYBORZE
// ----------------------------------------------------------
export const MODEL_OPTIONS: ModelOption[] = [
  {
    id: "heban-klasyczny",
    label: "Heban klasyczny",
    file: "/models/alaudis-demo.glb",
  },
  {
    id: "czerwony-test",
    label: "Czerwony test",
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
    title: "Podgląd 3D",
    text: "Możesz obracać model, przybliżać go i oglądać proporcje fortepianu z każdej strony.",
    featured: false,
  },
  {
    eyebrow: "Wykończenie",
    title: "Lista modeli",
    text: "Model możesz zmieniać zarówno w lewym górnym rogu, jak i w prawym dolnym rogu podglądu.",
    featured: false,
  },
  {
    eyebrow: "Następny etap",
    title: "Finalne wykończenia",
    text: "Kolejny krok to heban mat, orzech i palisander jako osobne, dopracowane wersje pokazowe.",
    featured: false,
  },
];
