//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - FÜR ARCHITEKTEN
// ==========================================================
// PREMIUM VEREINFACHTE VERSION
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("de", "dlaArchitektow");

export default function FuerArchitektenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="de" page="dlaArchitektow" />
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section className="bg-neutral-950 px-6 pb-24 pt-32 sm:pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Projektinspiration
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Maßstab, Material, Präsenz
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis - Projektinspiration 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis - Projektinspiration 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis - Projektinspiration 3"
                fill
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
              Alaudis kann ein integraler Bestandteil einer Residenz, eines
              Apartments, eines Hotels oder eines repräsentativen Innenraums
              werden, nicht als gewöhnliches Objekt, sondern als bewusst
              gewähltes Element der Raumkomposition.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/86 sm:text-[15px] sm:leading-8">
              Wir arbeiten an Projekten, in denen Proportion, Material, Licht,
              Charakter und die Präsenz des Instruments in einem Premiumraum
              wirklich zählen.
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
                Auswahl des Modells nach Maßstab des Innenraums
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Wir helfen dabei, Größe und Charakter des Modells an die
                Proportionen des Raums anzupassen, von Wohnräumen und
                Apartments bis zu größeren Residenzen, Lobbys und
                repräsentativen Hotelbereichen.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Ausführung im Einklang mit dem Projekt
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Wir sprechen über Materialton, Glanz, Oberflächencharakter,
                Farbigkeit und Details, damit das Instrument die Erzählung des
                Innenraums mitgestaltet, anstatt ein zufälliger Zusatz zu sein.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Premium-Projektberatung
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Die Zusammenarbeit kann mit einem privaten Projektgespräch
                beginnen, in dem wir gemeinsam die Richtung festlegen: Modell,
                Präsenz im Raum, Ausführung und finaler visueller Effekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Residenzen</h3>
              <p className="mt-4 leading-7 text-white/90">
                Der Flügel als zentrales Element eines Wohnraums, einer
                Bibliothek oder eines repräsentativen Bereichs.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Premium-Apartments
              </h3>
              <p className="mt-4 leading-7 text-white/90">
                Auswahl des passenden Modells für einen kleineren, aber sehr
                bewusst gestalteten Raum.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Luxury Hotels</h3>
              <p className="mt-4 leading-7 text-white/90">
                Die Präsenz des Instruments in Lobbys, Suiten und Bereichen mit
                hoher repräsentativer Wirkung.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Repräsentative Innenräume
              </h3>
              <p className="mt-4 leading-7 text-white/90">
                Projekte, in denen Prestige, Maßstab, Detail und eine starke
                Identität des Innenraums zählen.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Projektgespräch
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Beginnen wir mit der Richtung des Projekts
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
            Wenn Sie an einer Residenz, einem Apartment, einem Hotel oder einem
            repräsentativen Innenraum arbeiten, können wir mit einem ruhigen
            Gespräch über Modell, Ausführung und die Rolle des Instruments in
            der gesamten Raumkomposition beginnen.
          </p>

          <div className="mt-10">
            <Link
              href="/de/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Projektgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
