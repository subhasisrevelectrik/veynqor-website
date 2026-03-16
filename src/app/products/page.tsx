import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "V-DRIVE edge telemetry hardware and SIGNAL cloud analytics -the complete fleet intelligence stack from Veynqor.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-24 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The full stack for
              <br />
              <span className="text-electric">fleet intelligence</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              From the CAN bus connector in the vehicle to the AI-powered dashboard
              on your screen -two products that work together to give you
              signal-level visibility into every vehicle in your fleet.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* V-DRIVE */}
          <div className="rounded-2xl border border-white/5 bg-surface overflow-hidden">
            <div className="aspect-[16/9] bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl border-2 border-electric/30 bg-electric/5 flex items-center justify-center">
                <svg className="w-12 h-12 text-electric" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="6" y="12" width="36" height="24" rx="4" />
                  <path d="M14 20h6M28 20h6M14 26h20" />
                  <circle cx="12" cy="6" r="2" fill="currentColor" />
                  <path d="M12 8v4" />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-1">V-DRIVE</h2>
              <p className="text-electric text-sm font-medium mb-4">Edge Telemetry Device</p>
              <p className="text-gray-400 mb-6">
                A compact, automotive-grade CAN bus telemetry device that installs in minutes
                and starts streaming deep vehicle health data immediately. 4G cellular,
                GPS, edge processing, and offline buffering built in.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "4G LTE real-time data upload",
                  "Built-in GPS location tracking",
                  "DBC-based CAN signal decoding at the edge",
                  "Offline buffering with automatic resume",
                  "OBD-II or direct 12V harness power",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-electric mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/products/v-drive"
                className="inline-flex items-center text-sm text-electric font-medium hover:gap-2 gap-1 transition-all"
              >
                View full specs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* SIGNAL */}
          <div className="rounded-2xl border border-white/5 bg-surface overflow-hidden">
            <div className="aspect-[16/9] bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl border-2 border-cyan/30 bg-cyan/5 flex items-center justify-center">
                <svg className="w-12 h-12 text-cyan" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="4" y="6" width="40" height="30" rx="4" />
                  <path d="M4 14h40" />
                  <path d="M12 24l6-4 6 6 6-8 6 5" />
                  <circle cx="24" cy="42" r="2" fill="currentColor" />
                  <path d="M18 36v3a3 3 0 003 3h6a3 3 0 003-3v-3" />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-1">SIGNAL</h2>
              <p className="text-cyan text-sm font-medium mb-4">Cloud Analytics Platform</p>
              <p className="text-gray-400 mb-6">
                A complete cloud telemetry dashboard with real-time signal visualization,
                historical analytics, and an AI-powered assistant that lets you query
                your fleet data in plain English.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time and historical signal visualization",
                  "Multi-signal overlay and time-series analysis",
                  "AI chatbot for natural language fleet queries",
                  "Fleet-wide vehicle selector and signal browser",
                  "Mobile-responsive web dashboard",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-cyan mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/products/signal"
                className="inline-flex items-center text-sm text-cyan font-medium hover:gap-2 gap-1 transition-all"
              >
                View full features
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Better Together */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Better together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              V-DRIVE captures deep vehicle data at the edge. SIGNAL turns that data
              into actionable intelligence in the cloud. Together, they form the only
              end-to-end platform purpose-built for commercial EV fleet health.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Step 1 */}
            <div className="flex-1 max-w-xs text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-electric/10 text-electric mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-white font-semibold mb-2">Install</h3>
              <p className="text-sm text-gray-500">
                Plug V-DRIVE into the vehicle&apos;s CAN bus via OBD-II or direct harness.
                Five-minute install, no tools required.
              </p>
            </div>

            <div className="hidden md:block w-12 h-px bg-white/10" />

            {/* Step 2 */}
            <div className="flex-1 max-w-xs text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-electric/10 text-electric mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-white font-semibold mb-2">Connect</h3>
              <p className="text-sm text-gray-500">
                V-DRIVE decodes CAN signals at the edge and uploads data over 4G to
                the SIGNAL cloud in near real-time.
              </p>
            </div>

            <div className="hidden md:block w-12 h-px bg-white/10" />

            {/* Step 3 */}
            <div className="flex-1 max-w-xs text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-electric/10 text-electric mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-white font-semibold mb-2">Monitor</h3>
              <p className="text-sm text-gray-500">
                Open SIGNAL, see every vehicle&apos;s vital signs, and let AI surface
                anomalies before they become breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See the platform in action
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Book a walkthrough and we&apos;ll show you exactly what Veynqor sees inside
            a live commercial EV fleet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-electric hover:bg-electric-dark text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Book a Walkthrough
          </Link>
        </div>
      </section>
    </>
  );
}
