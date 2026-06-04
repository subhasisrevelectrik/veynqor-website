import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Where Veynqor is headed: V-DRIVE hardware, the SIGNAL dashboard, INSIGHT diagnostics, GUARD predictive alerts, and broader vehicle support.",
};

type Status = "Available" | "In progress" | "Planned";

const statusStyle: Record<Status, string> = {
  Available: "bg-cyan/10 text-cyan border-cyan/20",
  "In progress": "bg-electric/10 text-electric border-electric/20",
  Planned: "bg-white/5 text-gray-400 border-white/10",
};

type Item = { name: string; status: Status; body: string };

const items: Item[] = [
  {
    name: "V-DRIVE",
    status: "Available",
    body: "The plug-and-play CAN bus edge device. 4G LTE, GPS, offline buffering, and over-the-air updates. Launching to backers on Kickstarter.",
  },
  {
    name: "SIGNAL dashboard",
    status: "Available",
    body: "The cloud platform that turns decoded vehicle signals into a dashboard you can read, with live data from real vehicles today.",
  },
  {
    name: "Consumer dashboard and host widgets",
    status: "In progress",
    body: "A consumer-facing SIGNAL experience with a widget library aimed at Turo hosts and small fleet operators.",
  },
  {
    name: "Broader vehicle and DBC support",
    status: "In progress",
    body: "Expanding decoding coverage across more makes and models so V-DRIVE reads more of what more vehicles know.",
  },
  {
    name: "INSIGHT",
    status: "Planned",
    body: "AI-assisted diagnostics that explain what a pattern of signals actually means, not just that a number changed.",
  },
  {
    name: "GUARD",
    status: "Planned",
    body: "Predictive maintenance alerts that flag developing issues before they become failures or roadside stops.",
  },
  {
    name: "V-DRIVE V2",
    status: "Planned",
    body: "A next-generation device with automotive-grade components, isolated CAN, and a flexible modem footprint for global deployment.",
  },
  {
    name: "Fleet operations features",
    status: "Planned",
    body: "Multi-vehicle views, team roles, and fleet-wide alerting for operators running more than a handful of vehicles.",
  },
];

export default function RoadmapPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-3xl">
            Where Veynqor is going.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            We are building fleet intelligence infrastructure in layers: the device first, then the platform,
            then the intelligence on top. Here is what is shipping and what is next.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {(["Available", "In progress", "Planned"] as Status[]).map((s) => (
              <span key={s} className={`text-xs font-medium px-3 py-1 rounded-full border ${statusStyle[s]}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item) => (
            <div key={item.name} className="rounded-2xl border border-white/5 bg-surface p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border shrink-0 ${statusStyle[item.status]}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Note + CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-8">
            Planned items reflect our current direction and are not yet available. Timelines can shift as we
            learn from real fleets.
          </p>
          <Link
            href="/kickstarter"
            className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Start with V-DRIVE on Kickstarter
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
