"use client";

import Link from "next/link";
import { useState } from "react";

const productLinks = [
  { href: "/products/v-drive", label: "V-DRIVE" },
  { href: "/products/signal", label: "SIGNAL" },
  { href: "/products/signal/demo", label: "Live Demo" },
  { href: "/products", label: "Overview" },
];

const companyLinks = [
  { href: "/team", label: "Team" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/news", label: "Newsroom" },
];

function Chevron() {
  return (
    <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Dropdown({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors py-2">
        {label}
        <Chevron />
      </button>
      <div className="absolute left-0 top-full pt-3 hidden group-hover:block group-focus-within:block">
        <div className="min-w-[200px] rounded-xl border border-white/10 bg-navy-900/95 backdrop-blur shadow-xl p-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center text-white font-bold text-sm">
            V
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Veynqor</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Dropdown label="Product" links={productLinks} />
          <Link href="/use-cases" className="text-sm text-gray-400 hover:text-white transition-colors py-2">
            Use Cases
          </Link>
          <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors py-2">
            Contact
          </Link>
          <Link href="/partners" className="text-sm text-gray-400 hover:text-white transition-colors py-2">
            Partners
          </Link>
          <Dropdown label="Company" links={companyLinks} />
          <Link href="/kickstarter" className="text-sm text-electric hover:text-white font-medium transition-colors py-2">
            Kickstarter
          </Link>
          <Link
            href="/contact"
            className="text-sm bg-electric hover:bg-electric-dark text-white px-4 py-2 rounded-lg transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-6 py-5 flex flex-col gap-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-600 mb-2">Product</p>
              <div className="flex flex-col gap-2 pl-1">
                {productLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/use-cases" className="text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                Use Cases
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
              <Link href="/partners" className="text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                Partners
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-600 mb-2">Company</p>
              <div className="flex flex-col gap-2 pl-1">
                {companyLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/kickstarter"
              className="text-electric font-medium hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Kickstarter
            </Link>
            <Link
              href="/contact"
              className="bg-electric hover:bg-electric-dark text-white px-4 py-2.5 rounded-lg transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
