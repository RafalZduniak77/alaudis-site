//
//  page.tsx
//
//  Created by Rafal Zduniak on 22/03/2026.
//
// ==========================================================
// CONTACT PAGE - ALAUDIS
// ==========================================================
// WERSJA PREMIUM FULLSCREEN HERO
// ----------------------------------------------------------
// Co poprawiono:
// 1. sekcja "Porozmawiajmy" zajmuje cały ekran
// 2. nagłówek został zmniejszony do bardziej premium proporcji
// 3. dodano dodatkowe eleganckie zdanie pod opisem
// 4. kontakt z handlowcami jest niżej, po przewinięciu
// 5. CTA prowadzą teraz do nowych podstron:
//    - /odwiedz-atelier
//    - /dla-architektow
// 6. dodano wskaźnik przewijania na dole hero
// 7. zachowano wszystkie maile, telefony i menu wiadomości
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

// ==========================================================
// DANE KONTAKTOWE
// ==========================================================

const PAULINA_PHONE_RAW = "48668216442";
const PAULINA_PHONE_DISPLAY = "+48 668 216 442";
const PAULINA_EMAIL = "Paulina@saprenovation.eu";

const KRZYSZTOF_PHONE_RAW = "48606384105";
const KRZYSZTOF_PHONE_DISPLAY = "+48 606 384 105";
const KRZYSZTOF_EMAIL = "Krzysztof@saprenovation.eu";

// ==========================================================
// POMOCNICZE LINKI WIADOMOŚCI
// ==========================================================

function getSmsHref(phone: string, name: string) {
  return `sms:+${phone}?body=${encodeURIComponent(
    `Dzień dobry ${name}, chciałbym porozmawiać o modelach Alaudis.`
  )}`;
}

