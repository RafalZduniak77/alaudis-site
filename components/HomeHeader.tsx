"use client";

// ==========================================================
// WSPÓLNE MENU CAŁEJ STRONY
// ==========================================================
// variant="home" — strona główna; variant="page" — podstrony.
// Po prawej: W kadrze (przy logo) · lupka · język · menu (☰).
// ==========================================================

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { galleryLocales, galleryPath, type GalleryLocale } from "@/lib/gallery/types";
import { sitePages, type SeoPage } from "@/lib/seo";
import styles from "./HomeHeader.module.css";

const copy = {
  pl: { models: "Modele", history: "Historia", craft: "Rzemiosło", gallery: "W kadrze", sound: "Brzmienie", galleryLabel: "W kadrze — galeria fotografii ALAUDIS", navigation: "Menu główne", language: "Wybierz język", menu: "Menu", close: "Zamknij", search: "Szukaj", searchPlaceholder: "Szukaj na stronie…", noResults: "Nic nie znaleziono. Spróbuj innego słowa.", searchHint: "Wpisz np. „konfigurator”, „zwiedzanie” albo „LEO 214”.", groups: ["Instrumenty", "Marka", "Spotkajmy się", "Galeria"] },
  en: { models: "Models", history: "History", craft: "Craft", gallery: "In focus", sound: "Sound", galleryLabel: "In focus — ALAUDIS photo gallery", navigation: "Main navigation", language: "Choose language", menu: "Menu", close: "Close", search: "Search", searchPlaceholder: "Search the site…", noResults: "Nothing found. Try another word.", searchHint: "Try “configurator”, “tour” or “LEO 214”.", groups: ["Instruments", "Brand", "Meet us", "Gallery"] },
  de: { models: "Modelle", history: "Geschichte", craft: "Handwerk", gallery: "Einblicke", sound: "Klang", galleryLabel: "Einblicke — ALAUDIS Fotogalerie", navigation: "Hauptnavigation", language: "Sprache wählen", menu: "Menü", close: "Schließen", search: "Suche", searchPlaceholder: "Website durchsuchen…", noResults: "Nichts gefunden. Versuchen Sie ein anderes Wort.", searchHint: "Zum Beispiel „Konfigurator“, „Führung“ oder „LEO 214“.", groups: ["Instrumente", "Marke", "Besuch & Kontakt", "Galerie"] },
  fr: { models: "Modèles", history: "Histoire", craft: "Savoir-faire", gallery: "En images", sound: "Le son", galleryLabel: "En images — galerie de photographies ALAUDIS", navigation: "Navigation principale", language: "Choisir la langue", menu: "Menu", close: "Fermer", search: "Rechercher", searchPlaceholder: "Rechercher sur le site…", noResults: "Aucun résultat. Essayez un autre mot.", searchHint: "Par exemple « configurateur », « visite » ou « LEO 214 ».", groups: ["Instruments", "Marque", "Nous rencontrer", "Galerie"] },
} satisfies Record<GalleryLocale, Record<string, string | string[]>>;

// Which pages go into which column of the pull-down menu.
const MENU_GROUPS: SeoPage[][] = [
  ["model178", "model214", "model275", "konfigurator", "odkryjModele"],
  ["historia", "rzemioslo", "tradycja", "artysci", "aktualnosci"],
  ["zwiedzanieManufaktury", "odwiedzAtelier", "dlaArchitektow", "kontakt"],
];

const fold = (value: string) => value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l");

type Entry = { href: string; label: string; description: string; haystack: string };

