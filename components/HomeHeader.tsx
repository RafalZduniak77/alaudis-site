"use client";

// ==========================================================
// WSPÓLNE MENU CAŁEJ STRONY
// ==========================================================
// variant="home" — strona główna; variant="page" — podstrony.
// Po prawej: W kadrze (przy logo) · lupka · język · menu (☰).
// ==========================================================

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { galleryLocales, galleryPath, type GalleryLocale } from "@/lib/gallery/types";
import { sitePages, type SeoPage } from "@/lib/seo";
import styles from "./HomeHeader.module.css";

const copy = {
  pl: { back: "Wróć", company: "Firma", searchTitle: "Szukaj w serwisie", home: "Strona główna", resultWords: ["wynik", "wyniki", "wyników"], models: "Modele", history: "Historia", craft: "Rzemiosło", gallery: "W kadrze", sound: "Brzmienie", galleryLabel: "W kadrze — galeria fotografii ALAUDIS", navigation: "Menu główne", language: "Wybierz język", menu: "Menu", close: "Zamknij", search: "Szukaj", searchPlaceholder: "Model, podstrona lub temat", noResults: "Nic nie znaleziono. Spróbuj innego słowa.", groups: ["Instrumenty", "Marka", "Spotkajmy się", "Galeria"] },
  en: { back: "Back", company: "Company", searchTitle: "Search the site", home: "Home", resultWords: ["result", "results", "results"], models: "Models", history: "History", craft: "Craft", gallery: "In focus", sound: "Sound", galleryLabel: "In focus — ALAUDIS photo gallery", navigation: "Main navigation", language: "Choose language", menu: "Menu", close: "Close", search: "Search", searchPlaceholder: "Model, page or topic", noResults: "Nothing found. Try another word.", groups: ["Instruments", "Brand", "Meet us", "Gallery"] },
  de: { back: "Zurück", company: "Unternehmen", searchTitle: "Website durchsuchen", home: "Startseite", resultWords: ["Ergebnis", "Ergebnisse", "Ergebnisse"], models: "Modelle", history: "Geschichte", craft: "Handwerk", gallery: "Einblicke", sound: "Klang", galleryLabel: "Einblicke — ALAUDIS Fotogalerie", navigation: "Hauptnavigation", language: "Sprache wählen", menu: "Menü", close: "Schließen", search: "Suche", searchPlaceholder: "Modell, Seite oder Thema", noResults: "Nichts gefunden. Versuchen Sie ein anderes Wort.", groups: ["Instrumente", "Marke", "Besuch & Kontakt", "Galerie"] },
  fr: { back: "Retour", company: "Entreprise", searchTitle: "Rechercher sur le site", home: "Accueil", resultWords: ["résultat", "résultats", "résultats"], models: "Modèles", history: "Histoire", craft: "Savoir-faire", gallery: "En images", sound: "Le son", galleryLabel: "En images — galerie de photographies ALAUDIS", navigation: "Navigation principale", language: "Choisir la langue", menu: "Menu", close: "Fermer", search: "Rechercher", searchPlaceholder: "Modèle, page ou sujet", noResults: "Aucun résultat. Essayez un autre mot.", groups: ["Instruments", "Marque", "Nous rencontrer", "Galerie"] },
} satisfies Record<GalleryLocale, Record<string, string | string[]>>;

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61579105662197&locale=pl_PL";

// Which pages go into which column of the pull-down menu.
const MENU_GROUPS: SeoPage[][] = [
  ["model178", "model214", "model275", "konfigurator", "odkryjModele"],
  ["historia", "rzemioslo", "tradycja", "artysci", "aktualnosci"],
  ["zwiedzanieManufaktury", "odwiedzAtelier", "dlaArchitektow", "kontakt"],
];

const fold = (value: string) => value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l");

type Entry = { href: string; label: string; category: string; haystack: string };

