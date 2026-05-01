// ==========================================================
// MODEL PAGE - ALAUDIS 275
// ==========================================================
// Wersja językowa: FR
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function ModelAlaudis275Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <section className="relative overflow-hidden border-b border-white/10 pt-28">
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

        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Modèle de concert
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 275
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              La plus grande forme de concert Alaudis — créée pour une pleine échelle sonore, une large projection et une présence scénique.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/fr/konfigurator"
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
            <p className="leading-8">Alaudis 275 ouvre toute l’échelle du langage sonore de la marque. Il offre une projection étendue, un grave profond et une grande portée scénique.</p>
            <p className="leading-8">Ce modèle s’adresse à ceux qui recherchent une présence maximale, un grand volume et un plein caractère de concert.</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Destination
            </p>
            <h3 className="mt-4 text-2xl font-light">Scène, salle de concert, résidence premium</h3>
            <p className="mt-5 leading-8 text-white/68">Créé pour les salles de concert, les grands espaces de réception, les institutions artistiques et les intérieurs privés les plus exigeants.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Intérieurs et scènes cibles
            </p>
            <h3 className="mt-4 text-2xl font-light">Échelle, architecture, prestige</h3>
            <p className="mt-5 leading-8 text-white/68">Il s’exprime pleinement dans les salons de réception, les salles de concert, les hôtels de luxe et les intérieurs prestigieux.</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Identité du modèle
            </p>
            <h3 className="mt-4 text-2xl font-light">La plus grande forme Alaudis</h3>
            <p className="mt-5 leading-8 text-white/68">Alaudis 275 représente l’échelle la plus élevée de la marque — monumentale, complète et scénique.</p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Alaudis 275 à l’échelle de concert
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/3.jpg" alt="Alaudis 275 - 1" fill className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/5.JPG" alt="Alaudis 275 - 2" fill className="object-cover" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image src="/galeria-home/2.jpg" alt="Alaudis 275 - 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Prochaine étape
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Configurez Alaudis 275 ou découvrez-le en 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Accédez au configurateur pour choisir la finition et les détails, ou découvrez le modèle en 3D.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/fr/konfigurator"
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

      <Footer />
    </main>
  );
}
