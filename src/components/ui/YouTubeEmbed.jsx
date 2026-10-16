"use client";

import { useState } from "react";
import { demoClass } from "@/data/videos";

export function YouTubeEmbed({ video = demoClass }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title={video.title}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg)` }}
      />
      <button
        type="button"
        aria-label="Play video"
        onClick={() => setIsPlaying(true)}
        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-text"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="ml-1 h-6 w-6 fill-current"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
}
