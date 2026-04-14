"use client";

import { useState, FormEvent } from "react";

interface EmailCaptureFormProps {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  source?: string;
}

export default function EmailCaptureForm({
  utmSource = "",
  utmMedium = "",
  utmCampaign = "",
  source = "",
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/kickstarter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          utm_source: utmSource || source,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-electric/20 bg-electric/5 p-6 text-center">
        <svg className="w-8 h-8 text-electric mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-white font-medium mb-1">Got it.</p>
        <p className="text-gray-400 text-sm">
          We&apos;ll email you when the Kickstarter goes live — plus early-bird pricing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
      <input type="hidden" name="utm_source" value={utmSource || source} />
      <input type="hidden" name="utm_medium" value={utmMedium} />
      <input type="hidden" name="utm_campaign" value={utmCampaign} />
      <div className="flex-1">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/50 transition-colors"
        />
        {errorMsg && (
          <p className="text-red-400 text-xs mt-1">{errorMsg}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-electric hover:bg-electric-dark text-white font-medium px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "sending" ? "Submitting..." : "Notify Me at Launch"}
      </button>
    </form>
  );
}
