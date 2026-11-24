//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - PER GLI ARCHITETTI
// ==========================================================
// SIMPLIFIED PREMIUM VERSION
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("it", "dlaArchitektow");

export default function PerGliArchitettiPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="it" page="dlaArchitektow" />
      <ModelPageTopBar backHref="/it" activeLanguage="IT" />

      <section className="bg-neutral-950 px-6 pb-24 pt-32 sm:pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Ispirazione progettuale
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Scala, materia, presenza
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis - ispirazione progettuale 1"
                fill
                priority
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis - ispirazione progettuale 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis - ispirazione progettuale 3"
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
            <p className="mx-auto mt-0 max-w-3xl text-sm leading-8 text-white sm:text-base sm:leading-9">
              Alaudis può diventare parte integrante di una residenza, di un appartamento, di un hotel o di uno spazio di rappresentanza: non come un semplice oggetto, ma come un elemento scelto con consapevolezza nella composizione dell’interno.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/95 sm:text-[15px] sm:leading-8">
              Collaboriamo a progetti in cui contano la proporzione, la materia, la luce, il carattere e la presenza dello strumento in uno spazio di alta gamma.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Il modello adatto alla scala dell’interno
              </h3>

              <p className="mt-5 leading-8 text-white">
                Aiutiamo a scegliere la dimensione e il carattere del modello in base alle proporzioni dello spazio: dai salotti e dagli appartamenti fino alle residenze più ampie, alle lobby e alle aree di rappresentanza degli hotel.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Una finitura coerente con il progetto
              </h3>

              <p className="mt-5 leading-8 text-white">
                Parliamo del tono del materiale, della lucentezza, del carattere della superficie, della palette cromatica e dei dettagli, perché lo strumento contribuisca al racconto dell’interno anziché essere un’aggiunta casuale.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Consulenza progettuale di alto livello
              </h3>

              <p className="mt-5 leading-8 text-white">
                La collaborazione può iniziare con un colloquio privato sul progetto, durante il quale definiamo insieme la linea da seguire: modello, presenza nello spazio, finitura ed effetto visivo finale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Residenze</h3>
              <p className="mt-4 leading-7 text-white">
                Il pianoforte a coda come elemento centrale di un salotto, di una biblioteca o di un’area di rappresentanza.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Appartamenti di pregio
              </h3>
              <p className="mt-4 leading-7 text-white">
                Il modello adatto a uno spazio più raccolto, ma progettato con grande consapevolezza.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Hotel di alta gamma</h3>
              <p className="mt-4 leading-7 text-white">
                La presenza dello strumento nelle lobby, nelle suite e negli spazi di grande valore d’immagine.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Spazi di rappresentanza
              </h3>
              <p className="mt-4 leading-7 text-white">
                Progetti in cui contano il prestigio, la scala, il dettaglio e una forte identità dell’interno.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Colloquio progettuale
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Partiamo dall’impostazione del progetto
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Se stai lavorando a una residenza, a un appartamento, a un hotel o a un interno di rappresentanza, possiamo iniziare con un colloquio tranquillo sul modello, sulla finitura e sul ruolo dello strumento nella composizione complessiva dello spazio.
          </p>

          <div className="mt-10">
            <Link
              href="/it/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Fissa un colloquio progettuale
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
