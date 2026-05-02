// ==========================================================
// MODEL PAGE - ALAUDIS 214
// ==========================================================
// Wersja językowa: DE
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function ModelAlaudis214Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/galeria-home/3.jpg"
            alt="Alaudis 214"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Premium-Modell
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 214
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Tiefer, präsenter und konzertanter im Charakter. Alaudis 214 wurde für alle entwickelt, die einen größeren klanglichen Atem, eine breitere Projektion und eine stärkere Präsenz des Instruments in einem Premium-Interieur erwarten.
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
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Klangcharakter
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Voller, singend, konzertanter
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">Alaudis 214 entwickelt die Klangsprache der Marke in Richtung größerer Skala und stärkerer Präsenz. Das Modell bietet einen offeneren Klang, einen tieferen Bass und eine tragfähigere Mittellage.</p>
            <p className="leading-8">Es bleibt raffiniert, erhält jedoch eine deutlichere Bühnenpräsenz und eine reichere dynamische Palette.</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Bestimmung
            </p>
            <h3 className="mt-4 text-2xl font-light">Salon und Kammerbühne</h3>
            <p className="mt-5 leading-8 text-white/68">Ideal für großzügige Residenzen, private Musikräume, Boutique-Hotels und Kammerbühnen.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Zielinterieurs
            </p>
            <h3 className="mt-4 text-2xl font-light">Raum, Licht, Präsenz</h3>
            <p className="mt-5 leading-8 text-white/68">Es passt am besten zu modernen Premium-Interieurs, klassischen Apartments und repräsentativen Räumen.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Identität des Modells
            </p>
            <h3 className="mt-4 text-2xl font-light">Zwischen Eleganz und Größe</h3>
            <p className="mt-5 leading-8 text-white/68">Alaudis 214 bewahrt die visuelle Klasse eines Premium-Modells und bietet gleichzeitig eine größere Klangskala.</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Alaudis 214 in Premium-Ausführungen
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/3.jpg" alt="Alaudis 214 - 1" fill className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/5.JPG" alt="Alaudis 214 - 2" fill className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/2.jpg" alt="Alaudis 214 - 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Nächster Schritt
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Konfigurieren Sie Alaudis 214 oder sehen Sie ihn in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
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
