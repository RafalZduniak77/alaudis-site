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

type LanguageKey = "PL" | "EN" | "DE" | "FR";

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
    <div className="border-t border-white/10 p-6">
      <div className="relative">
        {/* GŁÓWNY PRZYCISK */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-full rounded-full bg-red-600 py-4"
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
              className="w-full px-6 py-4 text-left transition hover:bg-white/10"
            >
              {labels.save}
            </button>

            {/* WYŚLIJ */}
            <button
              onClick={() => {
                onSend();
                setMenuOpen(false);
              }}
              className="w-full border-t border-white/10 px-6 py-4 text-left transition hover:bg-white/10"
            >
              {labels.send}
            </button>

            {/* PDF */}
            <button
              onClick={() => {
                onPdf();
                setMenuOpen(false);
              }}
              className="w-full border-t border-white/10 px-6 py-4 text-left transition hover:bg-white/10"
            >
              {labels.pdf}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
