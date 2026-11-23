"use client";

import { OPEN_CONSENT_EVENT } from "@/components/CookieConsent";

// Otwiera okno wyboru cookies (to samo co link w stopce).
export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="rounded-full border border-[#d3bd8b]/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#d3bd8b] transition hover:bg-[#d3bd8b] hover:text-black"
    >
      {label}
    </button>
  );
}
