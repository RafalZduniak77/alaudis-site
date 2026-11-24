//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - VISITE EL ATELIER
// ==========================================================
// SIMPLIFIED PREMIUM VERSION
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("es", "odwiedzAtelier");

export default function VisiteElAtelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="es" page="odwiedzAtelier" />
      <ModelPageTopBar backHref="/es" activeLanguage="ES" />

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
                El espacio del atelier
              </p>

              <h1 className="mt-4 text-3xl font-light leading-tight text-[#111] sm:text-4xl lg:text-5xl">
                Un lugar de encuentro con Alaudis
              </h1>
            </div>

            <div className="mt-10 sm:mt-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Vea los modelos de cerca
              </h3>

              <p className="mt-5 leading-8 text-white">
                Descubra la escala, la línea y la presencia del piano de cola en un espacio real. Compruebe cómo se percibe el modelo no en una pantalla, sino en el contacto físico con el material y el detalle.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Hable de los acabados
              </h3>

              <p className="mt-5 leading-8 text-white">
                Comente la elección del acabado, el carácter de la superficie, el tono del material y la composición general del instrumento, para que responda con armonía a la arquitectura y al interior.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Defina la orientación de una composición personalizada
              </h3>

              <p className="mt-5 leading-8 text-white">
                La visita puede ser el comienzo de un asesoramiento privado: una conversación sobre el modelo, el carácter del instrumento, su uso, la escala preferida y el lenguaje global de Alaudis.
              </p>
            </div>
          </div>
            </div>

            <div className="mt-6 border-t border-black/10 pt-6 sm:mt-8 sm:pt-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                01 · La experiencia de la visita
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Un encuentro con la marca en su entorno natural
              </h3>

              <p className="mt-5 leading-8 text-white">
                En el atelier puede ver los modelos Alaudis en un contexto tranquilo y privado, de cerca y sin prisas, con la posibilidad de conversar sobre las proporciones, los acabados, el uso previsto del instrumento y su lugar en un espacio concreto.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Una conversación privada
              </h3>

              <p className="mt-5 leading-8 text-white">
                El encuentro tiene el formato de una conversación privada. Así podemos tratar con calma los modelos, la escala deseada del instrumento, los acabados de alta gama y el lugar del piano de cola en un espacio concreto.
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
                Lo mejor es concertar la visita con antelación, para preparar un encuentro tranquilo y privado en torno a los modelos Alaudis y adaptar el desarrollo de la conversación a su proyecto.
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Link
                href="/es/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Concierte una conversación privada
              </Link>
              <Link
                href="/es/zwiedzanie-manufaktury"
                className="inline-flex rounded-full border border-[#d3bd8b]/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#d3bd8b] transition hover:bg-[#d3bd8b] hover:text-black"
              >
                Visita a la manufactura
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
            El siguiente paso
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Empiece por una conversación privada
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            La mejor manera de empezar una visita al atelier es un breve contacto previo: gracias a él prepararemos el encuentro en torno al modelo adecuado, al carácter buscado y a la orientación de la composición personalizada Alaudis.
          </p>

          <div className="mt-10">
            <Link
              href="/es/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Concierte una conversación privada
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
