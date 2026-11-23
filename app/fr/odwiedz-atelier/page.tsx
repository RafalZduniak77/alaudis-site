//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - VISITEZ L’ATELIER
// ==========================================================
// VERSION PREMIUM SIMPLIFIÉE
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("fr", "odwiedzAtelier");

export default function VisitezLatelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="fr" page="odwiedzAtelier" />
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <section
        id="doswiadczenie"
        className="scroll-mt-20 bg-black px-6 pb-20 pt-36 sm:px-10 sm:pb-24 sm:pt-40 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          {/* Tytuł i opis nad zdjęciami */}
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#d3bd8b]">
                Expérience de la visite
              </p>

              <h1 className="mt-6 text-4xl font-extralight leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.04]">
                Une rencontre avec la marque
              <br />
              dans son environnement naturel
              </h1>
            </div>

            <div className="lg:pb-3">
              <div aria-hidden="true" className="mb-7 h-px w-16 bg-[#d3bd8b]/70" />
              <p className="max-w-xl text-[15px] leading-8 text-white/80 sm:text-base sm:leading-9">
                Dans l’atelier, vous pouvez découvrir les modèles Alaudis dans un
              cadre calme et privé, de près, sans précipitation, avec la
              possibilité d’échanger sur les proportions, les finitions, la
              destination de l’instrument et sa place dans un espace concret.
              </p>
            </div>
          </div>

          {/* Zdjęcia atelier: jedno duże i dwa mniejsze */}
          <div className="mt-14 grid gap-4 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src="/galeria-home/3.jpg"
                alt="Atelier Alaudis - vue 1"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3]">
              <Image
                src="/galeria-home/5.jpg"
                alt="Atelier Alaudis - vue 2"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3]">
              <Image
                src="/galeria-home/2.jpg"
                alt="Atelier Alaudis - vue 3"
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
            Espace de l’atelier
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Un lieu de rencontre avec Alaudis
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Voir les modèles de près
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Découvrez l’échelle, la ligne et la présence du piano dans un
                espace réel. Voyez comment le modèle se perçoit non pas à
                l’écran, mais dans un contact physique avec le matériau et le
                détail.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Parler des finitions
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Discutez du choix de la finition, du caractère de la surface, de
                la tonalité du matériau et de la composition générale de
                l’instrument afin qu’elle réponde harmonieusement à
                l’architecture et à l’intérieur.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Définir la direction d’une composition individuelle
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                La visite peut devenir le début d’une consultation privée,
                une conversation autour du modèle, du caractère de
                l’instrument, de son usage, de l’échelle souhaitée et du langage
                global d’Alaudis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              Localisation
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Organisez une visite à l’atelier
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/90">
              La rencontre se déroule sous la forme d’un échange privé. Cela
              nous permet de discuter sereinement des modèles, de l’échelle
              souhaitée de l’instrument, des finitions premium et de la place du
              piano dans un espace concret.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">
              Atelier / SAP Renovation
            </p>

            <p className="mt-5 text-2xl font-light text-white">
              Obozowa 18
              <br />
              62-800 Kalisz
            </p>

            <p className="mt-6 leading-8 text-white/90">
              Il est préférable de planifier les visites à l’avance afin que
              nous puissions préparer une rencontre calme et privée autour des
              modèles Alaudis et adapter le déroulement de l’échange à votre
              projet.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/fr/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Organiser un échange privé
              </Link>
              <Link
                href="/fr/zwiedzanie-manufaktury"
                className="inline-flex rounded-full border border-[#d3bd8b]/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#d3bd8b] transition hover:bg-[#d3bd8b] hover:text-black"
              >
                Visite de la manufacture
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/75">
            Étape suivante
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Commencez par un échange privé
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/90">
            Le meilleur début pour une visite à l’atelier est un premier contact
            rapide, grâce à lui, nous préparerons la rencontre autour du bon
            modèle, du caractère recherché et de la direction de la composition
            individuelle Alaudis.
          </p>

          <div className="mt-10">
            <Link
              href="/fr/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Organiser un échange privé
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
