export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 10_000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readText(
  value: unknown,
  maximumLength: number,
  required = false,
): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (text.length > maximumLength || (required && text.length === 0)) {
    return null;
  }
  return text;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return Response.json({ error: "Enquiry is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return Response.json({ error: "Invalid enquiry details." }, { status: 400 });
  }

  const name = readText(payload.name, 120, true);
  const email = readText(payload.email, 320, true);
  const phone = readText(payload.phone, 80);
  const need = readText(payload.need, 120, true);
  const message = readText(payload.message, 5_000, true);

  if (
    !name ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    phone === null ||
    !need ||
    !message
  ) {
    return Response.json(
      { error: "Please provide valid enquiry details and try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.QUOTE_NOTIFICATION_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("Quote email is not configured.");
    return Response.json(
      { error: "Enquiry email is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const emailText = [
    "New quote enquiry from the website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone or WhatsApp: ${phone || "Not provided"}`,
    `Project type: ${need}`,
    "",
    "About the business and launch timing:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New quote enquiry from ${name}`,
        text: emailText,
      }),
    });

    if (!response.ok) {
      console.error(`Resend rejected quote email with status ${response.status}.`);
      return Response.json(
        { error: "Unable to send your enquiry right now. Please try again later." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send quote email.", error);
    return Response.json(
      { error: "Unable to send your enquiry right now. Please try again later." },
      { status: 502 },
    );
  }
}
