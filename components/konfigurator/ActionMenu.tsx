
//
//  Untitled.swift
//  
//
//  Created by Rafal Zduniak on 19/03/2026.
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
    <div className="p-6 border-t border-white/10">
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-full rounded-full bg-red-600 py-4"
        >
          ZARZĄDZAJ OFERTĄ
        </button>

        {menuOpen && (
          <div className="absolute bottom-full mb-3 w-full overflow-hidden rounded-xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl">
            <button
              onClick={() => {
                onSave();
                setMenuOpen(false);
              }}
              className="w-full px-6 py-4 text-left transition hover:bg-white/10"
            >
              💾 Zapisz konfigurację
            </button>

            <button
              onClick={() => {
                onSend();
                setMenuOpen(false);
              }}
              className="w-full border-t border-white/10 px-6 py-4 text-left transition hover:bg-white/10"
            >
              ✉️ Wyślij konfigurację
            </button>

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

