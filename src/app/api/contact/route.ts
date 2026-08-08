import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/contact-schema";

export const runtime = "nodejs";

const AGENCY_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@gwentdigital.co.uk";
// Resend requires a verified sending domain for anything but the resend.dev test address.
// Set CONTACT_FROM_EMAIL once gwentdigital.co.uk is verified in Resend.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Gwent Digital <onboarding@resend.dev>";

/*
  In-memory limiter: fine for a single low-traffic serverless instance, but it resets on
  cold start and doesn't share state across instances. Swap for a persistent store (e.g.
  Vercel KV / Upstash) if enquiry volume or abuse ever makes that gap matter.
*/
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function labelFor(options: readonly { value: string; label: string }[], value?: string) {
  return options.find((o) => o.value === value)?.label ?? value ?? "Not specified";
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — pretend success so the bot doesn't learn anything, but send nothing.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { error: "Sorry, something went wrong on our end. Please email hello@gwentdigital.co.uk directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const serviceLabel = labelFor(SERVICE_OPTIONS, data.service);
  const budgetLabel = data.budget ? labelFor(BUDGET_OPTIONS, data.budget) : "Not specified";

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: AGENCY_EMAIL,
      replyTo: data.email,
      subject: `New enquiry: ${data.name}${data.business ? ` (${data.business})` : ""}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Business: ${data.business || "—"}`,
        `Phone: ${data.phone || "—"}`,
        `Service: ${serviceLabel}`,
        `Budget: ${budgetLabel}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "We've got your message — Gwent Digital",
      text: [
        `Hi ${data.name},`,
        "",
        "Thanks for getting in touch. We've received your message and will reply within one working day.",
        "",
        "— Gwent Digital",
        "hello@gwentdigital.co.uk",
      ].join("\n"),
    });
  } catch (err) {
    console.error("Failed to send contact form email:", err);
    return NextResponse.json(
      { error: "Sorry, something went wrong sending your message. Please email hello@gwentdigital.co.uk directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
