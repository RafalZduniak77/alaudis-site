// ==========================================================
// PAGE - ZWIEDZANIE MANUFAKTURY (wspólna dla PL / EN / DE / FR)
// ==========================================================

import Image from "next/image";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";
import SeoJsonLd from "@/components/SeoJsonLd";
import FactoryTourForm from "./FactoryTourForm";
import { TOUR_STAGES, tourCopy, type TourLanguage } from "./copy";

export default function FactoryTourPage({ language }: { language: TourLanguage }) {
  const copy = tourCopy[language];
  const locale = language.toLowerCase() as "pl" | "en" | "de" | "fr" | "es" | "it";

  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale={locale} page="zwiedzanieManufaktury" />
      <ModelPageTopBar backHref={copy.home} activeLanguage={language} />

      {/* TRASA ZWIEDZANIA */}
      <section className="bg-black px-6 pb-24 pt-36 sm:px-10 sm:pt-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">{copy.stagesEyebrow}</p>
          <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl lg:text-[52px] lg:leading-[1.08]">{copy.stagesTitle}</h1>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {TOUR_STAGES.map((stage, index) => (
              <article key={stage.key} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/3]">
                  <Image src={stage.image} alt={copy.stages[stage.key].title} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">0{index + 1}</p>
                  <h2 className="mt-3 text-2xl font-light">{copy.stages[stage.key].title}</h2>
                  <p className="mt-4 leading-7 text-white/95">{copy.stages[stage.key].text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JAK TO DZIAŁA */}
      <section className="bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">{copy.infoEyebrow}</p>
          <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">{copy.infoTitle}</h2>
          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {copy.info.map((step, index) => (
              <li key={step.title} className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
                <p className="text-xs uppercase tracking-[0.32em] text-white/88">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-light">{step.title}</h3>
                <p className="mt-5 leading-8 text-white">{step.text}</p>
              </li>
            ))}
          </ol>

          {/* Najważniejsze informacje o zwiedzaniu — dawny tekst spod zdjęcia */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {copy.highlights.map((item) => (
              <div key={item.title} className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-2xl font-light">{item.title}</h3>
                <p className="mt-5 leading-8 text-white">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#zgloszenie" className="inline-flex rounded-full border border-[#d3bd8b] bg-[#d3bd8b] px-8 py-4 text-sm uppercase tracking-[0.22em] text-black transition hover:bg-transparent hover:text-[#d3bd8b]">
              {copy.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* FORMULARZ */}
      <section id="zgloszenie" className="scroll-mt-20 bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">{copy.formEyebrow}</p>
            <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">{copy.formTitle}</h2>
            <p className="mt-6 leading-8 text-white">{copy.formText}</p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-white/88">ALAUDIS / SAP Renovation</p>
            <p className="mt-3 text-xl font-light text-white">{copy.address}</p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {copy.facts.map((fact) => (
                <div key={fact.label} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <dt className="text-[11px] uppercase tracking-[0.24em] text-white/78">{fact.label}</dt>
                  <dd className="mt-2 text-lg font-light text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <FactoryTourForm language={language} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
