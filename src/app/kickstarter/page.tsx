import type { Metadata } from "next";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import KickstarterFAQ from "./KickstarterFAQ";

export const metadata: Metadata = {
  title: "V-DRIVE on Kickstarter: Know What Your Car Knows",
  description:
    "V-DRIVE launches on Kickstarter July 4, 2026. A plug-and-play CAN bus device that reads what your car actually knows, with the SIGNAL dashboard. Join the list for early-bird pricing.",
  openGraph: {
    title: "V-DRIVE on Kickstarter: Know What Your Car Knows",
    description:
      "Launching July 4, 2026. Deep CAN bus telemetry for Turo hosts and small EV fleets. Get early-bird pricing.",
    url: "https://veynqor.com/kickstarter",
    images: [{ url: "/images/og/og-kickstarter.png", width: 1200, height: 630, alt: "V-DRIVE on Kickstarter" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "V-DRIVE on Kickstarter: Know What Your Car Knows",
    description: "Launching July 4, 2026. Get early-bird pricing.",
    images: ["/images/og/og-kickstarter.png"],
  },
};

// TODO(subhasis): confirm which YouTube ID maps to which video, then relabel.
// Expected set from the campaign chat: campaign film, dashboard demo,
// XPO testimonial, founder origin.
const videos = {
  hero: { id: "m1ghHqlW-9o", title: "V-DRIVE: Know What Your Car Knows" },
  more: [
    { id: "AWrIEi-BQJs", title: "V-DRIVE in 90 seconds" },
    { id: "0ILWX7gO5vE", title: "Why XPO Auto Sales said yes" },
    { id: "UyP2XJWCw7s", title: "Why I built V-DRIVE" },
  ],
};

type Tier = {
  price: string;
  name: string;
  delivery: string;
  limited?: string;
  digital?: boolean;
  highlight?: boolean;
  items: string[];
};

const tiers: Tier[] = [
  {
    price: "$29",
    name: "Supporter",
    delivery: "Est. delivery Aug 2026",
    digital: true,
    items: ["Backer Wall listing", "Founder Discord access"],
  },
  {
    price: "$225",
    name: "Super Early Bird",
    delivery: "Est. delivery Aug 2026",
    limited: "15 at launch",
    highlight: true,
    items: [
      "V-DRIVE unit",
      "SIGNAL platform access (12 months)",
      "IoT SIM card (3 months prepaid)",
      "OBD-II cable kit",
      "Quick start guide",
      "Founder Discord access",
      "Backer Wall listing",
    ],
  },
  {
    price: "$249",
    name: "Early Bird",
    delivery: "Est. delivery Aug 2026",
    limited: "25 at launch",
    items: [
      "V-DRIVE unit",
      "SIGNAL platform access (12 months)",
      "IoT SIM card (3 months prepaid)",
      "OBD-II cable kit",
      "Quick start guide",
      "Founder Discord access",
      "Backer Wall listing",
    ],
  },
  {
    price: "$275",
    name: "Kickstarter Special",
    delivery: "Est. delivery Aug 2026",
    items: [
      "V-DRIVE unit",
      "SIGNAL platform access (12 months)",
      "IoT SIM card (3 months prepaid)",
      "OBD-II cable kit",
      "Quick start guide",
      "Founder Discord access",
      "Backer Wall listing",
    ],
  },
  {
    price: "$649",
    name: "Fleet Starter (3-Pack)",
    delivery: "Est. delivery Aug 2026",
    limited: "20 at launch",
    items: [
      "3 x V-DRIVE unit",
      "3 x SIGNAL access (12 months)",
      "3 x IoT SIM (3 months prepaid)",
      "3 x OBD-II cable kit",
      "3 x Quick start guide",
      "Founder Discord access",
      "Backer Wall listing",
    ],
  },
  {
    price: "$999",
    name: "Fleet Pro (5-Pack)",
    delivery: "Est. delivery Aug 2026",
    limited: "10 at launch",
    items: [
      "5 x V-DRIVE unit",
      "5 x SIGNAL access (12 months)",
      "5 x IoT SIM (3 months prepaid)",
      "5 x OBD-II cable kit",
      "5 x Quick start guide",
      "Founder Discord access",
      "Backer Wall listing",
      "Priority onboarding call",
    ],
  },
];

const pillars = [
  {
    title: "Updates over the air",
    body: "V-DRIVE ships with 16 MB of flash and updates itself remotely. New decoders and features arrive without you ever touching the device again.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 3v4h-4M6 21v-4h4" />
      </svg>
    ),
  },
  {
    title: "Buffers when offline",
    body: "Park in an underground garage or drive through dead zones and nothing is lost. V-DRIVE stores data locally and uploads automatically the moment it reconnects.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 12h14M5 16h14" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
      </svg>
    ),
  },
  {
    title: "Reads what your car knows",
    body: "Most dongles read a handful of generic OBD-II codes. V-DRIVE decodes the full CAN bus, the same signals your car uses to talk to itself, from battery cells to motor temps.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-5 4 4 4-7 4 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18" />
      </svg>
    ),
  },
];

