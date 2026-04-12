// ==========================================================
// HOME PAGE - ALAUDIS
// ==========================================================
// IMPROVED VERSION
// ----------------------------------------------------------
// What was improved in this version:
// 1. the main slogan was restored:
//    "CRAFT, DETAIL, IDENTITY."
// 2. navigation to the "Models" section was improved
// 3. after clicking "Models", the section aligns higher
// 4. the previous button was restored:
//    "Book a private consultation"
// 5. the language switcher works
// 6. the header is fixed
// 7. premium blur background added under the header
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
          alt="Alaudis grand piano"
          fill
          priority
          className="object-contain object-center"
        />

        <div className="absolute inset-0 z-10 bg-black/30" />

        {/* ==================================================
            HEADER
           ================================================== */}
        <header className="fixed inset-x-0 top-0 z-50">
          <div className="relative mx-auto grid max-w-7xl grid-cols-3 items-start px-6 pb-6 pt-12 lg:px-10">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/45 to-transparent backdrop-blur-md" />

            {/* LEFT */}
            <div className="ml-8 flex items-center gap-4">
              <a
                href="#models"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Models
              </a>

              <Link
                href="/en/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Contact
              </Link>

              <a
                href="#history"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                History
              </a>
            </div>

            {/* CENTER */}
            <div className="justify-self-center pt-2">
              <Image
                src="/logo-alaudis.png"
                alt="Alaudis logo"
                width={77}
                height={25}
                priority
                className="h-auto w-[60px] object-contain opacity-95 md:w-[77px]"
              />
            </div>

            {/* RIGHT */}
            <div className="justify-self-end">
              <details className="group relative">
                <summary className="list-none cursor-pointer rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black">
                  <span className="inline-flex items-center gap-2">
                    EN
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
                    className="block w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                  >
                    EN
                  </Link>

                  <Link
                    href="/de"
                    className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
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
            HERO CENTER
           ================================================== */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl pt-16">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Alaudis Atelier
            </p>

            <h1 className="text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Craft,
              <br />
              detail, identity.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              Every Alaudis is created through the union of craftsmanship,
              proportion, noble material, and an individual sound character.
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
                Book a private consultation
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            HERO BOTTOM
           ================================================== */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Scroll down
          </p>
        </div>
      </section>

      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      {/* ====================================================
          COLLECTION BLOCK
         ==================================================== */}
      <section className="relative z-20 bg-neutral-950">
        <section
          id="models"
          className="scroll-mt-0 px-6 pb-10 pt-10 text-center sm:scroll-mt-2 sm:px-10 sm:pt-14 lg:scroll-mt-4 lg:px-16 lg:pt-16"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Alaudis Collection
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[58px] lg:leading-[1.08]">
            Three scales of presence.
            <br />
            One philosophy of craftsmanship.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-white/68 sm:text-[17px]">
            Each Alaudis model is created as a distinct interpretation of
            proportion, character and sound — from refined living-space
            presence to the full scale of a concert grand piano.
          </p>
        </section>

        <section className="relative z-30 grid gap-6 px-6 pb-24 sm:px-10 lg:grid-cols-3 lg:px-16">
          <Link
            href="/fortepiany/alaudis-178"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Model
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 178</h2>

            <p className="mt-5 leading-7 text-white/68">
              A lyrical interpretation of the premium grand piano — elegant,
              balanced, and created for interiors where detail matters as much
              as sound.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Discover model
            </p>
          </Link>

          <Link
            href="/fortepiany/alaudis-214"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Model
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 214</h2>

            <p className="mt-5 leading-7 text-white/68">
              A grand piano with deeper presence and broader projection — for
              spaces that call for greater scale, clarity and a more concert
              character.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Discover model
            </p>
          </Link>

          <Link
            href="/fortepiany/alaudis-275"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:from-white/15 hover:to-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Model
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 275</h2>

            <p className="mt-5 leading-7 text-white/68">
              The largest Alaudis concert form — full scale of sound,
              projection, and stage presence designed for the most demanding
              spaces.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Discover model
            </p>
          </Link>
        </section>
      </section>

      {/* ====================================================
          CONTACT SECTION
         ==================================================== */}
      <section
        id="contact"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Private consultation
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Let&apos;s talk about your Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
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
      <section
        id="history"
        className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Heritage and craftsmanship
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          The world of Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Discover the philosophy of the brand, the process of creating the
          instruments, and the craftsmanship that gives every Alaudis its own
          identity.
        </p>
      </section>

      <Footer />
    </main>
  );
}
