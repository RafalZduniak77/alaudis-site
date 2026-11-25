import type { GalleryLocale } from "./types";

// ==========================================================
// GALERIA — TEKSTY DLA WYSZUKIWAREK I UDOSTĘPNIANIA
// ==========================================================
// title / description: wynik w Google i podgląd linku (Facebook, WhatsApp).
// home / gallery: nazwy w ścieżce „Strona główna › Galeria › Album”.
// photos: dopisek do tytułu albumu, gdy album nie ma własnego tytułu SEO.
// ==========================================================
export const gallerySeo: Record<GalleryLocale, { title: string; description: string; home: string; gallery: string; photos: string; ogLocale: string; film: string; films: string; allFilms: string; craft: string; craftFilms: string; moreFilms: string; recorded: string; filmPage: string }> = {
  pl: {
    title: "Galeria ALAUDIS – zdjęcia i filmy: fortepiany, koncerty",
    description: "Galeria ALAUDIS: fotografie i filmy z koncertów, gali inauguracyjnej i manufaktury w Kaliszu. Zobacz i posłuchaj polskich fortepianów ALAUDIS.",
    home: "Strona główna", gallery: "Galeria", photos: "zdjęcia", ogLocale: "pl_PL",
    film: "film", films: "Filmy", allFilms: "Wszystkie nagrania", craft: "Rzemiosło", craftFilms: "Wszystkie filmy z produkcji", moreFilms: "Zobacz także", recorded: "Data nagrania", filmPage: "Strona filmu",
  },
  en: {
    title: "ALAUDIS Gallery – Grand Pianos, Concerts and Workshop Photos",
    description: "ALAUDIS gallery: photographs and films from concerts, the inaugural gala and the workshop in Kalisz. See and hear the Polish ALAUDIS grand pianos.",
    home: "Home", gallery: "Gallery", photos: "photos", ogLocale: "en_GB",
    film: "video", films: "Videos", allFilms: "All recordings", craft: "Craft", craftFilms: "All workshop films", moreFilms: "Watch next", recorded: "Recorded", filmPage: "Video page",
  },
  de: {
    title: "ALAUDIS Galerie – Flügel, Konzerte und Manufaktur in Bildern",
    description: "ALAUDIS Galerie: Fotos und Filme von Konzerten, der Eröffnungsgala und aus der Manufaktur in Kalisz. Sehen und hören Sie die polnischen ALAUDIS Flügel.",
    home: "Startseite", gallery: "Galerie", photos: "Fotos", ogLocale: "de_DE",
    film: "Video", films: "Videos", allFilms: "Alle Aufnahmen", craft: "Handwerk", craftFilms: "Alle Filme aus der Fertigung", moreFilms: "Weitere Videos", recorded: "Aufgenommen am", filmPage: "Seite des Videos",
  },
  fr: {
    title: "Galerie ALAUDIS – pianos à queue, concerts, manufacture",
    description: "Galerie ALAUDIS : photographies et films des concerts, du gala inaugural et de la manufacture de Kalisz. Découvrez et écoutez les pianos à queue ALAUDIS.",
    home: "Accueil", gallery: "Galerie", photos: "photos", ogLocale: "fr_FR",
    film: "vidéo", films: "Vidéos", allFilms: "Tous les enregistrements", craft: "Savoir-faire", craftFilms: "Tous les films de fabrication", moreFilms: "À voir aussi", recorded: "Date d’enregistrement", filmPage: "Page de la vidéo",
  },
  es: {
    title: "Galería ALAUDIS – pianos de cola, conciertos y manufactura",
    description: "Galería ALAUDIS: fotografías y vídeos de los conciertos, la gala inaugural y la manufactura de Kalisz. Vea y escuche los pianos de cola polacos ALAUDIS.",
    home: "Inicio", gallery: "Galería", photos: "fotos", ogLocale: "es_ES",
    film: "vídeo", films: "Vídeos", allFilms: "Todas las grabaciones", craft: "Artesanía", craftFilms: "Todos los vídeos de fabricación", moreFilms: "Vea también", recorded: "Fecha de grabación", filmPage: "Página del vídeo",
  },
  it: {
    title: "Galleria ALAUDIS – pianoforti a coda, concerti, manifattura",
    description: "Galleria ALAUDIS: fotografie e video dei concerti, del gala inaugurale e della manifattura di Kalisz. Guarda e ascolta i pianoforti a coda polacchi ALAUDIS.",
    home: "Pagina iniziale", gallery: "Galleria", photos: "foto", ogLocale: "it_IT",
    film: "video", films: "Video", allFilms: "Tutte le registrazioni", craft: "Artigianato", craftFilms: "Tutti i video di lavorazione", moreFilms: "Guarda anche", recorded: "Data di registrazione", filmPage: "Pagina del video",
  },
};

// Opis w wynikach Google mieści ok. 155 znaków: dłuższy tekst kończymy na pełnym słowie.
export function metaDescription(text: string, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(" "), 80)).replace(/[\s,;:–—-]+$/, "")}…`;
}
