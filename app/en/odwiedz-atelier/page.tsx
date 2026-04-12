//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - VISIT THE ATELIER
// ==========================================================
// PREMIUM SIMPLIFIED VERSION
// ----------------------------------------------------------
// What was improved:
// 1. large selection fields / buttons were removed from hero
// 2. hero became calmer and more luxurious
// 3. only an elegant message + scroll down remained
// 4. lower sections still guide the user further
// 5. the whole page feels more premium and less overloaded
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function VisitAtelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          SHARED TOP BAR
         ==================================================== */}
      <ModelPageTopBar backHref="/en" activeLanguage="EN" />

      {/* ====================================================
          HERO - FULL SCREEN
         ==================================================== */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        {/* ==================================================
            HERO BACKGROUND
           ================================================== */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Visit the Alaudis atelier"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* ==================================================
            HERO CONTENT
           ================================================== */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Alaudis Atelier
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Visit the atelier
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Discover Alaudis in the space where craftsmanship, detail and the
              character of the instrument meet a private conversation about the
              model, finish and the individual composition of the piano.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              A visit to the atelier is a calm, personal moment of meeting the
              brand — not only a presentation of the model, but an experience of
              its scale, presence and identity.
            </p>
          </div>
        </div>

        {/* ==================================================
            SCROLL INDICATOR
           ================================================== */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#experience" className="block">
            <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
              <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
              Scroll down
            </p>
          </a>
        </div>
      </section>

      {/* ====================================================
          SECTION - WHAT YOU WILL EXPERIENCE
         ==================================================== */}
      <section
        id="experience"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Visit experience
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              A meeting with the brand
              <br />
              in its natural environment
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/68">
              In the atelier you can see Alaudis models in a calm, private
              context — up close, without hurry, with the possibility of talking
              about proportions, finishes, the role of the instrument and its
              place in a specific space.
            </p>
          </div>

          {/* ==================================================
              EXPERIENCE CARDS
             ================================================== */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                See the models up close
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Discover the scale, line and presence of the piano in a real
                space. See how the model is perceived not on a screen, but in
                physical contact with material and detail.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Talk about finishes
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Discuss the choice of finish, the character of the surface, the
                tone of the material and the overall composition of the
                instrument so that it responds harmoniously to the architecture
                and the interior.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Define the direction of an individual composition
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                The visit may become the beginning of a private consultation —
                a conversation about the model, the character of the instrument,
                its purpose, preferred scale and the overall language of
                Alaudis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION - GALLERY
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Atelier space
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            A place to meet Alaudis
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis atelier - view 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.JPG"
                alt="Alaudis atelier - view 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis atelier - view 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION - LOCATION / VISIT
         ==================================================== */}
      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Location
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Arrange a visit to the atelier
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/68">
              The meeting takes place as a private conversation. This allows us
              to calmly discuss the models, the desired scale of the instrument,
              premium finishes and the place of the piano within a specific
              space.
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
              It is best to schedule visits in advance so that we can prepare a
              calm, private meeting around Alaudis models and properly tailor
              the conversation to your project.
            </p>

            <div className="mt-8">
              <Link
                href="/en/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Arrange a private conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          FINAL CTA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Next step
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Start with a private conversation
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            The best beginning to a visit at the atelier is a short contact —
            thanks to it, we will prepare the meeting around the right model,
            character and direction of the individual Alaudis composition.
          </p>

          <div className="mt-10">
            <Link
              href="/en/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Arrange a private conversation
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          FOOTER
         ==================================================== */}
      <Footer />
    </main>
  );
}
