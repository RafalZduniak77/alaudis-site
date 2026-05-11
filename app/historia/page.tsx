"use client";

// ==========================================================
// PAGE - HISTORIA / ŚWIAT ALAUDIS
// ==========================================================
// WERSJA PREMIUM
// ----------------------------------------------------------
// Co robi ta wersja:
// 1. header jest całkowicie przezroczysty
// 2. zdjęcia są na cały ekran
// 3. tekst jest na zdjęciu
// 4. tekst raz po lewej, raz po prawej
// 5. czcionka jest taka jak w EN / DE / FR
// 6. opisy mają ciasny układ
// 7. pod tekstem jest minimalne, eleganckie blur tło
// ==========================================================

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
    eyebrow: "Świat Alaudis",
    title: "Fortepian o własnej duszy",
    text: [
      "SAP Alaudis to niezwykły fortepian, którego celem jest uchwycenie czarującego piękna i dźwięku śpiewu skowronka. Powstał z pragnienia stworzenia instrumentu mistrzowskiego – takiego, który zachwyca brzmieniem, porusza emocje i staje się naturalnym przedłużeniem duszy pianisty.",
      "Fortepian Alaudis jest dziełem ludzkich rąk, cierpliwości i miłości do dźwięku. Nie stosujemy produkcji seryjnej – każdy instrument powstaje indywidualnie, w procesie pełnym precyzji i mistrzowskiego rzemiosła.",
      "Naszym celem nie jest tylko zbudowanie fortepianu, lecz stworzenie dzieła sztuki – instrumentu o duszy, który zachwyci zarówno pianistę, jak i słuchacza.",
    ],
    image: "/historia/1 Dusza .jpg",
    imageAlt: "Dusza fortepianu Alaudis",
    align: "left",
  },
  {
    eyebrow: "Materiał i filozofia",
    title: "Fortepian to drewno, które gra",
    text: [
      "Wszystko zaczyna się od drewna. Z pozoru zwykłe deski, ułożone w sztaple, czekają na swój czas – na moment, w którym zamienią się w dźwięk. To właśnie w nich ukryta jest przyszła dusza fortepianu.",
      "W SAP Alaudis drewno wybieramy tak, jak artysta wybiera barwy do obrazu. Szukamy w nim harmonii, elastyczności i duszy. Każdy gatunek ma swój głos – świerk rezonansowy daje ciepło i głębię, brzoza wnosi precyzję, a klon i buk – siłę i trwałość.",
      "Przez lata dojrzewa w naturalnych warunkach, zanim trafi w ręce naszych mistrzów. Dopiero wtedy zaczyna się prawdziwa przemiana – z surowego materiału w nośnik emocji.",
    ],
    image: "/historia/2 Drewno gra.jpg",
    imageAlt: "Drewno do budowy fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Korpus",
    title: "Stabilność i rezonans konstrukcji",
    text: [
      "Korpus Alaudis powstaje z kilkumilimetrowych obłóg wyselekcjonowanej brzozy i klonu. To połączenie gatunków daje idealny balans: elastyczność i sprężystość klonu oraz stabilność i odporność brzozy.",
      "Każdą warstwę układamy zgodnie z kierunkiem włókien, a następnie kleimy i gięmy na specjalnej formie. Pod kontrolowanym naciskiem i temperaturą obłogi tworzą jednolitą obręcz korpusu, która zachowuje kształt z absolutną precyzją.",
      "Taka laminowana obręcz zapewnia wyjątkową sztywność strukturalną, minimalizuje naprężenia i zwiększa stabilność stroju, a jednocześnie pozwala korpusowi aktywnie współpracować z płytą rezonansową.",
    ],
    image: "/historia/3 Rezonans konstrukcji.jpg",
    imageAlt: "Stabilność i rezonans konstrukcji fortepianu",
    align: "left",
  },
  {
    eyebrow: "Lakierowanie",
    title: "Głębia powierzchni i ochrona",
    text: [
      "Lakierowanie fortepianu SAP Alaudis zostało przeprowadzone z najwyższą starannością przy użyciu systemu lakierniczego firmy ICA – renomowanego włoskiego producenta powłok dedykowanych instrumentom.",
      "Na korpus i elementy obudowy naniesiono 6 warstw podkładu oraz 9 warstw lakieru poliestrowego nawierzchniowego, co gwarantuje wyjątkowy połysk, odporność na zarysowania i trwałość.",
      "Ten wielowarstwowy cykl wykończeniowy umożliwia uzyskanie gładkiej, głębokiej i lustrzanej powierzchni, która nie tylko podkreśla estetykę, lecz także chroni konstrukcję instrumentu przez wiele lat.",
    ],
    image: "/historia/4 Lakierowanie .jpg",
    imageAlt: "Lakierowanie fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Wykończenie",
    title: "Polerowanie i finalna jakość",
    text: [
      "SAP Renovation jest jednym z europejskich liderów w dziedzinie wykończeń fortepianów. Na przestrzeni ponad trzech dekad nasz zespół odrestaurował 14 000 instrumentów.",
      "Proces szlifowania i polerowania w SAP Renovation to połączenie mistrzowskiego rzemiosła z nowoczesną technologią. W przypadku fortepianu SAP Alaudis przeprowadzono go z wyjątkową dbałością o każdy detal.",
      "Ostateczna powierzchnia fortepianu SAP Alaudis nie tylko zachwyca połyskiem i estetyką, lecz stanowi również integralny element konstrukcji instrumentu.",
    ],
    image: "/historia/5 Wykończenie.jpg",
    imageAlt: "Wykończenie fortepianu Alaudis",
    align: "left",
  },
  {
    eyebrow: "Płyta rezonansowa",
    title: "Serce projekcji i barwy",
    text: [
      "Dno rezonansowe fortepianu Alaudis wykonane jest ze świerku klasy tonowej, dostarczonego przez renomowanego producenta Strunz, i stanowi kluczowy element akustycznej konstrukcji instrumentu.",
      "Starannie sezonowane i selekcjonowane drewno, precyzyjnie dopasowane do ramy korpusu, tworzy aktywną powierzchnię rezonansową, która przenosi i wzmacnia drgania strun.",
      "Zaprojektowane w duchu najlepszych tradycji fortepianowych dno rezonansowe zapewnia instrumentowi pełną projekcję brzmienia i tonalną równowagę – od głębokich basów po przejrzyste wysokie tony.",
    ],
    image: "/historia/6 Dno rezonansowe.jpg",
    imageAlt: "Płyta rezonansowa fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Mostki rezonansowe",
    title: "Precyzyjna transmisja drgań",
    text: [
      "Mostki rezonansowe Alaudis zostały wykonane z wyselekcjonowanego klonu twardego, sezonowanego i stabilizowanego pod względem wilgotności.",
      "Konstrukcja warstwowa została dodatkowo wzmocniona nakładką z litego klonu, co zapewnia wyjątkową stabilność mechaniczną i trwałość stroju.",
      "Taka budowa gwarantuje dużą sztywność w kierunku podłużnym, dzięki czemu energia drgań strun jest przenoszona z maksymalną efektywnością na płytę rezonansową.",
    ],
    image: "/historia/7 Mostki klonowe .jpg",
    imageAlt: "Mostki rezonansowe fortepianu Alaudis",
    align: "left",
  },
  {
    eyebrow: "Naciąg",
    title: "Skala, energia i pewność stroju",
    text: [
      "W naciągu fortepianu SAP Alaudis zastosowaliśmy kołki stroikowe Diamant oraz zestaw strun stalowych wykonanych z drutu Röslau.",
      "Skala naciągu została zaprojektowana w dedykowanym programie kalkulacyjnym, który optymalizuje średnice, długości czynne i docelowe naprężenia z uwzględnieniem nieharmoniczności oraz zakładanych charakterystyk brzmieniowych.",
      "W fortepianie SAP Alaudis kluczowa jest zgodność doboru drutu, kołków i parametrów skali z wytrzymałością ramy i całej konstrukcji.",
    ],
    image: "/historia/8 Naciąg.jpg",
    imageAlt: "Naciąg fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Struny basowe",
    title: "Fundament niskiego rejestru",
    text: [
      "Struny basowe dostarczyła firma Hellerbass z Niemiec, specjalizująca się w precyzyjnie nawijanych strunach basowych dla producentów i renowatorów.",
      "Ich konstrukcja wspiera głęboki, nasycony fundament dźwięku i pozwala utrzymać klarowność oraz nośność brzmienia w najniższym rejestrze.",
      "To właśnie te elementy współtworzą bogactwo i majestat pełnej skali fortepianu.",
    ],
    image: "/historia/9 Struny basowe Heller.jpg",
    imageAlt: "Struny basowe Heller w fortepianie Alaudis",
    align: "left",
  },
  {
    eyebrow: "Mechanizm",
    title: "Responsywność i kontrola",
    text: [
      "Mechanizm młoteczkowy fortepianu SAP Alaudis został zbudowany w oparciu o wysokiej klasy komponenty firmy Louis Renner GmbH – światowego lidera w produkcji mechanizmów fortepianowych.",
      "Precyzyjnie formowane młotki, stabilne trzonki i dokładnie zestrojona geometria mechanizmu zapewniają czysty atak, szybkie odbicie oraz pełną kontrolę nad dynamiką dźwięku.",
      "Dzięki takiej konstrukcji SAP Alaudis charakteryzuje się wyjątkową responsywnością klawiatury, oferując precyzyjny dotyk od pianissimo po pełne fortissimo.",
    ],
    image: "/historia/10 Mechanizm Renner.jpg",
    imageAlt: "Mechanizm Renner fortepianu Alaudis",
    align: "right",
  },
  {
    eyebrow: "Klawiatura",
    title: "Precyzja i komfort gry",
    text: [
      "Klawiatura fortepianu SAP Alaudis została opracowana we współpracy z renomowaną firmą Kluge, uznawaną za jednego z najlepszych producentów klawiatur klasy premium.",
      "Idealne spasowanie klawiszy, precyzja wykonania i estetyczne detale podkreślają luksusowy charakter instrumentu oraz wspierają pełnię jego działania.",
      "Klawiatura staje się nie tylko urządzeniem mechanicznym, lecz integralnym elementem artystycznego wyrazu pianisty.",
    ],
    image: "/historia/11 Klawiatura Kluge.jpg",
    imageAlt: "Klawiatura Kluge fortepianu Alaudis",
    align: "left",
  },
  {
    eyebrow: "Intonacja",
    title: "Ostateczna regulacja brzmienia",
    text: [
      "Intonacja fortepianu SAP Alaudis to jeden z najbardziej wymagających etapów procesu wykończeniowego – moment, w którym technika spotyka się ze sztuką.",
      "Każdy młotek jest indywidualnie kształtowany i intonowany, aby uzyskać idealną równowagę między atakiem, nośnością i barwą dźwięku.",
      "Rezultatem jest dźwięk o pełnym spektrum harmonicznym, idealnej równowadze rejestrów i wyjątkowej śpiewności charakterystycznej dla skowronka.",
    ],
    image: "/historia/12 Ostateczna regulacja intonacja .jpg",
    imageAlt: "Ostateczna regulacja i intonacja fortepianu Alaudis",
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
    title: "Szlifowanie i dopasowanie ramy żeliwnej",
    text: "Precyzyjne przygotowanie ramy żeliwnej przed dalszym montażem akustycznym. Ten etap wymaga dokładnego dopasowania powierzchni styku, kontroli osadzenia oraz zachowania właściwej geometrii konstrukcji fortepianu.",
  },
  {
    src: "/historia-video-web/historia-02.mp4",
    title: "Profilowanie żeber płyty rezonansowej",
    text: "Kształtowanie żeber płyty rezonansowej odpowiedzialnych za stabilność, sprężystość i prawidłową pracę akustyczną dna rezonansowego. Profil żeber ma bezpośredni wpływ na zachowanie krzywizny i reakcję płyty na drgania.",
  },
  {
    src: "/historia-video-web/historia-03.mp4",
    title: "Oczyszczanie żeber z pozostałości kleju",
    text: "Staranna obróbka żeber po wcześniejszych etapach klejenia. Usunięcie nadmiaru kleju i przygotowanie czystych powierzchni pozwala zachować precyzję połączeń oraz estetykę elementów konstrukcyjnych.",
  },
  {
    src: "/historia-video-web/historia-04.mp4",
    title: "Mechaniczne szlifowanie płyty rezonansowej",
    text: "Wstępne szlifowanie płyty rezonansowej z użyciem narzędzi mechanicznych. Celem tego etapu jest wyrównanie powierzchni, przygotowanie materiału do dalszej obróbki oraz uzyskanie właściwej jakości pod kolejne prace wykończeniowe.",
  },
  {
    src: "/historia-video-web/historia-05.mp4",
    title: "Ręczne szlifowanie płyty rezonansowej",
    text: "Delikatne, ręczne wyprowadzenie powierzchni płyty rezonansowej. Ten etap pozwala uzyskać większą kontrolę nad detalem, zachować naturalny charakter drewna i przygotować płytę do pracy jako serce akustyczne instrumentu.",
  },
  {
    src: "/historia-video-web/historia-06.mp4",
    title: "Frezowanie nakładki mostków rezonansowych",
    text: "Precyzyjna obróbka nakładki mostków rezonansowych. Mostki są jednym z kluczowych elementów transmisji drgań ze strun na płytę rezonansową, dlatego ich geometria, wysokość i jakość powierzchni wymagają wyjątkowej dokładności.",
  },
  {
    src: "/historia-video-web/historia-07.mp4",
    title: "Cięcie i dopasowanie długości mostka wiolinowego",
    text: "Dopasowanie mostka wiolinowego do wymiarów i geometrii konkretnego instrumentu. Właściwa długość i osadzenie mostka są istotne dla późniejszej pracy strun, przenoszenia energii oraz równowagi brzmieniowej rejestru wiolinowego.",
  },
  {
    src: "/historia-video-web/historia-08.mp4",
    title: "Mechaniczne struganie mostka wiolinowego",
    text: "Obróbka mostka wiolinowego z zachowaniem wymaganej linii, wysokości i profilu. Ten etap przygotowuje mostek do dalszego dopasowania oraz do prawidłowego współdziałania ze strunami i płytą rezonansową.",
  },
  {
    src: "/historia-video-web/historia-09.mp4",
    title: "Frezowanie korpusu dźwięcznicy pod żebra rezonansowe",
    text: "Przygotowanie miejsc w korpusie dźwięcznicy, w których zostaną osadzone żebra płyty rezonansowej. Frezowanie pozwala uzyskać precyzyjne gniazda montażowe i zapewnić właściwe podparcie dla całej konstrukcji akustycznej.",
  },
  {
    src: "/historia-video-web/historia-10.mp4",
    title: "Ręczne dłutowanie i dopasowanie gniazd płyty rezonansowej",
    text: "Ręczne dopracowanie miejsc, w których zostanie osadzona płyta rezonansowa. Praca dłutem pozwala uzyskać dokładność, której nie zawsze da się osiągnąć wyłącznie maszynowo, szczególnie w punktach wymagających indywidualnego dopasowania.",
  },
  {
    src: "/historia-video-web/historia-11.mp4",
    title: "Wklejanie i dociskanie płyty rezonansowej",
    text: "Proces osadzania płyty rezonansowej w konstrukcji instrumentu. Równomierne dociśnięcie ściskami zapewnia stabilne połączenie, prawidłowe przyleganie oraz właściwą integralność akustyczną całego zespołu rezonansowego.",
  },
  {
    src: "/historia-video-web/historia-12.mp4",
    title: "Wklejanie owinięcia korpusu fortepianu Alaudis",
    text: "Etap klejenia warstw korpusu fortepianu Alaudis. Odpowiednie prowadzenie materiału, kontrola naprężeń i precyzja klejenia są kluczowe dla stabilności konstrukcji oraz eleganckiej linii obudowy instrumentu.",
  },
  {
    src: "/historia-video-web/historia-14.mp4",
    title: "Klejenie i dociskanie korpusu fortepianu Alaudis",
    text: "Formowanie korpusu fortepianu poprzez klejenie i kontrolowany docisk ściskami. To jeden z etapów, w których rzemiosło konstrukcyjne decyduje o trwałości, stabilności i finalnej geometrii instrumentu.",
  },
  {
    src: "/historia-video-web/historia-15.mp4",
    title: "Ostateczna intonacja młotków — Peter Salisbury",
    text: "Finalna intonacja młotków wykonana przez mistrza Petera Salisbury. To ostatni, artystyczny etap pracy nad barwą dźwięku, w którym regulowana jest reakcja młotków, charakter ataku, śpiewność oraz równowaga brzmieniowa całego instrumentu.",
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
              href="/"
              className="inline-flex rounded-full border border-white/35 bg-transparent px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Powrót
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
                  PL
                  <span className="text-[10px] transition group-open:rotate-180">
                    ▼
                  </span>
                </span>
              </summary>

              <div className="absolute right-0 mt-3 min-w-[150px] overflow-hidden rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl">
                <Link
                  href="/historia"
                  className="block w-full border-b border-white/10 bg-white/10 px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white"
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
                  className="block w-full px-5 py-3 text-left text-[11px] uppercase tracking-[0.24em] text-white/65 transition hover:bg-white/10 hover:text-white"
                >
                  FR
                </Link>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* ====================================================
          HERO VIDEO - ŚWIAT ALAUDIS
         ==================================================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/10 px-6 pt-28 text-center sm:px-10 lg:px-16">
        <video
          src="/historia-video-web/historia-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/historia/1 Dusza .jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />

        <div className="relative z-20 mx-auto max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.48em] text-white/62">
            Dziedzictwo i rzemiosło
          </p>

          <h1 className="mt-6 text-4xl font-light text-white sm:text-6xl lg:text-[86px] lg:leading-[1.02]">
            Świat Alaudis
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/78 sm:text-[17px] sm:leading-9">
            Poznaj filozofię marki, proces tworzenia instrumentów oraz
            rzemiosło, które nadaje każdemu Alaudis jego indywidualną
            tożsamość.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <div className="mx-auto h-14 w-8 rounded-full border border-white/35 bg-black/10">
            <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/80" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/70">
            Przewiń w dół
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
          SEKCJA - VIDEO Z PRODUKCJI
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] uppercase tracking-[0.42em] text-white/45">
              Z produkcji Alaudis
            </p>

            <h2 className="mt-5 text-3xl font-light text-white sm:text-4xl lg:text-[56px] lg:leading-[1.08]">
              Rzemiosło uchwycone w ruchu
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68 sm:text-[17px]">
              Krótkie materiały video pokazują proces powstawania instrumentu:
              pracę rąk, detale, powierzchnie, konstrukcję i atmosferę warsztatu,
              w którym idea Alaudis zamienia się w realny fortepian.
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
