// ==========================================================
// SCROLL MODELS SHOWCASE
// ==========================================================
// To jest sekcja galerii modeli i wykończeń na stronie głównej.
//
// Za co odpowiada ten plik:
// 1. przechowuje listę slajdów (modele, zdjęcia, opisy)
// 2. renderuje każdą kartę modelu
// 3. dodaje efekt scroll:
//    - karta przesuwa się lekko w dół
//    - karta lekko się skaluje
// 4. pokazuje zdjęcie, opis, detale i przycisk do konfiguratora
// 5. automatycznie zmienia język na podstawie aktualnego adresu
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcia modeli
// - nazwy modeli
// - opisy
// - wnętrze / wykończenie
// - link przycisku
// - siłę efektu scroll
//
// Najważniejsze miejsca:
// - slidesByLanguage     -> cała zawartość galerii dla każdego języka
// - scale                -> siła zmniejszania przy scrollu
// - translateY           -> siła przesunięcia przy scrollu
//
// UWAGA:
// W tej wersji:
// 1. fortepiany nie są ucinane (object-contain)
// 2. język dobiera się automatycznie po ścieżce
// 3. przycisk prowadzi do właściwej wersji konfiguratora
// ==========================================================

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ----------------------------------------------------------
// TYPY
// ----------------------------------------------------------
type LanguageKey = "PL" | "EN" | "DE" | "FR";

type ShowcaseSlide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  interiorLabel: string;
  interior: string;
  exteriorLabel: string;
  exterior: string;
  ctaHref: string;
  sectionTitle: string;
};

// ----------------------------------------------------------
// ROZPOZNAWANIE JĘZYKA PO ŚCIEŻCE
// ----------------------------------------------------------
function getLanguageFromPathname(pathname: string): LanguageKey {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "EN";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "DE";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "FR";
  return "PL";
}

function getConfiguratorHref(language: LanguageKey) {
  if (language === "PL") return "/konfigurator";
  return `/${language.toLowerCase()}/konfigurator`;
}

