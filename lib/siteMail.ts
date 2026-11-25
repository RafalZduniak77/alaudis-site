import "server-only";
import nodemailer from "nodemailer";

// ==========================================================
// WYSYŁKA WIADOMOŚCI ZE STRONY (formularze)
// ==========================================================
// Wspólne dla formularza zwiedzania i wysyłki konfiguracji.
// Dane skrzynki są tylko w ustawieniach Vercel:
//   SMTP_USER  – adres skrzynki, z której wychodzi wiadomość
//   SMTP_PASS  – hasło do tej skrzynki
//   SMTP_HOST  – opcjonalnie (domyślnie serwer OVH)
//   SMTP_PORT  – opcjonalnie (domyślnie 465)
// ==========================================================

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ");

export function reply(status: number, body: Record<string, unknown>) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

// Prosta ochrona przed zalewaniem skrzynki z jednego adresu (osobny licznik dla każdego formularza).
const recent = new Map<string, number[]>();
export function tooMany(form: string, request: Request) {
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const key = `${form}:${ip}`;
  const now = Date.now();
  const hits = (recent.get(key) || []).filter((time) => now - time < 10 * 60 * 1000);
  hits.push(now);
  // Lista adresów nie rośnie bez końca: przy większej liczbie usuwamy wpisy starsze niż 10 minut.
  if (recent.size > 5000) {
    for (const [entry, times] of recent) if (times.every((time) => now - time >= 10 * 60 * 1000)) recent.delete(entry);
  }
  recent.set(key, hits);
  return hits.length > 5;
}

// Zgłoszenie musi przyjść z formularza na naszej stronie (JSON), nie z obcej witryny.
export function fromOurSite(request: Request) {
  if (!(request.headers.get("content-type") || "").includes("application/json")) return false;
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

// Treść formularza jako obiekt albo null, gdy to nie jest poprawny JSON.
export async function readBody(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const parsed: unknown = await request.json();
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export const mailConfigured = () => Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);

// Wysyła zwykłą wiadomość tekstową ze skrzynki ALAUDIS. Odpowiedź trafia do klienta (replyTo).
export async function sendSiteMail(message: {
  fromName: string; to: string; cc?: string; replyTo: { name: string; address: string }; subject: string; text: string;
}) {
  const user = process.env.SMTP_USER as string;
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port,
    secure: port === 465,
    auth: { user, pass: process.env.SMTP_PASS as string },
    connectionTimeout: 10000,
    socketTimeout: 15000,
  });
  await transport.sendMail({
    from: { name: message.fromName, address: user },
    to: message.to,
    cc: message.cc,
    replyTo: message.replyTo,
    subject: message.subject,
    text: message.text,
  });
}
