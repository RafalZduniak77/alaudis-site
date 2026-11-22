import Link from "next/link";
import { ALAUDIS_MODEL_IDS, getAlaudisModelName } from "@/components/alaudisModels";
import { localePrefix, type SeoLocale } from "@/lib/seo";

// Ekran widoczny przez chwilę przed uruchomieniem konfiguratora.
// Jest częścią statycznego HTML, więc wyszukiwarki dostają nagłówek,
// opis i linki do modeli także bez wykonywania JavaScriptu.
const copy: Record<SeoLocale, { eyebrow: string; title: string; text: string }> = {
  pl: {
    eyebrow: "Konfigurator",
    title: "Konfigurator fortepianu ALAUDIS",
    text: "Skomponuj własny fortepian ALAUDIS: wybierz model, wykończenie i kolor obudowy, elementy akustyczne oraz mechanizm. Konfigurację możesz zapisać, pobrać jako PDF lub wysłać do nas z prośbą o prywatną konsultację.",
  },
  en: {
    eyebrow: "Configurator",
    title: "ALAUDIS Grand Piano Configurator",
    text: "Compose your own ALAUDIS grand piano: choose the model, the cabinet finish and colour, the acoustic elements and the action. You can save your configuration, download it as a PDF or send it to us to request a private consultation.",
  },
  de: {
    eyebrow: "Konfigurator",
    title: "ALAUDIS Flügel-Konfigurator",
    text: "Stellen Sie Ihren eigenen ALAUDIS Flügel zusammen: Wählen Sie Modell, Oberfläche und Farbe des Gehäuses, die akustischen Elemente und die Mechanik. Ihre Konfiguration können Sie speichern, als PDF herunterladen oder uns für eine private Beratung senden.",
  },
  fr: {
    eyebrow: "Configurateur",
    title: "Configurateur de piano à queue ALAUDIS",
    text: "Composez votre propre piano à queue ALAUDIS : choisissez le modèle, la finition et la couleur de la caisse, les éléments acoustiques et la mécanique. Vous pouvez enregistrer votre configuration, la télécharger en PDF ou nous l’envoyer pour une consultation privée.",
  },
};

export default function KonfiguratorFallback({ locale }: { locale: SeoLocale }) {
  const text = copy[locale];

  return (
    <main className="flex min-h-dvh items-center justify-center bg-black px-6 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.48em] text-white/75">
          {text.eyebrow}
        </p>
        <h1 className="mt-5 text-2xl font-light uppercase tracking-[0.06em] sm:text-4xl">
          {text.title}
        </h1>
        <p className="mt-6 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
          {text.text}
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-white/70">
          {ALAUDIS_MODEL_IDS.map((model) => (
            <Link key={model} href={`${localePrefix(locale)}/fortepiany/alaudis-${model}`}>
              {getAlaudisModelName(model)}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
