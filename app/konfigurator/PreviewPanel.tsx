"use client";

import Image from "next/image";

type Props = {
  selected: {
    obudowa: string;
    akustyka: Record<string, string>;
    mechanizm: Record<string, string>;
  };
};

export default function PreviewPanel({ selected }: Props) {
  // 🔥 wybór pierwszego dostępnego elementu do podglądu
  const previewItem =
    selected.obudowa ||
    Object.values(selected.akustyka)[0] ||
    Object.values(selected.mechanizm)[0] ||
    "";

  // 🔥 mapowanie zdjęć (dodawaj swoje)
  const imageMap: Record<string, string> = {
    "Mostki rezonansowe klon": "/mostki-klon.jpg",
    "Mostki rezonansowe buk": "/mostki-buk.jpg",

    "Dno rezonansowe Strunz": "/dno-strunz.jpg",
    "Dno rezonansowe Chiresse": "/dno-chiresse.jpg",

    "Lakierowanie dna rezonansowego mat": "/lakier-mat.jpg",
    "Lakierowanie dna rezonansowego połysk": "/lakier-polysk.jpg",

    "Młotki Renner": "/mlotki-renner.jpg",
    "Młotki Abbel": "/mlotki-abbel.jpg",

    "Mechanizm Renner": "/mechanizm-renner.jpg",

    "Klawiatura Kluge": "/klawiatura-kluge.jpg",
  };

  const imageSrc = imageMap[previewItem] || "/hero.jpg";

  return (
    <div className="absolute left-0 top-0 h-full w-[65%] flex items-center justify-center px-4">

      {/* 🔥 DUŻY BOX PREMIUM */}
      <div className="relative w-full max-w-[900px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">

        <Image
          src={imageSrc}
          alt="preview"
          fill
          className="object-contain scale-105 transition-all duration-500"
        />

        {/* 🔥 glass overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      </div>
    </div>
  );
}