export default function HomeHeader({ locale, variant = "home" }: { locale: GalleryLocale; variant?: "home" | "page" }) {
  const text = copy[locale];
  const prefix = locale === "pl" ? "" : `/${locale}`;
  const onHome = variant === "home";
  const [panel, setPanel] = useState<null | "menu" | "search">(null);
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);

  // Language switch keeps the visitor on the same page.
  const pathname = usePathname() || "/";
  const basePath = pathname.replace(/^\/(en|de|fr)(?=\/|$)/, "") || "/";
  const languageHref = (language: GalleryLocale) => (language === "pl" ? basePath : `/${language}${basePath === "/" ? "" : basePath}`);

  const pages = useMemo(() => sitePages(locale), [locale]);
  const galleryEntries = useMemo(() => [
    { href: galleryPath(locale), label: text.gallery, description: text.galleryLabel },
    { href: `${galleryPath(locale)}?dzial=video`, label: text.sound, description: "" },
  ], [locale, text]);
  const entries: Entry[] = useMemo(() => [
    ...pages.filter(page => page.page !== "home").map(page => ({ href: page.href, label: page.label, description: page.description, haystack: fold(`${page.label} ${page.title} ${page.description}`) })),
    ...galleryEntries.map(entry => ({ ...entry, haystack: fold(`${entry.label} ${entry.description} galeria gallery galerie video wideo`) })),
  ], [pages, galleryEntries]);
  const words = fold(query).split(/\s+/).filter(Boolean);
  const results = words.length ? entries.filter(entry => words.every(word => entry.haystack.includes(word))).slice(0, 8) : [];

  // Close the panel on Escape; choosing a link closes it too (see the panel's onClick).
  useEffect(() => {
    if (!panel) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setPanel(null); };
    document.addEventListener("keydown", onKey);
    if (panel === "search") searchInput.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [panel]);

  const links = [
    // „Modele” wraca na początek strony głównej.
    { href: prefix || "/", label: text.models, top: true },
    { href: `${prefix}/historia`, label: text.history },
    { href: `${prefix}/rzemioslo`, label: text.craft },
  ];
  const navigationLinks = links.map(link => <Link
    key={link.href}
    href={link.href}
    className={styles.button}
    // Already on the home page: just glide back to the top.
    onClick={"top" in link && onHome ? event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); window.history.replaceState(null, "", link.href); } : undefined}
  >{link.label}</Link>);
  const toggle = (name: "menu" | "search") => setPanel(current => (current === name ? null : name));

  return <>
  <header className={`${styles.header} ${onHome ? "" : styles.page} ${panel ? styles.open : ""}`}>
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

        <div className={styles.tools}>
          <button type="button" className={`${styles.button} ${styles.iconButton}`} aria-label={text.search} aria-expanded={panel === "search"} aria-controls="site-panel" onClick={() => toggle("search")}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
          </button>
          <details className={styles.languages}>
            <summary className={styles.button} aria-label={text.language}>
              {locale.toUpperCase()}<span aria-hidden="true" className={styles.chevron}>▾</span>
            </summary>
            <nav className={styles.languageMenu} aria-label={text.language}>
              {galleryLocales.map(language => <Link key={language} href={languageHref(language)} lang={language} aria-current={locale === language ? "page" : undefined}>{language.toUpperCase()}</Link>)}
            </nav>
          </details>
          <button type="button" className={`${styles.button} ${styles.iconButton}`} aria-label={panel === "menu" ? text.close : text.menu} aria-expanded={panel === "menu"} aria-controls="site-panel" onClick={() => toggle("menu")}>
            {panel === "menu"
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" /></svg>}
          </button>
        </div>
      </div>

      <nav className={styles.mobileNav} aria-label={text.navigation}>
        {navigationLinks}
        <Link href={galleryPath(locale)} prefetch={false} className={`${styles.button} ${styles.galleryLink}`} aria-label={text.galleryLabel}>{text.gallery}</Link>
      </nav>
    </div>

    {/* ROZWIJANY PANEL: MENU ALBO WYSZUKIWARKA */}
    {panel && <div id="site-panel" className={styles.panel} onClick={event => { if ((event.target as HTMLElement).closest("a")) { setPanel(null); setQuery(""); } }}>
      <div className={styles.panelInner}>
        {panel === "menu" ? <nav className={styles.menuGrid} aria-label={text.menu}>
          {MENU_GROUPS.map((group, index) => <div key={text.groups[index]}>
            <p className={styles.groupTitle}>{text.groups[index]}</p>
            <ul>{group.map(key => { const page = pages.find(item => item.page === key); return page ? <li key={key}><Link href={page.href}>{page.label}</Link></li> : null; })}</ul>
          </div>)}
          <div>
            <p className={styles.groupTitle}>{text.groups[3]}</p>
            <ul>{galleryEntries.map(entry => <li key={entry.href}><Link href={entry.href} prefetch={false}>{entry.label}</Link></li>)}</ul>
          </div>
        </nav> : <div className={styles.search}>
          <label className="sr-only" htmlFor="site-search">{text.search}</label>
          <input id="site-search" ref={searchInput} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={text.searchPlaceholder} autoComplete="off" className={styles.searchInput} />
          {!words.length && <p className={styles.searchNote}>{text.searchHint}</p>}
          {words.length > 0 && !results.length && <p className={styles.searchNote} role="status">{text.noResults}</p>}
          {results.length > 0 && <ul className={styles.results}>
            {results.map(result => <li key={result.href}><Link href={result.href} prefetch={false}>
              <span className={styles.resultTitle}>{result.label}</span>
              {result.description && <span className={styles.resultText}>{result.description}</span>}
            </Link></li>)}
          </ul>}
        </div>}
      </div>
    </div>}
  </header>
  {panel && <button type="button" className={styles.backdrop} aria-label={text.close} onClick={() => setPanel(null)} />}
  {/* On phones the menu has two rows; push the page content below it. */}
  {!onHome && <div className={styles.spacer} aria-hidden="true" />}
  </>;
}
