import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Veynqor is a founder-led team building fleet intelligence infrastructure for commercial EV operators. Meet the people behind V-DRIVE and SIGNAL.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-3xl">
            A small team, building in the open.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Veynqor is founder-led and deliberately lean. We ship hardware and software for the people who keep
            electric vehicles on the road.
          </p>
        </div>
      </section>

      {/* People */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Founder */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <img
              src="/images/team/founder-subhasis.jpg"
              alt="Subhasis Behera"
              width={800}
              height={800}
              className="w-full max-w-[260px] rounded-2xl border border-white/10"
            />
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white">Subhasis Behera</h2>
              <p className="text-electric text-sm font-medium mb-4">Founder &amp; CEO</p>
              <p className="text-gray-400 mb-3">
                Subhasis has 13+ years of EV powertrain and battery management engineering. He was Director of
                Engineering at Phoenix Motorcars, leading Gen-4 powertrain integration, and built battery and
                validation systems at Romeo Power and Nikola, Gotion, Magna, and FCA.
              </p>
              <p className="text-gray-400">
                He holds an M.S. in Mechanical Engineering with a focus on robotics. After years of watching
                vehicles fail in ways the dashboard never warned about, he started Veynqor to give operators
                honest, signal-level visibility into what their vehicles are really doing.
              </p>
            </div>
          </div>

          {/* Kartikey */}
          <div className="grid md:grid-cols-3 gap-8 items-start border-t border-white/5 pt-12">
            <img
              src="/images/team/team-kartikey.jpg"
              alt="Kartikey Agrawal"
              width={800}
              height={800}
              className="w-full max-w-[260px] rounded-2xl border border-white/10"
            />
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white">Kartikey Agrawal</h2>
              <p className="text-cyan text-sm font-medium mb-4">Content &amp; Creative</p>
              <p className="text-gray-400 mb-3">
                Kartikey is a Data Science undergraduate at BMS College of Engineering who works at the
                intersection of technology and creativity. He is drawn to AI tools, software, and digital
                product creation, and to the craft of turning complex engineering into something people
                actually want to understand.
              </p>
              <p className="text-gray-400">
                At Veynqor he leads content production, creative development, and product storytelling, shaping
                how a deeply technical product gets explained. Outside of work he is into music, design, and
                chasing down new things to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Join us</h2>
          <p className="text-gray-400 mb-8">
            We are early, and the work is real: edge firmware, cloud analytics, hardware, and the stories that
            explain them. If you are an engineer, designer, or fleet operator who wants to build this with us,
            or an advisor who can help, we would like to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
