"use client";

// ==========================================================
// WYSYŁKA KONFIGURACJI — OKNO Z DANYMI KONTAKTOWYMI
// ==========================================================
// Klient podaje imię i e-mail, a strona sama wysyła konfigurację
// (serwer: app/api/configuration). Gdy wysyłka ze strony nie jest
// dostępna, otwieramy gotową wiadomość w programie pocztowym.
// ==========================================================

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { CONFIG_EMAIL_TO } from "./contact";

type LanguageKey = "PL" | "EN" | "DE" | "FR" | "ES" | "IT";

const COPY: Record<LanguageKey, {
  title: string; intro: string; name: string; email: string; phone: string; message: string;
  consent: string; privacy: string; send: string; sending: string; cancel: string; close: string;
  doneTitle: string; doneText: string; mailTitle: string; mailText: string; error: string;
}> = {
  PL: {
    title: "Wyślij konfigurację", intro: "Podaj dane kontaktowe. Wyślemy Twoją konfigurację do ALAUDIS i odezwiemy się z ofertą.",
    name: "Imię i nazwisko", email: "E-mail", phone: "Telefon", message: "Wiadomość (opcjonalnie)",
    consent: "Wyrażam zgodę na kontakt ze strony ALAUDIS / SAP Renovation w sprawie mojej konfiguracji.", privacy: "Polityka prywatności",
    send: "Wyślij", sending: "Wysyłanie…", cancel: "Anuluj", close: "Zamknij",
    doneTitle: "Konfiguracja wysłana", doneText: "Dziękujemy. Odezwiemy się na podany adres e-mail.",
    mailTitle: "Dokończ w programie pocztowym", mailText: "Otworzyliśmy gotową wiadomość z Twoją konfiguracją. Wyślij ją, aby do nas dotarła.",
    error: "Nie udało się wysłać konfiguracji. Spróbuj ponownie za chwilę albo napisz na adres",
  },
  EN: {
    title: "Send configuration", intro: "Leave your contact details. We will send your configuration to ALAUDIS and get back to you with an offer.",
    name: "Full name", email: "E-mail", phone: "Phone", message: "Message (optional)",
    consent: "I agree to be contacted by ALAUDIS / SAP Renovation regarding my configuration.", privacy: "Privacy policy",
    send: "Send", sending: "Sending…", cancel: "Cancel", close: "Close",
    doneTitle: "Configuration sent", doneText: "Thank you. We will reply to the e-mail address you provided.",
    mailTitle: "Finish in your e-mail app", mailText: "We have opened a ready message with your configuration. Send it so that it reaches us.",
    error: "The configuration could not be sent. Please try again in a moment or write to",
  },
  DE: {
    title: "Konfiguration senden", intro: "Geben Sie Ihre Kontaktdaten an. Wir senden Ihre Konfiguration an ALAUDIS und melden uns mit einem Angebot.",
    name: "Vor- und Nachname", email: "E-Mail", phone: "Telefon", message: "Nachricht (optional)",
    consent: "Ich bin damit einverstanden, dass ALAUDIS / SAP Renovation mich zu meiner Konfiguration kontaktiert.", privacy: "Datenschutz",
    send: "Senden", sending: "Wird gesendet…", cancel: "Abbrechen", close: "Schließen",
    doneTitle: "Konfiguration gesendet", doneText: "Vielen Dank. Wir antworten an die angegebene E-Mail-Adresse.",
    mailTitle: "Im E-Mail-Programm abschließen", mailText: "Wir haben eine fertige Nachricht mit Ihrer Konfiguration geöffnet. Senden Sie sie ab, damit sie uns erreicht.",
    error: "Die Konfiguration konnte nicht gesendet werden. Bitte versuchen Sie es gleich noch einmal oder schreiben Sie an",
  },
  FR: {
    title: "Envoyer la configuration", intro: "Indiquez vos coordonnées. Nous transmettrons votre configuration à ALAUDIS et reviendrons vers vous avec une offre.",
    name: "Nom et prénom", email: "E-mail", phone: "Téléphone", message: "Message (facultatif)",
    consent: "J’accepte d’être contacté par ALAUDIS / SAP Renovation au sujet de ma configuration.", privacy: "Politique de confidentialité",
    send: "Envoyer", sending: "Envoi en cours…", cancel: "Annuler", close: "Fermer",
    doneTitle: "Configuration envoyée", doneText: "Merci. Nous vous répondrons à l’adresse e-mail indiquée.",
    mailTitle: "Terminez dans votre messagerie", mailText: "Nous avons ouvert un message prêt avec votre configuration. Envoyez-le pour qu’il nous parvienne.",
    error: "La configuration n’a pas pu être envoyée. Veuillez réessayer dans un instant ou écrire à",
  },
  ES: {
    title: "Enviar la configuración", intro: "Indique sus datos de contacto. Enviaremos su configuración a ALAUDIS y le responderemos con una oferta.",
    name: "Nombre y apellidos", email: "Correo electrónico", phone: "Teléfono", message: "Mensaje (opcional)",
    consent: "Acepto que ALAUDIS / SAP Renovation se ponga en contacto conmigo en relación con mi configuración.", privacy: "Política de privacidad",
    send: "Enviar", sending: "Enviando…", cancel: "Cancelar", close: "Cerrar",
    doneTitle: "Configuración enviada", doneText: "Gracias. Le responderemos a la dirección de correo indicada.",
    mailTitle: "Termine en su programa de correo", mailText: "Hemos abierto un mensaje preparado con su configuración. Envíelo para que nos llegue.",
    error: "No se ha podido enviar la configuración. Inténtelo de nuevo en unos instantes o escriba a",
  },
  IT: {
    title: "Invia la configurazione", intro: "Lascia i tuoi recapiti. Invieremo la tua configurazione ad ALAUDIS e ti risponderemo con un’offerta.",
    name: "Nome e cognome", email: "E-mail", phone: "Telefono", message: "Messaggio (facoltativo)",
    consent: "Acconsento a essere contattato da ALAUDIS / SAP Renovation in merito alla mia configurazione.", privacy: "Informativa sulla privacy",
    send: "Invia", sending: "Invio in corso…", cancel: "Annulla", close: "Chiudi",
    doneTitle: "Configurazione inviata", doneText: "Grazie. Ti risponderemo all’indirizzo e-mail indicato.",
    mailTitle: "Completa nel programma di posta", mailText: "Abbiamo aperto un messaggio pronto con la tua configurazione. Invialo perché ci arrivi.",
    error: "Non è stato possibile inviare la configurazione. Riprova tra poco oppure scrivi a",
  },
};

