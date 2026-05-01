// ==========================================================
// MODEL PAGE - ALAUDIS 275
// ==========================================================
// Wersja językowa: DE
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function ModelAlaudis275Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/galeria-home/3.jpg"
            alt="Alaudis 275"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Konzertmodell
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 275
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Die größte Konzertform von Alaudis — geschaffen für volle Klangskala, breite Projektion und Bühnenpräsenz.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/de/konfigurator"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Konfigurator öffnen
              </Link>

              <Link
                href="/de/odkryj-modele"
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
              Monumental, tragfähig, voll konzertant
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">Alaudis 275 öffnet die volle Skala der Klangsprache der Marke. Er bietet weite Projektion, ein tiefes Bassfundament und große Bühnen-Tragfähigkeit.</p>
            <p className="leading-8">Dieses Modell ist für alle gedacht, die maximale Präsenz, großes Volumen und vollen Konzertcharakter erwarten.</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Bestimmung
            </p>
            <h3 className="mt-4 text-2xl font-light">Bühne, Konzertsaal, Premium-Residenz</h3>
            <p className="mt-5 leading-8 text-white/68">Geschaffen für Konzertsäle, große repräsentative Räume, künstlerische Institutionen und anspruchsvolle private Interieurs.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Zielinterieurs und Bühnen
            </p>
            <h3 className="mt-4 text-2xl font-light">Skala, Architektur, Prestige</h3>
            <p className="mt-5 leading-8 text-white/68">Er passt am besten in repräsentative Salons, Konzertsäle, Luxushotels und prestigeträchtige Interieurs.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Identität des Modells
            </p>
            <h3 className="mt-4 text-2xl font-light">Die größte Form von Alaudis</h3>
            <p className="mt-5 leading-8 text-white/68">Alaudis 275 repräsentiert die höchste Skala der Marke — monumental, vollständig und bühnenhaft.</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Alaudis 275 in Konzertgröße
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/3.jpg" alt="Alaudis 275 - 1" fill className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/5.JPG" alt="Alaudis 275 - 2" fill className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/2.jpg" alt="Alaudis 275 - 3" fill className="object-cover" />
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
            Konfigurieren Sie Alaudis 275 oder sehen Sie ihn in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Öffnen Sie den Konfigurator, um Ausführung und Details zu wählen, oder sehen Sie sich das Modell in 3D an.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/de/konfigurator"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Konfigurator öffnen
            </Link>

            <Link
              href="/de/odkryj-modele"
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
