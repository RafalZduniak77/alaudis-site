import Link from "next/link";
import type { AlaudisModelId } from "./alaudisModels";
import {
  alaudisStoryContent,
  getStoryLanguagePrefix,
  type StoryLanguage,
} from "./alaudisStoryContent";

export default function ModelStorySignature({
  model,
  language,
}: {
  model: AlaudisModelId;
  language: StoryLanguage;
}) {
  const copy = alaudisStoryContent[language];

  return (
    <aside
      lang={language.toLowerCase()}
      aria-label={copy.storyLabel}
      className="border-b border-white/10 bg-neutral-950 px-6 py-7 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <p className="max-w-3xl text-[15px] leading-7 text-white/85">
          {copy.models[model].story}
        </p>
        <Link
          href={`${getStoryLanguagePrefix(language)}/historia#alaudis-story`}
          className="inline-flex min-h-11 shrink-0 items-center py-2 text-[11px] uppercase tracking-[0.18em] text-white/80 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {copy.readStory} <span aria-hidden="true" className="ml-3">→</span>
        </Link>
      </div>
    </aside>
  );
}
