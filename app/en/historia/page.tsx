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
      "SAP Alaudis is an extraordinary grand piano, created to capture the enchanting beauty and sound of the skylark’s song. It was born from the desire to build a master instrument — one that moves emotions and becomes a natural extension of the pianist’s soul.",
      "The Alaudis piano is the result of human hands, patience, and love for sound. We do not use mass production — each instrument is created individually, through a process of precision and master craftsmanship.",
      "Our goal is not only to build a piano, but to create a work of art — an instrument with a soul that will captivate both the pianist and the listener.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "Soul of the Alaudis piano",
    align: "left",
  },
  {
    eyebrow: "Material & philosophy",
    title: "A piano is wood that sings",
    text: [
      "Everything begins with wood. Seemingly ordinary boards, stacked and waiting for their time — for the moment they transform into sound. Within them lies the future soul of the piano.",
      "At SAP Alaudis, we select wood the way an artist chooses colors. We seek harmony, flexibility, and character. Each species has its own voice — spruce brings warmth and depth, birch precision, and maple with beech strength and durability.",
      "For years it matures in natural conditions before reaching the hands of our masters. Only then does the true transformation begin — from raw material into a carrier of emotion.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Wood for Alaudis piano construction",
    align: "right",
  },
  {
    eyebrow: "Structure",
    title: "Stability and resonance",
    text: [
      "The Alaudis rim is built from thin layers of selected birch and maple. This combination provides the perfect balance — flexibility and resilience of maple with the strength and stability of birch.",
      "Each layer is aligned with the grain, then glued and bent on a dedicated form. Under controlled pressure and temperature, they create a perfectly shaped structure.",
      "This laminated rim ensures exceptional rigidity, reduces tension, and enhances tuning stability, while actively cooperating with the soundboard.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Structure and resonance of the piano",
    align: "left",
  },
  {
    eyebrow: "Finishing",
    title: "Surface depth and protection",
    text: [
      "The finishing process of the SAP Alaudis piano is carried out with the highest precision using the ICA coating system — a renowned Italian manufacturer of premium finishes.",
      "The body receives 6 base layers and 9 polyester top coats, ensuring exceptional gloss, durability, and resistance to scratches.",
      "This multi-layer process creates a deep, mirror-like surface that enhances aesthetics while protecting the instrument for years.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Piano finishing process",
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
            Back
          </Link>

          <div className="text-center">
            <Image
              src="/logo-alaudis.png"
              alt="Alaudis"
              width={70}
              height={24}
            />
          </div>

          <div className="text-right text-xs uppercase">EN</div>
        </div>
      </header>

      {/* SCROLL SECTIONS */}
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
                                                  ref={(el) => {
                                                    itemRefs.current[index] = el;
                                                  }}
                                                  
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
