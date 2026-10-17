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
        <PianoHeroImage alt="Alaudis grand piano" />

        {/* ==================================================
            DELICATE OVERLAY
           ================================================== */}
        <div className="absolute inset-0 z-10 bg-black/4" />

        {/* ==================================================
            HEADER
           ================================================== */}
        <HomeHeader locale="en" />

        {/* ==================================================
            HERO CENTER
           ================================================== */}
        <div className="home-hero-content relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl pt-16 sm:pt-20">
            <p className="home-hero-eyebrow mb-5 text-[11px] uppercase tracking-[0.48em] text-white/90">
              Alaudis Atelier
            </p>

            <h1 className="home-hero-title text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Craft,
              <br />
              detail, identity.
            </h1>

            <p className="home-hero-description mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              Every Alaudis is created through the union of craftsmanship,
              proportion, noble material, and an individual sound character.
            </p>

            <div className="home-hero-actions mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/en/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Open configurator
              </Link>

              <Link
                href="/en/kontakt"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Book a private consultation
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            HERO BOTTOM
           ================================================== */}
        <div className="home-hero-scroll absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/88">
            Scroll down
          </p>
        </div>
      </section>

      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      <AlaudisStory language="EN" />

      {/* ====================================================
          CONTACT SECTION
         ==================================================== */}
      <section
        id="contact"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Private consultation
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Let&apos;s talk about your Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Contact us to discuss the model, finish, sound character, and the
          individual composition of your Alaudis grand piano.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/en/konfigurator"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Open configurator
          </Link>

          <Link
            href="/en/kontakt"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* ====================================================
          HISTORY SECTION
         ==================================================== */}

      {/* MOBILE: clickable block */}
      <Link
        href="/en/kontakt"
        className="block bg-neutral-950 px-6 py-20 text-center sm:hidden"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Alaudis Contact
        </p>

        <h2 className="mt-4 text-3xl font-light text-white">
          Find your piano
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Talk to us about models, finishes and configuration options. Arrange a
          private consultation or a visit to our atelier.
        </p>

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white">
            Contact
          </span>
        </div>
      </Link>

      {/* DESKTOP / TABLET */}
      <section
        id="history"
        className="hidden bg-neutral-950 px-6 py-20 text-center sm:block sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/75">
          Heritage and craftsmanship
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          The world of Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
          Discover the philosophy of the brand, the process of creating the
          instruments, and the craftsmanship that gives every Alaudis its own
          identity.
        </p>
      </section>

      <Footer />
    </main>
  );
}
