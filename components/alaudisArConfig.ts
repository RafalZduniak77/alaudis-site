// ==========================================================
// ALAUDIS AR CONFIG
// ==========================================================

export type LanguageKey = "PL" | "EN" | "DE" | "FR";

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
// MODELE BAZOWE
// ----------------------------------------------------------
const MODEL_FILES = {
  czarny: "/models/alaudis-demo.glb",
  czerwony: "/models/czerwony-polysk.glb",
};

// ----------------------------------------------------------
// DOMYŚLNE TŁO SALONU
// ----------------------------------------------------------
export const DEFAULT_ROOM_IMAGE = "/wnetrze-default.jpg";

// ----------------------------------------------------------
// USTAWIENIA WIDOKU 3D
// ----------------------------------------------------------
export const MODEL_VIEWER_SETTINGS = {
  stageHeight: "78vh",
  stageMinHeight: 640,
  exposure: "0.72",
  cameraOrbit: "42deg 78deg 92%",
  minCameraOrbit: "auto auto 55%",
  maxCameraOrbit: "auto auto 230%",
  fieldOfView: "28deg",
  cameraTargetY: "4.20m",
};

// ----------------------------------------------------------
// MODELE DLA JĘZYKA
// ----------------------------------------------------------
export function getModelOptions(language: LanguageKey): ModelOption[] {
  if (language === "EN") {
    return [
      { id: "czarny", label: "Black", file: MODEL_FILES.czarny },
      { id: "czerwony", label: "Red", file: MODEL_FILES.czerwony },
    ];
  }

  if (language === "DE") {
    return [
      { id: "czarny", label: "Schwarz", file: MODEL_FILES.czarny },
      { id: "czerwony", label: "Rot", file: MODEL_FILES.czerwony },
    ];
  }

  if (language === "FR") {
    return [
      { id: "czarny", label: "Noir", file: MODEL_FILES.czarny },
      { id: "czerwony", label: "Rouge", file: MODEL_FILES.czerwony },
    ];
  }

  return [
    { id: "czarny", label: "Czarny", file: MODEL_FILES.czarny },
    { id: "czerwony", label: "Czerwony", file: MODEL_FILES.czerwony },
  ];
}

// ----------------------------------------------------------
// KARTY INFORMACYJNE DLA JĘZYKA
// ----------------------------------------------------------
export function getInfoCards(language: LanguageKey): InfoCard[] {
  if (language === "EN") {
    return [
      {
        eyebrow: "Alaudis Signature",
        title: "Premium digital preview",
        text: "You can switch finish variants and see how the piano looks in a premium interior or on your own background.",
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
        title: "Model list",
        text: "You can change the model in the variant selector by switching between black and red.",
        featured: false,
      },
      {
        eyebrow: "Next step",
        title: "Final finishes",
        text: "The next step is more refined showcase versions, including additional veneers and premium variants.",
        featured: false,
      },
    ];
  }

  if (language === "DE") {
    return [
      {
        eyebrow: "Alaudis Signatur",
        title: "Digitale Premium-Vorschau",
        text: "Sie können zwischen Ausführungen wechseln und sehen, wie der Flügel in einem Premium-Interieur oder vor Ihrem eigenen Hintergrund wirkt.",
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
        title: "Modellliste",
        text: "Sie können das Modell im Variantenselektor wechseln und zwischen Schwarz und Rot umschalten.",
        featured: false,
      },
      {
        eyebrow: "Nächster Schritt",
        title: "Finale Ausführungen",
        text: "Der nächste Schritt sind weitere verfeinerte Präsentationsversionen, darunter zusätzliche Furniere und Premium-Varianten.",
        featured: false,
      },
    ];
  }

  if (language === "FR") {
    return [
      {
        eyebrow: "Signature Alaudis",
        title: "Aperçu numérique premium",
        text: "Vous pouvez changer les variantes de finition et voir comment le piano se présente dans un intérieur premium ou sur votre propre fond.",
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
        title: "Liste des modèles",
        text: "Vous pouvez changer le modèle dans le sélecteur de variantes en passant du noir au rouge.",
        featured: false,
      },
      {
        eyebrow: "Étape suivante",
        title: "Finitions finales",
        text: "L’étape suivante comprend d’autres versions de présentation plus abouties, avec de nouveaux placages et variantes premium.",
        featured: false,
      },
    ];
  }

  return [
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
}
