"use client";

import { useState } from "react";

// Loads only a thumbnail until the user clicks, then swaps in the privacy
// friendly youtube-nocookie iframe. Avoids shipping the heavy YouTube player
// on page load.
export default function YouTubeEmbed({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/10 bg-navy-900">
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={thumb}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          <span className="absolute left-4 bottom-4 right-4 text-left text-sm font-medium text-white">
            {title}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-electric/90 group-hover:bg-electric transition-colors shadow-lg">
              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
