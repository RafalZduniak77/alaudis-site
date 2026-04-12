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
    eyebrow: "Univers Alaudis",
    title: "Un piano doté de sa propre âme",
    text: [
      "SAP Alaudis est un piano à queue exceptionnel, conçu pour capturer la beauté envoûtante et la sonorité du chant de l’alouette. Il est né du désir de créer un instrument d’exception — capable de susciter l’émotion et de devenir le prolongement naturel de l’âme du pianiste.",
      "Le piano Alaudis est l’œuvre de mains humaines, de patience et d’un profond amour du son. Nous refusons la production de masse — chaque instrument est façonné individuellement, dans un processus alliant précision et artisanat d’excellence.",
      "Notre ambition ne se limite pas à construire un piano, mais à créer une œuvre d’art — un instrument vivant, capable de séduire aussi bien l’interprète que l’auditeur.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "Âme du piano Alaudis",
    align: "left",
  },
  {
    eyebrow: "Matériau & philosophie",
    title: "Le piano est un bois qui chante",
    text: [
      "Tout commence par le bois. À première vue, de simples planches, empilées et patientant — jusqu’au moment où elles se transforment en son. C’est en elles que réside l’âme future de l’instrument.",
      "Chez SAP Alaudis, le bois est choisi comme un artiste sélectionne ses couleurs. Nous recherchons l’harmonie, la souplesse et le caractère. Chaque essence possède sa voix — l’épicéa apporte chaleur et profondeur, le bouleau précision, tandis que l’érable et le hêtre offrent force et stabilité.",
      "Pendant des années, le bois mûrit dans des conditions naturelles avant d’atteindre les mains de nos maîtres. C’est alors que débute sa véritable transformation — de matière brute à vecteur d’émotion.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Bois pour la construction du piano",
    align: "right",
  },
  {
    eyebrow: "Structure",
    title: "Stabilité et résonance",
    text: [
      "La ceinture du piano Alaudis est constituée de fines couches de bouleau et d’érable soigneusement sélectionnés. Cette combinaison assure un équilibre parfait entre élasticité et stabilité.",
      "Chaque couche est orientée selon le fil du bois, puis collée et cintrée sur des moules spécifiques. Sous pression et température contrôlées, l’ensemble forme une structure d’une précision absolue.",
      "Cette conception laminée garantit une rigidité exceptionnelle, réduit les tensions internes et améliore la stabilité de l’accord, tout en permettant une interaction active avec la table d’harmonie.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Structure et résonance du piano",
    align: "left",
  },
  {
    eyebrow: "Finition",
    title: "Profondeur et protection",
    text: [
      "La finition du piano SAP Alaudis est réalisée avec une exigence extrême, en utilisant le système de vernis ICA — un fabricant italien reconnu pour ses revêtements haut de gamme.",
      "Le corps de l’instrument reçoit 6 couches de base et 9 couches de vernis polyester, garantissant une brillance exceptionnelle, une grande résistance aux rayures et une durabilité remarquable.",
      "Ce processus multicouche permet d’obtenir une surface profonde, parfaitement lisse et miroir, qui sublime l’esthétique tout en protégeant durablement l’instrument.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Finition du piano Alaudis",
    align: "right",
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
        { threshold: 0.58 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 pt-8">
          <Link href="/" className="text-xs uppercase tracking-[0.3em]">
            Retour
          </Link>

          <div className="text-center">
            <Image
              src="/logo-alaudis.png"
              alt="Alaudis"
              width={70}
              height={24}
            />
          </div>

          <div className="text-right text-xs uppercase">FR</div>
        </div>
      </header>

      <section className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          {storySections.map((section, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="relative z-10">
          {storySections.map((section, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="flex h-screen items-center px-10"
            >
              <div
                className={`max-w-[520px] ${
                  section.align === "right" ? "ml-auto" : ""
                } bg-black/5 backdrop-blur-sm p-6 rounded-xl`}
              >
                <p className="text-xs uppercase text-white/60">
                  {section.eyebrow}
                </p>
                <h2 className="text-2xl mt-2">{section.title}</h2>

                <div className="mt-4 space-y-1 text-sm text-white/80">
                  {section.text.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
