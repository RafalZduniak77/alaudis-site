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
// 5. pokazuje rozwijane menu "Wyślij wiadomość":
//    - SMS
//    - WHATSAPP
//    - MAIL
// 6. pokazuje dane firmy SAP Renovation
// 7. kończy się stopką Footer
//
// Co tutaj najłatwiej zmieniasz:
// - zdjęcie hero
// - zdjęcia handlowców
// - imiona i nazwiska
// - numery telefonów
// - adres firmy
// - NIP
// - treści wiadomości SMS / WhatsApp / Mail
// - teksty sekcji
//
// Ważne:
// - menu wiadomości otwiera się teraz do góry,
//   żeby nie było obcinane przez kartę
// - karta ma overflow-visible, ale zdjęcie nadal ma własne zaokrąglenia
// - wgraj zdjęcia do folderu public/kontakt/
// ==========================================================

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";

// ==========================================================
// DANE KONTAKTOWE
// ==========================================================
// Tutaj trzymamy podstawowe dane handlowców,
// żeby łatwiej było później zmieniać numery lub treści wiadomości.
// ==========================================================

const PAULINA_PHONE_RAW = "48668216422";
const PAULINA_PHONE_DISPLAY = "+48 668 216 422";

const KRZYSZTOF_PHONE_RAW = "48609809703";
const KRZYSZTOF_PHONE_DISPLAY = "+48 609 809 703";

// ==========================================================
// POMOCNICZE LINKI WIADOMOŚCI
// ==========================================================
// Generujemy linki do:
// - SMS
// - WhatsApp
// - Mail
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

function getMailHref(name: string) {
  return `mailto:?subject=${encodeURIComponent(
    `Kontakt Alaudis`
  )}&body=${encodeURIComponent(
    `Dzień dobry ${name},\n\nchciałbym porozmawiać o modelach Alaudis.\n`
  )}`;
}

// ==========================================================
// MENU WIADOMOŚCI
// ==========================================================
// To jest wspólny przycisk rozwijany:
// - SMS
// - WHATSAPP
// - MAIL
//
// Najważniejsze:
// - menu otwiera się DO GÓRY
// - dzięki temu nie jest obcinane na dole karty
// ==========================================================

type MessageMenuProps = {
  phoneRaw: string;
  personName: string;
};

function MessageMenu({ phoneRaw, personName }: MessageMenuProps) {
  return (
    <details className="group relative z-30">
      <summary className="cursor-pointer list-none rounded-full border border-white/20 bg-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/85 transition hover:border-white hover:bg-white hover:text-black">
        <span className="inline-flex items-center gap-2">
          Wyślij wiadomość
          <span className="text-[10px] transition group-open:rotate-180">
            ▲
          </span>
        </span>
      </summary>

      {/* MENU OTWIERANE DO GÓRY */}
      <div className="absolute bottom-full left-0 z-40 mb-3 min-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-2xl">
        <a
          href={getSmsHref(phoneRaw, personName)}
          className="block px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          SMS
        </a>

        <a
          href={getWhatsAppHref(phoneRaw, personName)}
          target="_blank"
          rel="noreferrer"
          className="block border-t border-white/10 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/75 transition hover:bg-white/10 hover:text-white"
        >
          WHATSAPP
        </a>

        <a
          href={getMailHref(personName)}
          className="block border-t border-white/10 px-5 py-3 text-[11px] uppercase tracking-[0.24em] text-white/75 transition hover:bg-white/10 hover:text-white"
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
            <div className="overflow-visible rounded-[32px] border border-white/10 bg-white/[0.03]">
              {/* ZDJĘCIE HANDLOWCA */}
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

                <div className="mt-8 flex flex-wrap gap-3">
                  {/* ZADZWOŃ */}
                  <a
                    href={`tel:+${PAULINA_PHONE_RAW}`}
                    className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Zadzwoń
                  </a>

                  {/* WYŚLIJ WIADOMOŚĆ */}
                  <MessageMenu
                    phoneRaw={PAULINA_PHONE_RAW}
                    personName="Paulina"
                  />
                </div>
              </div>
            </div>

            {/* ==================================================
                KRZYSZTOF
               ================================================== */}
            <div className="overflow-visible rounded-[32px] border border-white/10 bg-white/[0.03]">
              {/* ZDJĘCIE HANDLOWCA */}
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

                <div className="mt-8 flex flex-wrap gap-3">
                  {/* ZADZWOŃ */}
                  <a
                    href={`tel:+${KRZYSZTOF_PHONE_RAW}`}
                    className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Zadzwoń
                  </a>

                  {/* WYŚLIJ WIADOMOŚĆ */}
                  <MessageMenu
                    phoneRaw={KRZYSZTOF_PHONE_RAW}
                    personName="Krzysztof"
                  />
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
                      href={`tel:+${PAULINA_PHONE_RAW}`}
                      className="transition hover:text-white/80"
                    >
                      {PAULINA_PHONE_DISPLAY}
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
