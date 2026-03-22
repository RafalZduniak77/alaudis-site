//
//  page.tsx
//
//  Created by Rafal Zduniak on 22/03/2026.
//
// ==========================================================
// CONTACT PAGE - ALAUDIS
// ==========================================================
// To jest osobna podstrona kontaktu w klimacie strony Alaudis.
//
// Za co odpowiada ten plik:
// 1. pokazuje premium hero strony kontaktowej
// 2. korzysta ze wspólnego górnego paska ModelPageTopBar
// 3. pokazuje 2 handlowców ze zdjęciami
// 4. pokazuje numery telefonów i przyciski kontaktowe
// 5. pokazuje dane firmy SAP Renovation
// 6. kończy się stopką Footer
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcie hero
// - zdjęcia handlowców
// - imiona i nazwiska
// - numery telefonów
// - adres firmy
// - NIP
// - teksty sekcji
//
// Ważne:
// - wgraj zdjęcia do folderu public/kontakt/
// - przykładowe ścieżki w tym pliku:
//   /kontakt/paulina-przybylska.jpg
//   /kontakt/krzysztof-skwarek.jpg
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          HERO STRONY KONTAKTOWEJ
         ==================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Kontakt Alaudis"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* ==================================================
            TREŚĆ HERO
           ================================================== */}
        <div className="relative z-20 px-6 pb-20 pt-8 text-center">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Kontakt Alaudis
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.06em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Porozmawiajmy
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/88 sm:text-base">
              Skontaktuj się z nami, aby porozmawiać o modelach Alaudis,
              wykończeniach premium, konfiguracji fortepianu oraz współpracy.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          HANDLOWCY
         ==================================================== */}
      <section className="bg-black px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Zespół kontaktowy
            </p>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Osoby do bezpośredniego kontaktu
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* ==================================================
                PAULINA
               ================================================== */}
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
              {/* ZDJĘCIE HANDLOWCA - ZMNIEJSZONE I SPOKOJNIEJSZE */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/kontakt/paulina-przybylska.jpg"
                  alt="Paulina Przybylska"
                  fill
                  className="object-cover object-top scale-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                  Kontakt handlowy
                </p>

                <h3 className="mt-4 text-3xl font-light text-white">
                  Paulina Przybylska
                </h3>

                <p className="mt-5 text-lg text-white/78">
                  <a
                    href="tel:+48668216422"
                    className="transition hover:text-white"
                  >
                    +48 668 216 422
                  </a>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+48668216422"
                    className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Zadzwoń
                  </a>

                  <Link
                    href="/konfigurator"
                    className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Otwórz konfigurator
                  </Link>
                </div>
              </div>
            </div>

            {/* ==================================================
                KRZYSZTOF
               ================================================== */}
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
              {/* ZDJĘCIE HANDLOWCA - ZMNIEJSZONE I SPOKOJNIEJSZE */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/kontakt/krzysztof-skwarek.jpg"
                  alt="Krzysztof Skwarek"
                  fill
                  className="object-cover object-top scale-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                  Kontakt handlowy
                </p>

                <h3 className="mt-4 text-3xl font-light text-white">
                  Krzysztof Skwarek
                </h3>

                <p className="mt-5 text-lg text-white/78">
                  <a
                    href="tel:+48609809703"
                    className="transition hover:text-white"
                  >
                    +48 609 809 703
                  </a>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+48609809703"
                    className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Zadzwoń
                  </a>

                  <Link
                    href="/konfigurator"
                    className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Otwórz konfigurator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          DANE FIRMY
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* LEWA STRONA */}
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              SAP Renovation
            </p>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
              Dane firmy
            </h2>
          </div>

          {/* PRAWA STRONA */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Firma
                </p>
                <p className="mt-3 text-xl text-white">SAP Renovation</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Adres
                </p>
                <p className="mt-3 text-xl leading-8 text-white">
                  Obozowa 18
                  <br />
                  62-800 Kalisz
                </p>
              </div>

              {/* NIP FIRMY */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  NIP
                </p>
                <p className="mt-3 text-xl text-white">6181893417</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Kontakt
                </p>
                <div className="mt-3 space-y-2 text-xl text-white">
                  <p>
                    <a
                      href="tel:+48668216422"
                      className="transition hover:text-white/80"
                    >
                      +48 668 216 422
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+48609809703"
                      className="transition hover:text-white/80"
                    >
                      +48 609 809 703
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/fortepiany/alaudis-178"
                className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 transition hover:border-white hover:bg-white hover:text-black"
              >
                Zobacz modele
              </Link>

              <Link
                href="/konfigurator"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Otwórz konfigurator
              </Link>
            </div>
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
