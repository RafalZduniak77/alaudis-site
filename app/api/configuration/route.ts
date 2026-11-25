// ==========================================================
// WYSYŁKA KONFIGURACJI FORTEPIANU
// ==========================================================
// „Wyślij konfigurację” w konfiguratorze wysyła wybór klienta tutaj,
// a serwer wysyła e-mail przez skrzynkę ALAUDIS (lib/siteMail.ts).
//   CONFIG_EMAIL_TO – opcjonalnie inny adres odbiorcy
// Bez danych skrzynki odpowiadamy 503, a konfigurator otwiera gotową
// wiadomość w programie pocztowym klienta.
// ==========================================================

import { CONFIG_EMAIL_TO } from "@/components/konfigurator/contact";
import { EMAIL, fromOurSite, mailConfigured, oneLine, readBody, reply, sendSiteMail, text, tooMany } from "@/lib/siteMail";

export const dynamic = "force-dynamic";

const MODELS = ["ALAUDIS ONE 178", "ALAUDIS LEO 214", "ALAUDIS DREAM 275"];

export async function POST(request: Request) {
  if (!fromOurSite(request)) return reply(403, { error: "forbidden" });
  const body = await readBody(request);
  if (!body) return reply(400, { error: "invalid" });

  // Pole-pułapka: człowiek go nie widzi, automat je wypełnia.
  if (text(body.website, 200)) return reply(200, { ok: true });

  const name = oneLine(text(body.name, 120));
  const email = oneLine(text(body.email, 200));
  const phone = oneLine(text(body.phone, 40));
  const title = oneLine(text(body.title, 200));
  const model = oneLine(text(body.model, 40));
  const summary = text(body.summary, 4000);
  const message = text(body.message, 2000);
  const siteLanguage = oneLine(text(body.language, 5));

  if (!name || !EMAIL.test(email) || body.consent !== true || !MODELS.includes(model) || !summary) {
    return reply(400, { error: "invalid" });
  }

  if (!mailConfigured()) return reply(503, { error: "not-configured" });
  if (tooMany("configuration", request)) return reply(429, { error: "too-many" });

  const lines = [
    `Imię i nazwisko: ${name}`,
    `E-mail: ${email}`,
    phone && `Telefon: ${phone}`,
    title && `Tytuł oferty: ${title}`,
    siteLanguage && `Wersja językowa strony: ${siteLanguage}`,
    "Zgoda na kontakt: tak",
    message && `\nWiadomość:\n${message}`,
    `\n----------------------------------------\n${summary}`,
  ].filter(Boolean);

  try {
    await sendSiteMail({
      fromName: "ALAUDIS — konfigurator",
      to: process.env.CONFIG_EMAIL_TO || CONFIG_EMAIL_TO,
      replyTo: { name, address: email },
      subject: `Konfiguracja ${model} — ${name}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("configuration mail failed", error instanceof Error ? error.message : error);
    return reply(502, { error: "send-failed" });
  }

  return reply(200, { ok: true });
}
