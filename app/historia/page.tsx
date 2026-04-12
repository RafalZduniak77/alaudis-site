"use client";

// ==========================================================
// PAGE - HISTORIA / ŚWIAT ALAUDIS
// ==========================================================
// WERSJA PREMIUM - STICKY FOTO + SCROLLUJĄCY TEKST
// ----------------------------------------------------------
// Co robi ta wersja:
// 1. zdjęcie jest przypięte do ekranu
// 2. tekst przewija się normalnie do góry
// 3. aktywny blok tekstu zmienia aktywne zdjęcie
// 4. brak ramek wokół tekstu
// 5. mniejsze, bardziej eleganckie tytuły
// ==========================================================

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

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
    eyebrow: "Świat Alaudis",
    title: "Fortepian o własnej duszy",
    text: [
      "SAP Alaudis to niezwykły fortepian, którego celem jest uchwycenie czarującego piękna i dźwięku śpiewu skowronka.",
      "Powstał z pragnienia stworzenia instrumentu mistrzowskiego — takiego, który zachwyca brzmieniem, porusza emocje i staje się naturalnym przedłużeniem duszy pianisty.",
      "Fortepian Alaudis jest dziełem ludzkich rąk, cierpliwości i miłości do dźwięku.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "Dusza fortepianu Alaudis",
    align: "left",
  },
  {
    eyebrow: "Materiał i filozofia",
    title: "Fortepian to drewno, które gra",
    text: [
      "Wszystko zaczyna się od drewna. Z pozoru zwykłe deski, ułożone w sztaple, czekają na swój czas — na moment, w którym zamienią się w dźwięk.",
      "W SAP Alaudis drewno wybieramy tak, jak artysta wybiera barwy do obrazu.",
      "Każdy gatunek ma swój głos — świerk rezonansowy daje ciepło i głębię, brzoza wnosi precyzję, a klon i buk — siłę i trwałość.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Drewno do budowy fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Korpus",
    title: "Stabilność i rezonans konstrukcji",
    text: [
      "Korpus Alaudis powstaje z kilkumilimetrowych obłóg wyselekcjonowanej brzozy i klonu.",
      "Każdą warstwę układamy zgodnie z kierunkiem włókien, a następnie kleimy i gięmy na specjalnej formie.",
      "Laminowana obręcz zapewnia wyjątkową sztywność strukturalną i stabilność stroju.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Rezonans i stabilność konstrukcji fortepianu",
    align: "left",
  },
  {
    eyebrow: "Lakierowanie",
    title: "Głębia powierzchni i ochrona",
    text: [
      "Lakierowanie fortepianu SAP Alaudis zostało przeprowadzone z najwyższą starannością przy użyciu systemu lakierniczego firmy ICA.",
      "Na korpus i elementy obudowy naniesiono wielowarstwowy system podkładu i lakieru poliestrowego nawierzchniowego.",
      "Efektem jest głęboka, lustrzana powierzchnia i trwała ochrona konstrukcji instrumentu.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Lakierowanie fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Wykończenie",
    title: "Polerowanie i finalna jakość",
    text: [
      "SAP Renovation jest jednym z europejskich liderów w dziedzinie wykończeń fortepianów.",
      "Proces szlifowania i polerowania to połączenie mistrzowskiego rzemiosła z nowoczesną technologią.",
      "Ostateczna powierzchnia fortepianu zachwyca połyskiem i estetyką, pozostając integralnym elementem konstrukcji.",
    ],
    image: "/historia/5 Wykończenie.jpg",
    imageAlt: "Wykończenie i polerowanie fortepianu Alaudis",
    align: "left",
  },
  {
    eyebrow: "Płyta rezonansowa",
    title: "Serce projekcji i barwy",
    text: [
      "Dno rezonansowe fortepianu Alaudis wykonane jest ze świerku klasy tonowej od renomowanego producenta Strunz.",
      "Tworzy aktywną powierzchnię rezonansową, która przenosi i wzmacnia drgania strun.",
      "Zapewnia pełną projekcję brzmienia i tonalną równowagę całego instrumentu.",
    ],
    image: "/historia/6 Dno rezonansowe.jpg",
    imageAlt: "Dno rezonansowe fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Mostki rezonansowe",
    title: "Precyzyjna transmisja drgań",
    text: [
      "Mostki rezonansowe Alaudis wykonano z wyselekcjonowanego klonu twardego.",
      "Konstrukcja warstwowa została dodatkowo wzmocniona nakładką z litego klonu.",
      "To rozwiązanie wspiera efektywne przenoszenie energii drgań na płytę rezonansową.",
    ],
    image: "/historia/7 Mostki klonowe .jpg",
    imageAlt: "Mostki klonowe fortepianu Alaudis",
    align: "left",
  },
  {
    eyebrow: "Naciąg",
    title: "Skala, energia i pewność stroju",
    text: [
      "W naciągu fortepianu SAP Alaudis zastosowaliśmy kołki stroikowe Diamant oraz drut Röslau.",
      "Skala naciągu została zaprojektowana w dedykowanym programie kalkulacyjnym.",
      "Kluczowa jest zgodność doboru drutu, kołków i parametrów skali z wytrzymałością całej konstrukcji.",
    ],
    image: "/historia/8 Naciąg.jpg",
    imageAlt: "Naciąg fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Struny basowe",
    title: "Fundament niskiego rejestru",
    text: [
      "Struny basowe dostarczyła firma Hellerbass z Niemiec.",
      "Ich konstrukcja wspiera głęboki, nasycony fundament dźwięku.",
      "To właśnie te elementy współtworzą majestat pełnej skali fortepianu.",
    ],
    image: "/historia/9 Struny basowe Heller.jpg",
    imageAlt: "Struny basowe Heller w fortepianie Alaudis",
    align: "left",
  },
  {
    eyebrow: "Mechanizm",
    title: "Responsywność i kontrola",
    text: [
      "Mechanizm młoteczkowy fortepianu SAP Alaudis został zbudowany w oparciu o komponenty firmy Louis Renner GmbH.",
      "Zapewnia czysty atak, szybkie odbicie oraz pełną kontrolę nad dynamiką dźwięku.",
      "Dzięki temu instrument oferuje wyjątkową responsywność od pianissimo po fortissimo.",
    ],
    image: "/historia/10 Mechanizm Renner.jpg",
    imageAlt: "Mechanizm Renner w fortepianie Alaudis",
    align: "right",
  },
  {
    eyebrow: "Klawiatura",
    title: "Precyzja i komfort gry",
    text: [
      "Klawiatura fortepianu SAP Alaudis została opracowana we współpracy z renomowaną firmą Kluge.",
      "Precyzja wykonania i estetyczne detale podkreślają luksusowy charakter instrumentu.",
      "Klawiatura staje się integralnym elementem artystycznego wyrazu pianisty.",
    ],
    image: "/historia/11 Klawiatura Kluge.jpg",
    imageAlt: "Klawiatura Kluge w fortepianie Alaudis",
    align: "left",
  },
  {
    eyebrow: "Intonacja",
    title: "Ostateczna regulacja brzmienia",
    text: [
      "Intonacja fortepianu SAP Alaudis to moment, w którym technika spotyka się ze sztuką.",
      "Każdy młotek jest indywidualnie kształtowany i intonowany, aby uzyskać idealną równowagę brzmienia.",
      "Rezultatem jest śpiewność, pełne spektrum harmoniczne i indywidualna tożsamość instrumentu.",
    ],
    image: "/historia/12 Ostateczna regulacja intonacja .jpg",
    imageAlt: "Ostateczna regulacja i intonacja fortepianu Alaudis",
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
          threshold: 0.55,
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
      {/* ====================================================
          TOP BAR
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          WSTĘP U GÓRY
         ==================================================== */}
      <section className="bg-black px-6 pb-14 pt-28 text-center sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.42em] text-white/45">
            Dziedzictwo i rzemiosło
          </p>

          <h1 className="mt-5 text-3xl font-light text-white sm:text-4xl lg:text-[56px] lg:leading-[1.08]">
            Świat Alaudis
          </h1>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68 sm:text-[17px]">
            Poznaj filozofię marki, proces tworzenia instrumentów oraz
            rzemiosło, które nadaje każdemu Alaudis jego indywidualną
            tożsamość.
          </p>
        </div>
      </section>

      {/* ====================================================
          GŁÓWNA SEKCJA
         ==================================================== */}
      <section className="relative">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          {/* ==================================================
              LEWA STRONA - STICKY FOTO
             ================================================== */}
          <div className="relative h-[55vh] lg:h-auto">
            <div className="sticky top-0 h-[55vh] overflow-hidden border-y border-white/10 lg:h-screen">
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
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/28" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/34" />
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================
              PRAWA STRONA - SCROLLUJĄCE TEKSTY
             ================================================== */}
          <div className="bg-black">
            {storySections.map((section, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={section.title}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="flex min-h-[88vh] items-center border-b border-white/10 px-6 py-16 sm:px-10 lg:min-h-screen lg:px-16"
                >
                  <div
                    className={`w-full max-w-[520px] transition-all duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-55"
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/52 sm:text-[11px] sm:tracking-[0.32em]">
                      {section.eyebrow}
                    </p>

                    <h2 className="mt-3 text-[28px] font-light uppercase tracking-[0.03em] text-white sm:text-[34px] lg:text-[38px] lg:leading-[1.1]">
                      {section.title}
                    </h2>

                    <div className="mt-6 space-y-5">
                      {section.text.map((paragraph, paragraphIndex) => (
                        <p
                          key={`${section.title}-${paragraphIndex}`}
                          className="text-[15px] leading-8 text-white/78 sm:text-base sm:leading-8"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================
          CTA
         ==================================================== */}
      <section className="bg-black px-6 py-24 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Następny krok
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Poznaj Alaudis bliżej
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Odkryj modele, przejdź do konfiguratora lub umów prywatną rozmowę,
            aby porozmawiać o instrumentach tworzonych w filozofii Alaudis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/odkryj-modele"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Odkryj modele
            </Link>

            <Link
              href="/kontakt"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Umów prywatną rozmowę
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
