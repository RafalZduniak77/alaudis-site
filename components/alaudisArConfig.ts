export type ModelOption = {
  id: string;
  label: string;
  file: string;
};

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

export const DEFAULT_ROOM_IMAGE = "/wnetrze-default.jpg";

export const MODEL_VIEWER_SETTINGS = {
  stageHeight: "78vh",
  stageMinHeight: 640,

  exposure: "0.72",
  cameraOrbit: "42deg 78deg 92%",
  minCameraOrbit: "auto auto 55%",
  maxCameraOrbit: "auto auto 230%",
  fieldOfView: "28deg",

  // większa wartość = model niżej
  cameraTargetY: "4.20m",
};

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
