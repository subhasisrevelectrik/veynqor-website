import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SIGNAL Live Demo",
  description:
    "See the SIGNAL dashboard with live data from a real 2023 Chevy Bolt EUV. Explore trips, battery health, and vehicle signals, then open the live demo.",
};

const shots = [
  {
    src: "/images/signal/signal-overview.png",
    alt: "SIGNAL dashboard overview",
    caption: "The dashboard overview, with real trip data.",
    span: true,
  },
  {
    src: "/images/signal/signal-trip-map.png",
    alt: "Trip map in SIGNAL",
    caption: "Every trip mapped from GPS.",
  },
  {
    src: "/images/signal/signal-widget-battery.png",
    alt: "Battery state of charge widget",
    caption: "Battery state of charge over time.",
  },
  {
    src: "/images/signal/signal-widget-secondary.png",
    alt: "Motor and efficiency widget",
    caption: "Motor temps and efficiency signals.",
  },
  {
    src: "/images/signal/signal-mobile.png",
    alt: "SIGNAL on mobile",
    caption: "The full dashboard on your phone.",
  },
];

export default function SignalDemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Live data
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-3xl">
            See SIGNAL with real data.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            This is not a mockup. The demo runs on live data from a real 2023 Chevy Bolt EUV with V-DRIVE
            installed. Explore the trips, battery health, and decoded signals yourself.
          </p>
          <a
            href="https://signal.veynqor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Launch live demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9m8 0v8" />
            </svg>
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {shots.map((s) => (
              <figure key={s.src} className={s.span ? "md:col-span-2" : ""}>
                <img src={s.src} alt={s.alt} className="w-full rounded-2xl border border-white/10" />
                <figcaption className="mt-3 text-sm text-gray-500">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* What you are seeing */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">What you are looking at</h2>
          <p className="text-gray-400 mb-3">
            V-DRIVE decodes the vehicle&apos;s CAN bus at the edge and streams it to SIGNAL over 4G. The
            dashboard you see is built from those decoded signals, the same data the car uses internally, not
            generic OBD-II codes.
          </p>
          <p className="text-gray-400">
            The same platform scales from one personal vehicle to a small fleet.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Want this for your car?</h2>
          <p className="text-gray-400 mb-8">
            V-DRIVE is the device that makes this dashboard possible. It launches on Kickstarter on July 4.
          </p>
          <Link
            href="/kickstarter"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            See the Kickstarter
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
