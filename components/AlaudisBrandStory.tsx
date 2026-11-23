"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALAUDIS_MODEL_IDS, ALAUDIS_MODELS, getAlaudisModelName } from "./alaudisModels";
import { alaudisStoryContent, getStoryLanguagePrefix, type StoryLanguage } from "./alaudisStoryContent";
import styles from "./AlaudisBrandStory.module.css";

const presentation = {
  PL: {
    detail: "Piękno zapisane w detalu",
    craft: "Zobacz, jak powstaje Alaudis",
    interiorAlt: "Złota rama, miedziane struny i klawiatura fortepianu Alaudis",
    pianoAlt: "Fortepian Alaudis w czarnym, lustrzanym wykończeniu",
  },
  EN: {
    detail: "Beauty in every detail",
    craft: "See how Alaudis is made",
    interiorAlt: "The golden frame, copper strings and keyboard of an Alaudis grand piano",
    pianoAlt: "An Alaudis grand piano in a polished black finish",
  },
  DE: {
    detail: "Schönheit in jedem Detail",
    craft: "So entsteht ein Alaudis",
    interiorAlt: "Goldener Rahmen, Kupfersaiten und Klaviatur eines Alaudis-Flügels",
    pianoAlt: "Ein Alaudis-Flügel in poliertem Schwarz",
  },
  FR: {
    detail: "La beauté dans chaque détail",
    craft: "Découvrez la naissance d’un Alaudis",
    interiorAlt: "Le cadre doré, les cordes en cuivre et le clavier d’un piano à queue Alaudis",
    pianoAlt: "Un piano à queue Alaudis en finition noire polie",
  },
};

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={down ? styles.arrowDown : undefined}>
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export default function AlaudisBrandStory({ language }: { language: StoryLanguage }) {
  const copy = alaudisStoryContent[language];
  const ui = presentation[language];
  const prefix = getStoryLanguagePrefix(language);
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % ALAUDIS_MODEL_IDS.length; break;
      case "ArrowLeft": next = (index + ALAUDIS_MODEL_IDS.length - 1) % ALAUDIS_MODEL_IDS.length; break;
      case "Home": next = 0; break;
      case "End": next = ALAUDIS_MODEL_IDS.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="alaudis-story" lang={language.toLowerCase()} aria-label={copy.storyLabel} className={styles.story}>
      <section id="alaudis-voices" aria-label={copy.collectionLabel} className={`${styles.family} ${styles.familyLead}`}>
        <div className={styles.familyInner}>
          <div className={styles.showroom}>
            <figure className={styles.instrument}>
              <Image src="/galeria-home/10.jpg" alt={ui.pianoAlt} fill sizes="(min-width: 900px) 65vw, 100vw" className={styles.instrumentPhoto} />
            </figure>
            <div className={styles.modelDetails}>
              <div role="tablist" aria-label={copy.collectionLabel} className={styles.tabs}>
                {ALAUDIS_MODEL_IDS.map((id, index) => (
                  <button
                    key={id}
                    id={`alaudis-tab-${id}`}
                    ref={(element) => { tabs.current[index] = element; }}
                    type="button"
                    role="tab"
                    aria-label={getAlaudisModelName(id)}
                    aria-selected={selected === index}
                    aria-controls={`alaudis-panel-${id}`}
                    tabIndex={selected === index ? 0 : -1}
                    onClick={() => setSelected(index)}
                    onKeyDown={(event) => handleTabKey(event, index)}
                    className={styles.tab}
                  >
                    <span>{ALAUDIS_MODELS[id].voice}</span><span>{id}</span>
                  </button>
                ))}
              </div>
              <div className={styles.panels}>
                {ALAUDIS_MODEL_IDS.map((id, index) => (
                  <div
                    key={id}
                    id={`alaudis-panel-${id}`}
                    role="tabpanel"
                    aria-labelledby={`alaudis-tab-${id}`}
                    tabIndex={selected === index ? 0 : -1}
                    aria-hidden={selected !== index}
                    inert={selected !== index}
                    className={styles.modelPanel}
                  >
                    <h4 className={styles.modelName}>
                      <span className={styles.modelBrand}>ALAUDIS</span>{" "}
                      <span className={styles.modelVoice}>{ALAUDIS_MODELS[id].voice} <span>{id}</span></span>
                    </h4>
                    <p className={styles.modelStory}>{copy.models[id].story}</p>
                    <p className={styles.modelDescription}>{copy.models[id].description}</p>
                    <Link href={`${prefix}/fortepiany/alaudis-${id}`} className={styles.textLink}>
                      <span>{copy.discover}</span><span className={styles.arrowCircle}><Arrow /></span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.scene} ${styles.origin}`}>
        <div className={styles.scenePhoto}>
          <Image src="/galeria-home/11.jpg" alt={ui.interiorAlt} fill sizes="100vw" className={styles.photo} />
        </div>
        <div className={styles.sceneInner}>
          <div className={styles.glass}>
            <p className={styles.eyebrow}>{copy.storyLabel}</p>
            <div className={`${styles.prose} ${styles.proseLead}`}>
              <p>{copy.origin}</p>
              <p>{copy.nameMeaning} {copy.symbolism}</p>
            </div>
            <span className={styles.cardRule} aria-hidden="true" />
            <div className={styles.prose}>
              <p className={styles.voiceLead}>{copy.ownVoice.join(" ")}</p>
              <p>{copy.philosophy}</p>
              <p>{copy.value}</p>
            </div>
            <a href="#alaudis-craft" className={styles.textLink}>
              <span>{ui.craft}</span><span className={styles.arrowCircle}><Arrow down /></span>
            </a>
          </div>
          <p className={styles.photoNote}><span aria-hidden="true" />{ui.detail}</p>
        </div>
      </div>

      <div className={styles.signature}>
        <p className={styles.signatureEyebrow}>{copy.collectionLabel}</p>
        <h1 id="alaudis-family-title" className={styles.signatureTitle}>
          {/* "Three instruments. Three personalities." / "One family." — last sentence on its own line */}
          {(() => { const parts = copy.familyLine.split(/(?<=\.)\s+/); return <><span>{parts.slice(0, -1).join(" ")}</span> <span>{parts.at(-1)}</span></>; })()}
        </h1>
        <span className={styles.signatureRule} aria-hidden="true" />
        <p className={styles.signatureClosing}>{copy.closing}</p>
        <span className={styles.signatureLine} aria-hidden="true" />
      </div>
    </section>
  );
}
