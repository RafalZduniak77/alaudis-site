// ==========================================================
// WYSYŁKA ZGŁOSZENIA NA ZWIEDZANIE MANUFAKTURY
// ==========================================================
// Formularz wysyła dane tutaj, a serwer wysyła e-mail przez skrzynkę
// ALAUDIS (SMTP). Dane logowania są tylko w ustawieniach Vercel:
//   SMTP_USER  – adres skrzynki, z której wychodzi wiadomość
//   SMTP_PASS  – hasło do tej skrzynki
//   SMTP_HOST  – opcjonalnie (domyślnie serwer OVH)
//   SMTP_PORT  – opcjonalnie (domyślnie 465)
//   TOUR_EMAIL_TO – opcjonalnie inny adres odbiorcy
// Bez tych danych odpowiadamy 503, a formularz wraca do starego
// sposobu (gotowa wiadomość w programie pocztowym).
// ==========================================================

import nodemailer from "nodemailer";
import { TOUR_EMAIL } from "@/components/factory-tour/copy";

export const dynamic = "force-dynamic";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

// Prosta ochrona przed zalewaniem skrzynki z jednego adresu.
const recent = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > 5;
}

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ");

function reply(status: number, body: Record<string, unknown>) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return reply(400, { error: "invalid" });
  }

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

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return reply(503, { error: "not-configured" });

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (tooMany(ip)) return reply(429, { error: "too-many" });

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

  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    await transport.sendMail({
      from: { name: "ALAUDIS — formularz zwiedzania", address: user },
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
