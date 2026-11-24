// ==========================================================
// MODEL PAGE - ALAUDIS DREAM 275
// ==========================================================
// To jest osobna podstrona premium dla modelu ALAUDIS DREAM 275.
// Wersja językowa: ES
//
// Za co odpowiada ten plik:
// 1. pokazuje hero modelu 275
// 2. korzysta ze wspólnego górnego paska ModelPageTopBar
// 3. opisuje charakter brzmienia
// 4. pokazuje przeznaczenie modelu
// 5. pokazuje docelowe wnętrza i sceny
// 6. pokazuje galerię zdjęć
// 7. daje 2 główne wejścia:
//    - do konfiguratora
//    - do podglądu 3D
// 8. kończy się stopką Footer
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcia modelu
// - teksty sekcji
// - tytuł modelu
// - opisy charakteru
// - linki CTA
// - aktywny język w górnym pasku
//
// Ważne:
// - rozwijane menu języków nie jest kodowane tutaj ręcznie
// - bierze się z komponentu ModelPageTopBar
// - jeśli chcesz zmienić wygląd listy PL / EN / DE,
//   robisz to w: components/ModelPageTopBar.tsx
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

export const metadata = pageMetadata("es", "model275");

export default function ModelAlaudis275Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="es" page="model275" />
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
          - zawsze widoczny
          - powrót po lewej
          - logo na środku
          - języki po prawej
         ==================================================== */}
      <ModelPageTopBar backHref="/es" activeLanguage="ES" />

      {/* ====================================================
          HERO MODELU
         ==================================================== */}
      <HomeHero
        headingTitle
        alt="ALAUDIS DREAM 275"
        eyebrow="Modelo de concierto"
        title={["ALAUDIS", "DREAM 275"]}
        description="La máxima expresión de concierto de Alaudis, creada para la plena escala sonora, una proyección amplia y la presencia escénica. Es un modelo para espacios en los que el instrumento no solo completa el interior, sino que se convierte en su voz principal y en el punto central de toda la composición."
        actions={[
          { href: "/es/konfigurator?model=275", label: "Abra el configurador" },
          { href: "/es/odkryj-modele?model=275", label: "Véalo en 3D" },
        ]}
        scroll="Desplácese hacia abajo"
      />

      <ModelStorySignature model="275" language="ES" />

      {/* ====================================================
          CHARAKTER BRZMIENIA
         ==================================================== */}
      <ModelSoundCharacter
        eyebrow="Carácter sonoro"
        lead="ALAUDIS DREAM 275 despliega toda la escala del lenguaje sonoro de la marca. Ofrece una proyección extensa, un profundo fundamento en los graves, un amplio aliento armónico y un alcance escénico que permite al instrumento llenar con soltura espacios de mayor amplitud."
        text="Es un modelo para quienes esperan la máxima presencia: un gran volumen, una paleta dinámica amplia y un pleno carácter de concierto. Conserva la cultura sonora y la nobleza de Alaudis, pero las lleva a su forma más expansiva y representativa."
      />

      {/* ====================================================
          PRZEZNACZENIE + WNĘTRZA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* PRZEZNACZENIE */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Destino
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Escenario, sala de conciertos, residencia de lujo
            </h3>

            <p className="mt-5 leading-8 text-white">
              Creado para salas de conciertos, grandes espacios de representación,
              instituciones artísticas y los interiores privados más exigentes,
              en los que el piano de cola debe ofrecer una proyección plena y
              una gran presencia escénica.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Interiores y escenarios idóneos
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Escala, arquitectura, prestigio
            </h3>

            <p className="mt-5 leading-8 text-white">
              Encuentra su mejor lugar en espacios de gran amplitud: salones de
              representación, salas de conciertos, hoteles de lujo e interiores
              en los que el instrumento debe tener un carácter dominante,
              indiscutiblemente central y de un prestigio sobresaliente.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/88">
              Identidad del modelo
            </p>

            <h3 className="mt-4 text-2xl font-light">
              La máxima expresión de Alaudis
            </h3>

            <p className="mt-5 leading-8 text-white">
              ALAUDIS DREAM 275 representa la escala máxima de la marca: el
              instrumento de personalidad más desarrollada, aliento más
              amplio y naturaleza más concertística. Es Alaudis en su forma
              más plena, monumental y escénica.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          GALERIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Galería
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            ALAUDIS DREAM 275 a escala de concierto
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="ALAUDIS DREAM 275, vista 1"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="ALAUDIS DREAM 275, vista 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="ALAUDIS DREAM 275, vista 3"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          KOŃCOWE CTA
         ==================================================== */}
      <ModelBespokeOffer language="ES" model="275" />

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Siguiente paso
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configure ALAUDIS DREAM 275 o véalo en 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Acceda al configurador para ajustar el acabado y los detalles, o vea
            el modelo en la vista previa en 3D y compruebe su escala, sus
            proporciones y su presencia escénica en el espacio.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/es/konfigurator?model=275"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Abra el configurador
            </Link>

            <Link
              href="/es/odkryj-modele?model=275"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Véalo en 3D
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
