"use client";

// ==========================================================
// PAGE - HISTORIA / ŚWIAT ALAUDIS
// ==========================================================
// WERSJA PREMIUM - INTRO + PEŁNOEKRANOWE SEKCJE
// ----------------------------------------------------------
// Co tutaj jest:
// 1. spokojny wstęp u góry jak na podanej referencji
// 2. niżej sekcje full screen
// 3. zdjęcia przewijają się sekcja po sekcji
// 4. tekst jest w półprzezroczystej ramce na zdjęciu
// 5. użyte są dokładne nazwy plików z folderu public/historia
// ==========================================================

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
    imageAlt: "Rezonans i stabilność konstrukcji fortepianu",
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
      "SAP Renovation jest jednym z europejskich liderów w dziedzinie wykończeń fortepianów. Na przestrzeni ponad trzech dekad nasz zespół odrestaurował blisko 14 000 instrumentów.",
      "Proces szlifowania i polerowania w SAP Renovation to połączenie mistrzowskiego rzemiosła z nowoczesną technologią. W przypadku fortepianu SAP Alaudis przeprowadzono go z wyjątkową dbałością o każdy detal.",
      "Ostateczna powierzchnia fortepianu SAP Alaudis nie tylko zachwyca połyskiem i estetyką, lecz stanowi również integralny element konstrukcji instrumentu.",
    ],
    image: "/historia/5 Wykończenie.jpg",
    imageAlt: "Wykończenie i polerowanie fortepianu Alaudis",
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
    imageAlt: "Dno rezonansowe fortepianu Alaudis",
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
    imageAlt: "Mostki klonowe fortepianu Alaudis",
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
    imageAlt: "Mechanizm Renner w fortepianie Alaudis",
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
    imageAlt: "Klawiatura Kluge w fortepianie Alaudis",
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

function StoryFullscreenSection({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  align,
}: StorySection) {
  const isLeft = align === "left";

  return (
    <section className="relative h-screen overflow-hidden border-t border-white/10">
      {/* ==================================================
          TŁO FOTO
         ================================================== */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={false}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
      </div>

      {/* ==================================================
          TREŚĆ
         ================================================== */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-end px-6 pb-10 pt-28 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">
        <div
          className={`w-full max-w-[420px] rounded-[28px] border border-white/15 bg-[linear-gradient(135deg,rgba(14,14,14,0.72),rgba(26,26,26,0.52))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:max-w-[500px] sm:p-7 lg:max-w-[560px] lg:p-8 ${
            isLeft ? "mr-auto" : "ml-auto"
          }`}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/62 sm:text-[11px] sm:tracking-[0.34em]">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-light uppercase tracking-[0.03em] text-white sm:text-3xl lg:text-[42px] lg:leading-[1.08]">
            {title}
          </h2>

          <div className="mt-5 space-y-4">
            {text.map((paragraph, index) => (
              <p
                key={`${title}-${index}`}
                className="text-sm leading-7 text-white/84 sm:text-[15px] sm:leading-8 lg:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          TOP BAR
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          WSTĘP U GÓRY - JAK NA REFERENCJI
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
          SEKCJE PEŁNOEKRANOWE
         ==================================================== */}
      {storySections.map((section) => (
        <StoryFullscreenSection key={section.title} {...section} />
      ))}

      {/* ====================================================
          CTA KOŃCOWE
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
