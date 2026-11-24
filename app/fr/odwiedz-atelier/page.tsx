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

      <section className="bg-black px-6 pb-10 pt-32 sm:px-10 sm:pb-12 sm:pt-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Zdjęcia atelier: jedno duże i dwa mniejsze */}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[36px] aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto">
              <Image
                src="/galeria-home/3.jpg"
                alt="Atelier Alaudis - vue 1"
                fill
                priority
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
      <section
        id="doswiadczenie"
        className="scroll-mt-20 bg-black px-3 pb-16 sm:px-6 sm:pb-20"
      >
        {/* Jasny panel z ciemnymi kartami — jak „Kolekcja ALAUDIS” na stronie głównej */}
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-5 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[#8a6d35]">
                Espace de l’atelier
              </p>

              <h1 className="mt-4 text-3xl font-light leading-tight text-[#111] sm:text-4xl lg:text-5xl">
                Un lieu de rencontre avec Alaudis
              </h1>
            </div>

            <div className="mt-10 sm:mt-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
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

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
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

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
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

            <div className="mt-6 border-t border-black/10 pt-6 sm:mt-8 sm:pt-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                01 · Expérience de la visite
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Une rencontre avec la marque dans son environnement naturel
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Dans l’atelier, vous pouvez découvrir les modèles Alaudis dans un cadre calme et privé, de près, sans précipitation, avec la possibilité d’échanger sur les proportions, les finitions, la destination de l’instrument et sa place dans un espace concret.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Une conversation privée
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                La rencontre se déroule sous la forme d’un échange privé. Cela nous permet de discuter sereinement des modèles, de l’échelle souhaitée de l’instrument, des finitions premium et de la place du piano dans un espace concret.
              </p>
            </div>

            <div className="flex flex-col rounded-[30px] border border-black/10 bg-[#0b0b0b] p-7 text-left shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/75">
                03 · Atelier / SAP Renovation
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Obozowa 18
                <br />
                62-800 Kalisz
              </h3>

              <p className="mt-5 leading-8 text-white/90">
                Il est préférable de planifier les visites à l’avance afin que nous puissions préparer une rencontre calme et privée autour des modèles Alaudis et adapter le déroulement de l’échange à votre projet.
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
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
