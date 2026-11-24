// ==========================================================
// MODEL PAGE - ALAUDIS LEO 214
// ==========================================================
// Wersja językowa: DE
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import ModelBespokeOffer from "@/components/ModelBespokeOffer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("de", "model214");

export default function ModelAlaudis214Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="de" page="model214" />
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <HomeHero
        headingTitle
        alt="ALAUDIS LEO 214"
        eyebrow="Premium-Modell"
        title={["ALAUDIS", "LEO 214"]}
        description="Tiefer, präsenter und konzertanter im Charakter. ALAUDIS LEO 214 wurde für alle entwickelt, die einen größeren klanglichen Atem, eine breitere Projektion und eine stärkere Präsenz des Instruments in einem Premium-Interieur erwarten."
        actions={[
          { href: "/de/konfigurator?model=214", label: "Konfigurator öffnen" },
          { href: "/de/odkryj-modele?model=214", label: "In 3D ansehen" },
        ]}
        scroll="Nach unten scrollen"
      />

      <ModelStorySignature model="214" language="DE" />

      <section id="charakter" className="scroll-mt-24 bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.42em] text-[#e0ca96] before:h-px before:w-10 before:bg-[#d3bd8b]/70 after:h-px after:w-10 after:bg-[#d3bd8b]/70">
              Klangcharakter
            </p>

            <h2 className="mt-7 text-balance text-[2rem] font-extralight leading-[1.12] tracking-[-0.01em] text-white sm:text-5xl lg:text-[4rem]">
              Voller, singend, konzertanter
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-pretty text-white/88 sm:mt-12 [&>p:first-child]:text-[17px] [&>p:first-child]:leading-8 [&>p:first-child]:text-white sm:[&>p:first-child]:text-xl sm:[&>p:first-child]:leading-10">
            <p className="leading-8">ALAUDIS LEO 214 entwickelt die Klangsprache der Marke in Richtung größerer Skala und stärkerer Präsenz. Das Modell bietet einen offeneren Klang, einen tieferen Bass und eine tragfähigere Mittellage.</p>
            <p className="leading-8">Es bleibt raffiniert, erhält jedoch eine deutlichere Bühnenpräsenz und eine reichere dynamische Palette.</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Bestimmung
            </p>
            <h3 className="mt-4 text-2xl font-light">Salon und Kammerbühne</h3>
            <p className="mt-5 leading-8 text-white">Ideal für großzügige Residenzen, private Musikräume, Boutique-Hotels und Kammerbühnen.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Zielinterieurs
            </p>
            <h3 className="mt-4 text-2xl font-light">Raum, Licht, Präsenz</h3>
            <p className="mt-5 leading-8 text-white">Es passt am besten zu modernen Premium-Interieurs, klassischen Apartments und repräsentativen Räumen.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identität des Modells
            </p>
            <h3 className="mt-4 text-2xl font-light">Zwischen Eleganz und Größe</h3>
            <p className="mt-5 leading-8 text-white">ALAUDIS LEO 214 bewahrt die visuelle Klasse eines Premium-Modells und bietet gleichzeitig eine größere Klangskala.</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS LEO 214 in Premium-Ausführungen
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/3.jpg" alt="ALAUDIS LEO 214 - 1" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/5.jpg" alt="ALAUDIS LEO 214 - 2" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/2.jpg" alt="ALAUDIS LEO 214 - 3" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <ModelBespokeOffer language="DE" model="214" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Nächster Schritt
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Konfigurieren Sie ALAUDIS LEO 214 oder sehen Sie ihn in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Öffnen Sie den Konfigurator, um Ausführung und Details zu wählen, oder sehen Sie sich das Modell in 3D an.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/de/konfigurator?model=214"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Konfigurator öffnen
            </Link>

            <Link
              href="/de/odkryj-modele?model=214"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              In 3D ansehen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
