// ==========================================================
// MODEL PAGE - ALAUDIS LEO 214
// ==========================================================
// Wersja językowa: ES
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelSoundCharacter from "@/components/ModelSoundCharacter";
import HomeHero from "@/components/HomeHero";
import ModelBespokeOffer from "@/components/ModelBespokeOffer";
import ModelStorySignature from "@/components/ModelStorySignature";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("es", "model214");

export default function ModelAlaudis214Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="es" page="model214" />
      <ModelPageTopBar backHref="/es" activeLanguage="ES" />

      <HomeHero
        headingTitle
        alt="ALAUDIS LEO 214"
        eyebrow="Modelo de alta gama"
        title={["ALAUDIS", "LEO 214"]}
        description="Más profundo, más presente y de carácter más concertístico. ALAUDIS LEO 214 ha sido concebido como un modelo para quienes esperan una mayor amplitud sonora, una proyección más amplia y una presencia del instrumento aún más marcada en un interior de alta gama."
        actions={[
          { href: "/es/konfigurator?model=214", label: "Abra el configurador" },
          { href: "/es/odkryj-modele?model=214", label: "Véalo en 3D" },
        ]}
        scroll="Desplácese hacia abajo"
      />

      <ModelStorySignature model="214" language="ES" />

      <ModelSoundCharacter
        eyebrow="Carácter sonoro"
        lead="ALAUDIS LEO 214 desarrolla el lenguaje sonoro de la marca hacia una mayor escala y una presencia más intensa. Ofrece un sonido más abierto, más profundo en los graves y con mayor proyección en los medios, sin perder cultura sonora, elegancia ni nobleza musical."
        text="Es un modelo para quienes desean sentir una mayor amplitud del instrumento: una proyección más amplia, un volumen más perceptible y una paleta dinámica más rica. Sigue siendo refinado, pero con una presencia escénica más decidida."
      />

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Destino
            </p>
            <h3 className="mt-4 text-2xl font-light">Salón y escenario de cámara</h3>
            <p className="mt-5 leading-8 text-white">Ideal para residencias amplias, salas de música privadas, hoteles boutique y escenarios de cámara, donde el instrumento debe ser no solo bello, sino también más nítido y de mayor proyección sonora.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Interiores idóneos
            </p>
            <h3 className="mt-4 text-2xl font-light">Espacio, luz, presencia</h3>
            <p className="mt-5 leading-8 text-white">Encuentra su mejor lugar en interiores modernos de alta gama, apartamentos clásicos, salones de representación y espacios en los que el piano de cola debe convertirse en el centro inequívoco de la composición.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identidad del modelo
            </p>
            <h3 className="mt-4 text-2xl font-light">Entre la elegancia y la escala</h3>
            <p className="mt-5 leading-8 text-white">ALAUDIS LEO 214 es una propuesta para quienes desean conservar la distinción visual de un modelo de alta gama y, a la vez, acceder a una escala sonora más amplia y a una personalidad escénica más marcada del instrumento.</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galería
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS LEO 214 en acabados de alta gama
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/3.jpg" alt="ALAUDIS LEO 214, vista 1" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/5.jpg" alt="ALAUDIS LEO 214, vista 2" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/2.jpg" alt="ALAUDIS LEO 214, vista 3" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <ModelBespokeOffer language="ES" model="214" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Siguiente paso
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configure ALAUDIS LEO 214 o véalo en 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Acceda al configurador para ajustar el acabado y los detalles, o vea el modelo en la vista previa en 3D y compruebe su presencia en el espacio.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/es/konfigurator?model=214"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Abra el configurador
            </Link>

            <Link
              href="/es/odkryj-modele?model=214"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Véalo en 3D
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
