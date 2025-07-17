// write a simple API route that sends an email with contact form data
import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { userName, userEmail, userMessage } = await req.json();

    if (!userName || !userEmail || !userMessage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Mayur Karmakar <me@mayurkarmakar.in>",
      to: ["mayurkcraft@gmail.com"],
      subject: `New contact request from ${userName}`,
      html: `<p>${userName}</p><br/><div>${userMessage}</div><br/><p>Sent from: ${userEmail}</p>`,
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