// ----------------------------------------------------------
// TREŚCI SLAJDÓW DLA KAŻDEGO JĘZYKA
// ----------------------------------------------------------
function getSlides(language: LanguageKey): ShowcaseSlide[] {
  const configuratorHref = getConfiguratorHref(language);

  if (language === "EN") {
    return [
      {
        id: "01",
        eyebrow: "Alaudis",
        title: "White polyester",
        subtitle:
          "Pure form, light and modern elegance in a high-gloss finish.",
        image: "/konfigurator/Bialy poliester połysk.png",
        interiorLabel: "Interior",
        interior: "White polyester",
        exteriorLabel: "Finish",
        exterior: "High gloss",
        ctaHref: configuratorHref,
        sectionTitle: "Models and finishes",
      },
      {
        id: "02",
        eyebrow: "Alaudis",
        title: "Black polyester",
        subtitle:
          "Concert classic and a deep, noble surface in gloss.",
        image: "/konfigurator/Czarny Poliester połysk-v2.png",
        interiorLabel: "Interior",
        interior: "Black polyester",
        exteriorLabel: "Finish",
        exterior: "High gloss",
        ctaHref: configuratorHref,
        sectionTitle: "Models and finishes",
      },
      {
        id: "03",
        eyebrow: "Alaudis",
        title: "Ferrari polyester",
        subtitle:
          "A bold interpretation of luxury and exceptional presence in gloss.",
        image: "/konfigurator/Ferrari poliester połysk.png",
        interiorLabel: "Interior",
        interior: "Ferrari polyester",
        exteriorLabel: "Finish",
        exterior: "High gloss",
        ctaHref: configuratorHref,
        sectionTitle: "Models and finishes",
      },
      {
        id: "04",
        eyebrow: "Alaudis",
        title: "Polished ebony",
        subtitle:
          "Timeless elegance and classical refinement in a noble gloss.",
        image: "/konfigurator/Heban polerowany.png",
        interiorLabel: "Interior",
        interior: "Polished ebony",
        exteriorLabel: "Finish",
        exterior: "Polished gloss",
        ctaHref: configuratorHref,
        sectionTitle: "Models and finishes",
      },
      {
        id: "05",
        eyebrow: "Alaudis",
        title: "Indian apple veneer",
        subtitle:
          "Noble grain and a decorative premium character in gloss.",
        image: "/konfigurator/Okleina Jabłoń Indyjska -połysk.png",
        interiorLabel: "Interior",
        interior: "Indian apple",
        exteriorLabel: "Finish",
        exterior: "Gloss veneer",
        ctaHref: configuratorHref,
        sectionTitle: "Models and finishes",
      },
    ];
  }

  if (language === "DE") {
    return [
      {
        id: "01",
        eyebrow: "Alaudis",
        title: "Weißer Polyester",
        subtitle:
          "Reine Form, Licht und moderne Eleganz in Hochglanz.",
        image: "/konfigurator/Bialy poliester połysk.png",
        interiorLabel: "Innenraum",
        interior: "Weißer Polyester",
        exteriorLabel: "Ausführung",
        exterior: "Hochglanz",
        ctaHref: configuratorHref,
        sectionTitle: "Modelle und Ausführungen",
      },
      {
        id: "02",
        eyebrow: "Alaudis",
        title: "Schwarzer Polyester",
        subtitle:
          "Konzertklassik und eine tiefe, edle Oberfläche in Glanz.",
        image: "/konfigurator/Czarny Poliester połysk-v2.png",
        interiorLabel: "Innenraum",
        interior: "Schwarzer Polyester",
        exteriorLabel: "Ausführung",
        exterior: "Hochglanz",
        ctaHref: configuratorHref,
        sectionTitle: "Modelle und Ausführungen",
      },
      {
        id: "03",
        eyebrow: "Alaudis",
        title: "Ferrari-Polyester",
        subtitle:
          "Eine mutige Interpretation von Luxus und außergewöhnlicher Präsenz in Glanz.",
        image: "/konfigurator/Ferrari poliester połysk.png",
        interiorLabel: "Innenraum",
        interior: "Ferrari-Polyester",
        exteriorLabel: "Ausführung",
        exterior: "Hochglanz",
        ctaHref: configuratorHref,
        sectionTitle: "Modelle und Ausführungen",
      },
      {
        id: "04",
        eyebrow: "Alaudis",
        title: "Polierter Ebenholz",
        subtitle:
          "Zeitlose Eleganz und klassische Raffinesse in edlem Glanz.",
        image: "/konfigurator/Heban polerowany.png",
        interiorLabel: "Innenraum",
        interior: "Polierter Ebenholz",
        exteriorLabel: "Ausführung",
        exterior: "Polierter Glanz",
        ctaHref: configuratorHref,
        sectionTitle: "Modelle und Ausführungen",
      },
      {
        id: "05",
        eyebrow: "Alaudis",
        title: "Indischer Apfelbaumfurnier",
        subtitle:
          "Edle Maserung und dekorativer Premium-Charakter in Glanz.",
        image: "/konfigurator/Okleina Jabłoń Indyjska -połysk.png",
        interiorLabel: "Innenraum",
        interior: "Indischer Apfelbaum",
        exteriorLabel: "Ausführung",
        exterior: "Glanzfurnier",
        ctaHref: configuratorHref,
        sectionTitle: "Modelle und Ausführungen",
      },
    ];
  }

  if (language === "FR") {
    return [
      {
        id: "01",
        eyebrow: "Alaudis",
        title: "Polyester blanc",
        subtitle:
          "Pureté de la forme, lumière et élégance contemporaine en finition brillante.",
        image: "/konfigurator/Bialy poliester połysk.png",
        interiorLabel: "Intérieur",
        interior: "Polyester blanc",
        exteriorLabel: "Finition",
        exterior: "Haut brillant",
        ctaHref: configuratorHref,
        sectionTitle: "Modèles et finitions",
      },
      {
        id: "02",
        eyebrow: "Alaudis",
        title: "Polyester noir",
        subtitle:
          "Le classique de concert et une surface profonde et noble en brillant.",
        image: "/konfigurator/Czarny Poliester połysk-v2.png",
        interiorLabel: "Intérieur",
        interior: "Polyester noir",
        exteriorLabel: "Finition",
        exterior: "Haut brillant",
        ctaHref: configuratorHref,
        sectionTitle: "Modèles et finitions",
      },
      {
        id: "03",
        eyebrow: "Alaudis",
        title: "Polyester Ferrari",
        subtitle:
          "Une interprétation audacieuse du luxe et d’une présence exceptionnelle en brillant.",
        image: "/konfigurator/Ferrari poliester połysk.png",
        interiorLabel: "Intérieur",
        interior: "Polyester Ferrari",
        exteriorLabel: "Finition",
        exterior: "Haut brillant",
        ctaHref: configuratorHref,
        sectionTitle: "Modèles et finitions",
      },
      {
        id: "04",
        eyebrow: "Alaudis",
        title: "Ébène poli",
        subtitle:
          "Une élégance intemporelle et un raffinement classique dans un brillant noble.",
        image: "/konfigurator/Heban polerowany.png",
        interiorLabel: "Intérieur",
        interior: "Ébène poli",
        exteriorLabel: "Finition",
        exterior: "Brillant poli",
        ctaHref: configuratorHref,
        sectionTitle: "Modèles et finitions",
      },
      {
        id: "05",
        eyebrow: "Alaudis",
        title: "Placage pommier indien",
        subtitle:
          "Un veinage noble et un caractère décoratif premium en brillant.",
        image: "/konfigurator/Okleina Jabłoń Indyjska -połysk.png",
        interiorLabel: "Intérieur",
        interior: "Pommier indien",
        exteriorLabel: "Finition",
        exterior: "Placage brillant",
        ctaHref: configuratorHref,
        sectionTitle: "Modèles et finitions",
      },
    ];
  }

  return [
    {
      id: "01",
      eyebrow: "Alaudis",
      title: "Biały poliester",
      subtitle: "Czysta forma, światło i nowoczesna elegancja w wysokim połysku.",
      image: "/konfigurator/Bialy poliester połysk.png",
      interiorLabel: "Wnętrze",
      interior: "Biały poliester",
      exteriorLabel: "Wykończenie",
      exterior: "Wysoki połysk",
      ctaHref: configuratorHref,
      sectionTitle: "Modele i wykończenia",
    },
    {
      id: "02",
      eyebrow: "Alaudis",
      title: "Czarny poliester",
      subtitle: "Koncertowa klasyka i głęboka, szlachetna powierzchnia w połysku.",
      image: "/konfigurator/Czarny Poliester połysk-v2.png",
      interiorLabel: "Wnętrze",
      interior: "Czarny poliester",
      exteriorLabel: "Wykończenie",
      exterior: "Wysoki połysk",
      ctaHref: configuratorHref,
      sectionTitle: "Modele i wykończenia",
    },
    {
      id: "03",
      eyebrow: "Alaudis",
      title: "Ferrari poliester",
      subtitle: "Odważna interpretacja luksusu i wyjątkowej obecności w połysku.",
      image: "/konfigurator/Ferrari poliester połysk.png",
      interiorLabel: "Wnętrze",
      interior: "Ferrari poliester",
      exteriorLabel: "Wykończenie",
      exterior: "Wysoki połysk",
      ctaHref: configuratorHref,
      sectionTitle: "Modele i wykończenia",
    },
    {
      id: "04",
      eyebrow: "Alaudis",
      title: "Heban polerowany",
      subtitle:
        "Ponadczasowa elegancja i klasyczne wyrafinowanie w szlachetnym połysku.",
      image: "/konfigurator/Heban polerowany.png",
      interiorLabel: "Wnętrze",
      interior: "Heban polerowany",
      exteriorLabel: "Wykończenie",
      exterior: "Polerowany połysk",
      ctaHref: configuratorHref,
      sectionTitle: "Modele i wykończenia",
    },
    {
      id: "05",
      eyebrow: "Alaudis",
      title: "Okleina Jabłoń Indyjska",
      subtitle: "Szlachetne usłojenie i dekoracyjny charakter premium w połysku.",
      image: "/konfigurator/Okleina Jabłoń Indyjska -połysk.png",
      interiorLabel: "Wnętrze",
      interior: "Jabłoń Indyjska",
      exteriorLabel: "Wykończenie",
      exterior: "Okleina połysk",
      ctaHref: configuratorHref,
      sectionTitle: "Modele i wykończenia",
    },
  ];
}

