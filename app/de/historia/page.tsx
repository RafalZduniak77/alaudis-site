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

type ProductionVideo = {
  src: string;
  title: string;
  text: string;
};

const productionVideos: ProductionVideo[] = [
  {
    src: "/historia-video-web/historia-01.mp4",
    title: "Schleifen und Anpassen des Gussrahmens",
    text: "Präzise Vorbereitung des Gussrahmens vor der weiteren akustischen Montage. Dieser Schritt erfordert eine genaue Anpassung der Kontaktflächen, Kontrolle der Auflagepunkte und die Einhaltung der richtigen Geometrie der Klavierkonstruktion.",
  },
  {
    src: "/historia-video-web/historia-02.mp4",
    title: "Profilieren der Rippen des Resonanzbodens",
    text: "Formgebung der Resonanzbodenrippen, die für Stabilität, Elastizität und die korrekte akustische Arbeit des Resonanzbodens verantwortlich sind. Das Rippenprofil beeinflusst direkt die Wölbung und die Reaktion des Bodens auf Schwingungen.",
  },
  {
    src: "/historia-video-web/historia-03.mp4",
    title: "Reinigung der Rippen von Kleberesten",
    text: "Sorgfältige Bearbeitung der Rippen nach den vorherigen Klebearbeiten. Das Entfernen von überschüssigem Leim und die Vorbereitung sauberer Flächen sichern präzise Verbindungen und die Ästhetik der Konstruktionselemente.",
  },
  {
    src: "/historia-video-web/historia-04.mp4",
    title: "Maschinelles Schleifen des Resonanzbodens",
    text: "Erstes Schleifen des Resonanzbodens mit mechanischen Werkzeugen. Ziel ist es, die Oberfläche zu ebnen, das Material für die weitere Bearbeitung vorzubereiten und die richtige Qualität für die folgenden Arbeitsschritte zu erreichen.",
  },
  {
    src: "/historia-video-web/historia-05.mp4",
    title: "Handschliff des Resonanzbodens",
    text: "Feine manuelle Ausarbeitung der Resonanzbodenoberfläche. Dieser Schritt ermöglicht eine größere Kontrolle über das Detail, bewahrt den natürlichen Charakter des Holzes und bereitet den Boden auf seine Funktion als akustisches Herz des Instruments vor.",
  },
  {
    src: "/historia-video-web/historia-06.mp4",
    title: "Fräsen der Stegauflage",
    text: "Präzise Bearbeitung der Stegauflage. Die Stege gehören zu den wichtigsten Elementen der Übertragung von Saitenschwingungen auf den Resonanzboden, weshalb Geometrie, Höhe und Oberflächenqualität außergewöhnliche Genauigkeit verlangen.",
  },
  {
    src: "/historia-video-web/historia-07.mp4",
    title: "Schneiden und Anpassen der Länge des Diskantstegs",
    text: "Anpassung des Diskantstegs an die Maße und Geometrie des konkreten Instruments. Die richtige Länge und Lagerung sind entscheidend für die spätere Arbeit der Saiten, Energieübertragung und klangliche Balance im Diskantregister.",
  },
  {
    src: "/historia-video-web/historia-08.mp4",
    title: "Maschinelles Hobeln des Diskantstegs",
    text: "Bearbeitung des Diskantstegs unter Einhaltung der erforderlichen Linie, Höhe und Profilierung. Dieser Schritt bereitet den Steg für die weitere Anpassung und die korrekte Zusammenarbeit mit Saiten und Resonanzboden vor.",
  },
  {
    src: "/historia-video-web/historia-09.mp4",
    title: "Fräsen des Klangkörpers für die Resonanzbodenrippen",
    text: "Vorbereitung der Bereiche im Klangkörper, in denen die Rippen des Resonanzbodens eingesetzt werden. Das Fräsen ermöglicht präzise Aufnahmen und sichert die richtige Unterstützung der gesamten akustischen Konstruktion.",
  },
  {
    src: "/historia-video-web/historia-10.mp4",
    title: "Handarbeit mit dem Stechbeitel und Anpassung der Resonanzbodenauflagen",
    text: "Manuelle Nacharbeitung der Stellen, an denen der Resonanzboden eingesetzt wird. Die Arbeit mit dem Stechbeitel ermöglicht eine Genauigkeit, die rein maschinell nicht immer erreichbar ist, besonders an individuell anzupassenden Punkten.",
  },
  {
    src: "/historia-video-web/historia-11.mp4",
    title: "Einleimen und Verpressen des Resonanzbodens",
    text: "Der Prozess des Einsetzens des Resonanzbodens in die Instrumentenkonstruktion. Gleichmäßiger Druck durch Zwingen sorgt für eine stabile Verbindung, korrekten Kontakt und die akustische Integrität der gesamten Resonanzeinheit.",
  },
  {
    src: "/historia-video-web/historia-12.mp4",
    title: "Einleimen der Rim-Lagen des Alaudis-Flügels",
    text: "Das Verleimen der Lagen des Flügelkorpus von Alaudis. Die richtige Führung des Materials, Kontrolle der Spannungen und Präzision beim Leimen sind entscheidend für die Stabilität der Konstruktion und die elegante Linie des Gehäuses.",
  },
  {
    src: "/historia-video-web/historia-14.mp4",
    title: "Verleimen und Verpressen des Alaudis-Flügelkorpus",
    text: "Formgebung des Flügelkorpus durch Verleimen und kontrollierten Druck mit Zwingen. In diesem Arbeitsschritt entscheidet konstruktives Handwerk über Dauerhaftigkeit, Stabilität und finale Geometrie des Instruments.",
  },
  {
    src: "/historia-video-web/historia-15.mp4",
    title: "Finale Intonation der Hammerköpfe — Peter Salisbury",
    text: "Die finale Intonation der Hammerköpfe, ausgeführt von Meister Peter Salisbury. Dies ist der letzte künstlerische Schritt der Arbeit am Klang, bei dem Hammerreaktion, Anschlagscharakter, Sanglichkeit und klangliche Balance des gesamten Instruments verfeinert werden.",
  },
];

