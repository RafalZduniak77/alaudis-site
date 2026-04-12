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
    eyebrow: "Die Welt von Alaudis",
    title: "Ein Flügel mit eigener Seele",
    text: [
      "SAP Alaudis ist ein außergewöhnlicher Flügel, dessen Ziel es ist, die bezaubernde Schönheit und den Klang des Gesangs der Lerche einzufangen. Er entstand aus dem Wunsch, ein meisterhaftes Instrument zu schaffen – eines, das mit seinem Klang begeistert, Emotionen bewegt und zu einer natürlichen Verlängerung der Seele des Pianisten wird.",
      "Der Flügel Alaudis ist das Werk menschlicher Hände, von Geduld und Liebe zum Klang. Wir verwenden keine Serienproduktion – jedes Instrument entsteht individuell, in einem Prozess voller Präzision und meisterhaften Handwerks.",
      "Unser Ziel ist es nicht nur, einen Flügel zu bauen, sondern ein Kunstwerk zu erschaffen – ein Instrument mit Seele, das sowohl den Pianisten als auch den Zuhörer begeistern wird.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "Die Seele des Alaudis Flügels",
    align: "left",
  },
  {
    eyebrow: "Material und Philosophie",
    title: "Ein Flügel ist Holz, das klingt",
    text: [
      "Alles beginnt mit dem Holz. Auf den ersten Blick gewöhnliche Bretter, in Stapeln gelagert, warten auf ihre Zeit – auf den Moment, in dem sie sich in Klang verwandeln. Genau in ihnen verbirgt sich die zukünftige Seele des Flügels.",
      "Bei SAP Alaudis wählen wir Holz so aus, wie ein Künstler Farben für ein Gemälde auswählt. Wir suchen in ihm Harmonie, Elastizität und Seele. Jede Holzart hat ihre eigene Stimme – Resonanzfichte schenkt Wärme und Tiefe, Birke bringt Präzision, und Ahorn sowie Buche verleihen Kraft und Beständigkeit.",
      "Über Jahre reift das Holz unter natürlichen Bedingungen, bevor es in die Hände unserer Meister gelangt. Erst dann beginnt die wahre Verwandlung – vom Rohmaterial zum Träger von Emotionen.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Holz für den Bau des Alaudis Flügels",
    align: "right",
  },
  {
    eyebrow: "Korpus",
    title: "Stabilität und Resonanz der Konstruktion",
    text: [
      "Der Korpus von Alaudis entsteht aus millimeterdünnen Furnieren aus ausgewählter Birke und Ahorn. Diese Verbindung der Holzarten schafft die ideale Balance: die Elastizität und Spannkraft des Ahorns sowie die Stabilität und Widerstandsfähigkeit der Birke.",
      "Jede Lage wird entsprechend der Faserrichtung angeordnet, anschließend verleimt und auf einer speziellen Form gebogen. Unter kontrolliertem Druck und bei kontrollierter Temperatur formen die Furniere einen einheitlichen Korpusring, der seine Form mit absoluter Präzision bewahrt.",
      "Ein solcher laminierter Korpus gewährleistet eine außergewöhnliche strukturelle Steifigkeit, minimiert Spannungen und erhöht die Stimmstabilität, während er gleichzeitig dem Korpus erlaubt, aktiv mit dem Resonanzboden zusammenzuarbeiten.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Stabilität und Resonanz der Konstruktion des Alaudis Flügels",
    align: "left",
  },
  {
    eyebrow: "Lackierung",
    title: "Tiefe der Oberfläche und Schutz",
    text: [
      "Die Lackierung des SAP Alaudis Flügels wurde mit größter Sorgfalt unter Verwendung des Lacksystems der Firma ICA durchgeführt – eines renommierten italienischen Herstellers von Beschichtungen für Musikinstrumente.",
      "Auf den Korpus und die Gehäuseteile wurden 6 Schichten Grundierung sowie 9 Schichten Polyester-Decklack aufgetragen, was außergewöhnlichen Glanz, Kratzfestigkeit und Langlebigkeit garantiert.",
      "Dieser mehrschichtige Veredelungsprozess ermöglicht eine glatte, tiefe und spiegelnde Oberfläche, die nicht nur die Ästhetik unterstreicht, sondern zugleich die Konstruktion des Instruments über viele Jahre schützt.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Lackierung des Alaudis Flügels",
    align: "right",
  },
  {
    eyebrow: "Oberflächenveredelung",
    title: "Politur und finale Qualität",
    text: [
      "SAP Renovation gehört zu den europäischen Spitzenunternehmen im Bereich der Oberflächenveredelung von Flügeln. Im Laufe von mehr als drei Jahrzehnten hat unser Team 14.000 Instrumente restauriert.",
      "Der Schleif- und Polierprozess bei SAP Renovation verbindet meisterhaftes Handwerk mit moderner Technologie. Im Fall des SAP Alaudis Flügels wurde er mit außergewöhnlicher Aufmerksamkeit für jedes Detail ausgeführt.",
      "Die endgültige Oberfläche des SAP Alaudis Flügels beeindruckt nicht nur durch ihren Glanz und ihre Ästhetik, sondern stellt zugleich einen integralen Bestandteil der Konstruktion des Instruments dar.",
    ],
    image: "/historia/5 Wykończenie.jpg",
    imageAlt: "Oberflächenveredelung des Alaudis Flügels",
    align: "left",
  },
  {
    eyebrow: "Resonanzboden",
    title: "Das Herz von Projektion und Klangfarbe",
    text: [
      "Der Resonanzboden des Alaudis Flügels besteht aus Klangfichte, geliefert vom renommierten Hersteller Strunz, und bildet ein zentrales Element der akustischen Konstruktion des Instruments.",
      "Sorgfältig gelagertes und ausgewähltes Holz, präzise an den Korpusrahmen angepasst, schafft eine aktive Resonanzfläche, die die Schwingungen der Saiten überträgt und verstärkt.",
      "Im Geist der besten Klavierbautraditionen entworfen, verleiht der Resonanzboden dem Instrument volle Klangprojektion und tonale Ausgewogenheit – von tiefen Bässen bis zu klaren Höhen.",
    ],
    image: "/historia/6 Dno rezonansowe.jpg",
    imageAlt: "Resonanzboden des Alaudis Flügels",
    align: "right",
  },
  {
    eyebrow: "Stege",
    title: "Präzise Übertragung der Schwingungen",
    text: [
      "Die Resonanzstege von Alaudis wurden aus ausgewähltem, hartem Ahorn gefertigt, der sorgfältig gelagert und hinsichtlich der Feuchtigkeit stabilisiert wurde.",
      "Die mehrschichtige Konstruktion wurde zusätzlich mit einer Auflage aus massivem Ahorn verstärkt, was außergewöhnliche mechanische Stabilität und dauerhafte Stimmhaltung gewährleistet.",
      "Diese Bauweise garantiert eine hohe Steifigkeit in Längsrichtung, sodass die Schwingungsenergie der Saiten mit maximaler Effizienz auf den Resonanzboden übertragen wird.",
    ],
    image: "/historia/7 Mostki klonowe .jpg",
    imageAlt: "Resonanzstege des Alaudis Flügels",
    align: "left",
  },
  {
    eyebrow: "Saitenanlage",
    title: "Skala, Energie und Stimmstabilität",
    text: [
      "In der Saitenanlage des SAP Alaudis Flügels verwenden wir Stimmwirbel Diamant sowie einen Satz Stahlsaiten aus Röslau-Draht.",
      "Die Saitenskala wurde in einem speziellen Berechnungsprogramm entworfen, das Durchmesser, schwingende Längen und Zielspannungen unter Berücksichtigung der Inharmonizität und der beabsichtigten klanglichen Eigenschaften optimiert.",
      "Beim SAP Alaudis Flügel ist die Übereinstimmung von Drahtauswahl, Stimmwirbeln und Skalenparametern mit der Belastbarkeit des Rahmens und der gesamten Konstruktion von entscheidender Bedeutung.",
    ],
    image: "/historia/8 Naciąg.jpg",
    imageAlt: "Saitenanlage des Alaudis Flügels",
    align: "right",
  },
  {
    eyebrow: "Basssaiten",
    title: "Das Fundament des tiefen Registers",
    text: [
      "Die Basssaiten wurden von der Firma Hellerbass aus Deutschland geliefert, die auf präzise gewickelte Basssaiten für Hersteller und Restauratoren spezialisiert ist.",
      "Ihre Konstruktion unterstützt ein tiefes, gesättigtes klangliches Fundament und ermöglicht es, Klarheit sowie Tragfähigkeit im tiefsten Register zu bewahren.",
      "Gerade diese Elemente schaffen den Reichtum und die Größe der vollen Klangskala des Flügels.",
    ],
    image: "/historia/9 Struny basowe Heller.jpg",
    imageAlt: "Heller-Basssaiten im Alaudis Flügel",
    align: "left",
  },
  {
    eyebrow: "Mechanik",
    title: "Reaktionsfreude und Kontrolle",
    text: [
      "Die Hammermechanik des SAP Alaudis Flügels wurde auf der Grundlage hochwertiger Komponenten der Firma Louis Renner GmbH aufgebaut – eines weltweit führenden Herstellers von Klaviermechaniken.",
      "Präzise geformte Hammerköpfe, stabile Hammerstiele und eine exakt abgestimmte Geometrie der Mechanik gewährleisten einen klaren Anschlag, schnelle Repetition und vollständige Kontrolle über die Dynamik des Klangs.",
      "Dank einer solchen Konstruktion zeichnet sich SAP Alaudis durch eine außergewöhnliche Reaktionsfreude der Klaviatur aus und bietet präzisen Anschlag von Pianissimo bis zum vollen Fortissimo.",
    ],
    image: "/historia/10 Mechanizm Renner.jpg",
    imageAlt: "Renner-Mechanik des Alaudis Flügels",
    align: "right",
  },
  {
    eyebrow: "Klaviatur",
    title: "Präzision und Spielkomfort",
    text: [
      "Die Klaviatur des SAP Alaudis Flügels wurde in enger Zusammenarbeit mit der renommierten Firma Kluge entwickelt, die als einer der besten Hersteller von Premium-Klaviaturen gilt.",
      "Perfekte Passung der Tasten, Präzision der Ausführung und ästhetische Details unterstreichen den luxuriösen Charakter des Instruments und unterstützen die volle Leistungsfähigkeit seines Spiels.",
      "Die Klaviatur wird damit nicht nur zu einer mechanischen Einrichtung, sondern zu einem integralen Bestandteil des künstlerischen Ausdrucks des Pianisten.",
    ],
    image: "/historia/11 Klawiatura Kluge.jpg",
    imageAlt: "Kluge-Klaviatur des Alaudis Flügels",
    align: "left",
  },
  {
    eyebrow: "Intonation",
    title: "Die endgültige Regulierung des Klangs",
    text: [
      "Die Intonation des SAP Alaudis Flügels gehört zu den anspruchsvollsten Etappen des Veredelungsprozesses – dem Moment, in dem Technik auf Kunst trifft.",
      "Jeder Hammer wird individuell geformt und intoniert, um das ideale Gleichgewicht zwischen Anschlag, Tragfähigkeit und Klangfarbe zu erreichen.",
      "Das Ergebnis ist ein Klang mit vollem harmonischen Spektrum, perfekter Ausgewogenheit der Register und einer außergewöhnlichen Gesanglichkeit, die für die Lerche charakteristisch ist.",
    ],
    image: "/historia/12 Ostateczna regulacja intonacja .jpg",
    imageAlt: "Endgültige Regulierung und Intonation des Alaudis Flügels",
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
              href="/de"
              className="inline-flex rounded-full border border-white/35 bg-transparent px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Zurück
            </Link>
          </div>

          <div className="justify-self-center">
            <Image
              src="/logo-alaudis.png"
              alt="Alaudis Logo"
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
                  DE
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
                  className="block w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
                >
                  DE
                </Link>
                <Link
                  href="/fr/historia"
                  className="block w-full px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                >
                  FR
                </Link>
              </div>
            </details>
          </div>
        </div>
      </header>

      <section className="bg-black px-6 pb-14 pt-28 text-center sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/45">
            Erbe und Handwerk
          </p>
          <h1 className="mt-5 text-3xl font-light text-white sm:text-4xl lg:text-[56px] lg:leading-[1.08]">
            Die Welt von Alaudis
          </h1>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68 sm:text-[17px]">
            Entdecken Sie die Philosophie der Marke, den Prozess der
            Instrumentenentstehung und das Handwerk, das jedem Alaudis seine
            eigene Identität verleiht.
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

      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Nächster Schritt
          </p>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Entdecken Sie Alaudis näher
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Entdecken Sie die Modelle, öffnen Sie den Konfigurator oder
            vereinbaren Sie ein privates Gespräch, um über Instrumente zu
            sprechen, die in der Philosophie von Alaudis entstehen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/de/odkryj-modele"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Modelle entdecken
            </Link>
            <Link
              href="/de/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Privates Gespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
