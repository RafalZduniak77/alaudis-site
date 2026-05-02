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

export type LanguageKey = "PL" | "EN" | "DE" | "FR";

export type AlaudisModelId = "178" | "214" | "275";

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
// NORMALIZACJA MODELU Z ADRESU
// ----------------------------------------------------------
// Jeżeli w adresie jest błędny model albo go nie ma,
// domyślnie pokazujemy Alaudis 178.
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
// NAZWA MODELU
// ----------------------------------------------------------
export function getAlaudisModelName(model: AlaudisModelId) {
  return `Alaudis ${model}`;
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
        eyebrow: "Next step",
        title: "Final model files",
        text: "When the final 3D versions for each model are ready, they can be connected here without rebuilding the whole module.",
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
        eyebrow: "Nächster Schritt",
        title: "Finale Modelldateien",
        text: "Sobald die finalen 3D-Versionen für jedes Modell fertig sind, können sie hier verbunden werden, ohne das gesamte Modul neu aufzubauen.",
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
        eyebrow: "Étape suivante",
        title: "Fichiers 3D finaux",
        text: "Lorsque les versions 3D finales de chaque modèle seront prêtes, elles pourront être connectées ici sans reconstruire tout le module.",
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
      eyebrow: "Następny etap",
      title: "Finalne pliki modeli",
      text: "Kiedy będą gotowe finalne wersje 3D dla każdego modelu, podepniemy je tutaj bez przebudowy całego modułu.",
      featured: false,
    },
  ];
}
