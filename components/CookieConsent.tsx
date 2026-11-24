"use client";

// ==========================================================
// ZGODA NA COOKIES - ALAUDIS
// ==========================================================
// Baner zgody w stylu strony (PL / EN / DE / FR).
// - Statystyki Vercel (Analytics + Speed Insights) ładują się
//   dopiero po kliknięciu „Akceptuję”.
// - Wybór jest zapisywany w przeglądarce (localStorage) i można
//   go zmienić linkiem „Ustawienia cookies” w stopce.
// ==========================================================

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const STORAGE_KEY = "alaudis-consent-v1";
export const OPEN_CONSENT_EVENT = "alaudis:open-consent";

type Choice = "accepted" | "necessary";
type Locale = "pl" | "en" | "de" | "fr" | "es" | "it";

const copy: Record<
  Locale,
  { eyebrow: string; title: string; text: string; accept: string; necessary: string; label: string }
> = {
  pl: {
    eyebrow: "Prywatność",
    title: "Szanujemy Twoją prywatność",
    text: "Używamy plików i pamięci przeglądarki niezbędnych do działania strony, na przykład do zapisania Twojej konfiguracji fortepianu. Za Twoją zgodą włączymy też anonimowe statystyki odwiedzin, które pomagają nam ulepszać stronę. Nie używamy reklam ani śledzenia między witrynami.",
    accept: "Akceptuję",
    necessary: "Tylko niezbędne",
    label: "Zgoda na pliki cookies",
  },
  en: {
    eyebrow: "Privacy",
    title: "We respect your privacy",
    text: "We use browser storage that is necessary for the site to work, for example to save your piano configuration. With your consent we will also enable anonymous visit statistics that help us improve the site. We do not use advertising or cross-site tracking.",
    accept: "Accept",
    necessary: "Necessary only",
    label: "Cookie consent",
  },
  de: {
    eyebrow: "Datenschutz",
    title: "Wir respektieren Ihre Privatsphäre",
    text: "Wir verwenden Browserspeicher, der für den Betrieb der Website notwendig ist, zum Beispiel um Ihre Flügelkonfiguration zu speichern. Mit Ihrer Einwilligung aktivieren wir außerdem anonyme Besuchsstatistiken, die uns helfen, die Website zu verbessern. Wir nutzen weder Werbung noch seitenübergreifendes Tracking.",
    accept: "Akzeptieren",
    necessary: "Nur notwendige",
    label: "Cookie-Einwilligung",
  },
  fr: {
    eyebrow: "Confidentialité",
    title: "Nous respectons votre vie privée",
    text: "Nous utilisons le stockage du navigateur nécessaire au fonctionnement du site, par exemple pour enregistrer la configuration de votre piano. Avec votre accord, nous activerons aussi des statistiques de visite anonymes qui nous aident à améliorer le site. Nous n’utilisons ni publicité ni suivi intersites.",
    accept: "J’accepte",
    necessary: "Nécessaires uniquement",
    label: "Consentement aux cookies",
  },
  es: {
    eyebrow: "Privacidad",
    title: "Respetamos su privacidad",
    text: "Utilizamos el almacenamiento del navegador necesario para que el sitio funcione, por ejemplo, para guardar la configuración de su piano. Con su consentimiento, activaremos también estadísticas de visitas anónimas que nos ayudan a mejorar el sitio. No utilizamos publicidad ni seguimiento entre sitios.",
    accept: "Aceptar",
    necessary: "Solo las necesarias",
    label: "Consentimiento de cookies",
  },
  it: {
    eyebrow: "Privacy",
    title: "Rispettiamo la privacy di chi ci visita",
    text: "Utilizziamo la memoria del browser necessaria al funzionamento del sito, ad esempio per salvare la configurazione del pianoforte. Previo consenso, attiveremo anche statistiche anonime sulle visite, che ci aiutano a migliorare il sito. Non utilizziamo pubblicità né tracciamento tra siti.",
    accept: "Accetto",
    necessary: "Solo i necessari",
    label: "Consenso ai cookie",
  },
};

const POLICY_LABEL: Record<Locale, string> = { pl: "Polityka prywatności", en: "Privacy policy", de: "Datenschutz", fr: "Politique de confidentialité", es: "Política de privacidad", it: "Informativa sulla privacy" };

function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return first === "en" || first === "de" || first === "fr" || first === "es" || first === "it" ? first : "pl";
}

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "necessary" ? value : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const text = copy[locale];
  // null = jeszcze nie wiemy (pierwszy render), dzięki temu serwer
  // i przeglądarka renderują to samo i baner nie miga.
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readChoice();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- odczyt localStorage możliwy tylko po stronie przeglądarki
    setChoice(stored);
    setOpen(stored === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const decide = (value: Choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Prywatne okno lub zablokowana pamięć: wybór obowiązuje do końca wizyty.
    }
    setChoice(value);
    setOpen(false);
  };

  // Na panelu Sanity baner nie jest potrzebny.
  const hidden = pathname.startsWith("/panel-galerii");

  return (
    <>
      {choice === "accepted" && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {open && !hidden && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center px-3 pb-3 sm:px-6 sm:pb-5">
          {/* Podłużny pasek na dole ekranu: tekst po lewej, przyciski obok siebie po prawej. */}
          <section
            role="dialog"
            aria-modal="false"
            aria-label={text.label}
            className="cookie-consent pointer-events-auto flex w-full max-w-[1120px] flex-col gap-4 rounded-[22px] border border-white/13 bg-[rgb(8_8_8/0.72)] px-5 py-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl backdrop-saturate-150 lg:flex-row lg:items-center lg:gap-8 lg:px-6"
          >
            <div className="min-w-0 flex-1">
              <h2 className="text-[15px] font-medium tracking-[0.01em] text-white">
                {text.title}
              </h2>
              <p className="mt-1 text-[13px] leading-[1.55] text-white/88">
                {text.text}{" "}
                <a href={`${locale === "pl" ? "" : `/${locale}`}/polityka-prywatnosci`} className="whitespace-nowrap text-[#d3bd8b] underline-offset-4 hover:underline">
                  {POLICY_LABEL[locale]}
                </a>
              </p>
            </div>

            <div className="flex shrink-0 flex-col-reverse gap-2 sm:flex-row sm:gap-3">
              <button
                type="button"
                onClick={() => decide("necessary")}
                className="min-h-11 whitespace-nowrap rounded-full border border-white/35 bg-transparent px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {text.necessary}
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="min-h-11 whitespace-nowrap rounded-full border border-[#cfb675] bg-[#cfb675] px-7 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#080808] transition-colors hover:border-[#dac18a] hover:bg-[#dac18a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#cfb675]"
              >
                {text.accept}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
