import type { AlbumPageData, GalleryPhoto, LocalizedText } from "./types";

const words = (pl: string, en: string, de: string, fr: string): LocalizedText => ({ pl, en, de, fr });
function photo(path: string, key: string, text: LocalizedText): GalleryPhoto {
  return { _key: key, url: path, width: 1920, height: 1280, caption: text, alt: text, author: "Archiwum ALAUDIS" };
}
const instrumentPhotos = [
  photo("/galeria-home/10.jpg", "form", words("Forma i brzmienie", "Form and sound", "Form und Klang", "La forme et le son")),
  photo("/galeria-home/11.jpg", "strings", words("W sercu instrumentu", "At the heart of the instrument", "Im Herzen des Instruments", "Au cœur de l’instrument")),
  photo("/galeria-home/2.jpg", "detail", words("Precyzja każdego detalu", "Precision in every detail", "Präzision in jedem Detail", "La précision de chaque détail")),
  photo("/galeria-home/3.jpg", "interior", words("Alaudis we wnętrzu", "Alaudis in an interior", "Alaudis im Interieur", "Alaudis dans un intérieur")),
  photo("/galeria-home/12.jpg", "action", words("Mechanizm fortepianu", "The piano action", "Die Flügelmechanik", "La mécanique du piano")),
  photo("/galeria-home/5.jpg", "presence", words("Obecność", "Presence", "Präsenz", "Présence")),
];
const craftPhotos = [
  photo("/historia/1 Dusza .jpg", "wood", words("Wszystko zaczyna się od drewna", "It all begins with wood", "Alles beginnt mit Holz", "Tout commence avec le bois")),
  photo("/historia/3 Rezonans konstrukcji.jpg", "rim", words("Kształtowanie korpusu", "Shaping the rim", "Die Formung des Korpus", "La mise en forme de la ceinture")),
  photo("/historia/9 Struny basowe Heller.jpg", "hands", words("Praca ludzkich rąk", "The work of human hands", "Die Arbeit menschlicher Hände", "Le travail des mains")),
  photo("/historia/6 Dno rezonansowe.jpg", "soundboard", words("Płyta rezonansowa", "The soundboard", "Der Resonanzboden", "La table d’harmonie")),
  photo("/historia/7 Mostki klonowe .jpg", "bridges", words("Mostki rezonansowe", "The bridges", "Die Stege", "Les chevalets")),
  photo("/historia/10 Mechanizm Renner.jpg", "renner", words("Precyzja mechanizmu", "Precision of the action", "Präzision der Mechanik", "La précision de la mécanique")),
  photo("/historia/11 Klawiatura Kluge.jpg", "keyboard", words("Dotyk klawiatury", "The touch of the keyboard", "Das Spielgefühl der Klaviatur", "Le toucher du clavier")),
  photo("/historia/12 Ostateczna regulacja intonacja .jpg", "voicing", words("Ostatnie brzmieniowe szlify", "The final tonal refinement", "Die letzte klangliche Verfeinerung", "Les dernières nuances sonores")),
];

// Read-only visual fixtures. Never presented as CMS-backed data and never used
// once a Sanity project is connected. Import through the seed command instead.
export const demoAlbums: AlbumPageData[] = [
  {
    _id: "gallery-demo-instruments", _updatedAt: "2026-10-17T00:00:00Z", slug: "forma-i-brzmienie", category: "instruments",
    title: words("Forma i brzmienie", "Form and sound", "Form und Klang", "La forme et le son"),
    description: words("Czerń, światło i złoty detal. Spojrzenie na instrumenty ALAUDIS z bliska.", "Black, light and golden details. A closer look at ALAUDIS instruments.", "Schwarz, Licht und goldene Details. Die Instrumente von ALAUDIS aus der Nähe.", "Le noir, la lumière et les détails dorés. Un regard sur les instruments ALAUDIS."),
    author: "Archiwum ALAUDIS", cover: instrumentPhotos[1], photoCount: instrumentPhotos.length, photos: instrumentPhotos,
  },
  {
    _id: "gallery-demo-craft", _updatedAt: "2026-10-17T00:00:00Z", slug: "w-rekach-mistrzow", category: "craft",
    title: words("W rękach mistrzów", "In the hands of masters", "In den Händen der Meister", "Entre les mains des maîtres"),
    description: words("Od surowego drewna do ostatniej intonacji. Detale i gesty, z których rodzi się fortepian.", "From raw wood to final voicing. The details and gestures that bring a grand piano to life.", "Vom rohen Holz bis zur letzten Intonation. Details und Handgriffe, aus denen ein Flügel entsteht.", "Du bois brut à l’harmonisation finale. Les détails et les gestes qui donnent naissance au piano."),
    author: "Archiwum ALAUDIS", cover: craftPhotos[2], photoCount: craftPhotos.length, photos: craftPhotos,
  },
];
