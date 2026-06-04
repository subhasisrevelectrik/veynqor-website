"use client";

import { useEffect, useState } from "react";

// Kickstarter launch: July 4, 2026. Adjust the launch time/zone as needed.
const LAUNCH = new Date("2026-07-04T16:00:00Z").getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(): Parts | null {
  const ms = LAUNCH - Date.now();
  if (ms <= 0) return null;
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg border border-white/10 bg-navy-800 px-3 py-2 min-w-[3.25rem] text-center">
        <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1.5 text-[11px] uppercase tracking-wider text-gray-500">{label}</span>
    </div>
  );
}

export default function Countdown() {
  // Stays null until mounted so the server and first client render match. After mount it
  // holds the latest tick: { parts } while counting down, { parts: null } once live.
  const [state, setState] = useState<{ parts: Parts | null } | null>(null);

  useEffect(() => {
    const update = () => setState({ parts: diff() });
    // Seed from a timer callback (not synchronously in the effect body) so we don't
    // trigger a cascading render, then keep it ticking every second.
    const seed = setTimeout(update, 0);
    const interval = setInterval(update, 1000);
    return () => {
      clearTimeout(seed);
      clearInterval(interval);
    };
  }, []);

  if (!state) {
    return <div className="h-[68px]" aria-hidden />;
  }

  if (!state.parts) {
    return (
      <p className="text-electric font-medium">
        The campaign is live. Back V-DRIVE on Kickstarter now.
      </p>
    );
  }

  const { parts } = state;
  return (
    <div className="flex items-end gap-3" role="timer" aria-label="Time until Kickstarter launch">
      <Unit value={parts.days} label="days" />
      <Unit value={parts.hours} label="hrs" />
      <Unit value={parts.minutes} label="min" />
      <Unit value={parts.seconds} label="sec" />
    </div>
  );
}
