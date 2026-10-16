import Link from "next/link";
import AlaudisBrandStory from "./AlaudisBrandStory";
import { ALAUDIS_MODEL_IDS, getAlaudisModelName } from "./alaudisModels";
import {
  alaudisStoryContent,
  getStoryLanguagePrefix,
  type StoryLanguage,
} from "./alaudisStoryContent";

const storyLinkClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-center text-[11px] uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function AlaudisStory({
  language,
  full = false,
}: {
  language: StoryLanguage;
  full?: boolean;
}) {
  const copy = alaudisStoryContent[language];
  const prefix = getStoryLanguagePrefix(language);

  if (!full) {
    return (
      <section
        id={copy.collectionId}
        lang={language.toLowerCase()}
        aria-labelledby={`${copy.collectionId}-title`}
        className="relative z-20 scroll-mt-24 bg-neutral-950 px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-white/75">
              {copy.collectionLabel}
            </p>
            <h2
              id={`${copy.collectionId}-title`}
              className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {copy.collectionTitle[0]}
              <br />
              {copy.collectionTitle[1]}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90">
              {copy.collectionIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {ALAUDIS_MODEL_IDS.map((id) => (
              <Link
                key={id}
                href={`${prefix}/fortepiany/alaudis-${id}`}
                className="flex min-w-0 flex-col rounded-[30px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/25 hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-8"
              >
                <h3 className="text-2xl font-light leading-snug text-white">
                  ALAUDIS{" "}
                  <span className="whitespace-nowrap">
                    {getAlaudisModelName(id).replace("ALAUDIS ", "")}
                  </span>
                </h3>
                <p className="mb-7 mt-5 text-[15px] leading-7 text-white/90">
                  {copy.models[id].description}
                </p>
                <p className="mt-auto text-[11px] uppercase tracking-[0.24em] text-white/85">
                  {copy.discover} <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center lg:flex-row lg:text-left">
            <p className="text-base font-light leading-7 text-white/80 sm:text-lg">
              {copy.title.join(" ")}
            </p>
            <Link href={`${prefix}/historia#alaudis-story`} className={storyLinkClassName}>
              {copy.readStory}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return <AlaudisBrandStory language={language} />;
}
