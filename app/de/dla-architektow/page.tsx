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

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function FuerArchitektenPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Alaudis für Architekten"
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
              Projektbezogene Zusammenarbeit
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Für Architekten
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Alaudis kann ein integraler Bestandteil einer Residenz, eines
              Apartments, eines Hotels oder eines repräsentativen Innenraums
              werden — nicht als gewöhnliches Objekt, sondern als bewusst
              gewähltes Element der Raumkomposition.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              Wir arbeiten an Projekten, in denen Proportion, Material, Licht,
              Charakter und die Präsenz des Instruments in einem Premiumraum
              wirklich zählen.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#zusammenarbeit" className="block">
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
        id="zusammenarbeit"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Zusammenarbeit
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Der Flügel als Teil
              <br />
              der Innenarchitektur
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              In Premium-Projekten ist ein Flügel nicht nur ein Instrument. Er
              kann zum Schwerpunkt eines Wohnraums, zur dominierenden Präsenz
              eines repräsentativen Bereichs oder zu einem subtilen, aber
              klaren Ausdruck des Charakters eines Ortes werden.
            </p>

            <p className="leading-8">
              Deshalb verstehen wir Alaudis als gestalterisches Element:
              bewusst abgestimmt auf Materialien, Licht, die Größe des
              Innenraums, den Stil des Mobiliars und die beabsichtigte Sprache
              des gesamten Projekts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Bereiche der Zusammenarbeit
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Wie wir mit Architekten und Designern arbeiten
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Auswahl des Modells nach Maßstab des Innenraums
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Wir helfen dabei, Größe und Charakter des Modells an die
                Proportionen des Raums anzupassen — von Wohnräumen und
                Apartments bis zu größeren Residenzen, Lobbys und
                repräsentativen Hotelbereichen.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Ausführung im Einklang mit dem Projekt
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Wir sprechen über Materialton, Glanz, Oberflächencharakter,
                Farbigkeit und Details, damit das Instrument die Erzählung des
                Innenraums mitgestaltet, anstatt ein zufälliger Zusatz zu sein.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Premium-Projektberatung
              </h3>

              <p className="mt-5 leading-8 text-white/68">
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
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Projekttypen
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Projekte, in denen Alaudis seinen natürlichen Platz findet
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Residenzen</h3>
              <p className="mt-4 leading-7 text-white/68">
                Der Flügel als zentrales Element eines Wohnraums, einer
                Bibliothek oder eines repräsentativen Bereichs.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Premium-Apartments
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Auswahl des passenden Modells für einen kleineren, aber sehr
                bewusst gestalteten Raum.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Luxury Hotels</h3>
              <p className="mt-4 leading-7 text-white/68">
                Die Präsenz des Instruments in Lobbys, Suiten und Bereichen mit
                hoher repräsentativer Wirkung.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Repräsentative Innenräume
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Projekte, in denen Prestige, Maßstab, Detail und eine starke
                Identität des Innenraums zählen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Projektinspiration
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Maßstab, Material, Präsenz
          </h2>

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

      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Projektgespräch
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Beginnen wir mit der Richtung des Projekts
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
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
