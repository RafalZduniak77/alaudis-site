"use client";

// ==========================================================
// BANER STRONY GŁÓWNEJ
// ==========================================================
// Pełnoekranowe zdjęcia z gali ALAUDIS zmieniają się same,
// każde powoli się przybliża. Teksty i przyciski stoją
// w lewym dolnym rogu, numery zdjęć — w prawym.
// Zdjęcia leżą w folderze public/hero, a ich listy
// dla każdego banera — w pliku components/heroBanners.ts.
// ==========================================================

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeHero.module.css";
import { HOME_SLIDES, type HeroSlide } from "./heroBanners";

const SLIDE_TIME = 7000;

type Props = {
  alt: string;
  eyebrow: string;
  title: string[];
  actions: { href: string; label: string }[];
  scroll: string;
  // Model pages: a short text under the title, and the title (not the eyebrow) is the page heading.
  description?: string;
  headingTitle?: boolean;
  // Own set of photos for this banner (lists live in heroBanners.ts).
  slides?: HeroSlide[];
};

export default function HomeHero({ alt, eyebrow, title, actions, scroll, description, headingTitle, slides = HOME_SLIDES }: Props) {
  const [active, setActive] = useState(0);
  // Photos are fetched one step ahead instead of all at once: the first with the page,
  // each next one shortly before it is shown. Keeps the first load light.
  const [wanted, setWanted] = useState(1);

  useEffect(() => {
    const next = Math.max(active + 2, 2);
    const timer = window.setTimeout(() => setWanted(count => Math.max(count, Math.min(next, slides.length))), active === 0 ? 2500 : 0);
    return () => window.clearTimeout(timer);
  }, [active, slides.length]);

  // Change the photo every few seconds; wait while the tab is hidden.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(current => (current + 1) % slides.length);
    }, SLIDE_TIME);
    return () => window.clearInterval(timer);
  }, [active, slides.length]);

  const Eyebrow = headingTitle ? "p" : "h1";
  const Title = headingTitle ? "h1" : "p";

  return (
    <section className={styles.hero}>
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div key={slide.src} className={`${styles.slide} ${index === active ? styles.current : ""}`}>
            {(index < wanted || index === active) && <Image
              src={slide.src}
              alt={index === 0 ? alt : ""}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: slide.position }}
              className={styles.photo}
            />}
            {slide.dim > 0 && <div className={styles.dim} style={{ opacity: slide.dim }} />}
          </div>
        ))}
      </div>
      <div className={`${styles.shade} ${slides[active]?.soft ? styles.shadeSoft : ""}`} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.copy}>
          <Eyebrow className={styles.eyebrow}><span aria-hidden="true" />{eyebrow}</Eyebrow>
          <Title className={styles.title}>
            {title.map((line, index) => <span key={line} style={{ animationDelay: `${180 + index * 140}ms` }}>{line}</span>)}
          </Title>
          {description && <p className={styles.description}>{description}</p>}
          {actions.length > 0 && <div className={styles.actions}>
            {actions.map((action) => (
              <Link key={action.href} href={action.href} className={styles.secondary}>
                {action.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
              </Link>
            ))}
          </div>}
        </div>

        {/* Numery zdjęć z paskiem postępu */}
        <div className={styles.dots}>
          {slides.map((slide, index) => (
            <button key={slide.src} type="button" className={`${styles.dot} ${index === active ? styles.dotCurrent : ""}`} aria-label={`${index + 1} / ${slides.length}`} aria-current={index === active} onClick={() => setActive(index)}>
              <span className={styles.dotNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.dotLine}><i key={`${active}-${index}`} style={{ animationDuration: `${SLIDE_TIME}ms` }} /></span>
            </button>
          ))}
        </div>
      </div>

      <p className={styles.scroll}><span aria-hidden="true" />{scroll}</p>
    </section>
  );
}
