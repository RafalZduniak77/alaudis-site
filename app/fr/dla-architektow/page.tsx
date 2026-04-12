//
//  page.tsx
//
//  Created by Rafal Zduniak on 23/03/2026.
//
// ==========================================================
// PAGE - POUR LES ARCHITECTES
// ==========================================================
// VERSION PREMIUM SIMPLIFIÉE
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function PourLesArchitectesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Alaudis pour les architectes"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/74" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Collaboration de projet
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Pour les architectes
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Alaudis peut devenir une partie intégrante d’une résidence, d’un
              appartement, d’un hôtel ou d’un intérieur représentatif — non pas
              comme un objet ordinaire, mais comme un élément consciemment choisi
              de la composition intérieure.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              Nous collaborons sur des projets où la proportion, le matériau, la
              lumière, le caractère et la présence de l’instrument dans un
              espace premium comptent véritablement.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#collaboration" className="block">
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
        id="collaboration"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Collaboration
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Le piano comme partie
              <br />
              de l’architecture intérieure
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              Dans les projets premium, un piano n’est pas seulement un
              instrument. Il peut devenir le centre de gravité d’un salon, la
              présence dominante d’un espace représentatif ou un signe subtil
              mais clair du caractère d’un lieu.
            </p>

            <p className="leading-8">
              C’est pourquoi nous proposons Alaudis comme un élément de projet :
              consciemment accordé aux matériaux, à la lumière, à l’échelle de
              l’intérieur, au style du mobilier et au langage souhaité de
              l’ensemble de la réalisation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Domaines de collaboration
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Comment nous travaillons avec les architectes et les designers
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                01
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Choix du modèle selon l’échelle de l’intérieur
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Nous aidons à choisir la taille et le caractère du modèle en
                fonction des proportions de l’espace — des salons et appartements
                aux résidences plus vastes, lobbys et zones représentatives
                d’hôtels.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                02
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Finition cohérente avec le projet
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Nous parlons de la tonalité du matériau, de la brillance, du
                caractère de la surface, de la palette de couleurs et des
                détails, afin que l’instrument participe à la narration de
                l’intérieur au lieu d’être un ajout aléatoire.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                03
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Consultation de projet premium
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                La collaboration peut commencer par un échange privé autour du
                projet, au cours duquel nous définissons ensemble la direction :
                modèle, présence dans l’espace, finition et effet visuel final.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Types de projets
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Les projets dans lesquels Alaudis trouve naturellement sa place
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Résidences</h3>
              <p className="mt-4 leading-7 text-white/68">
                Le piano comme élément central d’un salon, d’une bibliothèque ou
                d’un espace représentatif.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Appartements premium
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Choisir le bon modèle pour un espace plus petit mais pensé avec
                beaucoup de précision.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">Hôtels de luxe</h3>
              <p className="mt-4 leading-7 text-white/68">
                La présence de l’instrument dans les lobbys, suites et espaces à
                forte valeur d’image.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-light text-white">
                Intérieurs représentatifs
              </h3>
              <p className="mt-4 leading-7 text-white/68">
                Des projets où le prestige, l’échelle, le détail et une forte
                identité intérieure comptent réellement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Inspiration de projet
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Échelle, matériau, présence
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis - inspiration de projet 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis - inspiration de projet 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis - inspiration de projet 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Échange de projet
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Commençons par la direction du projet
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Si vous travaillez sur une résidence, un appartement, un hôtel ou
            un intérieur représentatif, nous pouvons commencer par un échange
            calme autour du modèle, de la finition et du rôle de l’instrument
            dans la composition globale de l’espace.
          </p>

          <div className="mt-10">
            <Link
              href="/fr/kontakt"
              className="inline-flex rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Organiser un échange de projet
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