export default function HomeHeader({ locale, variant = "home" }: { locale: GalleryLocale; variant?: "home" | "page" }) {
  const text = copy[locale];
  const prefix = locale === "pl" ? "" : `/${locale}`;
  const onHome = variant === "home";
  const [panel, setPanel] = useState<null | "menu" | "search">(null);
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  // Once the page is scrolled, the bar turns into dark glass (as under the texts on the History page).
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Language switch keeps the visitor on the same page.
  const pathname = usePathname() || "/";
  const basePath = pathname.replace(/^\/(en|de|fr)(?=\/|$)/, "") || "/";
  const languageHref = (language: GalleryLocale) => (language === "pl" ? basePath : `/${language}${basePath === "/" ? "" : basePath}`);

  const pages = useMemo(() => sitePages(locale), [locale]);
  const galleryEntries = useMemo(() => [
    { href: galleryPath(locale), label: text.gallery, description: text.galleryLabel },
    { href: `${galleryPath(locale)}?dzial=video`, label: text.sound, description: "" },
  ], [locale, text]);
  // Everything on the site, listed right away; typing narrows the list.
  const entries: Entry[] = useMemo(() => {
    const categoryOf = (page: SeoPage) => text.groups[MENU_GROUPS.findIndex(group => group.includes(page))] ?? "ALAUDIS";
    return [
      ...pages.map(page => ({ href: page.href, label: page.page === "home" ? text.home : page.label, category: categoryOf(page.page), haystack: fold(`${page.label} ${page.title} ${page.description}`) })),
      ...galleryEntries.map(entry => ({ href: entry.href, label: entry.label, category: text.groups[3], haystack: fold(`${entry.label} ${entry.description} galeria gallery galerie video wideo`) })),
    ];
  }, [pages, galleryEntries, text]);
  const words = fold(query).split(/\s+/).filter(Boolean);
  const results = entries.filter(entry => words.every(word => entry.haystack.includes(word)));
  // 1 wynik · 2–4 wyniki · 5+ wyników (other languages: singular / plural).
  const resultWord = results.length === 1 ? text.resultWords[0] : locale === "pl" && [2, 3, 4].includes(results.length % 10) && ![12, 13, 14].includes(results.length % 100) ? text.resultWords[1] : text.resultWords[2];

  // Close the panel on Escape; choosing a link closes it too (see the panel's onClick).
  useEffect(() => {
    if (!panel) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setPanel(null); };
    document.addEventListener("keydown", onKey);
    // The page behind stays still while the menu or the search is open.
    const root = document.documentElement; const previous = root.style.overflow; root.style.overflow = "hidden";
    if (panel === "search") searchInput.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); root.style.overflow = previous; };
  }, [panel]);

  const links = [
    // „Modele” wraca na początek strony głównej.
    { href: prefix || "/", label: text.models, top: true, active: basePath === "/" || basePath.startsWith("/fortepiany") },
    { href: `${prefix}/historia`, label: text.history, active: basePath.startsWith("/historia") },
    { href: `${prefix}/rzemioslo`, label: text.craft, active: basePath.startsWith("/rzemioslo") },
  ];
  const galleryActive = basePath.startsWith("/galeria");
  const navigationLinks = links.map(link => <Link
    key={link.href}
    href={link.href}
    // Gold marks the section the visitor is in.
    className={`${styles.button} ${link.active ? styles.galleryLink : ""}`}
    aria-current={link.active ? "page" : undefined}
    // Already on the home page: just glide back to the top.
    onClick={"top" in link && onHome ? event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); window.history.replaceState(null, "", link.href); } : undefined}
  >{link.label}</Link>);
  const menuLinks = (keys: SeoPage[]) => keys.map(key => { const page = pages.find(item => item.page === key); return page ? <li key={key}><Link href={page.href}>{page.label}</Link></li> : null; });
  // Back arrow on subpages: the previous page, or the home page when there is none.
  const router = useRouter();
  const goBack = () => { if (window.history.length > 1) router.back(); else router.push(prefix || "/"); };
  const backButton = (extra: string) => <button type="button" className={`${styles.button} ${styles.iconButton} ${extra}`} aria-label={text.back} title={text.back} onClick={goBack}>
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12H4m7-7-7 7 7 7" /></svg>
  </button>;
  const toggle = (name: "menu" | "search") => setPanel(current => (current === name ? null : name));

  return <>
  <header className={`${styles.header} ${onHome ? "" : styles.page} ${scrolled ? styles.scrolled : ""} ${panel ? styles.open : ""}`}>
    <div className={styles.inner}>
      <nav className={styles.desktopNav} aria-label={text.navigation}>
        {!onHome && backButton("")}
        {navigationLinks}
      </nav>
      {!onHome && backButton(styles.mobileBack)}

      <Link href={prefix || "/"} className={styles.brand} aria-label="ALAUDIS">
        <Image src="/logo-alaudis.png" alt="ALAUDIS" width={77} height={47} priority />
      </Link>

      <div className={styles.right}>
        <Link href={galleryPath(locale)} prefetch={false} className={`${styles.button} ${galleryActive ? styles.galleryLink : ""} ${styles.desktopGallery}`} aria-current={galleryActive ? "page" : undefined} aria-label={text.galleryLabel}>
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
        <Link href={galleryPath(locale)} prefetch={false} className={`${styles.button} ${galleryActive ? styles.galleryLink : ""}`} aria-label={text.galleryLabel}>{text.gallery}</Link>
      </nav>
    </div>

    {/* MENU NA CAŁY EKRAN */}
    {panel === "menu" && <div id="site-panel" className={styles.panel} onClick={event => { if ((event.target as HTMLElement).closest("a")) setPanel(null); }}>
      <div className={styles.panelInner}>
        <nav className={styles.menuGrid} aria-label={text.menu}>
          {/* Instrumenty: trzy modele dużą czcionką, pod nimi konfigurator i podgląd 3D */}
          <div className={styles.models}>
            <p className={styles.groupTitle}>{text.groups[0]}</p>
            <ul>{menuLinks(MENU_GROUPS[0].slice(0, 3))}</ul>
            <ul className={styles.subList}>{menuLinks(MENU_GROUPS[0].slice(3))}</ul>
          </div>
          <div>
            <p className={styles.groupTitle}>{text.groups[1]}</p>
            <ul>{menuLinks(MENU_GROUPS[1])}</ul>
            {/* To samo co w stopce: Facebook i strona SAP Renovation */}
            <p className={`${styles.groupTitle} ${styles.groupNext}`}>{text.company}</p>
            <ul>
              <li><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook Alaudis <span aria-hidden="true">↗</span></a></li>
              <li><a href={`https://saprenovation.com/${locale}/`} target="_blank" rel="noreferrer">SAP Renovation <span aria-hidden="true">↗</span></a></li>
            </ul>
          </div>
          <div>
            <p className={styles.groupTitle}>{text.groups[2]}</p>
            <ul>{menuLinks(MENU_GROUPS[2])}</ul>
            <p className={`${styles.groupTitle} ${styles.groupNext}`}>{text.groups[3]}</p>
            <ul>{galleryEntries.map(entry => <li key={entry.href}><Link href={entry.href} prefetch={false}>{entry.label}</Link></li>)}</ul>
          </div>
        </nav>
        <div className={styles.menuArt} aria-hidden="true">
          <Image src="/galeria-home/Czarny Poliester połysk-v2.png" alt="" width={3000} height={2000} sizes="(min-width: 1000px) 46vw, 1px" />
        </div>
        <p className={styles.menuFoot}>ALAUDIS <span aria-hidden="true">·</span> Obozowa 18, 62-800 Kalisz</p>
      </div>
    </div>}
  </header>
  {panel === "search" && <button type="button" className={`${styles.backdrop} ${styles.backdropFront}`} aria-label={text.close} onClick={() => setPanel(null)} />}
  {/* OKNO WYSZUKIWARKI */}
  {panel === "search" && <div id="site-panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title" className={styles.searchDialog} onClick={event => { if ((event.target as HTMLElement).closest("a")) { setPanel(null); setQuery(""); } }}>
    <div className={styles.searchHead}>
      <h2 id="site-search-title">{text.searchTitle}</h2>
      <button type="button" className={styles.searchClose} aria-label={text.close} onClick={() => setPanel(null)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg>
      </button>
    </div>
    <label className={styles.searchField}>
      <span className="sr-only">{text.search}</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
      <input ref={searchInput} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={text.searchPlaceholder} autoComplete="off" />
    </label>
    <p className={styles.searchCount} role="status">{results.length ? `${results.length} ${resultWord}` : text.noResults}</p>
    <ul className={styles.results}>
      {results.map(result => <li key={result.href}><Link href={result.href} prefetch={false}>
        <span className={styles.resultTitle}>{result.label}</span>
        <span className={styles.resultText}>{result.category}</span>
      </Link></li>)}
    </ul>
  </div>}
  {/* On phones the menu has two rows; push the page content below it. */}
  {!onHome && <div className={styles.spacer} aria-hidden="true" />}
  </>;
}
