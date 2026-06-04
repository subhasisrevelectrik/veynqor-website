import type { Metadata } from "next";
import Link from "next/link";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "V-DRIVE is running in real operator fleets today. See how XPO Auto Sales uses Veynqor for signal-level EV health monitoring, and how to become a pilot partner.",
};

// TODO(subhasis): confirm this is the XPO "Why We Said Yes" testimonial video.
const XPO_VIDEO_ID = "0ILWX7gO5vE";

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-sm mb-6">
            Pilot partners
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-3xl">
            Operators are already running on V-DRIVE.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            We build alongside real fleets, not in a lab. Our pilot partners run V-DRIVE in working vehicles and
            shape what the product becomes.
          </p>
        </div>
      </section>

      {/* XPO pilot */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/partners/xpo-logo.png" alt="XPO Auto Sales" width={600} height={240} className="h-12 w-auto" />
                <img src="/images/partners/partner-badge.svg" alt="Veynqor pilot partner" width={240} height={240} className="h-16 w-16" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">XPO Auto Sales</h2>
              <p className="text-gray-400 mb-4">
                XPO Auto Sales runs a Phoenix Motorcars electric vehicle with V-DRIVE installed. Veynqor reads
                the vehicle&apos;s battery and powertrain signals directly from the CAN bus and surfaces them in
                SIGNAL, with automated text alerts when something moves outside its normal range.
              </p>
              <p className="text-gray-400 mb-6">
                It is an active, ongoing pilot. We are tuning the diagnostics together with their team on a real
                duty cycle.
              </p>

              <figure className="rounded-2xl border border-white/5 bg-surface p-6">
                <blockquote className="text-gray-300 italic">
                  Approved customer quote pending final sign-off.
                </blockquote>
                <figcaption className="mt-3 text-sm text-gray-500">
                  Colleen Weber, CEO, XPO Auto Sales
                </figcaption>
              </figure>
            </div>

            <div>
              <YouTubeEmbed id={XPO_VIDEO_ID} title="Why XPO Auto Sales said yes" />
              <p className="mt-3 text-xs text-gray-600">
                Featuring Colleen Weber, CEO, and David, who drives the vehicle every day.
              </p>
            </div>
          </div>

          {/* Pilot detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16 pt-16 border-t border-white/5">
            <img
              src="/images/partners/phoenix-ev.jpg"
              alt="Phoenix Motorcars electric vehicle in the XPO pilot"
              width={1200}
              height={800}
              className="w-full rounded-2xl border border-white/10"
            />
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What the pilot covers</h3>
              <ul className="space-y-3">
                {[
                  "Signal-level battery monitoring decoded straight from the CAN bus",
                  "Powertrain and thermal signals tracked across each duty cycle",
                  "Automated text alerts when a reading drifts out of normal",
                  "A shared SIGNAL view of the vehicle's day-to-day health",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      {/* Become a partner */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Become a pilot partner</h2>
          <p className="text-gray-400 mb-8">
            Running an EV fleet and want signal-level visibility into vehicle health? We work closely with a
            small number of pilot partners. Tell us about your fleet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Talk to us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