const specs = [
  ["Connectivity", "4G LTE cellular, real-time upload"],
  ["Positioning", "Built-in GPS location tracking"],
  ["CAN decoding", "DBC-based signal decoding at the edge"],
  ["Storage and OTA", "16 MB flash, over-the-air firmware updates"],
  ["Offline buffering", "Local storage with automatic upload resume"],
  ["Power", "OBD-II port or direct 12V harness"],
  ["Enclosure", "Aluminum Polycase, compact and fully enclosed"],
  ["Platform", "Streams to the SIGNAL cloud dashboard"],
];

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
      {/* Hero */}
      <section className="relative pt-12 pb-20 px-6 gradient-mesh overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/20 bg-electric/5 text-electric text-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                Launching on Kickstarter &middot; July 4, 2026
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Know What Your
                <br />
                <span className="text-electric">Car Knows.</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-xl mb-8">
                V-DRIVE is a plug-and-play device that reads the full CAN bus of your car, not just generic
                codes, and streams it to the SIGNAL dashboard. Built for Turo hosts and small EV fleets.
              </p>

              <div className="mb-8">
                <Countdown />
              </div>

              <div id="notify-hero" className="max-w-md">
                <EmailCaptureForm
                  utmSource={utmSource}
                  utmMedium={utmMedium}
                  utmCampaign={utmCampaign}
                  source="kickstarter-hero"
                />
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm">
                <a href="#tiers" className="text-gray-400 hover:text-white transition-colors">Browse reward tiers</a>
                <a href="#videos" className="text-gray-400 hover:text-white transition-colors">Watch the film</a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/kickstarter/hero-device-hand.jpg"
                alt="V-DRIVE edge telemetry device"
                width={1600}
                height={1000}
                className="w-full rounded-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Three things it does that other dongles do not.
            </h2>
            <p className="text-gray-400">
              Cheap OBD-II readers give you a check-engine light. V-DRIVE gives you the signal-level truth, kept
              current and never dropped.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/5 bg-surface p-7">
                <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Turo hosts need this */}
      <section className="py-20 px-6 border-t border-white/5">
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

      {/* See it in the data */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                From your car to your phone, in seconds.
              </h2>
              <p className="text-gray-400 mb-6">
                V-DRIVE decodes signals inside the vehicle, uploads them over 4G, and SIGNAL turns them into a
                dashboard you can actually read. When something drifts out of normal, you get a text.
              </p>
              <img
                src="/images/kickstarter/data-flow-diagram.svg"
                alt="Data flows from the vehicle CAN bus through V-DRIVE over 4G to the SIGNAL cloud and your dashboard"
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="/images/kickstarter/dashboard-overview.png"
                alt="SIGNAL dashboard showing a real trip"
                width={1600}
                height={1000}
                className="col-span-2 w-full rounded-xl border border-white/10"
              />
              <img
                src="/images/kickstarter/sms-alert-mockup.png"
                alt="Phone showing a V-DRIVE health alert"
                width={800}
                height={1200}
                className="w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="py-20 px-6 border-t border-white/5 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Watch</h2>
          <div className="mb-6">
            <YouTubeEmbed id={videos.hero.id} title={videos.hero.title} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.more.map((v) => (
              <YouTubeEmbed key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Reward tiers */}
      <section id="tiers" className="py-20 px-6 border-t border-white/5 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reward tiers</h2>
            <p className="text-gray-400">
              These are the tiers that will be available when backing opens on July 4. You cannot pledge yet.
              Join the list and we will email you the moment the campaign goes live, so you can grab a
              limited early-bird slot first.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  t.highlight ? "border-2 border-electric/40 bg-electric/5" : "border border-white/5 bg-surface"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-7 text-xs font-semibold px-3 py-1 rounded-full bg-electric text-white">
                    Best value
                  </span>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">{t.price}</span>
                  {t.digital && <span className="text-xs text-gray-500">digital</span>}
                </div>
                <h3 className="text-lg font-semibold text-white mt-1">{t.name}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-2 mb-5">
                  <span className="text-xs text-gray-500">{t.delivery}</span>
                  {t.limited && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-300">
                      Limited &middot; {t.limited}
                    </span>
                  )}
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlight ? "text-electric" : "text-cyan"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#notify"
                  className={`text-center text-sm font-medium py-2.5 rounded-lg transition-colors ${
                    t.highlight
                      ? "bg-electric hover:bg-electric-dark text-white"
                      : "border border-white/10 hover:border-white/25 text-white"
                  }`}
                >
                  Notify me at launch
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the box */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="/images/kickstarter/whats-in-box.jpg"
            alt="What is in the V-DRIVE box"
            width={1400}
            height={1000}
            className="w-full rounded-2xl border border-white/10"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is in the box</h2>
            <ul className="space-y-3">
              {[
                "V-DRIVE edge telemetry device",
                "OBD-II cable kit",
                "Quick start guide",
                "IoT SIM card, 3 months prepaid",
                "12 months of SIGNAL platform access",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech specs */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Tech specs</h2>
          <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {specs.map(([label, value]) => (
              <div key={label} className="bg-surface p-5">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{label}</div>
                <div className="text-sm text-gray-200">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            13+ years building EVs. Then I built the tool I wished I had.
          </h2>
          <p className="text-gray-400 mb-6">
            I spent over a decade inside electric powertrains and battery systems, watching good vehicles fail
            in ways the dashboard never warned about. V-DRIVE is the device I always wanted: honest,
            signal-level visibility into what a vehicle is really doing.
          </p>
          <Link href="/team" className="inline-flex items-center gap-1 text-sm text-electric hover:text-white transition-colors">
            Meet the team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Timeline</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { step: "Jul 2026", title: "Campaign opens", body: "Backing goes live on Kickstarter. Limited early-bird tiers first." },
              { step: "Jul - Aug 2026", title: "Production", body: "We finalize the build and assemble backer units." },
              { step: "Aug 2026", title: "Units ship", body: "Estimated delivery to backers, worldwide." },
            ].map((item, i, arr) => (
              <div key={item.title} className="contents">
                <div className="flex-1 max-w-xs text-center p-6">
                  <div className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-electric/10 text-electric mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.body}</p>
                </div>
                {i < arr.length - 1 && <div className="hidden md:block w-12 h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently asked questions
          </h2>
          <KickstarterFAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section id="notify" className="py-24 px-6 border-t border-white/5 scroll-mt-28">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Be first in line.</h2>
          <p className="text-gray-400 mb-8">
            Early-bird tiers are limited. Join the list and we will email you the moment backing opens on
            July 4, before we announce anywhere else.
          </p>
          <div className="max-w-md mx-auto text-left">
            <EmailCaptureForm
              utmSource={utmSource}
              utmMedium={utmMedium}
              utmCampaign={utmCampaign}
              source="kickstarter-footer"
            />
          </div>
          <p className="text-xs text-gray-600 mt-6">
            You can also bookmark kickstarter.veynqor.com. It will point here until launch, then jump straight
            to the live campaign.
          </p>
          <p className="text-sm text-gray-600 mt-6">
            Questions? <a href="mailto:contact@veynqor.com" className="text-electric hover:underline">contact@veynqor.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
