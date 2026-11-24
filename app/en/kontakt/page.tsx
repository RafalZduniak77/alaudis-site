//
//  page.tsx
//
//  Created by Rafal Zduniak on 22/03/2026.
//
// ==========================================================
// CONTACT PAGE - ALAUDIS
// ==========================================================
// PREMIUM FULLSCREEN HERO VERSION
// ----------------------------------------------------------
// What was improved:
// 1. the "Let's talk" section now fills the entire screen
// 2. the heading was reduced to more premium proportions
// 3. an additional elegant sentence was added below the description
// 4. sales contacts are placed lower, after scrolling
// 5. CTA buttons now lead to new subpages:
//    - /en/odwiedz-atelier
//    - /en/dla-architektow
// 6. a scroll indicator was added at the bottom of the hero
// 7. all emails, phone numbers and message menu were preserved
// ==========================================================

import SeoJsonLd from "@/components/SeoJsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

// ==========================================================
// CONTACT DATA
// ==========================================================

const PAULINA_PHONE_RAW = "48668216442";
const PAULINA_PHONE_DISPLAY = "+48 668 216 442";
const PAULINA_EMAIL = "Paulina@saprenovation.eu";

const KRZYSZTOF_PHONE_RAW = "48606384105";
const KRZYSZTOF_PHONE_DISPLAY = "+48 606 384 105";
const KRZYSZTOF_EMAIL = "Krzysztof@saprenovation.eu";

// ==========================================================
// MESSAGE LINKS HELPERS
// ==========================================================

function getSmsHref(phone: string, name: string) {
  return `sms:+${phone}?body=${encodeURIComponent(
    `Hello ${name}, I would like to talk about Alaudis models.`
  )}`;
}

function getWhatsAppHref(phone: string, name: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hello ${name}, I would like to talk about Alaudis models.`
  )}`;
}

function getMailHref(email: string, name: string) {
  return `mailto:${email}?subject=${encodeURIComponent(
    `Alaudis Contact`
  )}&body=${encodeURIComponent(
    `Hello ${name},\n\nI would like to talk about Alaudis models.\n`
  )}`;
}

// ==========================================================
// MESSAGE MENU
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
          Send message
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

export const metadata = pageMetadata("en", "kontakt");

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="en" page="kontakt" />
      {/* ====================================================
          SHARED TOP BAR
         ==================================================== */}
      <ModelPageTopBar backHref="/en" activeLanguage="EN" />


      {/* ====================================================
          SALES TEAM
         ==================================================== */}
      <section
        id="team"
        className="scroll-mt-20 bg-black px-3 pb-3 pt-32 sm:px-6 sm:pb-4 sm:pt-28"
      >
        {/* Jasny panel na ciemnej stronie */}
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-4 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <h1 className="text-xs font-normal uppercase tracking-[0.32em] text-[#8a6d35]">
              Contact team
            </h1>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] rounded-[24px] lg:h-[calc(100svh-252px)] lg:max-h-[760px] lg:min-h-[400px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] border border-black/10 bg-[#0b0b0b] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-l-[24px] bg-[#080808] lg:aspect-auto">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <Image
                      src="/kontakt/paulina-przybylska.jpg"
                      alt="Paulina Przybylska"
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
                  Sales contact
                </p>

                <h3 className="mt-3 text-xl font-light sm:text-2xl xl:text-3xl text-white">
                  Paulina Przybylska
                </h3>

                <p className="mt-3 text-sm sm:text-base xl:mt-4 xl:text-lg text-white/95">
                  <a
                    href={`tel:+${PAULINA_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {PAULINA_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-1.5 break-all text-sm sm:text-base lg:text-sm xl:mt-2 xl:text-lg text-white/95">
                  <a
                    href={`mailto:${PAULINA_EMAIL}`}
                    className="transition hover:text-white"
                  >
                    {PAULINA_EMAIL}
                  </a>
                </p>

                <div className="mt-5 xl:mt-7">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:+${PAULINA_PHONE_RAW}`}
                      className="rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      Call
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

            <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] rounded-[24px] lg:h-[calc(100svh-252px)] lg:max-h-[760px] lg:min-h-[400px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] border border-black/10 bg-[#0b0b0b] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-l-[24px] bg-[#080808] lg:aspect-auto">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <Image
                      src="/kontakt/krzysztof-skwarek.jpg"
                      alt="Krzysztof Skwarek"
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
                  Sales contact
                </p>

                <h3 className="mt-3 text-xl font-light sm:text-2xl xl:text-3xl text-white">
                  Krzysztof Skwarek
                </h3>

                <p className="mt-3 text-sm sm:text-base xl:mt-4 xl:text-lg text-white/95">
                  <a
                    href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {KRZYSZTOF_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-1.5 break-all text-sm sm:text-base lg:text-sm xl:mt-2 xl:text-lg text-white/95">
                  <a
                    href={`mailto:${KRZYSZTOF_EMAIL}`}
                    className="transition hover:text-white"
                  >
                    {KRZYSZTOF_EMAIL}
                  </a>
                </p>

                <div className="mt-5 xl:mt-7">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                      className="rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      Call
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
          COMPANY DETAILS
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
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/88">
                  Company
                </p>
                <p className="mt-3 text-xl text-white">SAP Renovation</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/88">
                  Address
                </p>
                <p className="mt-3 text-xl leading-8 text-white">
                  Obozowa 18
                  <br />
                  62-800 Kalisz
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/88">
                  Tax ID
                </p>
                <p className="mt-3 text-xl text-white">6181893417</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/88">
                  Contact
                </p>
                <div className="mt-3 space-y-3 text-xl text-white">
                  <p>
                    <a
                      href={`tel:+${PAULINA_PHONE_RAW}`}
                      className="transition hover:text-white/95"
                    >
                      {PAULINA_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${PAULINA_EMAIL}`}
                      className="break-all transition hover:text-white/95"
                    >
                      {PAULINA_EMAIL}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                      className="transition hover:text-white/95"
                    >
                      {KRZYSZTOF_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${KRZYSZTOF_EMAIL}`}
                      className="break-all transition hover:text-white/95"
                    >
                      {KRZYSZTOF_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/en/odwiedz-atelier"
                className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Visit the atelier
              </Link>

              <Link
                href="/en/dla-architektow"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                For architects
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
