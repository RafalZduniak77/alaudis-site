import Image from "next/image";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function VisitAtelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Alaudis Atelier"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-20 px-6 pb-16 pt-8 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Alaudis Atelier
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[60px] lg:leading-[1.05]">
              Besuchen Sie das Atelier
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 sm:text-base">
              Entdecken Sie Alaudis in dem Raum, in dem Handwerk, Detail und der
              Charakter des Instruments auf ein privates Gespräch über Modell,
              Ausführung und individuelle Komposition treffen.
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
              Ein Besuch im Atelier ist ein ruhiger, persönlicher Moment mit der
              Marke — nicht nur eine Präsentation des Modells, sondern ein
              Erlebnis von Maßstab, Präsenz und Identität.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
