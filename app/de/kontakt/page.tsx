//
//  page.tsx
//
//  Created by Rafal Zduniak on 22/03/2026.
//
// ==========================================================
// CONTACT PAGE - ALAUDIS
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

// ==========================================================
// KONTAKTDATEN DE
// ==========================================================

const SZYMON_PHONE_RAW = "48694424139";
const SZYMON_PHONE_DISPLAY = "+48 694 424 139";
const SZYMON_EMAIL = "Szymon@saprenovation.eu";

const ANDRZEJ_PHONE_RAW = "48533030818";
const ANDRZEJ_PHONE_DISPLAY = "+48 533 030 818";
const ANDRZEJ_EMAIL = "Andrzej@saprenovation.eu";

// ==========================================================
// HILFSLINKS FÜR NACHRICHTEN
// ==========================================================

function getSmsHref(phone: string, name: string) {
  return `sms:+${phone}?body=${encodeURIComponent(
    `Guten Tag ${name}, ich möchte über die Alaudis-Modelle sprechen.`
  )}`;
}

function getWhatsAppHref(phone: string, name: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    `Guten Tag ${name}, ich möchte über die Alaudis-Modelle sprechen.`
  )}`;
}

function getMailHref(email: string, name: string) {
  return `mailto:${email}?subject=${encodeURIComponent(
    `Alaudis Kontakt`
  )}&body=${encodeURIComponent(
    `Guten Tag ${name},\n\nich möchte über die Alaudis-Modelle sprechen.\n`
  )}`;
}

// ==========================================================
// NACHRICHTENMENÜ
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
      <summary className="cursor-pointer list-none rounded-full border border-[#3c6b52]/70 bg-[#15261d]/90 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white transition hover:border-[#5b9473] hover:bg-[#1b3126] hover:text-white">
        <span className="inline-flex items-center gap-2">
          Nachricht senden
          <span className="text-[10px] transition group-open:rotate-180">
            ▼
          </span>
        </span>
      </summary>

      <div className="absolute left-0 top-full z-40 mt-3 min-w-[220px] overflow-hidden rounded-2xl border border-[#426f57]/80 bg-[#193629]/96 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <a
          href={getSmsHref(phoneRaw, personName)}
          className="block px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-[#28513d] hover:text-white"
        >
          SMS
        </a>

        <a
          href={getWhatsAppHref(phoneRaw, personName)}
          target="_blank"
          rel="noreferrer"
          className="block border-t border-[#426f57]/70 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-[#28513d] hover:text-white"
        >
          WHATSAPP
        </a>

        <a
          href={getMailHref(emailAddress, personName)}
          className="block border-t border-[#426f57]/70 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-[#28513d] hover:text-white"
        >
          MAIL
        </a>
      </div>
    </details>
  );
}

export const metadata = pageMetadata("de", "kontakt");

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="de" page="kontakt" />
      <ModelPageTopBar backHref="/de" activeLanguage="DE" />


      <section
        id="team"
        className="scroll-mt-20 bg-black px-3 pb-3 pt-32 sm:px-6 sm:pb-4 sm:pt-28"
      >
        {/* Jasny panel na ciemnej stronie */}
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-4 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <h1 className="text-xs font-normal uppercase tracking-[0.32em] text-[#8a6d35]">
              Kontaktteam
            </h1>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] rounded-[24px] lg:h-[calc(100svh-252px)] lg:max-h-[760px] lg:min-h-[400px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] border border-black/10 bg-[#0b0b0b] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-l-[24px] bg-[#080808] lg:aspect-auto">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <Image
                      src="/kontakt/Szymon.jpg"
                      alt="Szymon Żubertowski"
                      fill
                      priority
                      sizes="(min-width: 1024px) 25vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </div>

              <div className="flex min-w-0 flex-col justify-center p-4 sm:p-7">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/88">
                  Vertriebskontakt
                </p>

                <h3 className="mt-3 text-xl font-light sm:text-2xl xl:text-3xl text-white">
                  Szymon Żubertowski
                </h3>

                <p className="mt-3 text-sm sm:text-base xl:mt-4 xl:text-lg text-white/95">
                  <a
                    href={`tel:+${SZYMON_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {SZYMON_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-1.5 break-all text-sm sm:text-base lg:text-sm xl:mt-2 xl:text-lg text-white/95">
                  <a
                    href={`mailto:${SZYMON_EMAIL}`}
                    className="transition hover:text-white"
                  >
                    {SZYMON_EMAIL}
                  </a>
                </p>

                <div className="mt-5 xl:mt-7">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:+${SZYMON_PHONE_RAW}`}
                      className="rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      Anrufen
                    </a>

                    <MessageMenu
                      phoneRaw={SZYMON_PHONE_RAW}
                      personName="Szymon"
                      emailAddress={SZYMON_EMAIL}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] rounded-[24px] lg:h-[calc(100svh-252px)] lg:max-h-[760px] lg:min-h-[400px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] border border-black/10 bg-[#0b0b0b] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-l-[24px] bg-[#080808] lg:aspect-auto">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <Image
                      src="/kontakt/Andrzej.jpg"
                      alt="Andrzej Bzowy"
                      fill
                      priority
                      sizes="(min-width: 1024px) 25vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </div>

              <div className="flex min-w-0 flex-col justify-center p-4 sm:p-7">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/88">
                  Vertriebskontakt
                </p>

                <h3 className="mt-3 text-xl font-light sm:text-2xl xl:text-3xl text-white">
                  Andrzej Bzowy
                </h3>

                <p className="mt-3 text-sm sm:text-base xl:mt-4 xl:text-lg text-white/95">
                  <a
                    href={`tel:+${ANDRZEJ_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {ANDRZEJ_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-1.5 break-all text-sm sm:text-base lg:text-sm xl:mt-2 xl:text-lg text-white/95">
                  <a
                    href={`mailto:${ANDRZEJ_EMAIL}`}
                    className="transition hover:text-white"
                  >
                    {ANDRZEJ_EMAIL}
                  </a>
                </p>

                <div className="mt-5 xl:mt-7">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:+${ANDRZEJ_PHONE_RAW}`}
                      className="rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      Anrufen
                    </a>

                    <MessageMenu
                      phoneRaw={ANDRZEJ_PHONE_RAW}
                      personName="Andrzej"
                      emailAddress={ANDRZEJ_EMAIL}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="bg-black px-3 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-5 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#8a6d35]">
            SAP Renovation
          </p>

          <div className="mt-12 rounded-[32px] border border-black/10 bg-[#0b0b0b] p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/88">
                  Firma
                </p>
                <p className="mt-3 text-xl text-white">SAP Renovation</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/88">
                  Adresse
                </p>
                <p className="mt-3 text-xl leading-8 text-white">
                  Obozowa 18
                  <br />
                  62-800 Kalisz
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/88">
                  Steuernummer
                </p>
                <p className="mt-3 text-xl text-white">6181893417</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/88">
                  Kontakt
                </p>
                <div className="mt-3 space-y-3 text-xl text-white">
                  <p>
                    <a
                      href={`tel:+${SZYMON_PHONE_RAW}`}
                      className="transition hover:text-white/95"
                    >
                      {SZYMON_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${SZYMON_EMAIL}`}
                      className="break-all transition hover:text-white/95"
                    >
                      {SZYMON_EMAIL}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:+${ANDRZEJ_PHONE_RAW}`}
                      className="transition hover:text-white/95"
                    >
                      {ANDRZEJ_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${ANDRZEJ_EMAIL}`}
                      className="break-all transition hover:text-white/95"
                    >
                      {ANDRZEJ_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/de/odwiedz-atelier"
                className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Atelier besuchen
              </Link>

              <Link
                href="/de/dla-architektow"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Für Architekten
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
