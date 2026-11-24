import Link from "next/link";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import { ARTISTS_SLIDES, NEWS_SLIDES, TRADITION_SLIDES } from "@/components/heroBanners";
import ModelPageTopBar from "@/components/ModelPageTopBar";
import SeoJsonLd from "@/components/SeoJsonLd";
import { editorial, type EditorialLink, type EditorialPageKey } from "@/lib/editorial";
import { localePrefix, pageLabel, type SeoLocale } from "@/lib/seo";

// ==========================================================
// STRONA REDAKCYJNA - ALAUDIS
// ==========================================================
// Wspólny szablon dla: Aktualności i prasa, Artyści, Tradycja.
// Treść pochodzi z lib/editorial.ts.
// ==========================================================

const PAGE_KEYS: EditorialPageKey[] = ["aktualnosci", "artysci", "tradycja"];

const copy: Record<SeoLocale, { more: string; contact: string; contactText: string; contactButton: string }> = {
  pl: {
    more: "Czytaj także",
    contact: "Porozmawiajmy o Twoim Alaudis",
    contactText: "Umów prywatną konsultację lub wizytę w atelier w Kaliszu.",
    contactButton: "Kontakt",
  },
  en: {
    more: "Read more",
    contact: "Let’s talk about your Alaudis",
    contactText: "Arrange a private consultation or a visit to our atelier in Kalisz.",
    contactButton: "Contact",
  },
  de: {
    more: "Mehr lesen",
    contact: "Sprechen wir über Ihren Alaudis",
    contactText: "Vereinbaren Sie eine private Beratung oder einen Besuch in unserem Atelier in Kalisz.",
    contactButton: "Kontakt",
  },
  fr: {
    more: "À lire aussi",
    contact: "Parlons de votre Alaudis",
    contactText: "Réservez une consultation privée ou une visite de notre atelier à Kalisz.",
    contactButton: "Contact",
  },
};

// Każda z tych stron ma baner jak na stronie głównej, z własnymi zdjęciami
// (listy zdjęć: components/heroBanners.ts).
const BANNER_SLIDES = { artysci: ARTISTS_SLIDES, aktualnosci: NEWS_SLIDES, tradycja: TRADITION_SLIDES };
const SCROLL: Record<SeoLocale, string> = {
  pl: "Przewiń w dół",
  en: "Scroll down",
  de: "Nach unten scrollen",
  fr: "Faire défiler vers le bas",
};

// Splits a title into two lines of similar length for the banner.
function twoLines(title: string) {
  const words = title.split(" ");
  let best = 1;
  for (let cut = 1; cut < words.length; cut++) {
    const gap = (at: number) => Math.abs(words.slice(0, at).join(" ").length - words.slice(at).join(" ").length);
    if (gap(cut) < gap(best)) best = cut;
  }
  return words.length > 1 ? [words.slice(0, best).join(" "), words.slice(best).join(" ")] : words;
}

const linkClass =
  "mt-6 inline-flex rounded-full border border-white/35 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black";

function TextLink({ link, prefix }: { link: EditorialLink; prefix: string }) {
  if (link.href.startsWith("/")) {
    return (
      <Link href={`${prefix}${link.href}`} className={linkClass}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {link.label}
      <span aria-hidden="true" className="ml-2">↗</span>
    </a>
  );
}

export default function EditorialPage({
  locale,
  page,
}: {
  locale: SeoLocale;
  page: EditorialPageKey;
}) {
  const content = editorial[page][locale];
  const text = copy[locale];
  const prefix = localePrefix(locale);

  return (
    <main className="min-h-screen bg-black text-white">
      <SeoJsonLd locale={locale} page={page} />
      <ModelPageTopBar
        backHref={prefix || "/"}
        activeLanguage={locale.toUpperCase() as "PL" | "EN" | "DE" | "FR"}
      />

      <HomeHero
        headingTitle
        slides={BANNER_SLIDES[page]}
        alt={content.title}
        eyebrow={content.eyebrow}
        title={twoLines(content.title)}
        description={content.lead}
        actions={[]}
        scroll={SCROLL[locale]}
      />

      {content.sections.map((section, index) => (
        <section
          key={section.heading}
          className={`px-6 py-20 sm:px-10 lg:px-16 ${index % 2 ? "bg-neutral-950" : "bg-black"}`}
        >
          <div className="mx-auto max-w-5xl">
            {/* Na stronie Artyści nagłówek z opisem sekcji stoi w podłużnej,
                podświetlanej ramce (ten sam styl co kafelki artystów). */}
            {page === "artysci" && section.body ? (
              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-10">
                <h2 className="text-3xl font-light text-white sm:text-4xl">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mx-auto mt-6 max-w-3xl leading-8 text-white">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-light text-white sm:text-4xl">
                  {section.heading}
                </h2>

                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-6 max-w-3xl leading-8 text-white">
                    {paragraph}
                  </p>
                ))}
              </>
            )}

            {section.items && (
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8"
                  >
                    {item.meta && (
                      <p className="text-xs uppercase tracking-[0.28em] text-white/88">
                        {item.meta}
                      </p>
                    )}
                    <h3 className="mt-4 text-2xl font-light text-white">{item.title}</h3>
                    {item.text && (
                      <p className="mt-5 whitespace-pre-line leading-8 text-white">{item.text}</p>
                    )}
                    {item.link && <TextLink link={item.link} prefix={prefix} />}
                  </article>
                ))}
              </div>
            )}

            {section.link && <TextLink link={section.link} prefix={prefix} />}
          </div>
        </section>
      ))}

      <section className="border-t border-white/10 bg-black px-6 py-20 text-center sm:px-10 lg:px-16">
        <p className="text-xs uppercase tracking-[0.32em] text-white/88">{text.more}</p>
        <nav className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {PAGE_KEYS.filter((key) => key !== page).map((key) => (
            <Link
              key={key}
              href={`${prefix}/${key}`}
              className="rounded-full border border-white/35 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              {pageLabel(locale, key)}
            </Link>
          ))}
        </nav>

        <h2 className="mt-20 text-3xl font-light text-white sm:text-4xl">{text.contact}</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white">{text.contactText}</p>
        <Link
          href={`${prefix}/kontakt`}
          className="mt-10 inline-flex rounded-full border border-white/35 px-8 py-4 text-sm uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          {text.contactButton}
        </Link>
      </section>

      <Footer />
    </main>
  );
}
