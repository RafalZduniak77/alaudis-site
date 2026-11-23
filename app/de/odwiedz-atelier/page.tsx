//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - BESUCHEN SIE DAS ATELIER
// ==========================================================
// PREMIUM VEREINFACHTE VERSION
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("de", "odwiedzAtelier");

export default function BesuchenSieDasAtelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="de" page="odwiedzAtelier" />
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      <section className="bg-black px-6 pb-20 pt-32 sm:px-10 sm:pb-24 sm:pt-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Zdjęcia atelier: jedno duże i dwa mniejsze */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis Atelier - Ansicht 1"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3]">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis Atelier - Ansicht 2"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3]">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis Atelier - Ansicht 3"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          SEKCJA - CZEGO DOŚWIADCZYSZ
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">
            Raum des Ateliers
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Ein Ort der Begegnung mit Alaudis
          </h1>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Sehen Sie die Modelle aus der Nähe
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Erleben Sie die Größe, die Linie und die Präsenz des Flügels in
                einem realen Raum. Sehen Sie, wie das Modell nicht auf einem
                Bildschirm, sondern im physischen Kontakt mit Material und
                Detail wirkt.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Sprechen Sie über Ausführungen
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Besprechen Sie die Wahl der Ausführung, den Charakter der
                Oberfläche, den Ton des Materials und die Gesamtkomposition des
                Instruments so, dass sie harmonisch auf Architektur und
                Interieur abgestimmt ist.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Bestimmen Sie die Richtung einer individuellen Komposition
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Der Besuch kann zum Beginn einer privaten Beratung werden,
                eines Gesprächs über das Modell, den Charakter des Instruments,
                seinen Einsatz, die bevorzugte Größe und die gesamte Sprache von
                Alaudis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="doswiadczenie"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                01 · Erlebnis des Besuchs
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Eine Begegnung mit der Marke in ihrer natürlichen Umgebung
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Im Atelier können Sie die Alaudis Modelle in einem ruhigen, privaten Kontext erleben, aus der Nähe, ohne Eile, mit der Möglichkeit, über Proportionen, Ausführungen, die Bestimmung des Instruments und seinen Platz in einem konkreten Raum zu sprechen.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Ein privates Gespräch
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Das Treffen findet als privates Gespräch statt. Dadurch können wir in Ruhe die Modelle, die gewünschte Größe des Instruments, Premium-Ausführungen und den Platz des Flügels in einem konkreten Raum besprechen.
              </p>
            </div>

            <div className="flex flex-col rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03 · Atelier / SAP Renovation
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Obozowa 18
                <br />
                62-800 Kalisz
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Besuche vereinbart man am besten im Voraus, damit wir ein ruhiges, privates Treffen rund um die Alaudis Modelle vorbereiten und den Verlauf des Gesprächs passend auf Ihr Projekt abstimmen können.
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Link
                href="/de/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Privates Gespräch vereinbaren
              </Link>
              <Link
                href="/de/zwiedzanie-manufaktury"
                className="inline-flex rounded-full border border-[#d3bd8b]/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#d3bd8b] transition hover:bg-[#d3bd8b] hover:text-black"
              >
                Manufakturführung
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Nächster Schritt
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Beginnen Sie mit einem privaten Gespräch
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
            Der beste Beginn eines Atelierbesuchs ist ein kurzer Kontakt,
            dadurch bereiten wir das Treffen rund um das passende Modell, den
            Charakter und die Richtung der individuellen Alaudis-Komposition
            vor.
          </p>

          <div className="mt-10">
            <Link
              href="/de/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Privates Gespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
