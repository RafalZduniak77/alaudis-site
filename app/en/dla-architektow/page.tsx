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

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("en", "dlaArchitektow");

export default function ForArchitectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="en" page="dlaArchitektow" />
      <ModelPageTopBar backHref="/en" activeLanguage="EN" />

      <section className="bg-neutral-950 px-6 pb-24 pt-32 sm:pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Design inspiration
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Scale, material, presence
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis - design inspiration 1"
                fill
                priority
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis - design inspiration 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis - design inspiration 3"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Opis pod zdjęciem — tekst nie zasłania fortepianu */}
      <section className="hero-intro border-b border-white/10 bg-black px-6 py-14 text-center sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div aria-hidden="true" className="mx-auto mb-8 h-px w-12 bg-[#d3bd8b]/70" />
          <div>
            <p className="mx-auto mt-0 max-w-3xl text-sm leading-8 text-white/92 sm:text-base sm:leading-9">
              Alaudis can become an integral part of a residence, apartment,
              hotel or representative interior, not as an ordinary object,
              but as a consciously selected element of the interior composition.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/86 sm:text-[15px] sm:leading-8">
              We collaborate on projects where proportion, material, light,
              character and the presence of the instrument within a premium
              space truly matter.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Choosing the model for the scale of the interior
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                We help select the size and character of the model according to
                the proportions of the space, from living rooms and apartments
                to larger residences, lobbies and representative hotel areas.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Finishes aligned with the project
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                We discuss the tone of the material, gloss, surface character,
                colour palette and details so that the instrument co-creates the
                interior narrative instead of becoming a random addition.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Premium design consultation
              </h3>

              <p className="mt-5 leading-8 text-white/90">
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Residences</h3>
              <p className="mt-4 leading-7 text-white/90">
                A piano as the central element of a living room, library or
                representative area.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Premium apartments
              </h3>
              <p className="mt-4 leading-7 text-white/90">
                Selecting the right model for a smaller but very consciously
                designed space.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Luxury hotels</h3>
              <p className="mt-4 leading-7 text-white/90">
                The presence of the instrument in lobbies, suites and spaces
                with strong image-building value.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Representative interiors
              </h3>
              <p className="mt-4 leading-7 text-white/90">
                Projects in which prestige, scale, detail and a strong interior
                identity matter.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Design conversation
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Let’s begin with the direction of the project
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
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
