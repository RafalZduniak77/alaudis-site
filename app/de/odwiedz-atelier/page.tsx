//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - BESUCHEN SIE DAS ATELIER
// ==========================================================
// PREMIUM VEREINFACHTE VERSION
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function BesuchenSieDasAtelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Besuchen Sie das Alaudis Atelier"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Alaudis Atelier
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Besuchen Sie das Atelier
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Entdecken Sie Alaudis in einem Raum, in dem Handwerk, Detail und
              der Charakter des Instruments auf ein privates Gespräch über
              Modell, Ausführung und die individuelle Komposition des Flügels
              treffen.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              Ein Besuch im Atelier ist ein ruhiger, persönlicher Moment der
              Begegnung mit der Marke — nicht nur eine Präsentation des Modells,
              sondern ein Erlebnis seiner Größe, Präsenz und Identität.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#erlebnis" className="block">
            <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
              <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
              Nach unten scrollen
            </p>
          </a>
        </div>
      </section>

      <section
        id="erlebnis"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Erlebnis des Besuchs
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Eine Begegnung mit der Marke
              <br />
              in ihrer natürlichen Umgebung
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/68">
              Im Atelier können Sie die Alaudis Modelle in einem ruhigen,
              privaten Kontext erleben — aus der Nähe, ohne Eile, mit der
              Möglichkeit, über Proportionen, Ausführungen, die Bestimmung des
              Instruments und seinen Platz in einem konkreten Raum zu sprechen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Sehen Sie die Modelle aus der Nähe
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Erleben Sie die Größe, die Linie und die Präsenz des Flügels in
                einem realen Raum. Sehen Sie, wie das Modell nicht auf einem
                Bildschirm, sondern im physischen Kontakt mit Material und
                Detail wirkt.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Sprechen Sie über Ausführungen
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Besprechen Sie die Wahl der Ausführung, den Charakter der
                Oberfläche, den Ton des Materials und die Gesamtkomposition des
                Instruments so, dass sie harmonisch auf Architektur und
                Interieur abgestimmt ist.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Bestimmen Sie die Richtung einer individuellen Komposition
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Der Besuch kann zum Beginn einer privaten Beratung werden —
                eines Gesprächs über das Modell, den Charakter des Instruments,
                seinen Einsatz, die bevorzugte Größe und die gesamte Sprache von
                Alaudis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Raum des Ateliers
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Ein Ort der Begegnung mit Alaudis
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis Atelier - Ansicht 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis Atelier - Ansicht 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis Atelier - Ansicht 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Standort
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Vereinbaren Sie einen Besuch im Atelier
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/68">
              Das Treffen findet als privates Gespräch statt. Dadurch können wir
              in Ruhe die Modelle, die gewünschte Größe des Instruments,
              Premium-Ausführungen und den Platz des Flügels in einem konkreten
              Raum besprechen.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Atelier / SAP Renovation
            </p>

            <p className="mt-5 text-2xl font-light text-white">
              Obozowa 18
              <br />
              62-800 Kalisz
            </p>

            <p className="mt-6 leading-8 text-white/68">
              Besuche vereinbart man am besten im Voraus, damit wir ein ruhiges,
              privates Treffen rund um die Alaudis Modelle vorbereiten und den
              Verlauf des Gesprächs passend auf Ihr Projekt abstimmen können.
            </p>

            <div className="mt-8">
              <Link
                href="/de/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Privates Gespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Nächster Schritt
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Beginnen Sie mit einem privaten Gespräch
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Der beste Beginn eines Atelierbesuchs ist ein kurzer Kontakt —
            dadurch bereiten wir das Treffen rund um das passende Modell, den
            Charakter und die Richtung der individuellen Alaudis-Komposition
            vor.
          </p>

          <div className="mt-10">
            <Link
              href="/de/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Privates Gespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
