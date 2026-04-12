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

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function VisitezLatelierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Visitez l’atelier Alaudis"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Alaudis Atelier
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Visitez l’atelier
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Découvrez Alaudis dans un espace où l’artisanat, le détail et le
              caractère de l’instrument rencontrent un échange privé autour du
              modèle, de la finition et de la composition individuelle du piano.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              Une visite à l’atelier est un moment calme et personnel avec la
              marque — non seulement une présentation du modèle, mais une
              expérience de son échelle, de sa présence et de son identité.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#experience" className="block">
            <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
              <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
              Faire défiler vers le bas
            </p>
          </a>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Expérience de la visite
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Une rencontre avec la marque
              <br />
              dans son environnement naturel
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/68">
              Dans l’atelier, vous pouvez découvrir les modèles Alaudis dans un
              cadre calme et privé — de près, sans précipitation, avec la
              possibilité d’échanger sur les proportions, les finitions, la
              destination de l’instrument et sa place dans un espace concret.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Voir les modèles de près
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Découvrez l’échelle, la ligne et la présence du piano dans un
                espace réel. Voyez comment le modèle se perçoit non pas à
                l’écran, mais dans un contact physique avec le matériau et le
                détail.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Parler des finitions
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Discutez du choix de la finition, du caractère de la surface, de
                la tonalité du matériau et de la composition générale de
                l’instrument afin qu’elle réponde harmonieusement à
                l’architecture et à l’intérieur.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Définir la direction d’une composition individuelle
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                La visite peut devenir le début d’une consultation privée —
                une conversation autour du modèle, du caractère de
                l’instrument, de son usage, de l’échelle souhaitée et du langage
                global d’Alaudis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Espace de l’atelier
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Un lieu de rencontre avec Alaudis
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Atelier Alaudis - vue 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Atelier Alaudis - vue 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Atelier Alaudis - vue 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Localisation
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Organisez une visite à l’atelier
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-white/68">
              La rencontre se déroule sous la forme d’un échange privé. Cela
              nous permet de discuter sereinement des modèles, de l’échelle
              souhaitée de l’instrument, des finitions premium et de la place du
              piano dans un espace concret.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Atelier / SAP Renovation
            </p>

            <p className="mt-5 text-2xl font-light text-white">
              Obozowa 18
              <br />
              62-800 Kalisz
            </p>

            <p className="mt-6 leading-8 text-white/68">
              Il est préférable de planifier les visites à l’avance afin que
              nous puissions préparer une rencontre calme et privée autour des
              modèles Alaudis et adapter le déroulement de l’échange à votre
              projet.
            </p>

            <div className="mt-8">
              <Link
                href="/fr/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Organiser un échange privé
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Étape suivante
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Commencez par un échange privé
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Le meilleur début pour une visite à l’atelier est un premier contact
            rapide — grâce à lui, nous préparerons la rencontre autour du bon
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
