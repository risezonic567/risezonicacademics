"use client";

import { learningVideos } from "@/data/videos";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Play, Video } from "lucide-react";

export function StudentProjects() {
  return (
    <section className="border-b border-line bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            <Video className="h-3.5 w-3.5" /> Learn by watching
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
            Explore Digital Marketing Lessons
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Browse course-related videos across SEO, advertising, social media, analytics, and more.
          </p>
        </div>
    
        <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {learningVideos.map((video) => (
            <StaggerItem key={video.youtubeId}>
              <article className="group h-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_4px_18px_rgba(20,40,35,0.06)] transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_14px_32px_rgba(20,40,35,0.12)]">
                <div className="relative p-2.5 pb-0">
                  <YouTubeEmbed video={video} />
                  <span className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/70 bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-accent shadow-sm">
                    {video.category}
                  </span>
                </div>
                <div className="px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5">
                  <h3 className="line-clamp-1 font-heading text-base font-bold text-text transition-colors group-hover:text-accent sm:text-lg">
                    {video.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 min-h-10 text-sm leading-5 text-muted">
                    {video.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 border-t border-line/70 pt-3 text-xs font-semibold text-accent">
                    <Play className="h-3.5 w-3.5 fill-current" /> Watch lesson
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
