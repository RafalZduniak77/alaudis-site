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
    eyebrow: "Alaudis Welt",
    title: "Ein Flügel mit eigener Seele",
    text: [
      "SAP Alaudis ist ein außergewöhnlicher Flügel, dessen Ziel es ist, die faszinierende Schönheit und den Klang des Lerchengesangs einzufangen. Er entstand aus dem Wunsch, ein meisterhaftes Instrument zu schaffen – eines, das Emotionen bewegt und zur natürlichen Verlängerung der Seele des Pianisten wird.",
      "Der Alaudis Flügel ist das Werk menschlicher Hände, Geduld und Liebe zum Klang. Wir verzichten auf Serienproduktion – jedes Instrument entsteht individuell, in einem Prozess voller Präzision und meisterhaften Handwerks.",
      "Unser Ziel ist nicht nur, einen Flügel zu bauen, sondern ein Kunstwerk zu erschaffen – ein Instrument mit Seele, das sowohl Pianisten als auch Zuhörer begeistert.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "Seele des Alaudis Flügels",
    align: "left",
  },
  {
    eyebrow: "Material & Philosophie",
    title: "Ein Flügel ist Holz, das klingt",
    text: [
      "Alles beginnt mit Holz. Auf den ersten Blick gewöhnliche Bretter, gestapelt und wartend – auf den Moment, in dem sie sich in Klang verwandeln. In ihnen verbirgt sich die zukünftige Seele des Flügels.",
      "Bei SAP Alaudis wählen wir Holz wie ein Künstler seine Farben. Wir suchen Harmonie, Elastizität und Charakter. Jede Holzart hat ihre eigene Stimme – Resonanzfichte bringt Wärme und Tiefe, Birke Präzision, Ahorn und Buche hingegen Kraft und Beständigkeit.",
      "Über Jahre reift das Holz unter natürlichen Bedingungen, bevor es in die Hände unserer Meister gelangt. Erst dann beginnt die eigentliche Verwandlung – vom Rohmaterial zum Träger von Emotionen.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Holz für den Bau des Alaudis Flügels",
    align: "right",
  },
  {
    eyebrow: "Korpus",
    title: "Stabilität und Resonanz",
    text: [
      "Der Korpus des Alaudis wird aus mehrschichtigen Furnieren aus ausgewählter Birke und Ahorn gefertigt. Diese Kombination schafft die perfekte Balance – die Elastizität des Ahorns und die Stabilität der Birke.",
      "Jede Schicht wird entsprechend der Faserstruktur ausgerichtet, anschließend verleimt und auf speziellen Formen gebogen. Unter kontrolliertem Druck und Temperatur entsteht eine präzise, stabile Konstruktion.",
      "Dieser laminierte Korpus bietet außergewöhnliche strukturelle Steifigkeit, reduziert Spannungen und erhöht die Stimmstabilität, während er aktiv mit dem Resonanzboden zusammenarbeitet.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Korpus und Resonanzstruktur",
    align: "left",
  },
  {
    eyebrow: "Lackierung",
    title: "Tiefe und Schutz der Oberfläche",
    text: [
      "Die Lackierung des SAP Alaudis erfolgt mit höchster Präzision unter Verwendung des ICA-Lacksystems – eines renommierten italienischen Herstellers hochwertiger Oberflächenbeschichtungen.",
      "Auf Korpus und Gehäuseteile werden 6 Grundierungsschichten sowie 9 Schichten Polyesterlack aufgetragen, was außergewöhnlichen Glanz, Kratzfestigkeit und Langlebigkeit garantiert.",
      "Dieser mehrschichtige Prozess erzeugt eine tiefe, spiegelnde Oberfläche, die nicht nur die Ästhetik betont, sondern das Instrument über viele Jahre schützt.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Lackierung des Flügels",
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
            Zurück
          </Link>

          <div className="text-center">
            <Image
              src="/logo-alaudis.png"
              alt="Alaudis"
              width={70}
              height={24}
            />
          </div>

          <div className="text-right text-xs uppercase">DE</div>
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