export default function HistoriaPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProductionVideo, setActiveProductionVideo] = useState<ProductionVideo | null>(null);
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

  // --------------------------------------------------------
  // ZAMYKANIE OKNA VIDEO KLAWISZEM ESC
  // --------------------------------------------------------
  useEffect(() => {
    if (!activeProductionVideo) return;

    const handleProductionVideoKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProductionVideo(null);
      }
    };

    window.addEventListener("keydown", handleProductionVideoKeyDown);

    return () => {
      window.removeEventListener("keydown", handleProductionVideoKeyDown);
    };
  }, [activeProductionVideo]);

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

            {/* ====================================================
          SECTION - PRODUCTION VIDEOS
         ==================================================== */}
      <section className="bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] uppercase tracking-[0.42em] text-white/45">
              Aus der Alaudis-Produktion
            </p>

            <h2 className="mt-5 text-3xl font-light text-white sm:text-4xl lg:text-[56px] lg:leading-[1.08]">
              Handwerk in Bewegung festgehalten
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68 sm:text-[17px]">
              Kurze Videomaterialien zeigen den Entstehungsprozess des Instruments: die Arbeit der Hände, Details, Oberflächen, Konstruktion und die Atmosphäre der Werkstatt, in der die Idee von Alaudis zu einem realen Flügel wird.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productionVideos.map((video) => (
              <article
                key={video.src}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setActiveProductionVideo(video)}
                  className="group relative aspect-video w-full overflow-hidden bg-black text-left"
                  aria-label="Video ansehen"
                >
                  <video
                    src={video.src}
                    preload="metadata"
                    muted
                    playsInline
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-white/35 bg-black/45 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white backdrop-blur-md transition group-hover:border-white group-hover:bg-white group-hover:text-black">
                      Video ansehen
                    </span>
                  </div>
                </button>

                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                    Video
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


      {activeProductionVideo && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setActiveProductionVideo(null)}
        >
          <button
            type="button"
            onClick={() => setActiveProductionVideo(null)}
            className="absolute right-5 top-5 z-[210] rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            × Schließen
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 pr-28">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Video
              </p>

              <h3 className="mt-2 text-2xl font-light text-white sm:text-3xl">
                {activeProductionVideo.title}
              </h3>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl">
              <video
                src={activeProductionVideo.src}
                controls
                autoPlay
                playsInline
                className="max-h-[78vh] w-full bg-black object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
