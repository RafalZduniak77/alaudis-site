//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - FOR ARCHITECTS
// ==========================================================
// PREMIUM SIMPLIFIED VERSION
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function ForArchitectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/en" activeLanguage="EN" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Alaudis for architects"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/74" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Design collaboration
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              For architects
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Alaudis can become an integral part of a residence, apartment,
              hotel or representative interior — not as an ordinary object,
              but as a consciously selected element of the interior composition.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              We collaborate on projects where proportion, material, light,
              character and the presence of the instrument within a premium
              space truly matter.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#collaboration" className="block">
            <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
              <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
              Scroll down
            </p>
          </a>
        </div>
      </section>

      <section
        id="collaboration"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Collaboration
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              The piano as part of
              <br />
              interior architecture
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              In premium projects, a piano is not merely an instrument. It can
              become the center of gravity of a living room, the dominant
              feature of a representative space, or a subtle yet clear sign of
              the character of a place.
            </p>

            <p className="leading-8">
              That is why we propose Alaudis as a design element: consciously
              matched to materials, light, the scale of the interior, the style
              of furniture and the intended language of the entire project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Areas of collaboration
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            How we work with architects and designers
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Choosing the model for the scale of the interior
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                We help select the size and character of the model according to
                the proportions of the space — from living rooms and apartments
                to larger residences, lobbies and representative hotel areas.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Finishes aligned with the project
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                We discuss the tone of the material, gloss, surface character,
                colour palette and details so that the instrument co-creates the
                interior narrative instead of becoming a random addition.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Premium design consultation
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                The collaboration can begin with a private design conversation
                in which we define the direction together: model, presence in
                the space, finish and final visual effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Project types
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Projects in which Alaudis finds its place naturally
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Residences</h3>
              <p className="mt-4 leading-7 text-white/68">
                A piano as the central element of a living room, library or
                representative area.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Premium apartments
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Selecting the right model for a smaller but very consciously
                designed space.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Luxury hotels</h3>
              <p className="mt-4 leading-7 text-white/68">
                The presence of the instrument in lobbies, suites and spaces
                with strong image-building value.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Representative interiors
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Projects in which prestige, scale, detail and a strong interior
                identity matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Design inspiration
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Scale, material, presence
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis - design inspiration 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis - design inspiration 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis - design inspiration 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Design conversation
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Let’s begin with the direction of the project
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            If you are working on a residence, apartment, hotel or a
            representative interior, we can begin with a calm conversation
            about the model, finish and the role of the instrument within the
            entire spatial composition.
          </p>

          <div className="mt-10">
            <Link
              href="/en/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Arrange a design conversation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
