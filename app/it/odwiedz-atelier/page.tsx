//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - VISITI L’ATELIER
// ==========================================================
// SIMPLIFIED PREMIUM VERSION
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("it", "odwiedzAtelier");

export default function VisitiLatelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="it" page="odwiedzAtelier" />
      <ModelPageTopBar backHref="/it" activeLanguage="IT" />

      <section className="bg-black px-6 pb-10 pt-32 sm:px-10 sm:pb-12 sm:pt-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Zdjęcia atelier: jedno duże i dwa mniejsze */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src="/galeria-home/3.jpg"
                alt="Atelier Alaudis - vista 1"
                fill
                priority
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3]">
              <Image
                src="/galeria-home/5.jpg"
                alt="Atelier Alaudis - vista 2"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3]">
              <Image
                src="/galeria-home/2.jpg"
                alt="Atelier Alaudis - vista 3"
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
      <section
        id="doswiadczenie"
        className="scroll-mt-20 bg-black px-3 pb-16 sm:px-6 sm:pb-20"
      >
        {/* Jasny panel z ciemnymi kartami — jak „Kolekcja ALAUDIS” na stronie głównej */}
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-5 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[#8a6d35]">
                Lo spazio dell’atelier
              </p>

              <h1 className="mt-4 text-3xl font-light leading-tight text-[#111] sm:text-4xl lg:text-5xl">
                Un luogo d’incontro con Alaudis
              </h1>
            </div>

            <div className="mt-10 sm:mt-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Guarda i modelli da vicino
              </h3>

              <p className="mt-5 leading-8 text-white">
                Scopri la scala, la linea e la presenza del pianoforte a coda in uno spazio reale. Guarda come si percepisce il modello non su uno schermo, ma nel contatto fisico con la materia e il dettaglio.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Parla delle finiture
              </h3>

              <p className="mt-5 leading-8 text-white">
                Parla con noi della scelta della finitura, del carattere della superficie, del tono del materiale e della composizione generale dello strumento, perché risponda con armonia all’architettura e all’interno.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Definisci l’impostazione di una composizione su misura
              </h3>

              <p className="mt-5 leading-8 text-white">
                La visita può diventare l’inizio di una consulenza privata: una conversazione sul modello, sul carattere dello strumento, sulla sua destinazione, sulla scala preferita e sul linguaggio complessivo di Alaudis.
              </p>
            </div>
          </div>
            </div>

            <div className="mt-6 border-t border-black/10 pt-6 sm:mt-8 sm:pt-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                01 · L’esperienza della visita
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Un incontro con il marchio nel suo ambiente naturale
              </h3>

              <p className="mt-5 leading-8 text-white">
                Nell’atelier puoi vedere i modelli Alaudis in un contesto tranquillo e riservato, da vicino e senza fretta, con la possibilità di parlare delle proporzioni, delle finiture, della destinazione dello strumento e del suo posto in uno spazio preciso.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Un colloquio privato
              </h3>

              <p className="mt-5 leading-8 text-white">
                L’incontro si svolge nella forma di un colloquio privato. Possiamo così parlare con calma dei modelli, della scala desiderata dello strumento, delle finiture di alta gamma e del posto del pianoforte a coda in uno spazio preciso.
              </p>
            </div>

            <div className="flex flex-col rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03 · Atelier / SAP Renovation
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Obozowa 18
                <br />
                62-800 Kalisz
              </h3>

              <p className="mt-5 leading-8 text-white">
                È preferibile fissare la visita in anticipo, così da preparare un incontro tranquillo e riservato intorno ai modelli Alaudis e adattare lo svolgimento del colloquio al tuo progetto.
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Link
                href="/it/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Fissa un colloquio privato
              </Link>
              <Link
                href="/it/zwiedzanie-manufaktury"
                className="inline-flex rounded-full border border-[#d3bd8b]/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#d3bd8b] transition hover:bg-[#d3bd8b] hover:text-black"
              >
                Visita alla manifattura
              </Link>
            </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Il prossimo passo
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Inizia da un colloquio privato
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Il modo migliore per iniziare una visita all’atelier è un breve contatto preliminare: ci permetterà di preparare l’incontro intorno al modello adatto, al carattere e all’impostazione della composizione su misura Alaudis.
          </p>

          <div className="mt-10">
            <Link
              href="/it/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Fissa un colloquio privato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
