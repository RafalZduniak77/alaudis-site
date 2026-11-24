// ==========================================================
// CHARAKTER BRZMIENIA — SEKCJA NA STRONACH MODELI
// ==========================================================
// Po lewej krótki tekst, po prawej duże zdjęcie wnętrza
// fortepianu (public/galeria-home/11.jpg), które wtapia się
// w czarne tło. Pod spodem cztery cechy brzmienia.
// Cechy brzmienia zapisane są niżej, w tabeli TRAITS.
// ==========================================================

import Image from "next/image";

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
  return (
    <section id="charakter" className="scroll-mt-24 overflow-hidden bg-black">
      <div className="grid lg:min-h-[min(78svh,760px)] lg:grid-cols-2">
        {/* Zdjęcie — na telefonie nad tekstem, na komputerze po prawej */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:order-2 lg:aspect-auto">
          <Image
            src="/galeria-home/11.jpg"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-[62%_50%]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,#000_0%,transparent_38%)] lg:bg-[linear-gradient(90deg,#000_0%,rgb(0_0_0/0.55)_18%,transparent_48%),linear-gradient(0deg,#000_0%,transparent_26%)]" />
        </div>

        <div className="relative flex flex-col justify-center px-6 pb-4 pt-2 sm:px-10 lg:order-1 lg:py-24 lg:pl-16 lg:pr-6 xl:pl-[max(4rem,calc((100vw-80rem)/2))]">
          <h2 className="flex items-center gap-4 text-[11px] uppercase tracking-[0.42em] text-[#e0ca96] before:h-px before:w-11 before:bg-[#d3bd8b]">
            {eyebrow}
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-[1.35rem] font-light leading-[1.5] text-white sm:text-2xl sm:leading-[1.5] lg:mt-9 lg:text-[1.7rem] lg:leading-[1.45]">
            {lead}
          </p>
          <p className="mt-6 max-w-lg text-pretty text-[15px] leading-8 text-white/78 lg:mt-8">{text}</p>
        </div>
      </div>

      <div className="px-6 pb-16 pt-8 sm:px-10 lg:px-16 lg:pb-24 lg:pt-4">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 border-t border-white/12 sm:grid-cols-4">
          {TRAITS[model][language].map(([label, value]) => (
            <div key={label} className="border-b border-white/12 py-6 pr-4 sm:border-b-0 sm:py-8 lg:pr-8">
              <dt className="text-[10px] uppercase tracking-[0.32em] text-[#e0ca96]">{label}</dt>
              <dd className="mt-3 text-lg font-light leading-snug text-white lg:text-2xl">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
