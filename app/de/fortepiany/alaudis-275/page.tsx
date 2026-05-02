// ==========================================================
// MODEL PAGE - ALAUDIS 275
// ==========================================================
// To jest osobna podstrona premium dla modelu Alaudis 275.
// Wersja językowa: DE
//
// Za co odpowiada ten plik:
// 1. pokazuje hero modelu 275
// 2. korzysta ze wspólnego górnego paska ModelPageTopBar
// 3. opisuje charakter brzmienia
// 4. pokazuje przeznaczenie modelu
// 5. pokazuje docelowe wnętrza i sceny
// 6. pokazuje galerię zdjęć
// 7. daje 2 główne wejścia:
//    - do konfiguratora
//    - do podglądu 3D
// 8. kończy się stopką Footer
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcia modelu
// - teksty sekcji
// - tytuł modelu
// - opisy charakteru
// - linki CTA
// - aktywny język w górnym pasku
//
// Ważne:
// - rozwijane menu języków nie jest kodowane tutaj ręcznie
// - bierze się z komponentu ModelPageTopBar
// - jeśli chcesz zmienić wygląd listy PL / EN / DE,
//   robisz to w: components/ModelPageTopBar.tsx
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function ModelAlaudis275Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
          - zawsze widoczny
          - powrót po lewej
          - logo na środku
          - języki po prawej
         ==================================================== */}
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />

      {/* ====================================================
          HERO MODELU
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        {/* TŁO HERO */}
        <div className="absolute inset-0">
          <Image
            src="/galeria-home/3.jpg"
            alt="Alaudis 275"
            fill
            priority
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Konzertmodell
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Alaudis 275
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Die größte Konzertform von Alaudis — geschaffen für die volle
              Klangskala, eine breite Projektion und eine starke Bühnenpräsenz.
              Dieses Modell ist für Räume gedacht, in denen das Instrument das
              Interieur nicht nur ergänzt, sondern zu seiner Hauptstimme und zum
              zentralen Punkt der gesamten Komposition wird.
            </p>

            {/* ==================================================
                CTA HERO
               ================================================== */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/de/konfigurator?model=275"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Konfigurator öffnen
              </Link>

              <Link
                href="/de/odkryj-modele"
                className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                In 3D ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CHARAKTER BRZMIENIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Klangcharakter
            </p>

            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Monumental, tragfähig, vollständig konzertant
            </h2>
          </div>

          <div className="space-y-6 text-white/72">
            <p className="leading-8">
              Alaudis 275 öffnet die volle Skala der Klangsprache der Marke.
              Er bietet eine weitreichende Projektion, ein tiefes Bassfundament,
              einen breiten harmonischen Atem und eine Bühnen-Tragfähigkeit, die
              es dem Instrument ermöglicht, größere Räume frei und souverän zu
              füllen.
            </p>

            <p className="leading-8">
              Dieses Modell ist für jene geschaffen, die maximale Präsenz
              erwarten: großes Volumen, eine erweiterte dynamische Palette und
              einen vollständigen Konzertcharakter. Es bewahrt die Kultur und
              Noblesse von Alaudis, entwickelt sie jedoch zur expansivsten und
              repräsentativsten Form der Marke.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          PRZEZNACZENIE + WNĘTRZA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* PRZEZNACZENIE */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Bestimmung
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Bühne, Konzertsaal, Premium-Residenz
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Geschaffen für Konzertsäle, große repräsentative Räume,
              künstlerische Institutionen sowie die anspruchsvollsten privaten
              Interieurs, in denen ein Flügel volle Projektion und eine große
              Bühnenpräsenz bieten soll.
            </p>
          </div>

          {/* WNĘTRZA */}
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Zielinterieurs und Bühnen
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Skala, Architektur, Prestige
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Am besten entfaltet er sich in Räumen mit großem Atem:
              repräsentativen Salons, Konzertsälen, Luxushotels sowie
              Interieurs, in denen das Instrument einen dominierenden,
              unübersehbar zentralen und besonders prestigeträchtigen Charakter
              haben soll.
            </p>
          </div>

          {/* TOŻSAMOŚĆ */}
          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Identität des Modells
            </p>

            <h3 className="mt-4 text-2xl font-light">
              Die größte Form von Alaudis
            </h3>

            <p className="mt-5 leading-8 text-white/68">
              Alaudis 275 repräsentiert die höchste Skala der Marke — ein
              Instrument mit der am weitesten entwickelten Persönlichkeit, dem
              größten Atem und der ausgeprägtesten Konzertnatur. Es ist Alaudis
              in seiner vollständigsten, monumentalsten und bühnenhaftesten
              Gestalt.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          GALERIA
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Galerie
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Alaudis 275 in Konzertgröße
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* ZDJĘCIE 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/3.jpg"
                alt="Alaudis 275 - Ansicht 1"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/5.JPG"
                alt="Alaudis 275 - Ansicht 2"
                fill
                className="object-cover"
              />
            </div>

            {/* ZDJĘCIE 3 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/galeria-home/2.jpg"
                alt="Alaudis 275 - Ansicht 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          KOŃCOWE CTA
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Nächster Schritt
          </p>

          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
            Konfigurieren Sie Alaudis 275 oder sehen Sie ihn in 3D
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
            Öffnen Sie den Konfigurator, um Ausführung und Details anzupassen,
            oder sehen Sie sich das Modell in der 3D-Vorschau an und prüfen Sie
            seine Skala, Proportionen und Bühnenpräsenz im Raum.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/de/konfigurator?model=275"
              className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Konfigurator öffnen
            </Link>

            <Link
              href="/de/odkryj-modele"
              className="rounded-full border border-white/35 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              In 3D ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          FOOTER
         ==================================================== */}
      <Footer />
    </main>
  );
}
