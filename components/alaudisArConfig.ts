// ==========================================================
// ALAUDIS AR CONFIG
// ==========================================================
// To jest plik z konfiguracją modułu 3D / AR.
//
// Za co odpowiada ten plik:
// 1. przechowuje języki modułu AR
// 2. przechowuje modele Alaudis: 178 / 214 / 275
// 3. przechowuje warianty wykończenia: czarny / czerwony
// 4. przypisuje pliki GLB do danego modelu i wariantu
// 5. ustawia domyślne tło salonu
// 6. ustawia parametry widoku 3D
// 7. zwraca karty informacyjne w odpowiednim języku
//
// Ważne:
// - na razie 178 / 214 / 275 używają tych samych plików 3D
// - później tylko podmienimy ścieżki dla 214 i 275
//
// Przykład adresu:
// /odkryj-modele?model=178
// /odkryj-modele?model=214
// /odkryj-modele?model=275
// ==========================================================

import type { AlaudisModelId } from "./alaudisModels";

export type { AlaudisModelId } from "./alaudisModels";
export { getAlaudisModelName } from "./alaudisModels";

export type LanguageKey = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";

export type ModelOption = {
  id: string;
  label: string;
  file: string;
};

export type InfoCard = {
  eyebrow: string;
  title: string;
  text: string;
  featured: boolean;
};

// ----------------------------------------------------------
// MODELE BAZOWE 3D
// ----------------------------------------------------------
// Na razie wszystkie modele korzystają z tych samych plików.
// Kiedy powstaną właściwe pliki dla 214 i 275, podmienimy tylko tutaj.
//
// Przykład przyszłej podmiany:
// 275: {
//   czarny: "/models/alaudis-275-black.glb",
//   czerwony: "/models/alaudis-275-red.glb",
// }
// ----------------------------------------------------------
const MODEL_FILES_BY_ALAUDIS_MODEL: Record<
  AlaudisModelId,
  Record<string, string>
> = {
  "178": {
    czarny: "/models/alaudis-demo.glb",
    czerwony: "/models/czerwony-polysk.glb",
  },

  "214": {
    czarny: "/models/alaudis-demo.glb",
    czerwony: "/models/czerwony-polysk.glb",
  },

  "275": {
    czarny: "/models/alaudis-demo.glb",
    czerwony: "/models/czerwony-polysk.glb",
  },
};

// ----------------------------------------------------------
// DOMYŚLNE TŁO SALONU
// ----------------------------------------------------------
export const DEFAULT_ROOM_IMAGE = "/wnetrze-default.jpg";

// ----------------------------------------------------------
// USTAWIENIA WIDOKU 3D
// ----------------------------------------------------------
export const MODEL_VIEWER_SETTINGS = {
  // Fits the whole viewer on screen below the top bar and toolbar.
  stageHeight: "calc(100svh - 330px)",
  stageMinHeight: 420,
  exposure: "0.72",
  cameraOrbit: "42deg 78deg 92%",
  minCameraOrbit: "auto auto 55%",
  maxCameraOrbit: "auto auto 230%",
  fieldOfView: "28deg",
  cameraTargetY: "4.20m",
};

// ----------------------------------------------------------
// NORMALIZACJA MODELU Z ADRESU
// ----------------------------------------------------------
// Jeżeli w adresie jest błędny model albo go nie ma,
// domyślnie pokazujemy ALAUDIS ONE 178.
// ----------------------------------------------------------
export function normalizeAlaudisModel(
  model: string | null
): AlaudisModelId {
  if (model === "214") {
    return "214";
  }

  if (model === "275") {
    return "275";
  }

  return "178";
}

// ----------------------------------------------------------
// WARIANTY WYKOŃCZENIA DLA JĘZYKA I MODELU
// ----------------------------------------------------------
export function getModelOptions(
  language: LanguageKey,
  alaudisModel: AlaudisModelId
): ModelOption[] {
  const modelFiles = MODEL_FILES_BY_ALAUDIS_MODEL[alaudisModel];

  if (language === "EN") {
    return [
      { id: "czarny", label: "Black", file: modelFiles.czarny },
      { id: "czerwony", label: "Red", file: modelFiles.czerwony },
    ];
  }

  if (language === "DE") {
    return [
      { id: "czarny", label: "Schwarz", file: modelFiles.czarny },
      { id: "czerwony", label: "Rot", file: modelFiles.czerwony },
    ];
  }

  if (language === "FR") {
    return [
      { id: "czarny", label: "Noir", file: modelFiles.czarny },
      { id: "czerwony", label: "Rouge", file: modelFiles.czerwony },
    ];
  }

  if (language === "ES") {
    return [
      { id: "czarny", label: "Negro", file: modelFiles.czarny },
      { id: "czerwony", label: "Rojo", file: modelFiles.czerwony },
    ];
  }

  if (language === "IT") {
    return [
      { id: "czarny", label: "Nero", file: modelFiles.czarny },
      { id: "czerwony", label: "Rosso", file: modelFiles.czerwony },
    ];
  }

  return [
    { id: "czarny", label: "Czarny", file: modelFiles.czarny },
    { id: "czerwony", label: "Czerwony", file: modelFiles.czerwony },
  ];
}

