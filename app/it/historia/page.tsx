"use client";

import { useEffect, useRef, useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import AlaudisStory from "@/components/AlaudisStory";

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
    eyebrow: "L’universo Alaudis",
    title: "Un pianoforte a coda con un’anima propria",
    text: [
      "SAP Alaudis è un pianoforte a coda straordinario, il cui intento è catturare l’incantevole bellezza e il suono del canto dell’allodola. È nato dal desiderio di creare uno strumento magistrale, capace di affascinare con il suo suono, di suscitare emozioni e di diventare il naturale prolungamento dell’anima del pianista.",
      "Il pianoforte a coda Alaudis è opera di mani umane, di pazienza e di amore per il suono. Non ricorriamo alla produzione in serie: ogni strumento nasce singolarmente, in un processo fatto di precisione e di maestria artigianale.",
      "Il nostro obiettivo non è soltanto costruire un pianoforte a coda, ma creare un’opera d’arte, uno strumento con un’anima, capace di incantare tanto il pianista quanto l’ascoltatore.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "L’anima del pianoforte a coda Alaudis",
    align: "left",
  },
  {
    eyebrow: "Materiale e filosofia",
    title: "Il pianoforte a coda è legno che suona",
    text: [
      "Tutto comincia dal legno. Tavole all’apparenza comuni, accatastate, attendono il loro momento: l’istante in cui si trasformeranno in suono. È in esse che si nasconde la futura anima del pianoforte a coda.",
      "In SAP Alaudis scegliamo il legno come un artista sceglie i colori per il proprio quadro. Vi cerchiamo armonia, elasticità e anima. Ogni essenza ha la sua voce: l’abete di risonanza dona calore e profondità, la betulla porta precisione, l’acero e il faggio forza e durata.",
      "Il legno matura per anni in condizioni naturali prima di arrivare nelle mani dei nostri maestri. Solo allora ha inizio la vera trasformazione: da materia grezza a veicolo di emozioni.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Legno per la costruzione del pianoforte a coda Alaudis",
    align: "right",
  },
  {
    eyebrow: "Cassa",
    title: "Stabilità e risonanza della struttura",
    text: [
      "La cassa di Alaudis nasce da lamelle di acero selezionato, spesse pochi millimetri. L’acero conferisce alla struttura elasticità e resilienza.",
      "Disponiamo ogni strato secondo la direzione delle fibre, quindi incolliamo e curviamo il tutto su un’apposita forma. Sotto pressione e temperatura controllate, le lamelle formano una fascia continua, che mantiene la propria forma con assoluta precisione.",
      "Questa fascia lamellare assicura un’eccezionale rigidità strutturale, riduce al minimo le tensioni e aumenta la stabilità dell’accordatura, consentendo al tempo stesso alla cassa di interagire attivamente con la tavola armonica.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Stabilità e risonanza della struttura del pianoforte a coda",
    align: "left",
  },
  {
    eyebrow: "Verniciatura",
    title: "Profondità della superficie e protezione",
    text: [
      "La verniciatura del pianoforte a coda SAP Alaudis è stata eseguita con la massima cura con il ciclo di verniciatura di ICA, rinomato produttore italiano di vernici dedicate agli strumenti musicali.",
      "Sulla cassa e sugli elementi del mobile sono state applicate 6 mani di fondo e 9 mani di poliestere di finitura, a garanzia di una brillantezza eccezionale, di resistenza ai graffi e di durata nel tempo.",
      "Questo ciclo di finitura a più mani consente di ottenere una superficie liscia, profonda e a specchio, che non solo esalta l’estetica, ma protegge anche la struttura dello strumento per molti anni.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Verniciatura del pianoforte a coda Alaudis",
    align: "right",
  },
  {
    eyebrow: "Finitura",
    title: "Lucidatura e qualità finale",
    text: [
      "SAP Renovation è uno dei leader europei nel campo delle finiture per pianoforti a coda. In oltre tre decenni il nostro team ha restaurato 14.000 strumenti.",
      "Il processo di levigatura e lucidatura in SAP Renovation unisce la maestria artigianale alla tecnologia moderna. Nel caso del pianoforte a coda SAP Alaudis è stato condotto con una cura eccezionale per ogni dettaglio.",
      "La superficie finale del pianoforte a coda SAP Alaudis non solo colpisce per brillantezza ed estetica, ma è anche parte integrante della struttura dello strumento.",
    ],
    image: "/historia/5 Wykończenie.jpg",
    imageAlt: "Finitura del pianoforte a coda Alaudis",
    align: "left",
  },
  {
    eyebrow: "Tavola armonica",
    title: "Il cuore della proiezione e del timbro",
    text: [
      "La tavola armonica del pianoforte a coda Alaudis è realizzata in abete di risonanza, fornito dal rinomato produttore Strunz, e costituisce un elemento chiave della costruzione acustica dello strumento.",
      "Il legno, accuratamente stagionato e selezionato, adattato con precisione alla struttura della cassa, crea una superficie risonante attiva che trasmette e amplifica le vibrazioni delle corde.",
      "Progettata nello spirito delle migliori tradizioni pianistiche, la tavola armonica assicura allo strumento una piena proiezione sonora e un equilibrio timbrico, dai bassi profondi agli acuti limpidi.",
    ],
    image: "/historia/6 Dno rezonansowe.jpg",
    imageAlt: "Tavola armonica del pianoforte a coda Alaudis",
    align: "right",
  },
  {
    eyebrow: "Ponticelli",
    title: "Trasmissione precisa delle vibrazioni",
    text: [
      "I ponticelli di Alaudis sono realizzati in acero duro selezionato, stagionato e stabilizzato nel contenuto di umidità.",
      "La loro struttura lamellare è stata ulteriormente rinforzata da una cartella in acero massello, che assicura un’eccezionale stabilità meccanica e una lunga tenuta dell’accordatura.",
      "Questa costruzione garantisce un’elevata rigidità in senso longitudinale, grazie alla quale l’energia delle vibrazioni delle corde viene trasmessa alla tavola armonica con la massima efficienza.",
    ],
    image: "/historia/7 Mostki klonowe .jpg",
    imageAlt: "Ponticelli del pianoforte a coda Alaudis",
    align: "left",
  },
  {
    eyebrow: "Incordatura",
    title: "Scala, energia e stabilità dell’accordatura",
    text: [
      "Nell’incordatura del pianoforte a coda SAP Alaudis abbiamo impiegato caviglie Diamant e una serie di corde in acciaio realizzate con filo armonico Röslau.",
      "La scala delle corde è stata progettata con un programma di calcolo dedicato, che ottimizza i diametri, le lunghezze vibranti e le tensioni di progetto, tenendo conto dell’inarmonicità e delle caratteristiche sonore desiderate.",
      "Nel pianoforte a coda SAP Alaudis è fondamentale che la scelta del filo armonico, delle caviglie e dei parametri della scala sia coerente con la resistenza del telaio e dell’intera struttura.",
    ],
    image: "/historia/8 Naciąg.jpg",
    imageAlt: "Incordatura del pianoforte a coda Alaudis",
    align: "right",
  },
  {
    eyebrow: "Corde dei bassi",
    title: "Il fondamento del registro grave",
    text: [
      "Le corde dei bassi sono state fornite dall’azienda tedesca Hellerbass, specializzata in corde dei bassi filate con precisione per costruttori e restauratori.",
      "La loro costruzione sostiene un fondamento sonoro profondo e pieno e consente di mantenere chiarezza e proiezione del suono nel registro più grave.",
      "Sono proprio questi elementi a contribuire alla ricchezza e alla maestosità dell’intera estensione del pianoforte a coda.",
    ],
    image: "/historia/9 Struny basowe Heller.jpg",
    imageAlt: "Corde dei bassi Heller nel pianoforte a coda Alaudis",
    align: "left",
  },
  {
    eyebrow: "Meccanica",
    title: "Reattività e controllo",
    text: [
      "La meccanica a martelletti del pianoforte a coda SAP Alaudis è stata costruita con componenti di alta gamma di Louis Renner GmbH, leader mondiale nella produzione di meccaniche per pianoforte.",
      "Martelletti sagomati con precisione, stiletti stabili e una geometria della meccanica regolata con esattezza assicurano un attacco pulito, una ripetizione rapida e il pieno controllo della dinamica del suono.",
      "Grazie a questa costruzione, SAP Alaudis si distingue per l’eccezionale reattività della tastiera e offre un tocco preciso dal pianissimo fino al pieno fortissimo.",
    ],
    image: "/historia/10 Mechanizm Renner.jpg",
    imageAlt: "Meccanica Louis Renner del pianoforte a coda Alaudis",
    align: "right",
  },
  {
    eyebrow: "Tastiera",
    title: "Precisione e comfort esecutivo",
    text: [
      "La tastiera del pianoforte a coda SAP Alaudis è stata sviluppata in collaborazione con la rinomata azienda Kluge, considerata uno dei migliori produttori di tastiere di alta gamma.",
      "Il perfetto allineamento dei tasti, la precisione di esecuzione e i dettagli estetici sottolineano il carattere lussuoso dello strumento e ne assecondano la piena funzionalità.",
      "La tastiera diventa così non soltanto un dispositivo meccanico, ma parte integrante dell’espressione artistica del pianista.",
    ],
    image: "/historia/11 Klawiatura Kluge.jpg",
    imageAlt: "Tastiera Kluge del pianoforte a coda Alaudis",
    align: "left",
  },
  {
    eyebrow: "Intonazione",
    title: "La regolazione finale del suono",
    text: [
      "L’intonazione del pianoforte a coda SAP Alaudis è una delle fasi più impegnative del processo di finitura, il momento in cui la tecnica incontra l’arte.",
      "Ogni martelletto viene sagomato e intonato singolarmente per ottenere l’equilibrio ideale tra attacco, proiezione e timbro.",
      "Il risultato è un suono dallo spettro armonico completo, con un equilibrio ideale tra i registri e quell’eccezionale cantabilità tipica dell’allodola.",
    ],
    image: "/historia/12 Ostateczna regulacja intonacja .jpg",
    imageAlt: "Regolazione finale e intonazione del pianoforte a coda Alaudis",
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
      <HomeHeader locale="it" variant="page" />

      <AlaudisStory language="IT" full />

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
                <div className="absolute inset-0 bg-black/8" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/4 via-transparent to-black/12" />
              </div>
            ))}
          </div>

          <div id="alaudis-craft" className="relative z-10 scroll-mt-24">
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
                      className={`max-w-[540px] rounded-[22px] border border-white/10 bg-black/50 px-5 py-5 backdrop-blur-[4px] transition-all duration-500 sm:px-7 sm:py-6 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-35"
                      }`}
                    >
                      <p className="text-xs text-white uppercase">
                        {section.eyebrow}
                      </p>

                      <h2 className="mt-3 text-[25px] font-light leading-tight text-white sm:text-[28px]">{section.title}</h2>

                      <div className="mt-4 space-y-2 text-[15px] leading-[1.55] text-white sm:text-[16px] sm:leading-[1.58]">
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
        {/* Podłużna, podświetlana ramka (ten sam styl co kafelki na stronie) */}
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">
            Il prossimo passo
          </p>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Scopri Alaudis più da vicino
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">
            Esplora i modelli, passa al configuratore oppure prenota un colloquio
            privato per parlare degli strumenti creati secondo la filosofia
            Alaudis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/it/odkryj-modele"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Scopri i modelli
            </Link>
            <Link
              href="/it/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Prenota un colloquio privato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
