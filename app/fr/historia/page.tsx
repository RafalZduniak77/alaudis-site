"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

type StorySection = {
  eyebrow: string;
  title: string;
  text: string[];
  image: string;
  imageAlt: string;
  align: "left" | "right";
};

const storySections: StorySection[] = [
  {
    eyebrow: "L’univers Alaudis",
    title: "Un piano à queue doté de sa propre âme",
    text: [
      "SAP Alaudis est un piano à queue exceptionnel dont l’ambition est de capturer la beauté envoûtante et la sonorité du chant de l’alouette. Il est né du désir de créer un instrument magistral, capable d’émerveiller par son timbre, de susciter l’émotion et de devenir le prolongement naturel de l’âme du pianiste.",
      "Le piano Alaudis est l’œuvre de mains humaines, de patience et d’amour du son. Nous n’avons pas recours à la production en série, chaque instrument naît individuellement, dans un processus empreint de précision et d’un artisanat d’excellence.",
      "Notre objectif n’est pas seulement de construire un piano à queue, mais de créer une œuvre d’art, un instrument avec une âme, capable de séduire aussi bien le pianiste que l’auditeur.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "L’âme du piano Alaudis",
    align: "left",
  },
  {
    eyebrow: "Matériau et philosophie",
    title: "Le piano est un bois qui chante",
    text: [
      "Tout commence par le bois. À première vue, de simples planches empilées attendent leur heure, le moment où elles se transformeront en son. C’est en elles que se cache l’âme future du piano.",
      "Chez SAP Alaudis, nous choisissons le bois comme un artiste choisit les couleurs de son tableau. Nous y recherchons l’harmonie, l’élasticité et l’âme. Chaque essence possède sa propre voix, l’épicéa de résonance apporte chaleur et profondeur, le bouleau apporte la précision, tandis que l’érable et le hêtre offrent force et durabilité.",
      "Pendant des années, le bois mûrit dans des conditions naturelles avant d’arriver entre les mains de nos maîtres. Ce n’est qu’alors que commence la véritable transformation, de matière brute en vecteur d’émotion.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Bois destiné à la construction du piano Alaudis",
    align: "right",
  },
  {
    eyebrow: "Ceinture",
    title: "Stabilité et résonance de la structure",
    text: [
      "La ceinture d’Alaudis est réalisée à partir de fines feuilles de bouleau et d’érable soigneusement sélectionnés. Cette combinaison d’essences offre un équilibre idéal : l’élasticité et la souplesse de l’érable, ainsi que la stabilité et la résistance du bouleau.",
      "Chaque couche est disposée selon le sens du fil du bois, puis collée et cintrée sur une forme spéciale. Sous pression et température contrôlées, les feuilles donnent naissance à une ceinture monobloc qui conserve sa forme avec une précision absolue.",
      "Une telle structure laminée garantit une rigidité exceptionnelle, minimise les tensions internes et augmente la stabilité de l’accord, tout en permettant à la ceinture de collaborer activement avec la table d’harmonie.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Stabilité et résonance de la structure du piano Alaudis",
    align: "left",
  },
  {
    eyebrow: "Laquage",
    title: "Profondeur de surface et protection",
    text: [
      "Le laquage du piano SAP Alaudis a été réalisé avec le plus grand soin à l’aide du système de finition ICA, un fabricant italien renommé de revêtements dédiés aux instruments.",
      "Six couches d’apprêt et neuf couches de laque polyester de finition ont été appliquées sur le corps et les éléments de l’ébénisterie, garantissant une brillance exceptionnelle, une résistance aux rayures et une grande durabilité.",
      "Ce cycle de finition multicouche permet d’obtenir une surface lisse, profonde et miroir, qui non seulement souligne l’esthétique de l’instrument, mais protège également sa structure pendant de nombreuses années.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Laquage du piano Alaudis",
    align: "right",
  },
  {
    eyebrow: "Finition",
    title: "Polissage et qualité finale",
    text: [
      "SAP Renovation compte parmi les références européennes dans le domaine des finitions pour pianos. Au cours de plus de trois décennies, notre équipe a restauré 14 000 instruments.",
      "Le processus de ponçage et de polissage chez SAP Renovation associe l’artisanat de haut niveau à la technologie moderne. Dans le cas du piano SAP Alaudis, il a été mené avec une attention exceptionnelle portée à chaque détail.",
      "La surface finale du piano SAP Alaudis ne séduit pas seulement par son éclat et son esthétique, elle constitue aussi un élément intégral de la structure de l’instrument.",
    ],
    image: "/historia/5 Wykończenie.jpg",
    imageAlt: "Finition du piano Alaudis",
    align: "left",
  },
  {
    eyebrow: "Table d’harmonie",
    title: "Le cœur de la projection et de la couleur sonore",
    text: [
      "La table d’harmonie du piano Alaudis est réalisée en épicéa de qualité acoustique, fourni par le célèbre fabricant Strunz, et constitue un élément essentiel de la construction acoustique de l’instrument.",
      "Un bois soigneusement séché et sélectionné, ajusté avec précision à la structure de la ceinture, crée une surface résonante active qui transmet et amplifie les vibrations des cordes.",
      "Conçue dans l’esprit des plus belles traditions de facture pianistique, la table d’harmonie confère à l’instrument une pleine projection sonore et un équilibre tonal, des basses profondes aux aigus limpides.",
    ],
    image: "/historia/6 Dno rezonansowe.jpg",
    imageAlt: "Table d’harmonie du piano Alaudis",
    align: "right",
  },
  {
    eyebrow: "Chevalets",
    title: "Transmission précise des vibrations",
    text: [
      "Les chevalets de résonance Alaudis ont été fabriqués en érable dur soigneusement sélectionné, séché et stabilisé du point de vue hygrométrique.",
      "Leur construction multicouche a été renforcée par une tête en érable massif, ce qui assure une stabilité mécanique exceptionnelle et une grande tenue de l’accord.",
      "Cette conception garantit une rigidité élevée dans le sens longitudinal, permettant à l’énergie vibratoire des cordes d’être transmise à la table d’harmonie avec une efficacité maximale.",
    ],
    image: "/historia/7 Mostki klonowe .jpg",
    imageAlt: "Chevalets de résonance du piano Alaudis",
    align: "left",
  },
  {
    eyebrow: "Plan de cordes",
    title: "Échelle, énergie et stabilité de l’accord",
    text: [
      "Dans le plan de cordes du piano SAP Alaudis, nous utilisons des chevilles d’accord Diamant ainsi qu’un jeu de cordes en acier fabriquées à partir de fil Röslau.",
      "L’échelle des cordes a été conçue dans un programme de calcul dédié, qui optimise les diamètres, les longueurs vibrantes et les tensions cibles en tenant compte de l’inharmonicité ainsi que des caractéristiques sonores recherchées.",
      "Dans le piano SAP Alaudis, l’adéquation entre le choix du fil, des chevilles d’accord et des paramètres de l’échelle avec la résistance du cadre et de l’ensemble de la structure est essentielle.",
    ],
    image: "/historia/8 Naciąg.jpg",
    imageAlt: "Plan de cordes du piano Alaudis",
    align: "right",
  },
  {
    eyebrow: "Cordes basses",
    title: "Le fondement du registre grave",
    text: [
      'Les cordes basses ont été fournies par la société allemande Hellerbass, spécialisée dans les cordes basses bobinées avec précision pour les fabricants et les restaurateurs de pianos.',
      "Leur conception soutient une base sonore profonde et riche, tout en permettant de préserver la clarté et la projection dans le registre le plus grave.",
      "Ce sont précisément ces éléments qui créent la richesse et la majesté de la pleine échelle sonore du piano à queue.",
    ],
    image: "/historia/9 Struny basowe Heller.jpg",
    imageAlt: "Cordes basses Heller du piano Alaudis",
    align: "left",
  },
  {
    eyebrow: "Mécanique",
    title: "Réactivité et contrôle",
    text: [
      "La mécanique à marteaux du piano SAP Alaudis a été construite à partir de composants haut de gamme de la société Louis Renner GmbH, référence mondiale dans la fabrication de mécaniques de piano.",
      "Des marteaux façonnés avec précision, des manches stables et une géométrie de mécanique parfaitement réglée assurent une attaque claire, une répétition rapide et un contrôle total de la dynamique sonore.",
      "Grâce à une telle construction, SAP Alaudis se distingue par une réactivité exceptionnelle du clavier, offrant une précision de toucher allant du pianissimo le plus délicat jusqu’au fortissimo le plus ample.",
    ],
    image: "/historia/10 Mechanizm Renner.jpg",
    imageAlt: "Mécanique Renner du piano Alaudis",
    align: "right",
  },
  {
    eyebrow: "Clavier",
    title: "Précision et confort de jeu",
    text: [
      "Le clavier du piano SAP Alaudis a été développé en étroite collaboration avec la société renommée Kluge, considérée comme l’un des meilleurs fabricants de claviers premium.",
      "L’ajustement parfait des touches, la précision d’exécution et les détails esthétiques soulignent le caractère luxueux de l’instrument et soutiennent pleinement son potentiel de jeu.",
      "Le clavier devient ainsi non seulement un dispositif mécanique, mais aussi un élément intégral de l’expression artistique du pianiste.",
    ],
    image: "/historia/11 Klawiatura Kluge.jpg",
    imageAlt: "Clavier Kluge du piano Alaudis",
    align: "left",
  },
  {
    eyebrow: "Intonation",
    title: "Le réglage final du son",
    text: [
      "L’intonation du piano SAP Alaudis constitue l’une des étapes les plus exigeantes du processus de finition, le moment où la technique rencontre l’art.",
      "Chaque marteau est façonné et intoné individuellement afin d’obtenir l’équilibre idéal entre l’attaque, la portée sonore et la couleur du timbre.",
      "Le résultat est un son au spectre harmonique complet, parfaitement équilibré entre les registres, avec cette qualité chantante exceptionnelle caractéristique de l’alouette.",
    ],
    image: "/historia/12 Ostateczna regulacja intonacja .jpg",
    imageAlt: "Réglage final et intonation du piano Alaudis",
    align: "right",
  },
];

type ProductionVideo = {
  src: string;
  title: string;
  text: string;
};

const productionVideos: ProductionVideo[] = [
  {
    src: "/historia-video-web/historia-01.mp4",
    title: "Ponçage et ajustement du cadre en fonte",
    text: "Préparation précise du cadre en fonte avant la poursuite de l’assemblage acoustique. Cette étape exige l’ajustement exact des surfaces de contact, le contrôle des points d’appui et le respect de la géométrie de la structure du piano.",
  },
  {
    src: "/historia-video-web/historia-02.mp4",
    title: "Profilage des nervures de la table d’harmonie",
    text: "Mise en forme des nervures de la table d’harmonie, responsables de la stabilité, de l’élasticité et du bon fonctionnement acoustique de la surface résonante. Leur profil influence directement la courbure et la réponse de la table aux vibrations.",
  },
  {
    src: "/historia-video-web/historia-03.mp4",
    title: "Nettoyage des nervures après les résidus de colle",
    text: "Travail minutieux sur les nervures après les étapes précédentes de collage. L’élimination de l’excès de colle et la préparation de surfaces propres permettent de préserver la précision des assemblages et l’esthétique des éléments structurels.",
  },
  {
    src: "/historia-video-web/historia-04.mp4",
    title: "Ponçage mécanique de la table d’harmonie",
    text: "Premier ponçage de la table d’harmonie à l’aide d’outils mécaniques. L’objectif est d’uniformiser la surface, de préparer le matériau aux étapes suivantes et d’obtenir la qualité nécessaire aux travaux de finition.",
  },
  {
    src: "/historia-video-web/historia-05.mp4",
    title: "Ponçage manuel de la table d’harmonie",
    text: "Finition manuelle délicate de la surface de la table d’harmonie. Cette étape offre un contrôle plus fin du détail, préserve le caractère naturel du bois et prépare la table à devenir le cœur acoustique de l’instrument.",
  },
  {
    src: "/historia-video-web/historia-06.mp4",
    title: "Fraisage du couvre-chevalet",
    text: "Usinage précis du couvre-chevalet. Les chevalets font partie des éléments essentiels de transmission des vibrations des cordes vers la table d’harmonie ; leur géométrie, leur hauteur et la qualité de leur surface exigent donc une précision exceptionnelle.",
  },
  {
    src: "/historia-video-web/historia-07.mp4",
    title: "Coupe et ajustement de la longueur du chevalet aigu",
    text: "Ajustement du chevalet aigu aux dimensions et à la géométrie de l’instrument. La bonne longueur et le bon positionnement sont essentiels au travail futur des cordes, à la transmission de l’énergie et à l’équilibre sonore du registre aigu.",
  },
  {
    src: "/historia-video-web/historia-08.mp4",
    title: "Rabotage mécanique du chevalet aigu",
    text: "Usinage du chevalet aigu en respectant la ligne, la hauteur et le profil requis. Cette étape prépare le chevalet à l’ajustement final et à une coopération correcte avec les cordes et la table d’harmonie.",
  },
  {
    src: "/historia-video-web/historia-09.mp4",
    title: "Fraisage du corps de la caisse harmonique pour les nervures",
    text: "Préparation des zones du corps de la caisse harmonique où seront logées les nervures de la table d’harmonie. Le fraisage permet d’obtenir des logements précis et d’assurer un soutien correct à l’ensemble de la structure acoustique.",
  },
  {
    src: "/historia-video-web/historia-10.mp4",
    title: "Ciselage manuel et ajustement des logements de la table d’harmonie",
    text: "Finition manuelle des zones où la table d’harmonie sera installée. Le travail au ciseau permet d’atteindre une précision que la machine seule ne garantit pas toujours, notamment dans les points nécessitant un ajustement individuel.",
  },
  {
    src: "/historia-video-web/historia-11.mp4",
    title: "Collage et serrage de la table d’harmonie",
    text: "Processus de mise en place de la table d’harmonie dans la structure de l’instrument. Une pression uniforme exercée par les serre-joints assure un assemblage stable, un bon contact et l’intégrité acoustique de tout l’ensemble résonant.",
  },
  {
    src: "/historia-video-web/historia-12.mp4",
    title: "Collage des couches du corps du piano Alaudis",
    text: "Étape de collage des couches du corps du piano à queue Alaudis. La bonne conduite du matériau, la maîtrise des tensions et la précision du collage sont essentielles pour la stabilité structurelle et la ligne élégante de la caisse.",
  },
  {
    src: "/historia-video-web/historia-14.mp4",
    title: "Collage et serrage du corps du piano Alaudis",
    text: "Formation du corps du piano par collage et pression contrôlée avec des serre-joints. C’est l’une des étapes où le savoir-faire structurel détermine la durabilité, la stabilité et la géométrie finale de l’instrument.",
  },
  {
    src: "/historia-video-web/historia-15.mp4",
    title: "Intonation finale des marteaux, Peter Salisbury",
    text: "Intonation finale des marteaux réalisée par le maître Peter Salisbury. C’est la dernière étape artistique du travail sur la couleur sonore, où sont affinés la réponse des marteaux, le caractère de l’attaque, le chant et l’équilibre sonore de tout l’instrument.",
  },
];

export default function HistoriaPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          root: null,
          threshold: 0.58,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 pb-4 pt-6 sm:px-6 sm:pb-6 sm:pt-8 lg:px-10">
          <div>
            <Link
              href="/fr"
              className="inline-flex rounded-full border border-white/35 bg-transparent px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Retour
            </Link>
          </div>

          <div className="justify-self-center">
            <Image
              src="/logo-alaudis.png"
              alt="Logo Alaudis"
              width={77}
              height={25}
              priority
              className="h-auto w-[60px] object-contain opacity-95 md:w-[77px]"
            />
          </div>

          <div className="justify-self-end">
            <details className="group relative">
              <summary className="list-none cursor-pointer rounded-full border border-white/35 bg-transparent px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black">
                <span className="inline-flex items-center gap-2">
                  FR
                  <span className="text-[10px] transition group-open:rotate-180">
                    ▼
                  </span>
                </span>
              </summary>

              <div className="absolute right-0 mt-3 min-w-[150px] overflow-hidden rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl">
                <Link
                  href="/historia"
                  className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                >
                  PL
                </Link>
                <Link
                  href="/en/historia"
                  className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                >
                  EN
                </Link>
                <Link
                  href="/de/historia"
                  className="block w-full border-b border-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                >
                  DE
                </Link>
                <Link
                  href="/fr/historia"
                  className="block w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                >
                  FR
                </Link>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* ====================================================
          HERO VIDEO - HISTORIA / WORLD OF ALAUDIS
         ==================================================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/10 px-6 pt-28 text-center sm:px-10 lg:px-16">
        <video
          src="/historia-video-web/historia-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/historia/1 Dusza .jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />

        <div className="absolute inset-0 bg-black/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/5 to-black/30" />

        <div className="relative z-20 mx-auto max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.48em] text-white/62">
            Patrimoine et savoir-faire
          </p>

          <h1 className="mt-6 text-4xl font-light text-white sm:text-6xl lg:text-[86px] lg:leading-[1.02]">
            L’univers Alaudis
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/78 sm:text-[17px] sm:leading-9">
            Découvrez la philosophie de la marque, le processus de création des instruments et le savoir-faire qui donne à chaque Alaudis son identité individuelle.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/35 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/80" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/70">
            Faire défiler
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            {storySections.map((section, index) => (
              <div
                key={section.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/34" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/30" />
              </div>
            ))}
          </div>

          <div className="relative z-10">
            {storySections.map((section, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={section.title}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="flex h-screen items-center"
                >
                  <div
                    className={`w-full px-6 sm:px-10 lg:px-16 ${
                      section.align === "right"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[500px] rounded-[20px] border border-white/10 bg-black/[0.04] px-5 py-5 backdrop-blur-[3px] transition-all duration-500 sm:px-6 sm:py-6 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-35"
                      }`}
                    >
                      <p className="text-xs text-white/60 uppercase">
                        {section.eyebrow}
                      </p>

                      <h2 className="text-2xl mt-2">{section.title}</h2>

                      <div className="mt-4 space-y-1 text-sm text-white/80">
                        {section.text.map((paragraph, i) => (
                          <p key={`${section.title}-${i}`}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

            {/* ====================================================
          SECTION - PRODUCTION VIDEOS
         ==================================================== */}
      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] uppercase tracking-[0.42em] text-white/45">
              De la production Alaudis
            </p>

            <h2 className="mt-5 text-3xl font-light text-white sm:text-4xl lg:text-[56px] lg:leading-[1.08]">
              Le savoir-faire capturé en mouvement
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68 sm:text-[17px]">
              De courtes vidéos montrent le processus de création de l’instrument : le travail des mains, les détails, les surfaces, la construction et l’atmosphère de l’atelier où l’idée d’Alaudis devient un véritable piano à queue.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productionVideos.map((video) => (
              <article
                key={video.src}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-video bg-black">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>

                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                    Vidéo
                  </p>

                  <h3 className="mt-3 text-xl font-light text-white">
                    {video.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {video.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

<section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Étape suivante
          </p>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Découvrez Alaudis de plus près
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Découvrez les modèles, ouvrez le configurateur ou organisez un
            échange privé afin de parler d’instruments créés dans la philosophie
            Alaudis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/fr/odkryj-modele"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Découvrir les modèles
            </Link>
            <Link
              href="/fr/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
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
