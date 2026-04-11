//
//  page.tsx
//
//  Created by Rafal Zduniak on 22/03/2026.
//
// ==========================================================
// CONTACT PAGE - ALAUDIS
// ==========================================================

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
      <summary className="cursor-pointer list-none rounded-full border border-[#3c6b52]/70 bg-[#15261d]/90 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/90 transition hover:border-[#5b9473] hover:bg-[#1b3126] hover:text-white">
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
      <ModelPageTopBar backHref="/fr" activeLanguage="FR" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Contact Alaudis"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        </div>

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-center sm:pt-32">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-[11px] uppercase tracking-[0.48em] text-white/80">
              Contact Alaudis
            </p>

            <h1 className="text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
              Parlons-en
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/88 sm:text-base sm:leading-9">
              Contactez-nous pour parler des modèles Alaudis, des finitions
              premium, de la configuration du piano et des possibilités de
              collaboration.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
              Une conversation privée autour du modèle, de la finition et du
              caractère de l’instrument est le plus beau début d’une composition
              Alaudis individuelle.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/fr/odwiedz-atelier"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Visiter l’atelier
              </Link>

              <Link
                href="/fr/dla-architektow"
                className="rounded-full border border-white/20 bg-black/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white/85 transition hover:border-white hover:bg-white hover:text-black"
              >
                Pour les architectes
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center">
          <a href="#team" className="block">
            <div className="mx-auto h-14 w-8 rounded-full border border-white/40 bg-black/10">
              <div className="mx-auto mt-2 h-3 w-1 rounded-full bg-white/90" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
              Faire défiler vers le bas
            </p>
          </a>
        </div>
      </section>

      <section
        id="team"
        className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Équipe contact
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-1">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-t-[32px] bg-[#080808]">
                <div className="absolute inset-0 p-5">
                  <div className="relative h-full w-full">
                    <Image
                      src="/kontakt/Poitr.jpg"
                      alt="Piotr Soliński"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                  Contact commercial
                </p>

                <h3 className="mt-4 text-3xl font-light text-white">
                  Piotr Soliński
                </h3>

                <p className="mt-5 text-lg text-white/78">
                  <a
                    href={`tel:+${PIOTR_PHONE_RAW}`}
                    className="transition hover:text-white"
                  >
                    {PIOTR_PHONE_DISPLAY}
                  </a>
                </p>

                <p className="mt-3 break-all text-lg text-white/78">
                  <a
                    href={`mailto:${PIOTR_EMAIL}`}
                    className="transition hover:text-white"
                  >
                    {PIOTR_EMAIL}
                  </a>
                </p>

                <div className="mt-8 min-h-[190px]">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:+${PIOTR_PHONE_RAW}`}
                      className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
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
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            SAP Renovation
          </p>

          <div className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Société
                </p>
                <p className="mt-3 text-xl text-white">SAP Renovation</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Adresse
                </p>
                <p className="mt-3 text-xl leading-8 text-white">
                  Obozowa 18
                  <br />
                  62-800 Kalisz
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  NIF
                </p>
                <p className="mt-3 text-xl text-white">6181893417</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Contact
                </p>
                <div className="mt-3 space-y-3 text-xl text-white">
                  <p>
                    <a
                      href={`tel:+${PIOTR_PHONE_RAW}`}
                      className="transition hover:text-white/80"
                    >
                      {PIOTR_PHONE_DISPLAY}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${PIOTR_EMAIL}`}
                      className="break-all transition hover:text-white/80"
                    >
                      {PIOTR_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/fr/odwiedz-atelier"
                className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 transition hover:border-white hover:bg-white hover:text-black"
              >
                Visiter l’atelier
              </Link>

              <Link
                href="/fr/dla-architektow"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Pour les architectes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
