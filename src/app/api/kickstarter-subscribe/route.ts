import { NextRequest, NextResponse } from "next/server";

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
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: integrate Mailchimp/ConvertKit
    // Store the subscriber email + UTM params in whichever
    // email platform Subhasis picks.

    console.log("Kickstarter subscriber:", {
      email: body.email,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      subscribed_at: new Date().toISOString(),
    });

    // Send Slack notification if webhook is configured
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhookUrl) {
      await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New Kickstarter pre-launch subscriber!\n*Email:* ${body.email}\n*UTM Source:* ${body.utm_source || "direct"}\n*UTM Medium:* ${body.utm_medium || "none"}\n*UTM Campaign:* ${body.utm_campaign || "none"}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kickstarter subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
