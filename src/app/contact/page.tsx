"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    fleetSize: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", fleetSize: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="pt-16 pb-24 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 pt-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Book a Fleet Assessment
              </h1>
              <p className="text-lg text-gray-400 mb-10">
                Tell us about your fleet and we&apos;ll show you what Veynqor can see
                inside your vehicles. Most pilots deploy within two weeks.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Fast Pilot Deployment</h3>
                    <p className="text-sm text-gray-500">
                      Hardware ships within two weeks. Start with 5 vehicles and scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">No Long-Term Commitment</h3>
                    <p className="text-sm text-gray-500">
                      Pilot programs designed to prove value before you scale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Hands-On Support</h3>
                    <p className="text-sm text-gray-500">
                      Our team handles installation, DBC configuration, and onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-white/5 bg-surface p-8">
              {status === "sent" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-electric/10 text-electric mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message received</h3>
                  <p className="text-gray-400">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg bg-navy-800 border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg bg-navy-800 border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-gray-400 mb-1.5">
                      Company *
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-lg bg-navy-800 border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="fleetSize" className="block text-sm text-gray-400 mb-1.5">
                      Fleet Size
                    </label>
                    <select
                      id="fleetSize"
                      value={form.fleetSize}
                      onChange={(e) => setForm({ ...form, fleetSize: e.target.value })}
                      className="w-full rounded-lg bg-navy-800 border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric transition-colors"
                    >
                      <option value="">Select fleet size</option>
                      <option value="1-10">1–10 vehicles</option>
                      <option value="11-50">11–50 vehicles</option>
                      <option value="51-100">51–100 vehicles</option>
                      <option value="101-500">101–500 vehicles</option>
                      <option value="500+">500+ vehicles</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your fleet and what you're looking to solve..."
                      className="w-full rounded-lg bg-navy-800 border border-white/5 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-electric transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-electric hover:bg-electric-dark disabled:opacity-50 text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    {status === "sending" ? "Sending..." : "Book a Fleet Assessment"}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-400 text-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
