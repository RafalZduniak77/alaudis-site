// ==========================================================
// HOME PAGE - ALAUDIS
// ==========================================================
// VERBESSERTE VERSION
// ----------------------------------------------------------
// Was in dieser Version verbessert wurde:
// 1. der Leitsatz wurde wiederhergestellt:
//    "HANDWERK, DETAIL, IDENTITÄT."
// 2. die Navigation zum Bereich „Modelle“ wurde verbessert
// 3. nach dem Klick auf „Modelle“ positioniert sich der Bereich höher
// 4. der frühere Button wurde wiederhergestellt:
//    "Private Beratung vereinbaren"
// 5. der Sprachumschalter funktioniert
// 6. der Header ist fixiert
// 7. Premium Blur-Hintergrund unter dem Header hinzugefügt
// 8. der Flügel im Hero wurde leicht verkleinert
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          HERO
         ==================================================== */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/hero.png"
          alt="Alaudis Flügel"
          fill
          priority
          className="object-contain object-center scale-[0.86] sm:scale-[0.88] lg:scale-[0.9]"
        />

        <div className="absolute inset-0 z-10 bg-black/30" />

        {/* ==================================================
            HEADER
           ================================================== */}
        <header className="fixed inset-x-0 top-0 z-50">
          <div className="relative mx-auto grid max-w-7xl grid-cols-3 items-start px-6 pb-6 pt-12 lg:px-10">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/45 to-transparent backdrop-blur-md" />

            {/* LINKE SEITE */}
            <div className="ml-8 flex items-center gap-4">
              <a
                href="#modelle"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Modelle
              </a>

              <Link
                href="/de/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Kontakt
              </Link>

              <a
                href="#geschichte"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Geschichte
              </a>
            </div>

            {/* MITTE */}
            <div className="justify-self-center pt-2">
              <Image
                src="/logo-alaudis.png"
                alt="Alaudis Logo"
                width={77}
                height={25}
                priority
                className="h-auto w-[60px] object-contain opacity-95 md:w-[77px]"
              />
            </div>

            {/* RECHTE SEITE */}
            <div className="justify-self-end">
              <details className="group relative">
                <summary className="list-none cursor-pointer rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black">
                  <span className="inline-flex items-center gap-2">
                    DE
                    <span className="text-[10px] transition group-open:rotate-180">
                      ▼
                    </span>
                  </span>
                </summary>

                <div className="absolute right-0 mt-3 min-w-[150px] overflow-hidden rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl">
                  <Link
                    href="/"
                    className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    PL
                  </Link>

                  <Link
                    href="/en"
                    className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    EN
                  </Link>

                  <Link
                    href="/de"
                    className="block w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                  >
                    DE
                  </Link>

                  <Link
                    href="/fr"
                    className="block w-full px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    FR
                  </Link>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* ==================================================
            HERO MITTE
           ================================================== */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl pt-16">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Alaudis Atelier
            </p>

            <h1 className="text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Handwerk,
              <br />
              Detail, Identität.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              Jeder Alaudis entsteht aus der Verbindung von Handwerk,
              Proportion, edlem Material und einem individuellen Klangcharakter.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/de/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Konfigurator öffnen
              </Link>

              <Link
                href="/de/kontakt"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Private Beratung vereinbaren
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            HERO UNTEN
           ================================================== */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Nach unten scrollen
          </p>
        </div>
      </section>

      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      {/* ====================================================
          KOLLEKTIONSBLOCK
         ==================================================== */}
      <section className="relative z-20 bg-neutral-950">
        <section
          id="modelle"
          className="scroll-mt-0 px-6 pb-10 pt-10 text-center sm:scroll-mt-2 sm:px-10 sm:pt-14 lg:scroll-mt-4 lg:px-16 lg:pt-16"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Alaudis Kollektion
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[58px] lg:leading-[1.08]">
            Drei Größen der Präsenz.
            <br />
            Eine Philosophie des Handwerks.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-white/68 sm:text-[17px]">
            Jedes Alaudis-Modell entsteht als eigene Interpretation von
            Proportion, Charakter und Klang — von kultivierter Wohnraumpräsenz
            bis zur vollen Größe eines Konzertflügels.
          </p>
        </section>

        <section className="relative z-30 grid gap-6 px-6 pb-24 sm:px-10 lg:grid-cols-3 lg:px-16">
          <Link
            href="/fortepiany/alaudis-178"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Modell
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 178</h2>

            <p className="mt-5 leading-7 text-white/68">
              Eine lyrische Interpretation des Premium-Flügels — elegant,
              ausgewogen und geschaffen für Interieurs, in denen Detail und
              Klang die gleiche Bedeutung haben.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Modell entdecken
            </p>
          </Link>

          <Link
            href="/fortepiany/alaudis-214"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Modell
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 214</h2>

            <p className="mt-5 leading-7 text-white/68">
              Ein Flügel mit stärkerer Präsenz und breiterer Projektion — für
              Räume, die mehr Größe, Klarheit und einen konzertanteren Charakter
              verlangen.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Modell entdecken
            </p>
          </Link>

          <Link
            href="/fortepiany/alaudis-275"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:from-white/15 hover:to-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Modell
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 275</h2>

            <p className="mt-5 leading-7 text-white/68">
              Die größte Konzertform von Alaudis — volle Klangskala, Projektion
              und Bühnenpräsenz, entworfen für die anspruchsvollsten Räume.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Modell entdecken
            </p>
          </Link>
        </section>
      </section>

      {/* ====================================================
          KONTAKTBEREICH
         ==================================================== */}
      <section
        id="kontakt"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Private Beratung
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Sprechen wir über Ihren Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Kontaktieren Sie uns, um über Modell, Ausführung, Klangcharakter und
          die individuelle Komposition Ihres Alaudis-Flügels zu sprechen.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/de/konfigurator"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Konfigurator öffnen
          </Link>

          <Link
            href="/de/kontakt"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Kontaktieren Sie uns
          </Link>
        </div>
      </section>

      {/* ====================================================
          GESCHICHTSBEREICH
         ==================================================== */}
      <section
        id="geschichte"
        className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Erbe und Handwerk
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Die Welt von Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Entdecken Sie die Philosophie der Marke, den Entstehungsprozess der
          Instrumente und das Handwerk, das jedem Alaudis seine eigene Identität
          verleiht.
        </p>
      </section>

      <Footer />
    </main>
  );
}
