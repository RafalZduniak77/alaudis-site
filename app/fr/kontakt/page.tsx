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
// DONNÉES DE CONTACT FR
// ==========================================================

const PIOTR_PHONE_RAW = "48694424237";
const PIOTR_PHONE_DISPLAY = "+48 694 424 237";
const PIOTR_EMAIL = "Piotr@saprenovation.eu";

const KRZYSZTOF_PHONE_RAW = "48606384105";
const KRZYSZTOF_PHONE_DISPLAY = "+48 606 384 105";
const KRZYSZTOF_EMAIL = "Krzysztof@saprenovation.eu";

// ==========================================================
// LIENS D’AIDE POUR LES MESSAGES
// ==========================================================

function getSmsHref(phone: string, name: string) {
  return `sms:+${phone}?body=${encodeURIComponent(
    `Bonjour ${name}, je voudrais parler des modèles Alaudis.`
  )}`;
}

function getWhatsAppHref(phone: string, name: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    `Bonjour ${name}, je voudrais parler des modèles Alaudis.`
  )}`;
}

function getMailHref(email: string, name: string) {
  return `mailto:${email}?subject=${encodeURIComponent(
    `Contact Alaudis`
  )}&body=${encodeURIComponent(
    `Bonjour ${name},\n\nje voudrais parler des modèles Alaudis.\n`
  )}`;
}

// ==========================================================
// MENU MESSAGE
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
          Envoyer un message
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

export const metadata = pageMetadata("fr", "kontakt");

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale="fr" page="kontakt" />
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />


      <section
        id="team"
        className="scroll-mt-20 bg-black px-3 pb-3 pt-32 sm:px-6 sm:pb-4 sm:pt-28"
      >
        {/* Jasny panel na ciemnej stronie */}
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-4 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <h1 className="text-xs font-normal uppercase tracking-[0.32em] text-[#8a6d35]">
              Équipe contact
            </h1>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] rounded-[24px] lg:h-[calc(100svh-252px)] lg:max-h-[760px] lg:min-h-[400px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] border border-black/10 bg-[#0b0b0b] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-l-[24px] bg-[#080808] lg:aspect-auto">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <Image
                      src="/kontakt/Piotr.jpg"
                      alt="Piotr Soliński"
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
                  Contact commercial
                </p>

                <h3 className="mt-3 text-xl font-light sm:text-2xl xl:text-3xl text-white">
                  Piotr Soliński
                </h3>

                <p className="mt-3 text-sm sm:text-base xl:mt-4 xl:text-lg text-white/95">
                  <a
                    href={`tel:+${PIOTR_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {PIOTR_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-1.5 break-all text-sm sm:text-base lg:text-sm xl:mt-2 xl:text-lg text-white/95">
                  <a
                    href={`mailto:${PIOTR_EMAIL}`}
                    className="transition hover:text-white"
                  >
                    {PIOTR_EMAIL}
                  </a>
                </p>

                <div className="mt-5 xl:mt-7">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:+${PIOTR_PHONE_RAW}`}
                      className="rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
                    >
                      Appeler
                    </a>

                    <MessageMenu
                      phoneRaw={PIOTR_PHONE_RAW}
                      personName="Piotr"
                      emailAddress={PIOTR_EMAIL}
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
                  Contact commercial
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
                      Appeler
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

      <section className="bg-black px-3 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1520px] rounded-[32px] bg-[#f4f1ea] px-4 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[44px] sm:px-10 sm:py-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#8a6d35]">
            SAP Renovation
          </p>

          <div className="mt-6">
            {/* Cztery oddzielne ramki: trzy z danymi firmy (pod każdą numer rejestrowy), czwarta z kontaktem. */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1.3fr] lg:gap-x-3 lg:gap-y-0 xl:gap-x-5">
              <div className="grid content-start gap-6 rounded-[24px] border border-black/10 bg-[#0b0b0b] p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] xl:p-6 lg:row-span-2 lg:grid-rows-subgrid lg:gap-y-0">
                <div className="lg:pb-7">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#d3bd8b]">Société</p>
                  <p className="mt-3 text-xl font-light leading-8 text-white lg:text-lg xl:text-xl">
                  SAP Renovation Sp. z o.o.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">KRS</p>
                  <p className="mt-2 text-base font-light tabular-nums tracking-[0.08em] text-white xl:text-lg">0000125505</p>
                </div>
              </div>
              <div className="grid content-start gap-6 rounded-[24px] border border-black/10 bg-[#0b0b0b] p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] xl:p-6 lg:row-span-2 lg:grid-rows-subgrid lg:gap-y-0">
                <div className="lg:pb-7">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#d3bd8b]">Adresse</p>
                  <p className="mt-3 text-base leading-7 text-white xl:text-lg">
                  ul. Obozowa 18
                  <br />
                  62-800 Kalisz, Pologne
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">REGON</p>
                  <p className="mt-2 text-base font-light tabular-nums tracking-[0.08em] text-white xl:text-lg">250973192</p>
                </div>
              </div>
              <div className="grid content-start gap-6 rounded-[24px] border border-black/10 bg-[#0b0b0b] p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] xl:p-6 lg:row-span-2 lg:grid-rows-subgrid lg:gap-y-0">
                <div className="lg:pb-7">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#d3bd8b]">Horaires d’ouverture</p>
                  <p className="mt-3 text-base leading-7 text-white xl:text-lg">
                  Du lundi au vendredi
                  <br />
                  8 h – 16 h
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">NIF (NIP)</p>
                  <p className="mt-2 text-base font-light tabular-nums tracking-[0.08em] text-white xl:text-lg">6181893417</p>
                </div>
              </div>
              <div className="rounded-[24px] border border-black/10 bg-[#0b0b0b] p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] xl:p-6 lg:row-span-2">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#d3bd8b]">Contact</p>
                <div className="mt-3 space-y-3 text-base text-white xl:text-lg">
                  <div className="space-y-0.5">
                    <p><a href="tel:+48625013030" className="transition hover:text-[#d3bd8b]"> +48 62 501 30 30 </a></p>
                    <p className="text-sm lg:text-[13px] xl:text-base"><a href="mailto:info@saprenovation.com" className="break-all text-white/80 transition hover:text-white"> info@saprenovation.com </a></p>
                  </div>
                  <div className="space-y-0.5">
                    <p><a href={`tel:+${PIOTR_PHONE_RAW}`} className="transition hover:text-[#d3bd8b]" > {PIOTR_PHONE_DISPLAY} </a></p>
                    <p className="text-sm lg:text-[13px] xl:text-base"><a href={`mailto:${PIOTR_EMAIL}`} className="break-all text-white/80 transition hover:text-white" > {PIOTR_EMAIL} </a></p>
                  </div>
                  <div className="space-y-0.5">
                    <p><a href={`tel:+${KRZYSZTOF_PHONE_RAW}`} className="transition hover:text-[#d3bd8b]" > {KRZYSZTOF_PHONE_DISPLAY} </a></p>
                    <p className="text-sm lg:text-[13px] xl:text-base"><a href={`mailto:${KRZYSZTOF_EMAIL}`} className="break-all text-white/80 transition hover:text-white" > {KRZYSZTOF_EMAIL} </a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <p className="max-w-2xl text-xs leading-5 text-black/65">
                Tribunal d’arrondissement Poznań – Nowe Miasto i Wilda à Poznań, IXe chambre commerciale du Registre judiciaire national
              </p>
              <div className="flex shrink-0 flex-wrap gap-2">
                <Link
                  href="/fr/odwiedz-atelier"
                  className="rounded-full border border-black/25 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-black transition hover:border-black hover:bg-black hover:text-white"
                >
                  Visiter l’atelier
                </Link>

                <Link
                  href="/fr/dla-architektow"
                  className="rounded-full border border-black/25 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-black transition hover:border-black hover:bg-black hover:text-white"
                >
                  Pour les architectes
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
