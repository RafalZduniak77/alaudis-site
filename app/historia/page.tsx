// ==========================================================
// PAGE - HISTORIA / ŚWIAT ALAUDIS
// ==========================================================
// WERSJA PREMIUM Z DUŻYM FOTO
// ----------------------------------------------------------
// Co zawiera ta wersja:
// 1. duże hero ze zdjęciem na całą szerokość
// 2. opis w eleganckiej ramce na zdjęciu
// 3. klimat bardziej luxury / editorial
// 4. dalsze sekcje pod hero
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          GÓRNY PASEK
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          HERO PREMIUM - DUŻE FOTO + RAMKA OPISU
         ==================================================== */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        {/* TŁO FOTO */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Świat Alaudis"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_72%,rgba(255,255,255,0.10),transparent_18%),radial-gradient(circle_at_78%_78%,rgba(201,154,92,0.16),transparent_20%)]" />
        </div>

        {/* ZAWARTOŚĆ HERO */}
        <div className="relative z-20 min-h-screen px-6 pb-10 pt-28 sm:px-10 lg:px-16">
          {/* MAŁY LABEL U GÓRY */}
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-[11px] uppercase tracking-[0.48em] text-white/80">
              Dziedzictwo i filozofia
            </p>
          </div>

          {/* DUŻA RAMKA OPISU */}
          <div className="mx-auto flex min-h-[78vh] max-w-7xl items-end">
            <div className="mb-6 w-full max-w-3xl rounded-[30px] border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:mb-10 sm:p-8 lg:p-10">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/65">
                Świat Alaudis
              </p>

              <h1 className="mt-4 text-3xl font-light uppercase tracking-[0.05em] text-white sm:text-5xl lg:text-[62px] lg:leading-[1.04]">
                Fortepian
                <br />
                o własnej duszy
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/82 sm:text-base sm:leading-9">
                SAP Alaudis to niezwykły fortepian, którego celem jest uchwycenie
                czarującego piękna i dźwięku śpiewu skowronka. Powstał z
                pragnienia stworzenia instrumentu mistrzowskiego — takiego,
                który zachwyca brzmieniem, porusza emocje i staje się naturalnym
                przedłużeniem duszy pianisty.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
                Nie tworzymy produkcji seryjnej. Każdy Alaudis powstaje
                indywidualnie — z cierpliwości, ręcznej pracy, precyzji i miłości
                do dźwięku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          IDEA MARKI
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Idea Alaudis
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Instrument tworzony
              <br />
              indywidualnie
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              Fortepian Alaudis jest dziełem ludzkich rąk, cierpliwości i miłości
              do dźwięku. Każdy element — od płyty rezonansowej, przez mostki i
              mechanikę, aż po lakierowanie i intonację — tworzony jest z
              najwyższą dbałością o detal.
            </p>

            <p className="leading-8">
              Naszym celem nie jest tylko zbudowanie fortepianu, lecz stworzenie
              dzieła sztuki — instrumentu o duszy, który zachwyci zarówno
              pianistę, jak i słuchacza.
            </p>

            <p className="leading-8">
              W Alaudis łączymy klasyczne techniki rzemieślnicze z nowoczesnymi
              rozwiązaniami akustycznymi, tworząc brzmienie pełne głębi, ciepła
              i życia.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          DREWNO / FILOZOFIA MATERIAŁU
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Materiał i brzmienie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
            Fortepian to drewno,
            <br />
            które gra
          </h2>

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-white/68">
            Wszystko zaczyna się od drewna. Z pozoru zwykłe deski, ułożone w
            sztaple, czekają na swój czas — na moment, w którym zamienią się w
            dźwięk. To właśnie w nich ukryta jest przyszła dusza fortepianu.
          </p>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/68">
            W SAP Alaudis drewno wybieramy tak, jak artysta wybiera barwy do
            obrazu. Szukamy w nim harmonii, elastyczności i duszy. Każdy
            gatunek ma swój głos — świerk rezonansowy daje ciepło i głębię,
            brzoza wnosi precyzję, a klon i buk siłę i trwałość.
          </p>
        </div>
      </section>

      {/* ====================================================
          BLOKI TECHNICZNE
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Korpus
            </p>

            <h3 className="mt-4 text-2xl font-light text-white">
              Stabilność i rezonans
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Korpus Alaudis powstaje z wyselekcjonowanej brzozy i klonu.
              Laminowana obręcz zapewnia wyjątkową sztywność strukturalną,
              stabilność stroju i aktywną współpracę z płytą rezonansową.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Lakierowanie
            </p>

            <h3 className="mt-4 text-2xl font-light text-white">
              Głębia i trwałość
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Wykończenie wykonywane jest z najwyższą starannością przy użyciu
              systemu lakierniczego ICA. Wielowarstwowy proces daje lustrzany
              połysk, wysoką trwałość i ochronę konstrukcji instrumentu.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Płyta rezonansowa
            </p>

            <h3 className="mt-4 text-2xl font-light text-white">
              Serce fortepianu
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Dno rezonansowe ze świerku klasy tonowej stanowi kluczowy element
              akustyczny instrumentu. Odpowiada za projekcję, bogactwo barwy,
              długie wybrzmienie i tonalną równowagę.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          CTA KOŃCOWE
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
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
