import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "How fleet operators, transit agencies, and EV rental companies use Veynqor for real-time vehicle health monitoring and predictive maintenance.",
};

const useCases = [
  {
    id: "fleet-operators",
    label: "Fleet Operators",
    badge: "Primary",
    headline: "See every vehicle\u2019s health in real time. Catch failures before they strand your driver.",
    audience: "Electric bus operators, last-mile delivery fleets, commercial EV fleets (50\u2013500 vehicles)",
    painPoints: [
      "Unplanned downtime costs $500\u2013$1,500 per vehicle per day",
      "No real-time visibility into battery, motor, or drivetrain health",
      "Reactive maintenance — you find out about problems after breakdowns",
      "OEM telematics are siloed and surface-level at best",
    ],
    solutions: [
      "Real-time CAN bus signal monitoring across your entire fleet",
      "Predictive alerts when battery cells, motors, or inverters trend out of spec",
      "Signal-level diagnostics that go far deeper than OBD-II fault codes",
      "One platform for every vehicle, regardless of OEM",
    ],
    outcome:
      "Fleet operators using signal-level diagnostics catch degrading components weeks before failure — turning emergency tow calls into scheduled service visits.",
  },
  {
    id: "municipal-transit",
    label: "Municipal & Transit",
    badge: null,
    headline: "One platform for every vehicle \u2014 regardless of OEM. Audit-ready data exports.",
    audience: "Transit agencies, city fleet managers, DOT compliance offices",
    painPoints: [
      "FTA compliance reporting requires deep vehicle health documentation",
      "Multiple OEMs mean multiple disconnected telematics systems",
      "Grant-funded vehicles require detailed data reporting on utilization and health",
      "Legacy telematics provide GPS and fault codes — not the depth auditors need",
    ],
    solutions: [
      "OEM-agnostic platform that monitors any vehicle with an accessible CAN bus",
      "Comprehensive data exports for FTA compliance and grant reporting",
      "Historical time-series data for every signal — battery, motor, charging, drivetrain",
      "AI-powered querying for rapid report generation",
    ],
    outcome:
      "Transit agencies consolidate their entire mixed-OEM fleet into one platform, eliminating the compliance reporting headache and surfacing vehicle health issues that OEM dashboards miss.",
  },
  {
    id: "rental-leasing",
    label: "Rental & Leasing",
    badge: null,
    headline: "Track battery health and driving behavior. Data-backed condition reports eliminate disputes.",
    audience: "EV rental companies, fleet leasing firms, car-sharing platforms",
    painPoints: [
      "Battery degradation is invisible without deep diagnostics",
      "Return condition disputes cost time, money, and customer relationships",
      "Abuse detection (deep discharge, excessive fast charging) requires signal-level data",
      "Residual value estimation for EVs is guesswork without battery health data",
    ],
    solutions: [
      "Continuous battery cell-level health tracking throughout the lease or rental term",
      "Automated condition reports backed by real vehicle data — not subjective inspections",
      "Abuse detection alerts for deep discharge, thermal events, and abnormal charging patterns",
      "Battery degradation curves that inform accurate residual value calculations",
    ],
    outcome:
      "Leasing companies use Veynqor\u2019s battery health data to set accurate residual values and resolve return-condition disputes with objective, signal-level evidence.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-24 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl pt-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Built for the teams that
              <br />
              <span className="text-electric">keep fleets running</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Whether you operate 50 electric buses or lease 500 EVs, Veynqor gives
              you the signal-level visibility to prevent downtime, prove compliance,
              and protect asset value.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {useCases.map((uc) => (
            <div
              key={uc.id}
              id={uc.id}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-white">{uc.label}</h2>
                {uc.badge && (
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-electric/10 text-electric">
                    {uc.badge}
                  </span>
                )}
              </div>

              <div className="rounded-2xl border border-white/5 bg-surface p-8 md:p-12 mb-8">
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-2">
                  &ldquo;{uc.headline}&rdquo;
                </p>
                <p className="text-sm text-gray-500">{uc.audience}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Pain */}
                <div className="rounded-xl border border-white/5 bg-surface p-8">
                  <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-6">
                    The Problem
                  </h3>
                  <ul className="space-y-4">
                    {uc.painPoints.map((pain) => (
                      <li key={pain} className="flex items-start gap-3 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-red-400/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {pain}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="rounded-xl border border-electric/20 bg-electric/5 p-8">
                  <h3 className="text-sm font-semibold text-electric uppercase tracking-wider mb-6">
                    The Veynqor Advantage
                  </h3>
                  <ul className="space-y-4">
                    {uc.solutions.map((sol) => (
                      <li key={sol} className="flex items-start gap-3 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-electric mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-navy-800 p-6 border-l-4 border-electric">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="text-white font-medium">Outcome: </span>
                  {uc.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Which fleet challenge are you solving?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Tell us about your fleet and we&apos;ll show you exactly how Veynqor
            addresses your specific operational challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-electric hover:bg-electric-dark text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Book a Fleet Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
