// ==========================================================
// ACTION MENU
// ==========================================================
// To jest komponent rozwijanego menu akcji oferty.
//
// Za co odpowiada ten plik:
// 1. pokazuje główny przycisk "ZARZĄDZAJ OFERTĄ"
// 2. otwiera i zamyka rozwijane menu
// 3. uruchamia akcje:
//    - zapis konfiguracji
//    - wysłanie konfiguracji
//    - eksport PDF
// 4. po kliknięciu zamyka menu
//
// Co tutaj najłatwiej zmieniasz:
// - tekst głównego przycisku
// - teksty pozycji w menu
// - kolejność pozycji
// - kolory, paddingi i styl menu
//
// Najważniejsze propsy:
// - menuOpen       -> czy menu jest otwarte
// - setMenuOpen    -> otwieranie / zamykanie menu
// - onSave         -> akcja zapisu
// - onSend         -> akcja wysyłki
// - onPdf          -> akcja eksportu PDF
// ==========================================================

"use client";

type ActionMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  onSave: () => void;
  onSend: () => void;
  onPdf: () => void;
};

export default function ActionMenu({
  menuOpen,
  setMenuOpen,
  onSave,
  onSend,
  onPdf,
}: ActionMenuProps) {
  return (
    <div className="border-t border-white/10 p-6">
      <div className="relative">
        {/* GŁÓWNY PRZYCISK */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-full rounded-full bg-red-600 py-4"
        >
          ZARZĄDZAJ OFERTĄ
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
              💾 Zapisz konfigurację
            </button>

            {/* WYŚLIJ */}
            <button
              onClick={() => {
                onSend();
                setMenuOpen(false);
              }}
              className="w-full border-t border-white/10 px-6 py-4 text-left transition hover:bg-white/10"
            >
              ✉️ Wyślij konfigurację
            </button>

            {/* PDF */}
            <button
              onClick={() => {
                onPdf();
                setMenuOpen(false);
              }}
              className="w-full border-t border-white/10 px-6 py-4 text-left transition hover:bg-white/10"
            >
              📄 Export PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