const field =
  "mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-base text-white placeholder:text-white/35 focus:border-[#d3bd8b] focus:outline-none sm:text-sm";
const label = "text-[10px] uppercase tracking-[0.22em] text-white/80";

type Props = {
  language: LanguageKey;
  /** Nazwa modelu, np. „ALAUDIS LEO 214”. */
  model: string;
  /** Tytuł oferty wpisany przez klienta (może być pusty). */
  title: string;
  /** Konfiguracja po polsku — dla pracowni. */
  summary: string;
  /** Temat i treść w języku klienta — dla awaryjnej wiadomości w programie pocztowym. */
  mailSubject: string;
  mailBody: string;
  onClose: () => void;
};

export default function SendDialog({ language, model, title, summary, mailSubject, mailBody, onClose }: Props) {
  const copy = COPY[language];
  const id = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "mailto" | "error">("idle");
  const firstField = useRef<HTMLInputElement>(null);
  const prefix = language === "PL" ? "" : `/${language.toLowerCase()}`;

  // Escape zamyka okno; po otwarciu kursor trafia do pierwszego pola.
  useEffect(() => {
    firstField.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) || "").trim();

    setStatus("sending");
    let code = 0;
    try {
      const response = await fetch("/api/configuration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: value("name"), email: value("email"), phone: value("phone"), message: value("message"),
          website: value("website"), consent: data.get("consent") === "on",
          title, model, summary, language: language.toLowerCase(),
        }),
      });
      code = response.status;
    } catch {
      code = 0;
    }
    if (code === 200) return setStatus("done");
    // Wysyłka ze strony jest włączona, ale się nie powiodła: pokaż błąd.
    if (code !== 0 && code !== 503 && code !== 404) return setStatus("error");

    // Brak wysyłki ze strony: gotowa wiadomość w programie pocztowym.
    const contact = [`${copy.name}: ${value("name")}`, `${copy.email}: ${value("email")}`, value("phone") && `${copy.phone}: ${value("phone")}`, value("message") && `\n${value("message")}`].filter(Boolean).join("\n");
    window.location.href = `mailto:${CONFIG_EMAIL_TO}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(`${contact}\n${mailBody}`)}`;
    setStatus("mailto");
  }

  const finished = status === "done" || status === "mailto";

  return (
    <div className="fixed inset-0 z-[120] flex items-end justify-center bg-black/75 p-3 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[92dvh] w-full max-w-[520px] overflow-y-auto rounded-[26px] border border-white/15 bg-[#101010] p-6 text-white shadow-2xl sm:p-8"
      >
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#d3bd8b]">{model}</p>
        <h2 id={`${id}-title`} className="mt-3 text-2xl font-light">
          {status === "done" ? copy.doneTitle : status === "mailto" ? copy.mailTitle : copy.title}
        </h2>

        {finished ? (
          <div role="status">
            <p className="mt-4 text-sm leading-7 text-white/90">{status === "done" ? copy.doneText : copy.mailText}</p>
            <button type="button" onClick={onClose} className="mt-7 h-[42px] w-full rounded-full border border-white/35 text-[11px] uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black">
              {copy.close}
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="mt-3 text-sm leading-6 text-white/80">{copy.intro}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className={label}>{copy.name} *</span>
                <input ref={firstField} name="name" required maxLength={120} autoComplete="name" className={field} />
              </label>
              <label>
                <span className={label}>{copy.email} *</span>
                <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
              </label>
              <label>
                <span className={label}>{copy.phone}</span>
                <input name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} />
              </label>
              <label className="sm:col-span-2">
                <span className={label}>{copy.message}</span>
                <textarea name="message" rows={3} maxLength={2000} className={field} />
              </label>
              <label htmlFor={`${id}-consent`} className="flex items-start gap-3 text-[13px] leading-6 text-white/88 sm:col-span-2">
                <input id={`${id}-consent`} name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#d3bd8b]" />
                <span>
                  {copy.consent} *{" "}
                  <Link href={`${prefix}/polityka-prywatnosci`} target="_blank" className="text-[#d3bd8b] underline-offset-4 hover:underline">{copy.privacy}</Link>
                </span>
              </label>
              {/* Pole-pułapka na automaty: niewidoczne dla ludzi. */}
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />
            </div>

            {status === "error" && (
              <p role="alert" className="mt-4 text-sm leading-6 text-[#ffb4a8]">
                {copy.error} <a href={`mailto:${CONFIG_EMAIL_TO}`} className="underline underline-offset-4">{CONFIG_EMAIL_TO}</a>.
              </p>
            )}

            <div className="mt-6 flex gap-3">
              <button type="button" onClick={onClose} className="h-[42px] flex-1 rounded-full border border-white/25 text-[11px] uppercase tracking-[0.2em] transition hover:border-white">
                {copy.cancel}
              </button>
              <button type="submit" disabled={status === "sending"} className="h-[42px] flex-1 rounded-full bg-red-600 text-[11px] uppercase tracking-[0.2em] transition hover:bg-red-500 disabled:cursor-wait disabled:opacity-60">
                {status === "sending" ? copy.sending : copy.send}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
