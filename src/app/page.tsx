import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-mesh overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric/20 bg-electric/5 text-electric text-sm mb-8 opacity-0 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
            Edge-to-Cloud Telematics
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            See Deeper.
            <br />
            <span className="text-electric">Act Sooner.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 opacity-0 animate-fade-in-up animate-delay-200">
            Veynqor builds the hardware and software that gives fleet operators
            signal-level visibility into every vehicle&apos;s health -from battery
            cells to motor temps. The fleet platform that reads your vehicles&apos;
            vital signs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-electric hover:bg-electric-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Book a Fleet Assessment
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCards() {
  const products = [
    {
      name: "V-DRIVE",
      tagline: "Edge Telemetry Device",
      description:
        "Compact CAN bus hardware that plugs into any commercial EV. Real-time signal decoding, 4G upload, GPS tracking, and offline buffering -all in a device that installs in minutes.",
      href: "/products/v-drive",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
          <rect x="4" y="8" width="24" height="16" rx="3" />
          <path d="M10 14h4M18 14h4M10 18h12" />
          <circle cx="8" cy="4" r="1.5" fill="currentColor" />
          <path d="M8 5.5V8" />
        </svg>
      ),
    },
    {
      name: "SIGNAL",
      tagline: "Cloud Analytics Platform",
      description:
        "Real-time dashboards, historical analytics, and an AI assistant that answers fleet health questions in plain English. See every signal. Ask any question.",
      href: "/products/signal",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="4" width="26" height="20" rx="3" />
          <path d="M3 10h26" />
          <path d="M8 16l4-3 4 4 4-5 4 3" />
          <circle cx="16" cy="28" r="1.5" fill="currentColor" />
          <path d="M12 24v2a2 2 0 002 2h4a2 2 0 002-2v-2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Two products. One complete picture.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From the edge device in the vehicle to the analytics platform on your
            screen -Veynqor gives you end-to-end fleet intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative rounded-2xl border border-white/5 bg-surface p-8 hover:border-electric/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center mb-6">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-electric text-sm font-medium mb-4">
                  {product.tagline}
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {product.description}
                </p>
                <span className="inline-flex items-center text-sm text-electric font-medium group-hover:gap-2 gap-1 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DepthAdvantage() {
  const comparisons = [
    {
      label: "Traditional Fleet Telematics",
      level: "GPS + Fault Codes",
      description: "Tells you where a vehicle is and if a generic error code fires",
      depth: "25%",
    },
    {
      label: "Veynqor",
      level: "Signal-Level Diagnostics",
      description:
        "Tells you that Battery Module 3 Cell 7 is degrading 12% faster than the pack average, and the inverter on Vehicle 42 is running 15\u00B0C hot",
      depth: "100%",
      highlight: true,
    },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            GPS tells you where.
            <br />
            <span className="text-electric">CAN bus tells you why.</span>
          </h2>
          <p className="text-gray-400">
            Most telematics platforms monitor drivers. Veynqor monitors vehicles
            at the signal level. We see what others can&apos;t.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {comparisons.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl p-8 ${
                item.highlight
                  ? "border-2 border-electric/40 bg-electric/5"
                  : "border border-white/5 bg-surface"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-medium ${item.highlight ? "text-electric" : "text-gray-500"}`}>
                  {item.label}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.highlight ? "bg-electric/20 text-electric" : "bg-white/5 text-gray-500"
                }`}>
                  {item.level}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${item.highlight ? "text-gray-300" : "text-gray-500"}`}>
                {item.description}
              </p>
              <div className="mt-6 h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    item.highlight ? "bg-electric" : "bg-gray-600"
                  }`}
                  style={{ width: item.depth }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "3,000+", label: "CAN signals decoded per vehicle" },
    { value: "< 5s", label: "Edge-to-cloud data latency" },
    { value: "99.9%", label: "Data delivery reliability" },
    { value: "50-500", label: "Vehicles per fleet deployment" },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600 uppercase tracking-wider mb-8">
          Trusted by forward-thinking fleet operators
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-30">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-32 h-10 rounded bg-white/5 flex items-center justify-center text-xs text-gray-600"
            >
              Partner {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to see what&apos;s really happening
          <br />
          inside your fleet?
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Start with a pilot deployment. We&apos;ll instrument a subset of your vehicles
          and show you the data you&apos;ve been missing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-electric hover:bg-electric-dark text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Start a Pilot
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCards />
      <DepthAdvantage />
      <Stats />
      <SocialProof />
      <CTA />
    </>
  );
}
