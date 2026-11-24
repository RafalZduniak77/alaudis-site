"use client";

// ==========================================================
// CHARAKTER BRZMIENIA — SEKCJA NA STRONACH MODELI
// ==========================================================
// Duże zdanie rozjaśnia się słowo po słowie podczas przewijania,
// w tle stoi konturowy numer modelu, a pod spodem — drugi akapit
// i cztery cechy brzmienia w równych kolumnach.
// Cechy brzmienia zapisane są niżej, w tabeli TRAITS.
// ==========================================================

import { useEffect, useRef } from "react";

type Model = "178" | "214" | "275";
type Language = "PL" | "EN" | "DE" | "FR";

const TRAITS: Record<Model, Record<Language, [string, string][]>> = {
  "178": {
    PL: [["Projekcja", "Subtelna"], ["Średnica", "Szlachetna"], ["Góra", "Miękko prowadzona"], ["Bas", "Elegancka podstawa"]],
    EN: [["Projection", "Subtle"], ["Middle register", "Noble"], ["Upper range", "Softly guided"], ["Bass", "Elegant foundation"]],
    DE: [["Projektion", "Subtil"], ["Mittellage", "Edel"], ["Höhen", "Weich geführt"], ["Bass", "Elegante Grundlage"]],
    FR: [["Projection", "Subtile"], ["Médium", "Noble"], ["Aigu", "Conduit avec douceur"], ["Basse", "Base élégante"]],
  },
  "214": {
    PL: [["Projekcja", "Szersza"], ["Średnica", "Bardziej nośna"], ["Bas", "Głębszy"], ["Dynamika", "Bogatsza paleta"]],
    EN: [["Projection", "Wider"], ["Middle register", "More projecting"], ["Bass", "Deeper"], ["Dynamics", "Richer palette"]],
    DE: [["Projektion", "Breiter"], ["Mittellage", "Tragfähiger"], ["Bass", "Tiefer"], ["Dynamik", "Reichere Palette"]],
    FR: [["Projection", "Plus large"], ["Médium", "Plus projeté"], ["Grave", "Plus profond"], ["Dynamique", "Palette plus riche"]],
  },
  "275": {
    PL: [["Projekcja", "Rozległa"], ["Harmonia", "Szeroki oddech"], ["Bas", "Głęboki fundament"], ["Dynamika", "Rozbudowana paleta"]],
    EN: [["Projection", "Extensive"], ["Harmony", "Broad breath"], ["Bass", "Deep foundation"], ["Dynamics", "Expanded palette"]],
    DE: [["Projektion", "Weitreichend"], ["Harmonik", "Breiter Atem"], ["Bass", "Tiefes Fundament"], ["Dynamik", "Erweiterte Palette"]],
    FR: [["Projection", "Étendue"], ["Harmonie", "Large respiration"], ["Grave", "Fondement profond"], ["Dynamique", "Palette développée"]],
  },
};

type Props = { model: Model; language: Language; eyebrow: string; lead: string; text: string };

export default function ModelSoundCharacter({ model, language, eyebrow, lead, text }: Props) {
  const statement = useRef<HTMLParagraphElement>(null);
  const words = lead.split(" ");

  // The statement lights up as it travels through the screen. Without scripts
  // (or with reduced motion) the whole sentence simply stays bright.
  useEffect(() => {
    const element = statement.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const box = element.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const end = window.innerHeight * 0.38;
      const progress = (start - box.top) / (start - end + box.height * 0.6);
      element.style.setProperty("--lit", String(Math.min(1, Math.max(0, progress))));
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="charakter" className="relative isolate scroll-mt-24 overflow-hidden bg-black px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      {/* Ciepła poświata i konturowy numer modelu w tle */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_12%_0%,rgb(199_154_92/0.13),transparent_70%)]" />
      <p aria-hidden="true" className="pointer-events-none absolute -right-[0.06em] top-1/2 -z-10 -translate-y-[58%] select-none text-[clamp(190px,34vw,520px)] font-extralight leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgb(211_189_139/0.13)]">
        {model}
      </p>

      <div className="mx-auto max-w-7xl">
        <h2 className="flex items-center gap-4 text-[11px] uppercase tracking-[0.42em] text-[#e0ca96] before:h-px before:w-11 before:bg-[#d3bd8b]">
          {eyebrow}
        </h2>

        <p
          ref={statement}
          style={{ "--lit": 1, "--words": words.length } as React.CSSProperties}
          className="mt-8 max-w-5xl text-[clamp(1.55rem,3.3vw,3.25rem)] font-extralight leading-[1.22] tracking-[-0.012em] text-white sm:mt-10"
        >
          {words.map((word, index) => (
            <span
              key={index}
              style={{ opacity: `clamp(0.26, calc((var(--lit) * (var(--words) + 6) - ${index}) * 0.3), 1)` }}
              className="transition-opacity duration-300 ease-out"
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/12 pt-10 sm:mt-16 sm:pt-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <p className="max-w-xl text-[15px] leading-8 text-white/84 sm:text-base">{text}</p>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:gap-x-8">
            {TRAITS[model][language].map(([label, value], index) => (
              <div key={label} className="border-l border-[#d3bd8b]/35 pl-4">
                <p aria-hidden="true" className="text-[10px] tracking-[0.3em] text-white/45 tabular-nums">0{index + 1}</p>
                <dt className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#e0ca96]">{label}</dt>
                <dd className="mt-2 text-lg font-light leading-snug text-white lg:text-xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
