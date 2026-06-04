// Server-only helper. Adds a subscriber to whichever managed email list is
// configured via the NEWSLETTER_PROVIDER env var. No SDK dependency; uses fetch.
//
// Default provider: convertkit (Kit). Switch by setting NEWSLETTER_PROVIDER to
// "mailchimp" or "mailerlite" and supplying that provider's keys. See .env.example.

type SubscribeResult = { ok: boolean; skipped?: boolean; error?: string };

const PROVIDER = (process.env.NEWSLETTER_PROVIDER || "convertkit").toLowerCase();

async function convertkit(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;
  if (!apiKey || !formId) return { ok: false, skipped: true, error: "ConvertKit not configured" };

  const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: apiKey, email }),
  });
  if (!res.ok) return { ok: false, error: `ConvertKit ${res.status}` };
  return { ok: true };
}

async function mailchimp(email: string): Promise<SubscribeResult> {
  // MAILCHIMP_API_KEY ends in a datacenter suffix, e.g. "...-us21".
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  if (!apiKey || !listId) return { ok: false, skipped: true, error: "Mailchimp not configured" };

  const dc = apiKey.split("-")[1];
  if (!dc) return { ok: false, error: "Mailchimp API key missing datacenter suffix" };

  const res = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `apikey ${apiKey}`,
    },
    body: JSON.stringify({ email_address: email, status: "pending" }), // pending = double opt-in
  });
  if (res.ok) return { ok: true };
  // 400 with title "Member Exists" is not a real failure for our purposes.
  try {
    const body = (await res.json()) as { title?: string };
    if (body?.title === "Member Exists") return { ok: true };
  } catch {
    /* ignore */
  }
  return { ok: false, error: `Mailchimp ${res.status}` };
}

async function mailerlite(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) return { ok: false, skipped: true, error: "MailerLite not configured" };
  const groupId = process.env.MAILERLITE_GROUP_ID; // optional

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email, ...(groupId ? { groups: [groupId] } : {}) }),
  });
  if (!res.ok) return { ok: false, error: `MailerLite ${res.status}` };
  return { ok: true };
}

export async function addSubscriber(email: string): Promise<SubscribeResult> {
  try {
    switch (PROVIDER) {
      case "mailchimp":
        return await mailchimp(email);
      case "mailerlite":
        return await mailerlite(email);
      case "convertkit":
      default:
        return await convertkit(email);
    }
  } catch (err) {
    console.error("addSubscriber error:", err);
    return { ok: false, error: "Subscribe request failed" };
  }
}

type Utm = { utm_source?: string; utm_medium?: string; utm_campaign?: string };

// Optional: mirror the signup into an Airtable table. Off unless AIRTABLE_* env is set.
// UTM values are written only when present. The Airtable table needs matching columns
// ("UTM Source", "UTM Medium", "UTM Campaign") for those fields to land; without them
// Airtable rejects the extra fields and the mirror is skipped (the signup still succeeds).
export async function mirrorToAirtable(email: string, source: string, utm: Utm = {}): Promise<void> {
  const token = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE || "Subscribers";
  if (!token || !baseId) return;

  const fields: Record<string, string> = {
    Email: email,
    Source: source,
    "Signed Up": new Date().toISOString(),
  };
  if (utm.utm_source) fields["UTM Source"] = utm.utm_source;
  if (utm.utm_medium) fields["UTM Medium"] = utm.utm_medium;
  if (utm.utm_campaign) fields["UTM Campaign"] = utm.utm_campaign;

  try {
    await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields }],
        typecast: true,
      }),
    });
  } catch (err) {
    console.error("Airtable mirror error:", err);
  }
}
