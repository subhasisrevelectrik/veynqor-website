import { NextRequest, NextResponse } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  fleetSize: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: Store in Vercel Postgres
    // import { sql } from '@vercel/postgres';
    // await sql`
    //   INSERT INTO contacts (name, email, company, fleet_size, message, created_at)
    //   VALUES (${body.name}, ${body.email}, ${body.company}, ${body.fleetSize}, ${body.message}, NOW())
    // `;

    // Send Slack webhook notification
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New Veynqor lead!\n*Name:* ${body.name}\n*Email:* ${body.email}\n*Company:* ${body.company}\n*Fleet Size:* ${body.fleetSize || "Not specified"}\n*Message:* ${body.message || "No message"}`,
        }),
      });
    }

    // TODO: Send auto-reply email via Resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Veynqor <hello@veynqor.com>',
    //   to: body.email,
    //   subject: 'Thanks for reaching out to Veynqor',
    //   html: '...',
    // });

    console.log("Contact form submission:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
