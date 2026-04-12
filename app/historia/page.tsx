// ==========================================================
// PAGE - HISTORIA / ŚWIAT ALAUDIS
// ==========================================================
// NOWA PODSTRONA
// ----------------------------------------------------------
// Co zawiera ta wersja:
// 1. hero z filozofią marki
// 2. sekcję o idei Alaudis
// 3. blok "Fortepian to drewno, które gra"
// 4. sekcję o kolejnych elementach konstrukcji
// 5. CTA na końcu
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
          HERO
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Świat Alaudis"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        </div>

        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Dziedzictwo i filozofia
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Świat Alaudis
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Alaudis powstał z pragnienia stworzenia instrumentu mistrzowskiego
              — takiego, który zachwyca brzmieniem, porusza emocje i staje się
              naturalnym przedłużeniem duszy pianisty.
            </p>
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
              SAP Alaudis to niezwykły fortepian, którego celem jest uchwycenie
              czarującego piękna i dźwięku śpiewu skowronka. Powstał z miłości do
              dźwięku, rzemiosła i potrzeby stworzenia instrumentu o własnej
              tożsamości.
            </p>

            <p className="leading-8">
              Nie stosujemy produkcji seryjnej — każdy instrument powstaje
              indywidualnie, w procesie pełnym precyzji, cierpliwości i
              mistrzowskiego rzemiosła. Każdy element, od płyty rezonansowej po
              finalną intonację, tworzony jest z najwyższą dbałością o detal.
            </p>

            <p className="leading-8">
              Naszym celem nie jest jedynie zbudowanie fortepianu, lecz
              stworzenie dzieła sztuki — instrumentu o duszy, który zachwyci
              zarówno pianistę, jak i słuchacza.
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
            obrazu. Szukamy harmonii, elastyczności i duszy. Każdy gatunek ma
            swój głos — świerk rezonansowy daje ciepło i głębię, brzoza wnosi
            precyzję, a klon i buk siłę oraz trwałość.
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
          KOLEJNE ELEMENTY KONSTRUKCJI
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Konstrukcja instrumentu
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">
              Brzmienie budowane
              <br />
              warstwa po warstwie
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/68">
              W Alaudis klasyczne rzemiosło spotyka się z nowoczesną precyzją.
              Każdy element konstrukcji — od mostków i strojnicy po mechanizm,
              klawiaturę i intonację — współtworzy jedną, spójną architekturę
              brzmienia.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                Mostki rezonansowe
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Precyzyjna transmisja drgań
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Mostki Alaudis wykonane są z wyselekcjonowanego klonu twardego.
                Ich warstwowa konstrukcja zapewnia wyjątkową stabilność
                mechaniczną, efektywne przenoszenie energii strun na płytę
                rezonansową i bogate spektrum alikwotów.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                Strojnica
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Stabilność stroju
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Wielowarstwowa strojnica bukowa została zaprojektowana z myślą
                o równomiernym uścisku kołków i długotrwałym utrzymaniu stroju.
                Krzyżowy układ warstw zwiększa stabilność mechaniczną i
                odporność na naprężenia.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                Rama żeliwna
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Konstrukcja i projekcja
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Rama stabilizuje instrument i współpracuje z jego częścią
                akustyczną. Odpowiednio zaprojektowany odlew oraz dokładna
                integracja z korpusem pozwalają zachować mocną projekcję i
                tonalną klarowność w całym zakresie.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                Naciąg i mechanizm
              </p>

              <h3 className="mt-4 text-2xl font-light text-white">
                Energia, kontrola, odpowiedź
              </h3>

              <p className="mt-5 leading-8 text-white/68">
                Kołki stroikowe, struny, mechanizm Renner, klawiatura Kluge i
                finalna intonacja tworzą wspólnie instrument o wysokiej
                responsywności, pełnym spektrum harmonicznym i precyzyjnej
                kontroli brzmienia.
              </p>
            </div>
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
