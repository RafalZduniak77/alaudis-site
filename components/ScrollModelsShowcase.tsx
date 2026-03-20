"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ShowcaseSlide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  interior: string;
  exterior: string;
};

const slides: ShowcaseSlide[] = [
  {
    id: "01",
    eyebrow: "Alaudis 178",
    title: "Heban polerowany",
    subtitle: "Klasyczna elegancja i głęboki połysk.",
    image: "/galeria-home/1.jpg",
    interior: "Heban polerowany",
    exterior: "Czarny połysk",
  },
  {
    id: "02",
    eyebrow: "Alaudis 178",
    title: "Palisander",
    subtitle: "Szlachetne usłojenie i ciepły charakter.",
    image: "/galeria-home/2.jpg",
    interior: "Palisander",
    exterior: "Naturalny połysk",
  },
  {
    id: "03",
    eyebrow: "Alaudis 275",
    title: "Orzech amerykański",
    subtitle: "Luksusowe wykończenie o koncertowej obecności.",
    image: "/galeria-home/3.jpg",
    interior: "Orzech amerykański",
    exterior: "Satynowe wykończenie",
  },
  {
    id: "04",
    eyebrow: "Alaudis 178",
    title: "Wykończenie koncertowe",
    subtitle: "Elegancka forma i detal premium.",
    image: "/galeria-home/4.JPG",
    interior: "Wykończenie premium",
    exterior: "Połysk koncertowy",
  },
  {
    id: "05",
    eyebrow: "Alaudis 275",
    title: "Edycja premium",
    subtitle: "Szlachetna sylwetka i luksusowa obecność.",
    image: "/galeria-home/5.JPG",
    interior: "Edycja premium",
    exterior: "Wykończenie specjalne",
  },
];

function SlideItem({ slide }: { slide: ShowcaseSlide }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [scale, setScale] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      const start = windowH;
      const end = -rect.height;

      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end))
      );

      // 🔥 start DUŻY → oddala się
      const newScale = 1 - progress * 0.45;

      // 🔥 lekki ruch (parallax)
      const newTranslateY = progress * 80;

      setScale(newScale);
      setTranslateY(newTranslateY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="py-8 flex justify-center">
      {/* ✅ SLIDER NA CAŁĄ STRONĘ (prawie full width) */}
      <div
        className="w-full max-w-[98vw] transition-transform duration-100 will-change-transform"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
        }}
      >
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
          {/* FOTO */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* PANEL */}
          <div className="bg-[#e9e9e9] px-8 py-7 text-black grid gap-6 md:grid-cols-[1.4fr_1fr_110px] items-center">
            {/* LEWA */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">
                {slide.eyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-light uppercase">
                {slide.title}
              </h3>

              <p className="mt-3 text-sm text-black/70">{slide.subtitle}</p>
            </div>

            {/* ŚRODEK */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase text-black/45">Wnętrze</p>
                <p className="mt-2 text-sm">{slide.interior}</p>
              </div>

              <div>
                <p className="text-[11px] uppercase text-black/45">
                  Wykończenie
                </p>
                <p className="mt-2 text-sm">{slide.exterior}</p>
              </div>
            </div>

            {/* STRZAŁKA */}
            <div className="flex justify-end">
              <a
                href="/konfigurator"
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

export default function ScrollModelsShowcase() {
  return (
    <section className="bg-[#111] text-white px-0">
      {/* HEADER */}
      <div className="mx-auto max-w-[1600px] px-4 pt-24 pb-10">
        <p className="text-[11px] uppercase tracking-[0.36em] text-white/45">
          Modele i wykończenia
        </p>

      
      </div>

      {/* SLIDERY */}
      {slides.map((slide) => (
        <SlideItem key={slide.id} slide={slide} />
      ))}
    </section>
  );
}
