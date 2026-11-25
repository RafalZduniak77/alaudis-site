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

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export const metadata = pageMetadata("fr", "dlaArchitektow");

export default function PourLesArchitectesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="fr" page="dlaArchitektow" />
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <section className="bg-neutral-950 px-6 pb-24 pt-32 sm:pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Inspiration de projet
          </p>

          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Échelle, matériau, présence
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis - inspiration de projet 1"
                fill
                priority
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.jpg"
                alt="Alaudis - inspiration de projet 2"
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis - inspiration de projet 3"
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
              Alaudis peut devenir une partie intégrante d’une résidence, d’un
              appartement, d’un hôtel ou d’un intérieur représentatif, non pas
              comme un objet ordinaire, mais comme un élément consciemment choisi
              de la composition intérieure.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/95 sm:text-[15px] sm:leading-8">
              Nous collaborons sur des projets où la proportion, le matériau, la
              lumière, le caractère et la présence de l’instrument dans un
              espace premium comptent véritablement.
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
                Choix du modèle selon l’échelle de l’intérieur
              </h2>

              <p className="mt-5 leading-8 text-white">
                Nous aidons à choisir la taille et le caractère du modèle en
                fonction des proportions de l’espace, des salons et appartements
                aux résidences plus vastes, lobbys et zones représentatives
                d’hôtels.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                02
              </p>

              <h2 className="mt-4 text-2xl font-light text-white">
                Finition cohérente avec le projet
              </h2>

              <p className="mt-5 leading-8 text-white">
                Nous parlons de la tonalité du matériau, de la brillance, du
                caractère de la surface, de la palette de couleurs et des
                détails, afin que l’instrument participe à la narration de
                l’intérieur au lieu d’être un ajout aléatoire.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/88">
                03
              </p>

              <h2 className="mt-4 text-2xl font-light text-white">
                Consultation de projet premium
              </h2>

              <p className="mt-5 leading-8 text-white">
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">Résidences</h2>
              <p className="mt-4 leading-7 text-white">
                Le piano comme élément central d’un salon, d’une bibliothèque ou
                d’un espace représentatif.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">
                Appartements premium
              </h2>
              <p className="mt-4 leading-7 text-white">
                Choisir le bon modèle pour un espace plus petit mais pensé avec
                beaucoup de précision.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">Hôtels de luxe</h2>
              <p className="mt-4 leading-7 text-white">
                La présence de l’instrument dans les lobbys, suites et espaces à
                forte valeur d’image.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
              <h2 className="text-xl font-light text-white">
                Intérieurs représentatifs
              </h2>
              <p className="mt-4 leading-7 text-white">
                Des projets où le prestige, l’échelle, le détail et une forte
                identité intérieure comptent réellement.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Échange de projet
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Commençons par la direction du projet
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
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
