// ==========================================================
// HOME PAGE - ALAUDIS
// ==========================================================
// VERSION AMÉLIORÉE
// ----------------------------------------------------------
// Ce qui a été amélioré dans cette version :
// 1. le slogan principal a été rétabli :
//    "ARTISANAT, DÉTAIL, IDENTITÉ."
// 2. la navigation vers la section « Modèles » a été améliorée
// 3. après le clic sur « Modèles », la section se place plus haut
// 4. l’ancien bouton a été rétabli :
//    "Réserver une consultation privée"
// 5. le sélecteur de langue fonctionne
// 6. le header est fixé
// 7. ajout d’un fond premium flouté sous le header
// 8. le piano du hero a été légèrement réduit
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import ScrollModelsShowcase from "@/components/ScrollModelsShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          HERO
         ==================================================== */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/hero.png"
          alt="Piano à queue Alaudis"
          fill
          priority
          className="object-contain object-center scale-[0.86] sm:scale-[0.88] lg:scale-[0.9]"
        />

        <div className="absolute inset-0 z-10 bg-black/30" />

        {/* ==================================================
            HEADER
           ================================================== */}
        <header className="fixed inset-x-0 top-0 z-50">
          <div className="relative mx-auto grid max-w-7xl grid-cols-3 items-start px-6 pb-6 pt-12 lg:px-10">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/45 to-transparent backdrop-blur-md" />

            {/* GAUCHE */}
            <div className="ml-8 flex items-center gap-4">
              <a
                href="#modeles"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Modèles
              </a>

              <Link
                href="/fr/kontakt"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Contact
              </Link>

              <a
                href="#histoire"
                className="inline-flex rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Histoire
              </a>
            </div>

            {/* CENTRE */}
            <div className="justify-self-center pt-2">
              <Image
                src="/logo-alaudis.png"
                alt="Logo Alaudis"
                width={77}
                height={25}
                priority
                className="h-auto w-[60px] object-contain opacity-95 md:w-[77px]"
              />
            </div>

            {/* DROITE */}
            <div className="justify-self-end">
              <details className="group relative">
                <summary className="list-none cursor-pointer rounded-full border border-white/35 bg-black/10 px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black">
                  <span className="inline-flex items-center gap-2">
                    FR
                    <span className="text-[10px] transition group-open:rotate-180">
                      ▼
                    </span>
                  </span>
                </summary>

                <div className="absolute right-0 mt-3 min-w-[150px] overflow-hidden rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl">
                  <Link
                    href="/"
                    className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    PL
                  </Link>

                  <Link
                    href="/en"
                    className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    EN
                  </Link>

                  <Link
                    href="/de"
                    className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                  >
                    DE
                  </Link>

                  <Link
                    href="/fr"
                    className="block w-full bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                  >
                    FR
                  </Link>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* ==================================================
            CENTRE HERO
           ================================================== */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl pt-16">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/85">
              Alaudis Atelier
            </p>

            <h1 className="text-2xl font-light uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Artisanat,
              <br />
              détail, identité.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              Chaque Alaudis naît de l’union entre artisanat, proportion,
              matière noble et caractère sonore individuel.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/fr/konfigurator"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Ouvrir le configurateur
              </Link>

              <Link
                href="/fr/kontakt"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Réserver une consultation privée
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            BAS HERO
           ================================================== */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Faire défiler vers le bas
          </p>
        </div>
      </section>

      <div className="relative z-0">
        <ScrollModelsShowcase />
      </div>

      {/* ====================================================
          BLOC COLLECTION
         ==================================================== */}
      <section className="relative z-20 bg-neutral-950">
        <section
          id="modeles"
          className="scroll-mt-0 px-6 pb-10 pt-10 text-center sm:scroll-mt-2 sm:px-10 sm:pt-14 lg:scroll-mt-4 lg:px-16 lg:pt-16"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Collection Alaudis
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[58px] lg:leading-[1.08]">
            Trois échelles de présence.
            <br />
            Une seule philosophie de l’artisanat.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-white/68 sm:text-[17px]">
            Chaque modèle Alaudis est conçu comme une interprétation singulière
            de la proportion, du caractère et du son — d’une présence raffinée
            dans un intérieur à l’échelle complète d’un piano de concert.
          </p>
        </section>

        <section className="relative z-30 grid gap-6 px-6 pb-24 sm:px-10 lg:grid-cols-3 lg:px-16">
          <Link
            href="/fortepiany/alaudis-178"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Modèle
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 178</h2>

            <p className="mt-5 leading-7 text-white/68">
              Une interprétation lyrique du piano premium — élégante, équilibrée
              et pensée pour les intérieurs où le détail compte autant que le
              son.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Découvrir le modèle
            </p>
          </Link>

          <Link
            href="/fortepiany/alaudis-214"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Modèle
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 214</h2>

            <p className="mt-5 leading-7 text-white/68">
              Un piano à queue à la présence plus profonde et à la projection
              plus large — pour les espaces qui demandent plus d’ampleur, de
              clarté et un caractère plus concertant.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Découvrir le modèle
            </p>
          </Link>

          <Link
            href="/fortepiany/alaudis-275"
            className="relative z-30 block rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:from-white/15 hover:to-white/[0.05]"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Modèle
            </p>

            <h2 className="mt-4 text-3xl font-light">Alaudis 275</h2>

            <p className="mt-5 leading-7 text-white/68">
              La plus grande forme de concert Alaudis — pleine échelle sonore,
              projection et présence scénique conçues pour les espaces les plus
              exigeants.
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/75">
              Découvrir le modèle
            </p>
          </Link>
        </section>
      </section>

      {/* ====================================================
          SECTION CONTACT
         ==================================================== */}
      <section
        id="contact"
        className="bg-black px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Consultation privée
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Parlons de votre Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Contactez-nous pour discuter du modèle, de la finition, du caractère
          sonore et de la composition individuelle de votre piano Alaudis.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/fr/konfigurator"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Ouvrir le configurateur
          </Link>

          <Link
            href="/fr/kontakt"
            className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Contactez-nous
          </Link>
        </div>
      </section>

      {/* ====================================================
          SECTION HISTOIRE
         ==================================================== */}
      <section
        id="histoire"
        className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/45">
          Héritage et artisanat
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          L’univers Alaudis
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Découvrez la philosophie de la marque, le processus de création des
          instruments et l’artisanat qui donne à chaque Alaudis sa propre
          identité.
        </p>
      </section>

      <Footer />
    </main>
  );
}
