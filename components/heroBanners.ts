// ==========================================================
// ZDJĘCIA W BANERACH
// ==========================================================
// Każdy baner ma własną listę zdjęć — zmiana w jednym nie rusza
// pozostałych. Żeby wymienić zdjęcie: wrzuć plik do folderu
// public/hero i podmień tu jego nazwę. Zdjęcia zmieniają się
// w kolejności z listy.
//
// position — która część zdjęcia zostaje w kadrze na wąskich ekranach.
// dim — dodatkowe przyciemnienie jasnych zdjęć (0 = brak),
//       żeby biały tytuł był czytelny.
// ==========================================================

export type HeroSlide = { src: string; position: string; dim: number };

// Strona główna i strony modeli
export const HOME_SLIDES: HeroSlide[] = [
  { src: "/hero/gala-scena.jpg", position: "58% 50%", dim: 0 },
  { src: "/hero/manufaktura.jpg", position: "62% 50%", dim: 0.3 },
  { src: "/hero/gala-logo.jpg", position: "38% 50%", dim: 0 },
  { src: "/hero/gala-sala.jpg", position: "62% 50%", dim: 0 },
  { src: "/hero/gala-pianista.jpg", position: "40% 50%", dim: 0 },
];

// Strona „Artyści”
export const ARTISTS_SLIDES: HeroSlide[] = [
  { src: "/hero/gala-pianista.jpg", position: "40% 50%", dim: 0 },
  { src: "/hero/gala-scena.jpg", position: "58% 50%", dim: 0 },
  { src: "/hero/artysci-duet.jpg", position: "34% 50%", dim: 0 },
];

// Strona „Aktualności i prasa”
export const NEWS_SLIDES: HeroSlide[] = [
  { src: "/hero/gala-sala.jpg", position: "62% 50%", dim: 0 },
  { src: "/hero/gala-logo.jpg", position: "38% 50%", dim: 0 },
  { src: "/hero/manufaktura.jpg", position: "62% 50%", dim: 0.3 },
];

// Strona „Tradycja”
export const TRADITION_SLIDES: HeroSlide[] = [
  { src: "/hero/manufaktura.jpg", position: "62% 50%", dim: 0.3 },
  { src: "/hero/gala-logo.jpg", position: "38% 50%", dim: 0 },
  { src: "/hero/gala-scena.jpg", position: "58% 50%", dim: 0 },
];
