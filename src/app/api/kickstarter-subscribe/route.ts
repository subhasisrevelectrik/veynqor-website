import { NextRequest, NextResponse } from "next/server";
import { addSubscriber, mirrorToAirtable } from "@/lib/subscribe";

interface SubscribeBody {
  email: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubscribeBody = await request.json();

    // Validate email
    if (!body.email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const email = body.email.trim().toLowerCase();
    const utm = {
      utm_source: body.utm_source || undefined,
      utm_medium: body.utm_medium || undefined,
      utm_campaign: body.utm_campaign || undefined,
    };
    const source = body.utm_source || "kickstarter";

    // Persist to the configured newsletter provider (ConvertKit / Mailchimp / MailerLite).
    const result = await addSubscriber(email);
    if (result.skipped) {
      console.warn(
        "Newsletter provider not configured; signup not persisted. Set NEWSLETTER_PROVIDER and the provider keys in .env.local. Email:",
        email
      );
    } else if (!result.ok) {
      console.error("addSubscriber failed:", result.error, "email:", email);
    }

    // Optional: mirror into Airtable (includes UTM fields when present).
    await mirrorToAirtable(email, source, utm);

    // Optional: Slack ping if a webhook is configured.
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New Kickstarter pre-launch subscriber!\n*Email:* ${email}\n*UTM Source:* ${body.utm_source || "direct"}\n*UTM Medium:* ${body.utm_medium || "none"}\n*UTM Campaign:* ${body.utm_campaign || "none"}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kickstarter subscribe error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
