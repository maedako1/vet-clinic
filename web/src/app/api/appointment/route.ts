import { NextResponse } from "next/server";
import { Resend } from "resend";

type AppointmentPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  const toEmail = process.env.APPOINTMENT_TO_EMAIL || "koota.maeda@gmail.com";

  if (!key) {
    return NextResponse.json(
      { error: "Server email is not configured." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const payload = body as Partial<AppointmentPayload>;
  if (
    !isNonEmptyString(payload.name) ||
    !isNonEmptyString(payload.phone) ||
    !isNonEmptyString(payload.email) ||
    !isNonEmptyString(payload.message)
  ) {
    return NextResponse.json(
      { error: "Please fill in all fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const resend = new Resend(key);

  const subject = `Programare nouă: ${payload.name}`;
  const html = `
    <div style="font-family: ui-sans-serif, system-ui; line-height:1.5">
      <h2 style="margin:0 0 12px">Solicitare programare</h2>
      <p style="margin:0 0 6px"><b>Nume:</b> ${escapeHtml(payload.name)}</p>
      <p style="margin:0 0 6px"><b>Telefon:</b> ${escapeHtml(payload.phone)}</p>
      <p style="margin:0 0 6px"><b>Email:</b> ${escapeHtml(payload.email)}</p>
      <p style="margin:12px 0 6px"><b>Mesaj:</b></p>
      <pre style="white-space:pre-wrap;margin:0;padding:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px">${escapeHtml(
        payload.message,
      )}</pre>
    </div>
  `;

  const result = await resend.emails.send({
    from: "FamilyVet Clinic <onboarding@resend.dev>",
    to: [toEmail],
    replyTo: payload.email,
    subject,
    html,
  });

  if (result.error) {
    return NextResponse.json(
      { error: result.error.message || "Email send failed." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

