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
// What this page does:
// 1. displays the English version of the atelier visit page
// 2. uses the shared ModelPageTopBar component
// 3. uses EN as the active language
// 4. keeps the same premium structure as the Polish version
// 5. links all actions to English routes
// 6. ends with the shared Footer component
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("en", "odwiedzAtelier");

export default function VisitAtelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="en" page="odwiedzAtelier" />
      {/* ====================================================
          SHARED TOP BAR
         ==================================================== */}
      <ModelPageTopBar backHref="/en" activeLanguage="EN" />

      {/* ====================================================
          SECTION - GALLERY
         ==================================================== */}
      <section className="bg-black px-6 pb-24 pt-32 sm:pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Atelier space
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            The place to meet Alaudis
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/Salonik 1.jpg"
                alt="Alaudis atelier - view 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/Salonik 2.jpg"
                alt="Alaudis atelier - view 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/Konferencyjna 1.jpg"
                alt="Alaudis atelier - view 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION - WHAT YOU EXPERIENCE
         ==================================================== */}
      <section
        id="experience"
        className="scroll-mt-20 bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Visit experience
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              A meeting with the brand
              <br />
              in its natural environment
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/90">
              In the atelier, you can see Alaudis models in a calm, private
              context, up close, without haste, with the opportunity to discuss
              proportions, finishes, the purpose of the instrument and its place
              in a specific space.
            </p>
          </div>

          {/* ==================================================
              EXPERIENCE CARDS
             ================================================== */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                See the models up close
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Discover the scale, line and presence of the grand piano in a
                real space. See how the model is perceived not on a screen, but
                in physical contact with material and detail.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Discuss the finishes
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Talk through the choice of finish, the character of the surface,
                the tone of the material and the overall composition of the
                instrument so that it harmoniously corresponds with the
                architecture and interior.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Define the direction of an individual composition
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                The visit can become the beginning of a private consultation,
                a conversation about the model, the character of the instrument,
                its purpose, preferred scale and the complete Alaudis language.
              </p>
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
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Location
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Book a visit to the atelier
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/90">
              The meeting takes the form of a private conversation. This allows
              us to calmly discuss the models, the expected scale of the
              instrument, premium finishes and the place of the grand piano in a
              specific space.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">
              Atelier / SAP Renovation
            </p>

            <p className="mt-5 text-2xl font-light text-white">
              Obozowa 18
              <br />
              62-800 Kalisz
            </p>

            <p className="mt-6 leading-8 text-white/90">
              Visits are best arranged in advance, so we can prepare a calm,
              private meeting around the Alaudis models and properly adapt the
              conversation to your project.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/en/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Book a private consultation
              </Link>
              <Link
                href="/en/zwiedzanie-manufaktury"
                className="inline-flex rounded-full border border-[#d3bd8b]/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#d3bd8b] transition hover:bg-[#d3bd8b] hover:text-black"
              >
                Manufactory tour
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
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Next step
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Start with a private conversation
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
            The best beginning for a visit to the atelier is a short contact,
            it allows us to prepare the meeting around the right model,
            character and direction of your individual Alaudis composition.
          </p>

          <div className="mt-10">
            <Link
              href="/en/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Book a private consultation
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
