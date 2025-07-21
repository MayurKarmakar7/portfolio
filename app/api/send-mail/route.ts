import ContactMeEmailTemplate from "@/components/contact-me/emial-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, message } = await req.json();

    await resend.emails.send({
      from: "Mayur Karmakar <me@mayurkarmakar.in>",
      to: ["mayurkcraft@gmail.com"],
      subject: `New Contact Form Submission from ${fullName}`,
      react: ContactMeEmailTemplate({
        senderName: fullName,
        senderEmail: email,
        message: message,
      }),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
