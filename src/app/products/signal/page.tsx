import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SIGNAL — Cloud Analytics Platform",
  description:
    "Real-time fleet health dashboards with AI-powered analytics. Visualize every CAN signal, ask questions in plain English, and catch failures before they happen.",
};

export default function SignalPage() {
  const features = [
    {
      title: "Real-Time Signal Visualization",
      description:
        "Watch live data streams from every vehicle in your fleet. Battery SOC, cell voltages, motor temps, and hundreds of other signals — updating in real time.",
    },
    {
      title: "Historical Time-Series Analysis",
      description:
        "Overlay multiple signals on a single timeline. Compare today's battery performance against last month. Spot trends that predict failures weeks before they happen.",
    },
    {
      title: "Multi-Signal Overlay",
      description:
        "Plot motor temperature alongside battery discharge rate alongside ambient temperature — on the same chart. Correlate signals across systems to find root causes faster.",
    },
    {
      title: "AI-Powered Fleet Assistant",
      description:
        "Ask questions in plain English. \"Which vehicle had the hottest battery last week?\" \"Show me charging patterns for Bus 42.\" \"Are any vehicles trending toward thermal limits?\" Get answers instantly.",
    },
    {
      title: "Fleet Vehicle Selector",
      description:
        "Browse your entire fleet in one view. Filter by vehicle, route, OEM, or health status. Drill into any vehicle to see its full signal history and current state.",
    },
    {
      title: "Message & Signal Browser",
      description:
        "Explore every CAN message and decoded signal available for each vehicle. Search by signal name, message ID, or description. Full transparency into what the platform sees.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-24 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Products
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                SIGNAL
              </h1>
              <p className="text-cyan text-lg font-medium mb-6">
                Cloud Analytics Platform
              </p>
              <p className="text-lg text-gray-400 mb-8">
                The complete cloud telemetry dashboard for fleet health intelligence.
                Real-time visualization, historical analytics, and an AI assistant
                that turns raw vehicle data into plain-English answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-electric hover:bg-electric-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  See a Live Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Book a Walkthrough
                </Link>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="rounded-2xl border border-white/10 bg-navy-900 overflow-hidden">
              <div className="h-8 bg-navy-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="text-xs text-gray-600 ml-2">signal.veynqor.com</span>
              </div>
              <div className="p-6 space-y-4">
                {/* Mini chart mockup */}
                <div className="flex gap-4">
                  <div className="flex-1 rounded-lg bg-navy-800 p-4">
                    <div className="text-xs text-gray-500 mb-2">Battery SOC</div>
                    <div className="text-2xl font-bold text-white">87%</div>
                    <div className="mt-2 h-1 rounded bg-white/5">
                      <div className="h-full w-[87%] rounded bg-electric" />
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg bg-navy-800 p-4">
                    <div className="text-xs text-gray-500 mb-2">Motor Temp</div>
                    <div className="text-2xl font-bold text-white">62°C</div>
                    <div className="mt-2 h-1 rounded bg-white/5">
                      <div className="h-full w-[62%] rounded bg-cyan" />
                    </div>
                  </div>
                </div>
                {/* Signal chart placeholder */}
                <div className="rounded-lg bg-navy-800 p-4 h-32 flex items-end gap-[2px]">
                  {[40, 42, 38, 45, 50, 48, 52, 55, 53, 58, 60, 57, 62, 65, 63, 60, 58, 62, 65, 68, 70, 67, 72, 75, 73, 70, 68, 65, 70, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-electric/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                {/* AI chat mockup */}
                <div className="rounded-lg bg-navy-800 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded bg-electric/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500">AI Assistant</span>
                  </div>
                  <p className="text-xs text-gray-400 italic">
                    &quot;Bus 42&apos;s battery module 3 is showing 8% faster degradation than fleet average. Recommend inspection within 2 weeks.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            Everything you need to monitor fleet health
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/5 bg-surface p-6"
              >
                <h3 className="text-white font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Spotlight */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Stop downloading CSVs.
                <br />
                <span className="text-cyan">Start asking questions.</span>
              </h2>
              <p className="text-gray-400 mb-8">
                SIGNAL&apos;s AI assistant understands your fleet data and answers questions
                in plain English. No query language to learn, no dashboards to configure.
                Just ask.
              </p>
              <div className="space-y-4">
                {[
                  "Which vehicle had the hottest battery last week?",
                  "Show me charging patterns for Bus 42",
                  "Are any vehicles trending toward thermal limits?",
                  "Compare battery degradation across the fleet",
                ].map((question) => (
                  <div
                    key={question}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-surface px-4 py-3"
                  >
                    <svg className="w-4 h-4 text-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span className="text-sm text-gray-400">{question}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-surface p-8">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-electric/10 rounded-xl rounded-tr-none px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-gray-300">
                      Which vehicle had the hottest battery last week?
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-navy-800 rounded-xl rounded-tl-none px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-gray-400">
                      <span className="text-cyan font-medium">Vehicle EV-2847</span> recorded
                      the highest peak battery temperature last week at{" "}
                      <span className="text-white">47.3°C</span> on March 12 during a fast
                      charging session at Depot B. This is{" "}
                      <span className="text-yellow-400">6.2°C above fleet average</span>.
                      The elevated temperature correlated with a 120kW DC fast charge
                      starting at 72% SOC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform details */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-white/5 bg-surface p-6">
              <h3 className="text-white font-semibold mb-3">Web-Based</h3>
              <p className="text-sm text-gray-400">
                Access SIGNAL from any modern browser. No software to install, no
                plugins, no desktop clients. Works on desktop, tablet, and mobile.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-surface p-6">
              <h3 className="text-white font-semibold mb-3">Scalable Storage</h3>
              <p className="text-sm text-gray-400">
                Cloud-optimized storage architecture designed for cost-efficient
                querying at scale. Years of historical data, queryable in seconds.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-surface p-6">
              <h3 className="text-white font-semibold mb-3">Secure by Default</h3>
              <p className="text-sm text-gray-400">
                End-to-end encryption, role-based access control, and audit logging.
                Your fleet data is your competitive advantage — we treat it that way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See your fleet&apos;s vital signs
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Book a live demo and we&apos;ll walk you through SIGNAL with real fleet data.
            See exactly what your operators would see on day one.
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
