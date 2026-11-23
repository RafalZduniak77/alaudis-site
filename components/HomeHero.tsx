"use client";

// ==========================================================
// BANER STRONY GŁÓWNEJ
// ==========================================================
// Pełnoekranowe zdjęcia z gali ALAUDIS zmieniają się same,
// każde powoli się przybliża. Teksty i przyciski stoją
// w lewym dolnym rogu, numery zdjęć — w prawym.
// Zdjęcia leżą w folderze public/hero.
// ==========================================================

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeHero.module.css";

// position: which part of the photo stays in view on narrow screens.
// dim: extra darkening for bright photos, so the white title stays readable.
const SLIDES = [
  { src: "/hero/gala-scena.jpg", position: "58% 50%", dim: 0 },
  { src: "/hero/manufaktura.jpg", position: "62% 50%", dim: 0.42 },
  { src: "/hero/gala-logo.jpg", position: "38% 50%", dim: 0 },
  { src: "/hero/gala-sala.jpg", position: "62% 50%", dim: 0 },
  { src: "/hero/gala-pianista.jpg", position: "40% 50%", dim: 0 },
];
const SLIDE_TIME = 7000;

type Props = {
  alt: string;
  eyebrow: string;
  title: string[];
  actions: { href: string; label: string }[];
  scroll: string;
};

export default function HomeHero({ alt, eyebrow, title, actions, scroll }: Props) {
  const [active, setActive] = useState(0);

  // Change the photo every few seconds; wait while the tab is hidden.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(current => (current + 1) % SLIDES.length);
    }, SLIDE_TIME);
    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <section className={styles.hero}>
      <div className={styles.slides}>
        {SLIDES.map((slide, index) => (
          <div key={slide.src} className={`${styles.slide} ${index === active ? styles.current : ""}`}>
            <Image
              src={slide.src}
              alt={index === 0 ? alt : ""}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              sizes="100vw"
              quality={85}
              style={{ objectPosition: slide.position }}
              className={styles.photo}
            />
            {slide.dim > 0 && <div className={styles.dim} style={{ opacity: slide.dim }} />}
          </div>
        ))}
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.copy}>
          <h1 className={styles.eyebrow}><span aria-hidden="true" />{eyebrow}</h1>
          <p className={styles.title}>
            {title.map((line, index) => <span key={line} style={{ animationDelay: `${180 + index * 140}ms` }}>{line}</span>)}
          </p>
          <div className={styles.actions}>
            {actions.map((action, index) => (
              <Link key={action.href} href={action.href} className={index === 0 ? styles.primary : styles.secondary}>
                {action.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Numery zdjęć z paskiem postępu */}
        <div className={styles.dots}>
          {SLIDES.map((slide, index) => (
            <button key={slide.src} type="button" className={`${styles.dot} ${index === active ? styles.dotCurrent : ""}`} aria-label={`${index + 1} / ${SLIDES.length}`} aria-current={index === active} onClick={() => setActive(index)}>
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
