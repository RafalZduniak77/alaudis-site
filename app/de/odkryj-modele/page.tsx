import Image from "next/image";
import Footer from "@/components/Footer";
import AlaudisARPreview from "@/components/AlaudisARPreview";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function OdkryjModelePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Alaudis Hintergrund"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-20 px-6 pb-16 pt-8 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Alaudis AR Experience
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[60px] lg:leading-[1.05]">
              Modelle entdecken
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/90 sm:text-base">
              Sehen Sie den Flügel in 3D, drehen Sie ihn, zoomen Sie hinein und
              prüfen Sie, wie er in einem realen Interieur wirkt. Das ist der
              erste Schritt zum vollständigen Alaudis-Erlebnis: Konfigurator +
              AR-Vorschau.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <AlaudisARPreview />
        </div>
      </section>

      <Footer />
    </main>
  );
}
