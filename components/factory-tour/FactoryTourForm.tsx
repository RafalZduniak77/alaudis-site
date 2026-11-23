"use client";

// ==========================================================
// FORMULARZ ZGŁOSZENIA NA ZWIEDZANIE MANUFAKTURY
// ==========================================================
// Tak jak konfigurator, formularz przygotowuje gotową wiadomość
// e-mail do działu handlowego (mailto) — strona nie zapisuje danych.
// ==========================================================

import { useId, useState, type FormEvent } from "react";
import { TOUR_EMAIL, type TourLanguage, tourCopy } from "./copy";

const field =
  "mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/35 focus:border-[#d3bd8b] focus:outline-none";
const label = "text-[11px] uppercase tracking-[0.24em] text-white/75";

export default function FactoryTourForm({ language }: { language: TourLanguage }) {
  const copy = tourCopy[language].form;
  const id = useId();
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) || "").trim();
    const lines = [
      `${copy.name}: ${value("name")}`,
      `${copy.email}: ${value("email")}`,
      value("phone") && `${copy.phone}: ${value("phone")}`,
      `${copy.people}: ${value("people")}`,
      value("date") && `${copy.date}: ${value("date")}`,
      value("altDate") && `${copy.altDate}: ${value("altDate")}`,
      `${copy.tourLanguage}: ${value("tourLanguage")}`,
      value("message") && `\n${copy.message}:\n${value("message")}`,
    ].filter(Boolean);
    const subject = `${copy.subject} — ${value("name")}`;
    window.location.href = `mailto:${TOUR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-[32px] border border-[#d3bd8b]/40 bg-white/[0.03] p-8 sm:p-10">
        <p className="text-xs uppercase tracking-[0.32em] text-[#d3bd8b]">{copy.sentEyebrow}</p>
        <h3 className="mt-4 text-2xl font-light text-white">{copy.sentTitle}</h3>
        <p className="mt-5 leading-8 text-white/85">
          {copy.sentText}{" "}
          <a href={`mailto:${TOUR_EMAIL}`} className="text-[#d3bd8b] underline-offset-4 hover:underline">{TOUR_EMAIL}</a>.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-8 rounded-full border border-white/35 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:border-white hover:bg-white hover:text-black">
          {copy.back}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className={label}>{copy.name} *</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label>
          <span className={label}>{copy.email} *</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label>
          <span className={label}>{copy.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label>
          <span className={label}>{copy.people} *</span>
          <select name="people" required defaultValue="" className={field}>
            <option value="" disabled>{copy.choose}</option>
            {copy.peopleOptions.map((option) => <option key={option} className="bg-neutral-900">{option}</option>)}
          </select>
        </label>
        <label>
          <span className={label}>{copy.tourLanguage} *</span>
          <select name="tourLanguage" required defaultValue={copy.languageOptions[0]} className={field}>
            {copy.languageOptions.map((option) => <option key={option} className="bg-neutral-900">{option}</option>)}
          </select>
        </label>
        <label>
          <span className={label}>{copy.date}</span>
          <input name="date" type="date" min={today} className={`${field} [color-scheme:dark]`} />
        </label>
        <label>
          <span className={label}>{copy.altDate}</span>
          <input name="altDate" type="date" min={today} className={`${field} [color-scheme:dark]`} />
        </label>
        <label className="sm:col-span-2">
          <span className={label}>{copy.message}</span>
          <textarea name="message" rows={4} placeholder={copy.messagePlaceholder} className={field} />
        </label>
        <label htmlFor={`${id}-consent`} className="flex items-start gap-3 text-sm leading-6 text-white/75 sm:col-span-2">
          <input id={`${id}-consent`} name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#d3bd8b]" />
          <span>{copy.consent} *</span>
        </label>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/50">{copy.required}</p>
        <button type="submit" className="rounded-full border border-[#d3bd8b] bg-[#d3bd8b] px-8 py-4 text-sm uppercase tracking-[0.22em] text-black transition hover:bg-transparent hover:text-[#d3bd8b]">
          {copy.submit}
        </button>
      </div>
    </form>
  );
}
