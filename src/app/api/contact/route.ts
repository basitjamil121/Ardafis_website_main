import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; firm?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, firm, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;

  // Not configured yet: acknowledge receipt without sending, so the form
  // never breaks in local/dev or before the email service is set up.
  if (!apiKey || !toEmail) {
    console.log("[contact form] Resend not configured. Submission:", {
      name,
      email,
      firm,
      message,
    });
    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        note: "Message received. Email delivery is not configured yet.",
      },
      { status: 200 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ardafis Partners Website <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `New website inquiry from ${name}${firm ? ` (${firm})` : ""}`,
        text: `Name: ${name}\nEmail: ${email}\nFirm: ${firm ?? "—"}\n\nMessage:\n${message}`,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[contact form] Resend error:", errText);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true }, { status: 200 });
  } catch (err) {
    console.error("[contact form] Unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
