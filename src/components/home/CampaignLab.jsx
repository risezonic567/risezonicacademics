import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Lightbulb,
  MousePointerClick,
  ScanLine,
  Sparkles,
} from "lucide-react";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { moduleTrackVideos } from "@/data/videos";

const campaignSteps = [
  {
    number: "01",
    title: "Find the opportunity",
    description: "Start with the audience, their needs, and a clear campaign goal.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Build the campaign",
    description: "Choose a channel, shape the message, and plan the next action.",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Read the signals",
    description: "Use performance data to understand what worked and what to improve.",
    icon: BarChart3,
  },
];

export function CampaignLab() {
  const video = moduleTrackVideos.performance;

  return (
    <section className="relative overflow-hidden border-b border-line/60 bg-white py-20 text-text sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#D1FAE5]/60 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0F766E] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#14B8A6]" aria-hidden="true" />
              <span>Inside the campaign lab</span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-text sm:text-4xl lg:text-5xl">
              Learn the thinking <span className="text-[#5EEAD4]">behind the clicks.</span>
            </h2>
          </div>
          <div className="max-w-md md:pb-1">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Marketing is a series of smart decisions. Explore how a campaign moves from an audience insight to measurable improvement.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-5 lg:p-7">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#14B8A6]/20 blur-3xl" />
          <div className="relative grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="mb-3 flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 sm:px-2">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#5EEAD4] shadow-[0_0_12px_rgba(94,234,212,0.7)]" />
                  Performance marketing preview
                </span>
                <span className="hidden sm:inline">Press play to watch</span>
              </div>
              <div className="rounded-2xl bg-black p-1 shadow-2xl sm:p-2">
                <YouTubeEmbed video={video} />
              </div>
            </div>

            <div className="relative px-2 pb-2 text-white lg:col-span-4 lg:px-0 lg:py-4">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#5EEAD4]">
                <ScanLine className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5EEAD4]">A practical mindset</p>
              <h3 className="mt-2 font-heading text-2xl font-bold leading-tight sm:text-3xl">
                Don’t just run ads. Know why they work.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Learn to connect audience research, creative choices, and campaign data into one clear strategy.
              </p>
              <Link
                href="/courses"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0F9F93] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102D2B]"
              >
                Explore the tracks
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mt-5 grid gap-3 md:grid-cols-3 md:gap-4">
          {campaignSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className={`relative overflow-hidden rounded-2xl border bg-white p-5 shadow-[0_8px_28px_rgba(16,45,43,0.06)] transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${
                  index === 1 ? "border-[#14B8A6]/40 md:-translate-y-2" : "border-line/70"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D1FAE5] text-[#0F766E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-heading text-3xl font-extrabold leading-none text-[#B7D8D0]">{step.number}</span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-text">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
