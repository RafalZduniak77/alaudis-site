import Image from "next/image";
import heroImage from "@/public/hero.png";

export default function PianoHeroImage({ alt }: { alt: string }) {
  return (
    <div className="piano-hero-visual absolute inset-0">
      <Image
        src={heroImage}
        alt={alt}
        fill
        priority
        sizes="(max-width: 639px) 150vw, 100vw"
        className="object-contain object-center brightness-[1.28] scale-[0.78] translate-y-[6%] sm:scale-[0.82] sm:translate-y-[8%] lg:scale-[0.86] lg:translate-y-[10%]"
      />
    </div>
  );
}
