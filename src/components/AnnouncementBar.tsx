"use client";

import Link from "next/link";
import { useSyncExternalStore, useCallback } from "react";

const DISMISS_KEY = "vq_ks_bar_dismissed";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return !localStorage.getItem(DISMISS_KEY);
}

function getServerSnapshot() {
  return false;
}

export default function AnnouncementBar() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const dismiss = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem(DISMISS_KEY, "1");
    window.dispatchEvent(new StorageEvent("storage"));
  }, []);

  if (!visible) return null;

  return (
    <div className="relative bg-navy-900 border-b border-white/5">
      <Link
        href="/kickstarter"
        className="block text-center text-sm py-2 px-10 text-gray-400 hover:text-white transition-colors"
      >
        Coming soon on Kickstarter — get early-bird pricing{" "}
        <span className="text-electric">&rarr;</span>
      </Link>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
        aria-label="Dismiss announcement"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
