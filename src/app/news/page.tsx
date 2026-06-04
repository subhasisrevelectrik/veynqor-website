import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Follow the Veynqor build: product updates, the V-DRIVE Kickstarter, and where to follow along across every channel. Press and media resources available on request.",
};

const channels = [
  { label: "X", handle: "@veynqor", href: "https://x.com/veynqor" },
  { label: "LinkedIn", handle: "/company/veynqor", href: "https://linkedin.com/company/veynqor" },
  { label: "YouTube", handle: "@Veynqor", href: "https://www.youtube.com/@Veynqor" },
  { label: "Instagram", handle: "@veynqor", href: "https://www.instagram.com/veynqor/" },
  { label: "Threads", handle: "@veynqor", href: "https://www.threads.com/@veynqor" },
  { label: "Bluesky", handle: "@veynqor.com", href: "https://bsky.app/profile/veynqor.com" },
  { label: "Facebook", handle: "/veynqor", href: "https://facebook.com/veynqor" },
  { label: "Reddit", handle: "u/Veynqor", href: "https://www.reddit.com/user/Veynqor/" },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-3xl">
            Newsroom
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            We build in the open. Follow the V-DRIVE launch and our product updates across the channels below,
            or get them in your inbox.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/kickstarter#notify"
              className="inline-flex items-center gap-2 bg-electric hover:bg-electric-dark text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Join the launch list
            </Link>
            <Link
              href="/kickstarter"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              The Kickstarter
            </Link>
          </div>
        </div>
      </section>

      {/* Follow */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Follow along</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/5 bg-surface p-5 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{c.label}</span>
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-electric transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9m8 0v8" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500">{c.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Press and media</h2>
          <p className="text-gray-400 mb-6">
            For interviews, product details, or brand assets, reach out and we will send a media kit. It
            includes the Veynqor logo, V-DRIVE product images, and a short founder bio.
          </p>
          <a
            href="mailto:press@veynqor.com"
            className="inline-flex items-center gap-2 text-electric hover:text-white transition-colors"
          >
            press@veynqor.com
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
