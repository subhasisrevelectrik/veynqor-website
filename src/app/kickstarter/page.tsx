import type { Metadata } from "next";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import KickstarterFAQ from "./KickstarterFAQ";

export const metadata: Metadata = {
  title: "V-DRIVE on Kickstarter — Know What Your Car Knows",
  description:
    "V-DRIVE reads your vehicle's full CAN bus — not just generic OBD-II codes — and streams decoded health, battery, and behavior data to your phone. Sign up for early-bird Kickstarter pricing.",
  openGraph: {
    title: "V-DRIVE on Kickstarter — Know What Your Car Knows",
    description:
      "V-DRIVE reads your vehicle's full CAN bus and streams decoded health, battery, and behavior data to your phone. Sign up for early-bird pricing.",
  },
};

export default async function KickstarterPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const utmSource = typeof params.utm_source === "string" ? params.utm_source : "";
  const utmMedium = typeof params.utm_medium === "string" ? params.utm_medium : "";
  const utmCampaign = typeof params.utm_campaign === "string" ? params.utm_campaign : "";

  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex items-center gradient-mesh overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/20 bg-electric/5 text-electric text-sm mb-8 opacity-0 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              Launching on Kickstarter
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up animate-delay-100">
              Know What Your
              <br />
              <span className="text-electric">Car Knows.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 opacity-0 animate-fade-in-up animate-delay-200">
              V-DRIVE reads your vehicle&apos;s full CAN bus — not just generic OBD-II
              codes — and streams decoded health, battery, and behavior data to your
              phone in real time. Built by an EV engineer, made for Turo hosts and
              fleet operators.
            </p>

            <div className="opacity-0 animate-fade-in-up animate-delay-300 mb-4">
              <EmailCaptureForm
                utmSource={utmSource}
                utmMedium={utmMedium}
                utmCampaign={utmCampaign}
              />
            </div>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-electric transition-colors opacity-0 animate-fade-in-up animate-delay-400"
            >
              See how it works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Proof Row */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3,000+</div>
              <div className="text-sm text-gray-500">CAN signals decoded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">&lt; 5s</div>
              <div className="text-sm text-gray-500">Edge-to-cloud latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">13+ years</div>
              <div className="text-sm text-gray-500">Built by an EV engineer in powertrain &amp; BMS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section id="how-it-works" className="py-24 px-6 border-t border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From plug-in to real-time data on your phone — in under five minutes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <div className="flex-1 max-w-xs text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-electric/10 text-electric mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-white font-semibold mb-2">Install</h3>
              <p className="text-sm text-gray-500">
                Plug V-DRIVE into your vehicle&apos;s OBD-II port. Five-minute install,
                no tools required.
              </p>
            </div>

            <div className="hidden md:block w-12 h-px bg-white/10" />

            <div className="flex-1 max-w-xs text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-electric/10 text-electric mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-white font-semibold mb-2">Connect</h3>
              <p className="text-sm text-gray-500">
                V-DRIVE decodes CAN signals at the edge and streams data to the
                SIGNAL cloud in near real-time over 4G.
              </p>
            </div>

            <div className="hidden md:block w-12 h-px bg-white/10" />

            <div className="flex-1 max-w-xs text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-electric/10 text-electric mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-white font-semibold mb-2">Monitor</h3>
              <p className="text-sm text-gray-500">
                Open SIGNAL on your phone or browser. See every signal, track
                battery health, and get alerts for abuse or degradation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Turo Hosts Need This */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Turo hosts need this
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard OBD-II */}
            <div className="rounded-xl border border-white/5 bg-surface p-8">
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-6">
                Standard OBD-II Scanner
              </h3>
              <ul className="space-y-4">
                {[
                  "Reads ~15 generic signals",
                  "Tells you the check engine light is on",
                  "No battery cell data",
                  "No abuse detection",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-red-400/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* V-DRIVE + SIGNAL */}
            <div className="rounded-xl border border-electric/20 bg-electric/5 p-8">
              <h3 className="text-sm font-semibold text-electric uppercase tracking-wider mb-6">
                V-DRIVE + SIGNAL
              </h3>
              <ul className="space-y-4">
                {[
                  "500+ manufacturer-specific signals",
                  "Cell-level battery health",
                  "Deep-discharge and thermal abuse flags",
                  "Objective post-rental condition reports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-electric mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Founder Quote */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* TODO: Replace with real founder headshot */}
            <div className="w-24 h-24 rounded-full bg-surface border-2 border-electric/20 flex items-center justify-center shrink-0">
              <svg className="w-10 h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
              </svg>
            </div>
            <blockquote>
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-4">
                &ldquo;I built V-DRIVE because OBD-II scanners read ~15 generic signals.
                Your car&apos;s CAN bus has 500+ signals. Turo hosts deserve to see them.&rdquo;
              </p>
              <cite className="text-sm text-gray-500 not-italic">
                — Subhasis Behera, Founder &amp; Systems Engineer
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently asked questions
          </h2>
          <KickstarterFAQ />
        </div>
      </section>

      {/* Section 7: Final Email Capture */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be the first to know
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Sign up to get notified when V-DRIVE launches on Kickstarter — plus
            early-bird pricing exclusively for subscribers.
          </p>
          <div className="flex justify-center">
            <EmailCaptureForm
              utmSource={utmSource}
              utmMedium={utmMedium}
              utmCampaign={utmCampaign}
            />
          </div>
          <p className="text-sm text-gray-600 mt-12">
            Questions? <a href="mailto:contact@veynqor.com" className="text-electric hover:underline">contact@veynqor.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