// ==========================================================
// POJEDYNCZA KARTA
// ==========================================================
function SlideItem({ slide }: { slide: ShowcaseSlide }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [transformStyle, setTransformStyle] = useState(
    "translate3d(0, 0px, 0) scale(1)"
  );

  useEffect(() => {
    let raf = 0;

    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      const start = windowH;
      const end = -rect.height;

      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end))
      );

      const scale = 1 - progress * 0.45;
      const translateY = progress * 80;

      setTransformStyle(`translate3d(0, ${translateY}px, 0) scale(${scale})`);
    };

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="flex justify-center py-8">
      <div
        className="w-full max-w-[98vw] will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
        style={{
          transform: transformStyle,
          WebkitTransform: transformStyle,
          transformOrigin: "center center",
          WebkitTransformOrigin: "center center",
        }}
      >
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
          {/* ZDJĘCIE MODELU */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-contain object-center [transform:translateZ(0)]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* DOLNA CZĘŚĆ KARTY */}
          <div className="grid items-center gap-6 bg-[#e9e9e9] px-8 py-7 text-black md:grid-cols-[1.4fr_1fr_110px]">
            {/* OPIS GŁÓWNY */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">
                {slide.eyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-light uppercase">
                {slide.title}
              </h3>

              <p className="mt-3 text-sm text-black/70">{slide.subtitle}</p>
            </div>

            {/* DANE SZCZEGÓŁOWE */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase text-black/45">
                  {slide.interiorLabel}
                </p>
                <p className="mt-2 text-sm">{slide.interior}</p>
              </div>

              <div>
                <p className="text-[11px] uppercase text-black/45">
                  {slide.exteriorLabel}
                </p>
                <p className="mt-2 text-sm">{slide.exterior}</p>
              </div>
            </div>

            {/* PRZYCISK DO KONFIGURATORA */}
            <div className="flex justify-end">
              <a
                href={slide.ctaHref}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white text-3xl transition hover:scale-110 hover:bg-black hover:text-white"
              >
                →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================================
// GŁÓWNA SEKCJA
// ==========================================================
export default function ScrollModelsShowcase() {
  const pathname = usePathname() || "/";
  const language = getLanguageFromPathname(pathname);

  const slides = useMemo(() => getSlides(language), [language]);
  const sectionTitle = slides[0]?.sectionTitle ?? "Modele i wykończenia";

  return (
    <section className="bg-[#111] px-0 text-white">
      <div className="mx-auto max-w-[1600px] px-4 pb-10 pt-24">
        <p className="text-[11px] uppercase tracking-[0.36em] text-white/45">
          {sectionTitle}
        </p>
      </div>

      {slides.map((slide) => (
        <SlideItem key={slide.id} slide={slide} />
      ))}
    </section>
  );
}
