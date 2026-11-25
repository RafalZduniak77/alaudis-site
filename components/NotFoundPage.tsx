import Link from "next/link";
import Footer from "@/components/Footer";
import ModelPageTopBar from "@/components/ModelPageTopBar";
import type { SeoLocale } from "@/lib/seo";

// ==========================================================
// STRONA „NIE ZNALEZIONO” (404)
// ==========================================================
// Pokazuje się, gdy adres nie istnieje (literówka, stary link,
// usunięty album). Ma menu, stopkę i drogę powrotu w języku strony.
// ==========================================================

const copy: Record<SeoLocale, { eyebrow: string; title: string; text: string; home: string; models: string; gallery: string; contact: string }> = {
  pl: {
    eyebrow: "Błąd 404",
    title: "Nie znaleźliśmy tej strony",
    text: "Adres mógł się zmienić albo zawiera literówkę. Wybierz jedno z miejsc poniżej.",
    home: "Strona główna", models: "Fortepian ALAUDIS LEO 214", gallery: "Galeria", contact: "Kontakt",
  },
  en: {
    eyebrow: "Error 404",
    title: "We couldn’t find this page",
    text: "The address may have changed or contains a typo. Choose one of the places below.",
    home: "Home", models: "ALAUDIS LEO 214 grand piano", gallery: "Gallery", contact: "Contact",
  },
  de: {
    eyebrow: "Fehler 404",
    title: "Diese Seite wurde nicht gefunden",
    text: "Die Adresse hat sich möglicherweise geändert oder enthält einen Tippfehler. Wählen Sie eines der folgenden Ziele.",
    home: "Startseite", models: "Flügel ALAUDIS LEO 214", gallery: "Galerie", contact: "Kontakt",
  },
  fr: {
    eyebrow: "Erreur 404",
    title: "Cette page est introuvable",
    text: "L’adresse a peut-être changé ou contient une faute de frappe. Choisissez l’une des destinations ci-dessous.",
    home: "Accueil", models: "Piano à queue ALAUDIS LEO 214", gallery: "Galerie", contact: "Contact",
  },
  es: {
    eyebrow: "Error 404",
    title: "No hemos encontrado esta página",
    text: "Es posible que la dirección haya cambiado o contenga una errata. Elija uno de los destinos siguientes.",
    home: "Inicio", models: "Piano de cola ALAUDIS LEO 214", gallery: "Galería", contact: "Contacto",
  },
  it: {
    eyebrow: "Errore 404",
    title: "Non abbiamo trovato questa pagina",
    text: "L’indirizzo potrebbe essere cambiato o contenere un errore di battitura. Scegli una delle destinazioni qui sotto.",
    home: "Pagina iniziale", models: "Pianoforte a coda ALAUDIS LEO 214", gallery: "Galleria", contact: "Contatti",
  },
};

const button =
  "rounded-full border border-white/35 px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black";

export default function NotFoundPage({ locale }: { locale: SeoLocale }) {
  const text = copy[locale];
  const prefix = locale === "pl" ? "" : `/${locale}`;

  return (
    <main lang={locale} className="min-h-screen bg-black text-white">
      <ModelPageTopBar activeLanguage={locale.toUpperCase() as "PL" | "EN" | "DE" | "FR" | "ES" | "IT"} />

      <section className="flex min-h-[80vh] items-center px-6 pb-20 pt-40 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-3xl rounded-[30px] border border-white/10 bg-white/[0.03] px-8 py-12 text-center sm:px-10 sm:py-14">
          <p className="text-xs uppercase tracking-[0.32em] text-white/88">{text.eyebrow}</p>
          <h1 className="mt-6 text-3xl font-light text-white sm:text-4xl">{text.title}</h1>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-white">{text.text}</p>
          <nav className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href={prefix || "/"} className={button}>{text.home}</Link>
            <Link href={`${prefix}/fortepiany/alaudis-214`} className={button}>{text.models}</Link>
            <Link href={`${prefix}/galeria`} prefetch={false} className={button}>{text.gallery}</Link>
            <Link href={`${prefix}/kontakt`} className={button}>{text.contact}</Link>
          </nav>
        </div>
      </section>

      <Footer />
    </main>
  );
}
