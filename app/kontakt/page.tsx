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
// 2. kontakt z handlowcami jest niżej, po przewinięciu
// 3. dodano premium CTA do sekcji kontaktowej
// 4. dodano wskaźnik przewijania na dole hero
// 5. zachowano wszystkie maile, telefony i menu wiadomości
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

// ==========================================================
// DANE KONTAKTOWE
// ==========================================================

const PAULINA_PHONE_RAW = "48668216422";
const PAULINA_PHONE_DISPLAY = "+48 668 216 422";
const PAULINA_EMAIL = "Paulina@saprenovation.eu";

const KRZYSZTOF_PHONE_RAW = "48609809703";
const KRZYSZTOF_PHONE_DISPLAY = "+48 609 809 703";
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
          className="block px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/85 transition hover:bg-[#28513d] hover:text-white"
        >
          SMS
        </a>

        <a
          href={getWhatsAppHref(phoneRaw, personName)}
          target="_blank"
          rel="noreferrer"
          className="block border-t border-[#426f57]/70 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/85 transition hover:bg-[#28513d] hover:text-white"
        >
          WHATSAPP
        </a>

        <a
          href={getMailHref(emailAddress, personName)}
          className="block border-t border-[#426f57]/70 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/85 transition hover:bg-[#28513d] hover:text-white"
        >
          MAIL
        </a>
      </div>
    </details>
  );
}

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ====================================================
          WSPÓLNY GÓRNY PASEK
         ==================================================== */}
      <ModelPageTopBar backHref="/" activeLanguage="PL" />

      {/* ====================================================
          HERO STRONY KONTAKTOWEJ - PEŁNY EKRAN
         ==================================================== */}
      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Kontakt Alaudis"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        </div>

        {/* ==================================================
            TREŚĆ HERO
            - pełne wyśrodkowanie w ekranie
           ================================================== */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Kontakt Alaudis
            </p>

            <h1 className="text-4xl font-light uppercase tracking-[0.06em] text-white sm:text-6xl lg:text-[88px] lg:leading-[0.98]">
              Porozmawiajmy
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Skontaktuj się z nami, aby porozmawiać o modelach Alaudis,
              wykończeniach premium, konfiguracji fortepianu oraz współpracy.
            </p>

            {/* ==================================================
                PREMIUM CTA W HERO
               ================================================== */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#zespol"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Zobacz kontakt
              </a>

              <Link
                href="/"
                className="rounded-full border border-white/20 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white/85 transition hover:border-white hover:bg-white hover:text-black"
              >
                Wróć na stronę główną
              </Link>
            </div>
          </div>
        </div>

        {/* ==================================================
            WSKAŹNIK PRZEWIJANIA
           ================================================== */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#zespol" className="block">
            <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
              <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
              Przewiń w dół
            </p>
          </a>
        </div>
      </section>

      {/* ====================================================
          HANDLOWCY
          - sekcja niżej, po pełnoekranowym hero
         ==================================================== */}
      <section
        id="zespol"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Zespół kontaktowy
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* ==================================================
                PAULINA
               ================================================== */}
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
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
                    href={`tel:+${PAULINA_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {PAULINA_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-3 break-all text-lg text-white/78">
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
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
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
                    href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {KRZYSZTOF_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-3 break-all text-lg text-white/78">
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
      </section>

      {/* ====================================================
          DANE FIRMY
         ==================================================== */}
      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            SAP Renovation
          </p>

          <div className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
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
                <div className="mt-3 space-y-3 text-xl text-white">
                  <p>
                    <a
                      href={`tel:+${PAULINA_PHONE_RAW}`}
                      className="transition hover:text-white/80"
                    >
                      {PAULINA_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${PAULINA_EMAIL}`}
                      className="break-all transition hover:text-white/80"
                    >
                      {PAULINA_EMAIL}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                      className="transition hover:text-white/80"
                    >
                      {KRZYSZTOF_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${KRZYSZTOF_EMAIL}`}
                      className="break-all transition hover:text-white/80"
                    >
                      {KRZYSZTOF_EMAIL}
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
                href="/kontakt"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Skontaktuj się z nami
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
