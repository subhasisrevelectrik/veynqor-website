import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-electric flex items-center justify-center text-white font-bold text-sm">
                V
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Veynqor
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              Fleet intelligence infrastructure for commercial EV operators.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Products</h4>
            <div className="flex flex-col gap-2">
              <Link href="/products/r-drive" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                R-DRIVE
              </Link>
              <Link href="/products/signal" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                SIGNAL
              </Link>
              <Link href="/products" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Overview
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link href="/use-cases" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Use Cases
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Get Started</h4>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Book a Fleet Assessment
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Veynqor, Inc. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            A California C Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
