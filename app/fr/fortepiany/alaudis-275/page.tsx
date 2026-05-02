// ==========================================================
// MODEL PAGE - ALAUDIS 275
// ==========================================================
// To jest osobna podstrona premium dla modelu Alaudis 275.
// Wersja językowa: FR
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

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function ModelAlaudis275Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
          - zawsze widoczny
          - powrót po lewej
          - logo na środku
          - języki po prawej
         ==================================================== */}
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      {/* ====================================================
          HERO MODELU
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        {/* TŁO HERO */}
        <div className="absolute inset-0">
          <Image
            src="/galeria-home/3.jpg"
            alt="Alaudis 275"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Modèle de concert
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 275
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              La plus grande forme de concert Alaudis — créée pour une pleine
              échelle sonore, une large projection et une présence scénique.
              C’est un modèle destiné aux espaces dans lesquels l’instrument ne
              complète pas seulement l’intérieur, mais devient sa voix principale
              et le point central de toute la composition.
            </p>

            {/* ==================================================
                CTA HERO
               ================================================== */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/fr/konfigurator?model=275"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Ouvrir le configurateur
              </Link>

              <Link
                href="/fr/odkryj-modele"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Voir en 3D
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CHARAKTER BRZMIENIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Caractère sonore
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Monumental, porteur, pleinement concertant
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              Alaudis 275 ouvre toute l’échelle du langage sonore de la marque.
              Il offre une projection étendue, un fondement grave profond, une
              large respiration harmonique et une portée scénique qui permet à
              l’instrument de remplir librement de grands espaces.
            </p>

            <p className="leading-8">
              C’est un modèle destiné à ceux qui recherchent une présence
              maximale : un grand volume, une palette dynamique développée et un
              plein caractère de concert. Il conserve la culture et la noblesse
              d’Alaudis, mais les développe dans leur forme la plus expansive et
              la plus représentative.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          PRZEZNACZENIE + WNĘTRZA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* PRZEZNACZENIE */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Destination
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Scène, salle de concert, résidence premium
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Créé pour les salles de concert, les grands espaces de réception,
              les institutions artistiques ainsi que les intérieurs privés les
              plus exigeants, dans lesquels le piano doit offrir une projection
              complète et une grande présence scénique.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Intérieurs et scènes cibles
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Échelle, architecture, prestige
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Il s’exprime pleinement dans les espaces à grande respiration :
              salons de réception, salles de concert, hôtels de classe luxury
              ainsi que les intérieurs dans lesquels l’instrument doit avoir un
              caractère dominant, incontestablement central et hautement
              prestigieux.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Identité du modèle
            </p>

            <h3 className="mt-4 text-2xl font-light">
              La plus grande forme Alaudis
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Alaudis 275 représente l’échelle la plus élevée de la marque — un
              instrument à la personnalité la plus développée, à la respiration
              la plus large et à la nature la plus concertante. C’est Alaudis
              dans sa forme la plus complète, monumentale et scénique.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          GALERIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Alaudis 275 à l’échelle de concert
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis 275 - vue 1"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.JPG"
                alt="Alaudis 275 - vue 2"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis 275 - vue 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          KOŃCOWE CTA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Prochaine étape
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configurez Alaudis 275 ou découvrez-le en 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Accédez au configurateur pour adapter la finition et les détails, ou
            découvrez le modèle en aperçu 3D et vérifiez son échelle, ses
            proportions ainsi que sa présence scénique dans l’espace.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/fr/konfigurator?model=275"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Ouvrir le configurateur
            </Link>

            <Link
              href="/fr/odkryj-modele"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Voir en 3D
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
