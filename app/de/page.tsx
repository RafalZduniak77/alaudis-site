import HomeHeader from "@/components/HomeHeader";
import PianoHeroImage from "@/components/PianoHeroImage";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";
import AlaudisStory from "@/components/AlaudisStory";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          HERO
         ==================================================== */}
      <section className="home-hero hero-copy relative min-h-screen overflow-hidden">
        <PianoHeroImage alt="Alaudis Flügel" />

        <div className="absolute inset-0 z-10 bg-black/4" />

        {/* ==================================================
            HEADER
           ================================================== */}
        <HomeHeader locale="de" />

        {/* ==================================================
            HERO MITTE
           ================================================== */}
        <div className="home-hero-content relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl pt-16 sm:pt-20">
            <p className="home-hero-eyebrow mb-5 text-[11px] uppercase tracking-[0.48em] text-white/90">
              Alaudis Atelier
            </p>

            <h1 className="home-hero-title text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Handwerk,
              <br />
              Detail, Identität.
            </h1>

            <p className="home-hero-description mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              Jeder Alaudis entsteht aus der Verbindung von Handwerk,
              Proportion, edlem Material und einem individuellen Klangcharakter.
            </p>

            <div className="home-hero-actions mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
        <div className="home-hero-scroll absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/88">
            Nach unten scrollen
          </p>
        </div>
      </section>

      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      <AlaudisStory language="DE" />

      {/* ====================================================
          KONTAKTBEREICH
         ==================================================== */}
      <section
        id="kontakt"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Private Beratung
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Sprechen wir über Ihren Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
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

      {/* MOBILE: klickbarer Block */}
      <Link
        href="/de/kontakt"
        className="block bg-neutral-950 px-6 py-20 text-center sm:hidden"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Alaudis Kontakt
        </p>

        <h2 className="mt-4 text-3xl font-light text-white">
          Finden Sie Ihren Flügel
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Sprechen Sie mit uns über Modelle, Ausführungen und
          Konfigurationsmöglichkeiten. Vereinbaren Sie eine persönliche Beratung
          oder einen Besuch in unserem Atelier.
        </p>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white">
            Kontakt
          </span>
        </div>
      </Link>

      {/* DESKTOP / TABLET */}
      <section
        id="geschichte"
        className="hidden bg-neutral-950 px-6 py-20 text-center sm:block sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Erbe und Handwerk
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Die Welt von Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Entdecken Sie die Philosophie der Marke, den Entstehungsprozess der
          Instrumente und das Handwerk, das jedem Alaudis seine eigene Identität
          verleiht.
        </p>
      </section>

      <Footer />
    </main>
  );
}
