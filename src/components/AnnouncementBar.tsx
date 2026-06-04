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
    <div className="relative bg-gradient-to-r from-electric-dark via-electric to-cyan">
      <Link
        href="/kickstarter"
        className="block text-center text-sm font-medium py-2 px-10 text-white hover:opacity-90 transition-opacity"
      >
        V-DRIVE launches on Kickstarter July 4. Get early-bird pricing{" "}
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
