import Image from "next/image";
import Link from "next/link";
import { galleryLocales, galleryPath, type GalleryLocale } from "@/lib/gallery/types";
import styles from "./HomeHeader.module.css";

const copy = {
  pl: { models: "Modele", modelAnchor: "modele", history: "Historia", contact: "Kontakt", gallery: "W kadrze", galleryLabel: "W kadrze — galeria fotografii ALAUDIS", navigation: "Menu główne", language: "Wybierz język" },
  en: { models: "Models", modelAnchor: "models", history: "History", contact: "Contact", gallery: "In focus", galleryLabel: "In focus — ALAUDIS photo gallery", navigation: "Main navigation", language: "Choose language" },
  de: { models: "Modelle", modelAnchor: "modelle", history: "Geschichte", contact: "Kontakt", gallery: "Einblicke", galleryLabel: "Einblicke — ALAUDIS Fotogalerie", navigation: "Hauptnavigation", language: "Sprache wählen" },
  fr: { models: "Modèles", modelAnchor: "modeles", history: "Histoire", contact: "Contact", gallery: "En images", galleryLabel: "En images — galerie de photographies ALAUDIS", navigation: "Navigation principale", language: "Choisir la langue" },
} satisfies Record<GalleryLocale, Record<string, string>>;

export default function HomeHeader({ locale }: { locale: GalleryLocale }) {
  const text = copy[locale];
  const prefix = locale === "pl" ? "" : `/${locale}`;
  const links = [
    { href: `#${text.modelAnchor}`, label: text.models },
    { href: `${prefix}/historia`, label: text.history },
    { href: `${prefix}/kontakt`, label: text.contact },
  ];
  const navigationLinks = links.map(link => link.href.startsWith("#")
    ? <a key={link.href} href={link.href} className={styles.button}>{link.label}</a>
    : <Link key={link.href} href={link.href} className={styles.button}>{link.label}</Link>);

  return <header className={styles.header}>
    <div className={styles.inner}>
      <nav className={styles.desktopNav} aria-label={text.navigation}>
        {navigationLinks}
      </nav>

      <Link href={prefix || "/"} className={styles.brand} aria-label="ALAUDIS">
        <Image src="/logo-alaudis.png" alt="ALAUDIS" width={77} height={47} priority />
      </Link>

      <div className={styles.right}>
        <Link href={galleryPath(locale)} prefetch={false} className={`${styles.button} ${styles.galleryLink} ${styles.desktopGallery}`} aria-label={text.galleryLabel}>
          <svg className={styles.galleryIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M9 3H3v6m12-6h6v6M3 15v6h6m6 0h6v-6" />
            <path d="m6 16 4-4 3 3 3-4 3 5" />
            <circle cx="9" cy="8" r="1" />
          </svg>
          {text.gallery}
        </Link>
        <details className={styles.languages}>
          <summary className={styles.button} aria-label={text.language}>
            {locale.toUpperCase()}<span aria-hidden="true" className={styles.chevron}>▾</span>
          </summary>
          <nav className={styles.languageMenu} aria-label={text.language}>
            {galleryLocales.map(language => <Link key={language} href={language === "pl" ? "/" : `/${language}`} lang={language} aria-current={locale === language ? "page" : undefined}>{language.toUpperCase()}</Link>)}
          </nav>
        </details>
      </div>

      <nav className={styles.mobileNav} aria-label={text.navigation}>
        {navigationLinks}
        <Link href={galleryPath(locale)} prefetch={false} className={`${styles.button} ${styles.galleryLink}`} aria-label={text.galleryLabel}>{text.gallery}</Link>
      </nav>
    </div>
  </header>;
}
