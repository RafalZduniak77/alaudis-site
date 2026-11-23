// ==========================================================
// PAGE - POLITYKA PRYWATNOŚCI (wspólna dla PL / EN / DE / FR)
// ==========================================================
// Treść jest w pliku components/privacy/copy.ts.
// ==========================================================

import Link from "next/link";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import SeoJsonLd from "@/components/SeoJsonLd";
import CookieSettingsButton from "./CookieSettingsButton";
import { PRIVACY_EMAIL, privacyCopy, type PrivacyLocale } from "./copy";

export default function PrivacyPolicyPage({ locale }: { locale: PrivacyLocale }) {
  const copy = privacyCopy[locale];
  const prefix = locale === "pl" ? "" : `/${locale}`;

  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale={locale} page="politykaPrywatnosci" />
      <HomeHeader locale={locale} variant="page" />

      <section className="px-6 pb-20 pt-36 sm:px-10 sm:pt-40 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d3bd8b]">{copy.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-extralight leading-[1.08] text-white sm:text-5xl">{copy.title}</h1>
          <div aria-hidden="true" className="mt-8 h-px w-16 bg-[#d3bd8b]/70" />
          <p className="mt-8 text-base leading-8 text-white/80">{copy.lead}</p>

          <div className="mt-14 space-y-12">
            {copy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-light text-white sm:text-2xl">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-8 text-white/80">{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-white/10 pt-8 text-sm text-white/60">{copy.updated}</p>

          <div className="mt-10">
            <CookieSettingsButton label={copy.cookieSettings} />
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-light text-white sm:text-4xl">{copy.questionsTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/80">{copy.questionsText}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${PRIVACY_EMAIL}`} className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black">
              {PRIVACY_EMAIL}
            </a>
            <Link href={`${prefix}/kontakt`} className="rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white/90 transition hover:border-white hover:bg-white hover:text-black">
              {copy.contact}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