function getWhatsAppHref(phone: string, name: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    `Dzień dobry ${name}, chciałbym porozmawiać o modelach Alaudis.`
  )}`;
}

function getMailHref(email: string, name: string) {
  return `mailto:${email}?subject=${encodeURIComponent(
    `Kontakt Alaudis`
  )}&body=${encodeURIComponent(
    `Dzień dobry ${name},\n\nchciałbym porozmawiać o modelach Alaudis.\n`
  )}`;
}

// ==========================================================
// MENU WIADOMOŚCI
// ==========================================================

type MessageMenuProps = {
  phoneRaw: string;
  personName: string;
  emailAddress: string;
};

function MessageMenu({
  phoneRaw,
  personName,
  emailAddress,
}: MessageMenuProps) {
  return (
    <details className="group relative z-30">
      <summary className="cursor-pointer list-none rounded-full border border-[#3c6b52]/70 bg-[#15261d]/90 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/90 transition hover:border-[#5b9473] hover:bg-[#1b3126] hover:text-white">
        <span className="inline-flex items-center gap-2">
          Wyślij wiadomość
          <span className="text-[10px] transition group-open:rotate-180">
            ▼
          </span>
        </span>
      </summary>

      <div className="absolute left-0 top-full z-40 mt-3 min-w-[220px] overflow-hidden rounded-2xl border border-[#426f57]/80 bg-[#193629]/96 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <a
          href={getSmsHref(phoneRaw, personName)}
          className="block px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/90 transition hover:bg-[#28513d] hover:text-white"
        >
          SMS
        </a>

        <a
          href={getWhatsAppHref(phoneRaw, personName)}
          target="_blank"
          rel="noreferrer"
          className="block border-t border-[#426f57]/70 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/90 transition hover:bg-[#28513d] hover:text-white"
        >
          WHATSAPP
        </a>

        <a
          href={getMailHref(emailAddress, personName)}
          className="block border-t border-[#426f57]/70 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/90 transition hover:bg-[#28513d] hover:text-white"
        >
          MAIL
        </a>
      </div>
    </details>
  );
}

export const metadata = pageMetadata("pl", "kontakt");

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="pl" page="kontakt" />
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />


      {/* ====================================================
          HANDLOWCY
          - sekcja niżej, po pełnoekranowym hero
         ==================================================== */}
      <section
        id="zespol"
        className="scroll-mt-20 bg-black px-3 pb-3 pt-32 sm:px-6 sm:pb-4 sm:pt-28"
      >
        {/* Jasny panel na ciemnej stronie */}
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-5 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="text-xs font-normal uppercase tracking-[0.32em] text-[#8a6d35]">
              Zespół kontaktowy
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* ==================================================
                PAULINA
               ================================================== */}
            <div className="overflow-hidden rounded-[32px] border border-black/10 bg-[#0b0b0b] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-t-[32px] bg-[#080808]">
                <div className="absolute inset-0 p-5">
                  <div className="relative h-full w-full">
                    <Image
                      src="/kontakt/paulina-przybylska.jpg"
                      alt="Paulina Przybylska"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/75">
                  Kontakt handlowy
                </p>

                <h3 className="mt-4 text-3xl font-light text-white">
                  Paulina Przybylska
                </h3>

                <p className="mt-5 text-lg text-white/86">
                  <a
                    href={`tel:+${PAULINA_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {PAULINA_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-3 break-all text-lg text-white/86">
                  <a
                    href={`mailto:${PAULINA_EMAIL}`}
                    className="transition hover:text-white"
                  >
                    {PAULINA_EMAIL}
                  </a>
                </p>

                <div className="mt-8 min-h-[190px]">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:+${PAULINA_PHONE_RAW}`}
                      className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      Zadzwoń
                    </a>

                    <MessageMenu
                      phoneRaw={PAULINA_PHONE_RAW}
                      personName="Paulina"
                      emailAddress={PAULINA_EMAIL}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                KRZYSZTOF
               ================================================== */}
            <div className="overflow-hidden rounded-[32px] border border-black/10 bg-[#0b0b0b] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-t-[32px] bg-[#080808]">
                <div className="absolute inset-0 p-5">
                  <div className="relative h-full w-full">
                    <Image
                      src="/kontakt/krzysztof-skwarek.jpg"
                      alt="Krzysztof Skwarek"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/75">
                  Kontakt handlowy
                </p>

                <h3 className="mt-4 text-3xl font-light text-white">
                  Krzysztof Skwarek
                </h3>

                <p className="mt-5 text-lg text-white/86">
                  <a
                    href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {KRZYSZTOF_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-3 break-all text-lg text-white/86">
                  <a
                    href={`mailto:${KRZYSZTOF_EMAIL}`}
                    className="transition hover:text-white"
                  >
                    {KRZYSZTOF_EMAIL}
                  </a>
                </p>

                <div className="mt-8 min-h-[190px]">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                      className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      Zadzwoń
                    </a>

                    <MessageMenu
                      phoneRaw={KRZYSZTOF_PHONE_RAW}
                      personName="Krzysztof"
                      emailAddress={KRZYSZTOF_EMAIL}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ====================================================
          DANE FIRMY
         ==================================================== */}
      <section className="bg-black px-3 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-5 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#8a6d35]">
            SAP Renovation
          </p>

          <div className="mt-12 rounded-[32px] border border-black/10 bg-[#0b0b0b] p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">
                  Firma
                </p>
                <p className="mt-3 text-xl text-white">SAP Renovation</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">
                  Adres
                </p>
                <p className="mt-3 text-xl leading-8 text-white">
                  Obozowa 18
                  <br />
                  62-800 Kalisz
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">
                  NIP
                </p>
                <p className="mt-3 text-xl text-white">6181893417</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/75">
                  Kontakt
                </p>
                <div className="mt-3 space-y-3 text-xl text-white">
                  <p>
                    <a
                      href={`tel:+${PAULINA_PHONE_RAW}`}
                      className="transition hover:text-white/88"
                    >
                      {PAULINA_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${PAULINA_EMAIL}`}
                      className="break-all transition hover:text-white/88"
                    >
                      {PAULINA_EMAIL}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                      className="transition hover:text-white/88"
                    >
                      {KRZYSZTOF_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${KRZYSZTOF_EMAIL}`}
                      className="break-all transition hover:text-white/88"
                    >
                      {KRZYSZTOF_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/odwiedz-atelier"
                className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/90 transition hover:border-white hover:bg-white hover:text-black"
              >
                Odwiedź atelier
              </Link>

              <Link
                href="/dla-architektow"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Dla architektów
              </Link>
            </div>
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
