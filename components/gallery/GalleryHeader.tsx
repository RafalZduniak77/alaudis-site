import Image from "next/image";
import Link from "next/link";
import { galleryLocales, galleryPath, type GalleryFilter, type GalleryLocale } from "@/lib/gallery/types";
import { galleryCopy } from "@/lib/gallery/i18n";
import styles from "./Gallery.module.css";

export default function GalleryHeader({ locale, slug, category }: { locale: GalleryLocale; slug?: string; category?: GalleryFilter }) {
  const copy = galleryCopy[locale];
  return <header className={styles.header}>
    <Link className={styles.back} href={slug ? galleryPath(locale) : locale === "pl" ? "/" : `/${locale}`}><span aria-hidden="true">←</span> {slug ? copy.albums : copy.back}</Link>
    <Link href={locale === "pl" ? "/" : `/${locale}`} aria-label="ALAUDIS"><Image src="/logo-alaudis.png" alt="ALAUDIS" width={77} height={47} priority /></Link>
    <details className={styles.languages}>
      <summary aria-label={copy.language}>{locale.toUpperCase()} <span aria-hidden="true">⌄</span></summary>
      <nav aria-label={copy.language}>{galleryLocales.map(lang => <Link key={lang} href={`${galleryPath(lang)}${slug ? `/${slug}` : category ? `?dzial=${category}` : ""}`} lang={lang} aria-current={lang === locale ? "page" : undefined}>{lang.toUpperCase()}</Link>)}</nav>
    </details>
  </header>;
}

