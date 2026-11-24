// ==========================================================
// CHARAKTER BRZMIENIA — SEKCJA NA STRONACH MODELI
// ==========================================================
// Po lewej krótki tekst, po prawej duże zdjęcie wnętrza
// fortepianu (public/galeria-home/11.jpg), które wtapia się
// w czarne tło.
// ==========================================================

import Image from "next/image";

type Props = { eyebrow: string; lead: string; text: string };

export default function ModelSoundCharacter({ eyebrow, lead, text }: Props) {
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
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,#000_0%,transparent_38%)] lg:bg-[linear-gradient(90deg,#000_0%,rgb(0_0_0/0.55)_18%,transparent_48%),linear-gradient(0deg,#000_0%,transparent_22%)]" />
        </div>

        <div className="relative flex flex-col justify-center px-6 pb-16 pt-2 sm:px-10 lg:order-1 lg:py-24 lg:pl-16 lg:pr-6 xl:pl-[max(4rem,calc((100vw-80rem)/2))]">
          <h2 className="flex items-center gap-4 text-[11px] uppercase tracking-[0.42em] text-[#e0ca96] before:h-px before:w-11 before:bg-[#d3bd8b]">
            {eyebrow}
          </h2>
          <p className="mt-7 max-w-xl text-pretty text-[1.15rem] font-light leading-[1.6] text-white sm:text-xl sm:leading-[1.6] lg:mt-9 lg:text-[1.35rem] lg:leading-[1.6]">
            {lead}
          </p>
          <p className="mt-6 max-w-lg text-pretty text-[15px] leading-7 text-white/78 lg:mt-8">{text}</p>
        </div>
      </div>

    </section>
  );
}
