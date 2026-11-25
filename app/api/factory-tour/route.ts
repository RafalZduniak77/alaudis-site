// ==========================================================
// WYSYŁKA ZGŁOSZENIA NA ZWIEDZANIE MANUFAKTURY
// ==========================================================
// Formularz wysyła dane tutaj, a serwer wysyła e-mail przez skrzynkę
// ALAUDIS (SMTP, ustawienia: lib/siteMail.ts).
//   TOUR_EMAIL_TO – opcjonalnie inny adres odbiorcy
// Bez danych skrzynki odpowiadamy 503, a formularz wraca do starego
// sposobu (gotowa wiadomość w programie pocztowym).
// ==========================================================

import { TOUR_EMAIL } from "@/components/factory-tour/copy";
import { EMAIL, fromOurSite, mailConfigured, oneLine, readBody, reply, sendSiteMail, text, tooMany } from "@/lib/siteMail";

export const dynamic = "force-dynamic";

const DATE = /^\d{4}-\d{2}-\d{2}$/;

export async function POST(request: Request) {
  if (!fromOurSite(request)) return reply(403, { error: "forbidden" });
  const body = await readBody(request);
  if (!body) return reply(400, { error: "invalid" });

  // Pole-pułapka: człowiek go nie widzi, automat je wypełnia.
  if (text(body.website, 200)) return reply(200, { ok: true });

  const name = oneLine(text(body.name, 120));
  const email = oneLine(text(body.email, 200));
  const phone = oneLine(text(body.phone, 40));
  const people = oneLine(text(body.people, 60));
  const tourLanguage = oneLine(text(body.tourLanguage, 60));
  const date = text(body.date, 10);
  const altDate = text(body.altDate, 10);
  const message = text(body.message, 4000);
  const siteLanguage = oneLine(text(body.language, 5));

  if (
    !name || !people || !tourLanguage || !EMAIL.test(email) || body.consent !== true ||
    (date && !DATE.test(date)) || (altDate && !DATE.test(altDate))
  ) {
    return reply(400, { error: "invalid" });
  }

  if (!mailConfigured()) return reply(503, { error: "not-configured" });
  if (tooMany("tour", request)) return reply(429, { error: "too-many" });

  const lines = [
    `Imię i nazwisko: ${name}`,
    `E-mail: ${email}`,
    phone && `Telefon: ${phone}`,
    `Liczba osób: ${people}`,
    date && `Preferowany termin: ${date}`,
    altDate && `Termin alternatywny: ${altDate}`,
    `Język oprowadzania: ${tourLanguage}`,
    siteLanguage && `Wersja językowa strony: ${siteLanguage}`,
    "Zgoda na kontakt: tak",
    message && `\nWiadomość:\n${message}`,
  ].filter(Boolean);

  try {
    await sendSiteMail({
      fromName: "ALAUDIS — formularz zwiedzania",
      to: process.env.TOUR_EMAIL_TO || TOUR_EMAIL,
      replyTo: { name, address: email },
      subject: `Zgłoszenie na zwiedzanie manufaktury ALAUDIS — ${name}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("factory-tour mail failed", error instanceof Error ? error.message : error);
    return reply(502, { error: "send-failed" });
  }

  return reply(200, { ok: true });
}
