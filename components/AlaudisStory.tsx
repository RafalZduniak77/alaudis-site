import Link from "next/link";
import { ALAUDIS_MODEL_IDS, ALAUDIS_MODELS } from "./alaudisModels";
import {
  alaudisStoryContent,
  getStoryLanguagePrefix,
  type StoryLanguage,
} from "./alaudisStoryContent";

export default function AlaudisStory({
  language,
  full = false,
}: {
  language: StoryLanguage;
  full?: boolean;
}) {
  const copy = alaudisStoryContent[language];
  const prefix = getStoryLanguagePrefix(language);
  const sectionId = full ? "alaudis-story" : copy.collectionId;

  return (
    <section
      id={sectionId}
      lang={language.toLowerCase()}
      aria-labelledby={`${sectionId}-title`}
      className="alaudis-story relative z-20 scroll-mt-24 border-y border-white/10 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="story-eyebrow">
              {full ? copy.storyLabel : copy.collectionLabel}
            </p>
            <h2 id={`${sectionId}-title`} className="story-title mt-7">
              {copy.title.map((line, index) => (
                <span
                  key={line}
                  className={`block${index === 2 ? " text-[#dec38c]" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-[#d4d0c8] sm:text-base">
            <p>{copy.origin}</p>
            <p>
              {copy.nameMeaning}
              {full && <> {copy.symbolism}</>}
            </p>
            <p className="border-l border-[#dec38c]/45 pl-5 text-[#f1ece3]">
              {copy.family}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {ALAUDIS_MODEL_IDS.map((id) => {
            const model = ALAUDIS_MODELS[id];
            const modelCopy = copy.models[id];

            return (
              <Link
                key={id}
                href={`${prefix}/fortepiany/alaudis-${id}`}
                className="story-model group flex min-w-0 flex-col rounded-[24px] border border-[#dec38c]/20 p-7 sm:p-9"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#dec38c]">
                    {modelCopy.label}
                  </p>
                  <span aria-hidden="true" className="font-serif text-3xl text-[#dec38c]/60">
                    {model.number}
                  </span>
                </div>
                <h3 className="mt-8 font-light">
                  <span className="block text-[11px] tracking-[0.3em] text-[#d4d0c8]">
                    ALAUDIS{" "}
                  </span>
                  <span className="mt-2 block text-[clamp(1.8rem,3vw,2.7rem)] leading-tight tracking-[0.02em] text-[#f1ece3]">
                    {model.voice} {id}
                  </span>
                </h3>
                <p className="mb-9 mt-5 text-[15px] leading-7 text-[#d4d0c8]">
                  {modelCopy.story}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#dec38c]/15 pt-5 text-[11px] uppercase tracking-[0.14em] text-[#f1ece3]">
                  <span>{copy.discover}</span>
                  <span aria-hidden="true" className="text-xl text-[#dec38c]">↗</span>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-9 text-center font-serif text-xl leading-relaxed text-[#d4d0c8] sm:text-2xl">
          {copy.familyLine}
        </p>

        {full ? (
          <div className="mt-16 border-t border-[#dec38c]/20 pt-14 sm:mt-20 sm:pt-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
              <p className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.25] text-[#f1ece3]">
                {copy.ownVoice[0]}{" "}
                <span className="text-[#dec38c]">{copy.ownVoice[1]}</span>
              </p>
              <div className="space-y-6 text-[15px] leading-8 text-[#d4d0c8] sm:text-base">
                <p>{copy.philosophy}</p>
                <p>{copy.value}</p>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
              <div aria-hidden="true" className="mx-auto mb-8 h-10 w-px bg-[#dec38c]/50" />
              <p className="text-sm tracking-[0.38em] text-[#dec38c]">ALAUDIS</p>
              <p className="mt-4 font-serif text-2xl leading-relaxed text-[#f1ece3] sm:text-3xl">
                {copy.closing}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-9 text-center">
            <Link href={`${prefix}/historia#alaudis-story`} className="story-link">
              {copy.readStory}
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
