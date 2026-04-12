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
    eyebrow: "Alaudis World",
    title: "A piano with its own soul",
    text: [
      "SAP Alaudis is an extraordinary grand piano whose purpose is to capture the enchanting beauty and sound of the skylark’s song. It was born from the desire to create a master instrument — one that delights with its tone, moves emotions, and becomes a natural extension of the pianist’s soul.",
      "The Alaudis piano is the work of human hands, patience, and love for sound. We do not use mass production — each instrument is created individually, through a process full of precision and master craftsmanship.",
      "Our goal is not only to build a grand piano, but to create a work of art — an instrument with a soul that will captivate both the pianist and the listener.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "Soul of the Alaudis piano",
    align: "left",
  },
  {
    eyebrow: "Material and philosophy",
    title: "A piano is wood that sings",
    text: [
      "Everything begins with wood. At first glance, they are only ordinary boards, stacked and waiting for their moment — the moment they turn into sound. It is within them that the future soul of the piano is hidden.",
      "At SAP Alaudis, we choose wood the way an artist chooses colours for a painting. We look for harmony, flexibility, and soul. Each species has its own voice — resonant spruce gives warmth and depth, birch brings precision, while maple and beech bring strength and durability.",
      "For years, the wood matures under natural conditions before it reaches the hands of our masters. Only then does the true transformation begin — from raw material into a carrier of emotion.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Wood for the construction of the Alaudis piano",
    align: "right",
  },
  {
    eyebrow: "Rim",
    title: "Stability and structural resonance",
    text: [
      "The Alaudis rim is made from millimetre-thin veneers of carefully selected birch and maple. This combination of species provides the ideal balance: the flexibility and resilience of maple, and the stability and resistance of birch.",
      "Each layer is arranged according to the grain direction, then glued and bent on a special mould. Under controlled pressure and temperature, the veneers form a single rim structure that retains its shape with absolute precision.",
      "Such a laminated rim ensures exceptional structural rigidity, minimises internal stresses, and increases tuning stability, while also allowing the rim to cooperate actively with the soundboard.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Stability and structural resonance of the Alaudis piano",
    align: "left",
  },
  {
    eyebrow: "Lacquering",
    title: "Depth of surface and protection",
    text: [
      "The lacquering of the SAP Alaudis piano was carried out with the utmost care, using the finishing system of ICA — a renowned Italian manufacturer of coatings dedicated to musical instruments.",
      "Six coats of primer and nine coats of polyester top lacquer were applied to the body and cabinet elements, ensuring exceptional gloss, scratch resistance, and durability.",
      "This multi-layer finishing cycle makes it possible to achieve a smooth, deep, mirror-like surface that not only enhances the visual beauty of the instrument, but also protects its structure for many years.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Lacquering of the Alaudis piano",
    align: "right",
  },
  {
    eyebrow: "Finishing",
    title: "Polishing and final quality",
    text: [
      "SAP Renovation is one of Europe’s leading specialists in piano finishing. Over more than three decades, our team has restored 14,000 instruments.",
      "The sanding and polishing process at SAP Renovation combines master craftsmanship with modern technology. In the case of the SAP Alaudis piano, it was carried out with exceptional attention to every detail.",
      "The final surface of the SAP Alaudis piano not only impresses with its gloss and elegance, but also forms an integral part of the instrument’s structure.",
    ],
    image: "/historia/5 Wykończenie.jpg",
    imageAlt: "Finishing of the Alaudis piano",
    align: "left",
  },
  {
    eyebrow: "Soundboard",
    title: "The heart of projection and colour",
    text: [
      "The Alaudis piano soundboard is made from tone-grade spruce supplied by the renowned maker Strunz, and it is a key element of the instrument’s acoustic construction.",
      "Carefully seasoned and selected wood, precisely fitted to the rim structure, creates an active resonant surface that transfers and amplifies the vibrations of the strings.",
      "Designed in the spirit of the finest piano-building traditions, the soundboard gives the instrument full tonal projection and balance — from deep bass to clear upper registers.",
    ],
    image: "/historia/6 Dno rezonansowe.jpg",
    imageAlt: "Soundboard of the Alaudis piano",
    align: "right",
  },
  {
    eyebrow: "Bridges",
    title: "Precise transmission of vibration",
    text: [
      "The Alaudis bridges are made from carefully selected hard maple, seasoned and humidity-stabilised.",
      "Their laminated construction is additionally reinforced with a solid maple cap, ensuring exceptional mechanical stability and tuning durability.",
      "This design guarantees high rigidity in the longitudinal direction, allowing the vibration energy of the strings to be transferred to the soundboard with maximum efficiency.",
    ],
    image: "/historia/7 Mostki klonowe .jpg",
    imageAlt: "Resonant bridges of the Alaudis piano",
    align: "left",
  },
  {
    eyebrow: "String scale",
    title: "Scale, energy, and tuning security",
    text: [
      "In the stringing of the SAP Alaudis piano, we use Diamant tuning pins and steel strings made from Röslau wire.",
      "The string scale was designed in a dedicated calculation programme that optimises diameters, speaking lengths, and target tensions, taking inharmonicity and intended tonal characteristics into account.",
      "In the SAP Alaudis piano, it is crucial that the choice of wire, tuning pins, and scale parameters is fully matched to the strength of the frame and the entire structure.",
    ],
    image: "/historia/8 Naciąg.jpg",
    imageAlt: "String scale of the Alaudis piano",
    align: "right",
  },
  {
    eyebrow: "Bass strings",
    title: "The foundation of the lower register",
    text: [
      "The bass strings were supplied by Hellerbass of Germany, a company specialising in precisely wound bass strings for piano makers and restorers.",
      "Their construction supports a deep, rich tonal foundation and helps maintain clarity and carrying power in the lowest register.",
      "These are the elements that create the richness and grandeur of the full piano scale.",
    ],
    image: "/historia/9 Struny basowe Heller.jpg",
    imageAlt: "Heller bass strings in the Alaudis piano",
    align: "left",
  },
  {
    eyebrow: "Action",
    title: "Responsiveness and control",
    text: [
      "The hammer action of the SAP Alaudis piano is built on high-grade components from Louis Renner GmbH — a world leader in piano action manufacturing.",
      "Precisely formed hammers, stable shanks, and carefully balanced action geometry provide a clean attack, fast repetition, and full control over dynamics.",
      "Thanks to such a construction, SAP Alaudis offers exceptional keyboard responsiveness, from delicate pianissimo to full fortissimo.",
    ],
    image: "/historia/10 Mechanizm Renner.jpg",
    imageAlt: "Renner action in the Alaudis piano",
    align: "right",
  },
  {
    eyebrow: "Keyboard",
    title: "Precision and comfort of playing",
    text: [
      "The keyboard of the SAP Alaudis piano was developed in close cooperation with the renowned company Kluge, recognised as one of the finest premium keyboard makers in the industry.",
      "Perfect key fitting, precision of workmanship, and refined visual details underline the luxurious character of the instrument and support the fullness of its function.",
      "The keyboard becomes not only a mechanical device, but an integral element of the pianist’s artistic expression.",
    ],
    image: "/historia/11 Klawiatura Kluge.jpg",
    imageAlt: "Kluge keyboard in the Alaudis piano",
    align: "left",
  },
  {
    eyebrow: "Voicing",
    title: "Final regulation of sound",
    text: [
      "The voicing of the SAP Alaudis piano is one of the most demanding stages of the finishing process — the moment when technique meets art.",
      "Each hammer is individually shaped and voiced in order to achieve the ideal balance between attack, carrying power, and tonal colour.",
      "The result is a sound of full harmonic spectrum, perfect register balance, and the exceptional singing quality characteristic of the skylark.",
    ],
    image: "/historia/12 Ostateczna regulacja intonacja .jpg",
    imageAlt: "Final regulation and voicing of the Alaudis piano",
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
              href="/en"
              className="inline-flex rounded-full border border-white/35 bg-transparent px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Back
            </Link>
          </div>

          <div className="justify-self-center">
            <Image
              src="/logo-alaudis.png"
              alt="Alaudis logo"
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
                  EN
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
                  className="block w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
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
            Heritage and craftsmanship
          </p>
          <h1 className="mt-5 text-3xl font-light text-white sm:text-4xl lg:text-[56px] lg:leading-[1.08]">
            The world of Alaudis
          </h1>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68 sm:text-[17px]">
            Discover the philosophy of the brand, the process of creating the
            instruments, and the craftsmanship that gives every Alaudis its own
            identity.
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
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Discover Alaudis more closely
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Discover the models, open the configurator, or arrange a private
            conversation to talk about instruments created in the Alaudis
            philosophy.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/en/odkryj-modele"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Discover models
            </Link>
            <Link
              href="/en/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Arrange a private conversation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
