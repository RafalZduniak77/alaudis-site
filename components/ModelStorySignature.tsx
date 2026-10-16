import Link from "next/link";
import { ALAUDIS_MODELS, type AlaudisModelId } from "./alaudisModels";
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
  const identity = copy.models[model];

  return (
    <section
      lang={language.toLowerCase()}
      aria-labelledby="model-story-title"
      className="alaudis-story border-b border-[#dec38c]/15 px-6 py-12 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="flex items-center gap-6">
          <span aria-hidden="true" className="font-serif text-5xl text-[#dec38c]/60">
            {ALAUDIS_MODELS[model].number}
          </span>
          <h2 id="model-story-title" className="font-serif text-3xl text-[#f1ece3]">
            {identity.label}
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-8 text-[#d4d0c8]">{identity.story}</p>
          <Link
            href={`${getStoryLanguagePrefix(language)}/historia#alaudis-story`}
            className="story-link mt-4"
          >
            {copy.readStory}
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
