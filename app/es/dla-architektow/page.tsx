//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - PARA ARQUITECTOS
// ==========================================================
// SIMPLIFIED PREMIUM VERSION
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("es", "dlaArchitektow");

export default function ParaArquitectosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="es" page="dlaArchitektow" />
      <ModelPageTopBar backHref="/es" activeLanguage="ES" />

      <section className="bg-neutral-950 px-6 pb-24 pt-32 sm:pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Inspiración para el proyecto
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Escala, material, presencia
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis - inspiración para el proyecto 1"
                fill
                priority
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis - inspiración para el proyecto 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis - inspiración para el proyecto 3"
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
              Alaudis puede convertirse en parte integrante de una residencia, un apartamento, un hotel o un espacio de representación: no como un objeto más, sino como un elemento elegido a conciencia dentro de la composición del interior.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/95 sm:text-[15px] sm:leading-8">
              Colaboramos en proyectos en los que cuentan la proporción, el material, la luz, el carácter y la presencia del instrumento en un espacio de alta gama.
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

              <h2 className="mt-4 text-2xl font-light text-white">
                El modelo adecuado a la escala del interior
              </h2>

              <p className="mt-5 leading-8 text-white">
                Ayudamos a elegir el tamaño y el carácter del modelo según las proporciones del espacio: desde salones y apartamentos hasta grandes residencias, vestíbulos y zonas de representación de hoteles.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h2 className="mt-4 text-2xl font-light text-white">
                Un acabado coherente con el proyecto
              </h2>

              <p className="mt-5 leading-8 text-white">
                Hablamos del tono del material, del brillo, del carácter de la superficie, de la gama cromática y de los detalles, para que el instrumento participe en el relato del interior en lugar de ser un añadido casual.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03
              </p>

              <h2 className="mt-4 text-2xl font-light text-white">
                Asesoramiento de proyecto de alta gama
              </h2>

              <p className="mt-5 leading-8 text-white">
                La colaboración puede comenzar con una conversación privada sobre el proyecto, en la que definimos juntos la orientación: modelo, presencia en el espacio, acabado y efecto visual final.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">Residencias</h2>
              <p className="mt-4 leading-7 text-white">
                El piano de cola como elemento central de un salón, una biblioteca o una zona de representación.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">
                Apartamentos de lujo
              </h2>
              <p className="mt-4 leading-7 text-white">
                El modelo adecuado para un espacio más pequeño, pero diseñado muy a conciencia.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">Hoteles de lujo</h2>
              <p className="mt-4 leading-7 text-white">
                La presencia del instrumento en vestíbulos, suites y espacios de gran valor para la imagen.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">
                Espacios de representación
              </h2>
              <p className="mt-4 leading-7 text-white">
                Proyectos en los que cuentan el prestigio, la escala, el detalle y una marcada identidad del interior.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Conversación sobre el proyecto
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Empecemos por la orientación del proyecto
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Si trabaja en una residencia, un apartamento, un hotel o un interior de representación, podemos empezar con una conversación tranquila sobre el modelo, el acabado y el papel del instrumento en la composición global del espacio.
          </p>

          <div className="mt-10">
            <Link
              href="/es/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Concierte una conversación sobre el proyecto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