// ----------------------------------------------------------
// KARTY INFORMACYJNE DLA JĘZYKA
// ----------------------------------------------------------
export function getInfoCards(
  language: LanguageKey,
  modelName: string
): InfoCard[] {
  if (language === "EN") {
    return [
      {
        eyebrow: modelName,
        title: "Premium digital preview",
        text: "You can switch finish variants and see how the selected Alaudis model looks in a premium interior or on your own background.",
        featured: true,
      },
      {
        eyebrow: "Mode",
        title: "3D and 360 preview",
        text: "You can rotate the model, zoom in and view the piano from different perspectives depending on the selected variant.",
        featured: false,
      },
      {
        eyebrow: "Finish",
        title: "Finish variants",
        text: "You can change the finish in the variant selector by switching between black and red.",
        featured: false,
      },
      {
        eyebrow: "The ALAUDIS experience",
        title: "View the piano in 3D",
        text: "Rotate it, zoom in and see how it looks in a real interior. This is the first step into the full Alaudis experience.",
        featured: false,
      },
    ];
  }

  if (language === "DE") {
    return [
      {
        eyebrow: modelName,
        title: "Digitale Premium-Vorschau",
        text: "Sie können zwischen Ausführungen wechseln und sehen, wie das ausgewählte Alaudis-Modell in einem Premium-Interieur oder vor Ihrem eigenen Hintergrund wirkt.",
        featured: true,
      },
      {
        eyebrow: "Modus",
        title: "3D- und 360-Vorschau",
        text: "Sie können das Modell drehen, hineinzoomen und den Flügel je nach gewählter Variante aus verschiedenen Perspektiven betrachten.",
        featured: false,
      },
      {
        eyebrow: "Ausführung",
        title: "Ausführungsvarianten",
        text: "Sie können die Ausführung im Variantenselektor wechseln und zwischen Schwarz und Rot umschalten.",
        featured: false,
      },
      {
        eyebrow: "Das ALAUDIS-Erlebnis",
        title: "Den Flügel in 3D erleben",
        text: "Drehen Sie ihn, zoomen Sie hinein und sehen Sie, wie er in einem realen Interieur wirkt. Der erste Schritt zum vollständigen Alaudis-Erlebnis.",
        featured: false,
      },
    ];
  }

  if (language === "FR") {
    return [
      {
        eyebrow: modelName,
        title: "Aperçu numérique premium",
        text: "Vous pouvez changer les variantes de finition et voir comment le modèle Alaudis sélectionné se présente dans un intérieur premium ou sur votre propre fond.",
        featured: true,
      },
      {
        eyebrow: "Mode",
        title: "Aperçu 3D et 360",
        text: "Vous pouvez faire pivoter le modèle, zoomer et observer le piano sous différents angles selon la variante choisie.",
        featured: false,
      },
      {
        eyebrow: "Finition",
        title: "Variantes de finition",
        text: "Vous pouvez changer la finition dans le sélecteur de variantes en passant du noir au rouge.",
        featured: false,
      },
      {
        eyebrow: "L’expérience ALAUDIS",
        title: "Le piano en 3D",
        text: "Faites-le pivoter, zoomez et découvrez son apparence dans un intérieur réel. C’est la première étape vers l’expérience complète Alaudis.",
        featured: false,
      },
    ];
  }

  if (language === "ES") {
    return [
      {
        eyebrow: modelName,
        title: "Vista previa digital de alta gama",
        text: "Puede alternar entre las variantes de acabado y comprobar cómo luce el modelo Alaudis elegido en un interior de lujo o sobre su propio fondo.",
        featured: true,
      },
      {
        eyebrow: "Modo",
        title: "Vista 3D y 360",
        text: "Puede girar el modelo, acercarlo y contemplar el piano de cola desde distintas perspectivas según la variante elegida.",
        featured: false,
      },
      {
        eyebrow: "Acabado",
        title: "Variantes de acabado",
        text: "Puede cambiar el acabado en el selector de variantes, alternando entre negro y rojo.",
        featured: false,
      },
      {
        eyebrow: "La experiencia ALAUDIS",
        title: "Contemple el piano de cola en 3D",
        text: "Gírelo, acérquelo y compruebe cómo queda en un interior real. Es el primer paso hacia la experiencia Alaudis completa.",
        featured: false,
      },
    ];
  }

  if (language === "IT") {
    return [
      {
        eyebrow: modelName,
        title: "Anteprima digitale di alta gamma",
        text: "Puoi passare da una finitura all’altra e vedere come si presenta il modello Alaudis scelto in un interno di pregio o sul tuo sfondo.",
        featured: true,
      },
      {
        eyebrow: "Modalità",
        title: "Anteprima 3D e 360",
        text: "Puoi ruotare il modello, ingrandirlo e osservare il pianoforte a coda da diverse prospettive, a seconda della variante scelta.",
        featured: false,
      },
      {
        eyebrow: "Finitura",
        title: "Varianti di finitura",
        text: "Puoi cambiare la finitura nel selettore delle varianti, passando dal nero al rosso.",
        featured: false,
      },
      {
        eyebrow: "L’esperienza ALAUDIS",
        title: "Osserva il pianoforte a coda in 3D",
        text: "Ruotalo, ingrandiscilo e guarda come si presenta in un ambiente reale. È il primo passo verso l’esperienza Alaudis completa.",
        featured: false,
      },
    ];
  }

  return [
    {
      eyebrow: modelName,
      title: "Cyfrowy podgląd premium",
      text: "Możesz przełączać wersje wykończeń i sprawdzać, jak wybrany model Alaudis wygląda we wnętrzu premium albo na własnym tle.",
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
      title: "Warianty wykończenia",
      text: "Wykończenie możesz zmieniać w selektorze wariantów, przełączając czarny i czerwony.",
      featured: false,
    },
    {
      eyebrow: "Doświadczenie ALAUDIS",
      title: "Obejrzyj fortepian w 3D",
      text: "Obróć go, przybliż i sprawdź, jak wygląda w realnym wnętrzu. To pierwszy krok do pełnego doświadczenia Alaudis.",
      featured: false,
    },
  ];
}
