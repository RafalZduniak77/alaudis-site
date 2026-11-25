//
// ==========================================================
// ACTION MENU
// ==========================================================
// To jest komponent rozwijanego menu akcji oferty.
//
// Za co odpowiada ten plik:
// 1. pokazuje główny przycisk zarządzania ofertą
// 2. otwiera i zamyka rozwijane menu
// 3. uruchamia akcje:
//    - zapis konfiguracji
//    - wysłanie konfiguracji
//    - eksport PDF
// 4. automatycznie zmienia język na podstawie adresu
// ==========================================================

"use client";

import { usePathname } from "next/navigation";

// ----------------------------------------------------------
// TYPY
// ----------------------------------------------------------
type ActionMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  onSave: () => void;
  onSend: () => void;
  onPdf: () => void;
};

type LanguageKey = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";

// ----------------------------------------------------------
// ROZPOZNAWANIE JĘZYKA
// ----------------------------------------------------------
function getLanguageFromPathname(pathname: string): LanguageKey {
  if (pathname === "/en/konfigurator" || pathname.startsWith("/en/konfigurator")) {
    return "EN";
  }

  if (pathname === "/de/konfigurator" || pathname.startsWith("/de/konfigurator")) {
    return "DE";
  }

  if (pathname === "/fr/konfigurator" || pathname.startsWith("/fr/konfigurator")) {
    return "FR";
  }

  if (pathname === "/es/konfigurator" || pathname.startsWith("/es/konfigurator")) {
    return "ES";
  }

  if (pathname === "/it/konfigurator" || pathname.startsWith("/it/konfigurator")) {
    return "IT";
  }

  return "PL";
}

// ----------------------------------------------------------
// TEKSTY
// ----------------------------------------------------------
function getLabels(language: LanguageKey) {
  if (language === "EN") {
    return {
      manage: "MANAGE OFFER",
      save: "💾 Save configuration",
      send: "✉️ Send configuration",
      pdf: "📄 Export PDF",
    };
  }

  if (language === "DE") {
    return {
      manage: "ANGEBOT VERWALTEN",
      save: "💾 Konfiguration speichern",
      send: "✉️ Konfiguration senden",
      pdf: "📄 PDF exportieren",
    };
  }

  if (language === "FR") {
    return {
      manage: "GÉRER L’OFFRE",
      save: "💾 Enregistrer la configuration",
      send: "✉️ Envoyer la configuration",
      pdf: "📄 Exporter en PDF",
    };
  }

  if (language === "ES") {
    return {
      manage: "GESTIONAR LA OFERTA",
      save: "💾 Guardar la configuración",
      send: "✉️ Enviar la configuración",
      pdf: "📄 Exportar a PDF",
    };
  }

  if (language === "IT") {
    return {
      manage: "GESTISCI L’OFFERTA",
      save: "💾 Salva la configurazione",
      send: "✉️ Invia la configurazione",
      pdf: "📄 Esporta in PDF",
    };
  }

  return {
    manage: "ZARZĄDZAJ OFERTĄ",
    save: "💾 Zapisz konfigurację",
    send: "✉️ Wyślij konfigurację",
    pdf: "📄 Export PDF",
  };
}

export default function ActionMenu({
  menuOpen,
  setMenuOpen,
  onSave,
  onSend,
  onPdf,
}: ActionMenuProps) {
  const pathname = usePathname() || "/";
  const language = getLanguageFromPathname(pathname);
  const labels = getLabels(language);

  return (
    <div className="shrink-0 border-t border-white/10 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-6 lg:py-3">
      <div className="relative">
        {/* GŁÓWNY PRZYCISK */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          className="w-full rounded-full bg-red-600 py-2 text-[11px] tracking-[0.12em] transition hover:bg-red-500 lg:h-[38px] lg:py-0 lg:text-xs"
        >
          {labels.manage}
        </button>

        {/* ROZWIJANE MENU */}
        {menuOpen && (
          <div className="absolute bottom-full mb-3 w-full overflow-hidden rounded-xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl">
            {/* ZAPISZ */}
            <button
              onClick={() => {
                onSave();
                setMenuOpen(false);
              }}
              className="w-full px-5 py-3 text-left text-sm transition hover:bg-white/10"
            >
              {labels.save}
            </button>

            {/* WYŚLIJ */}
            <button
              onClick={() => {
                onSend();
                setMenuOpen(false);
              }}
              className="w-full border-t border-white/10 px-5 py-3 text-left text-sm transition hover:bg-white/10"
            >
              {labels.send}
            </button>

            {/* PDF */}
            <button
              onClick={() => {
                onPdf();
                setMenuOpen(false);
              }}
              className="w-full border-t border-white/10 px-5 py-3 text-left text-sm transition hover:bg-white/10"
            >
              {labels.pdf}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
