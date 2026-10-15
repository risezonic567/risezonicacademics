"use client";

import React from "react";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { Calendar, PhoneCall, ShieldCheck, Sparkles, Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

export function FinalCta() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="relative rounded-3xl bg-[#FFFFFF] border border-white/10 p-8 sm:p-14 lg:p-18 text-center overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.25)]">
            {/* Ambient teal radiant glows inside the banner */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -left-32 h-[350px] w-[350px] rounded-full bg-[#14B8A6]/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full bg-[#2DD4BF]/20 blur-3xl"
            />

            {/* Badge */}
            <div className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-[#2DD4BF]/30 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2DD4BF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
              </span>
              <span>Admissions Open &bull; Limited Cohort Seats</span>
            </div>

            {/* Heading */}
            <h2 className="relative z-10 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] max-w-2xl mx-auto tracking-tight mb-5">
              Ready To Launch Your High-Impact Marketing Career?
            </h2>

            {/* Subtext */}
            <p className="relative z-10 text-sm sm:text-base lg:text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
              Book a complimentary 1-on-1 strategy call with our lead mentors. We will evaluate your background, preview live ad dashboards, and map your direct career path.
            </p>

            {/* Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenModalButton
                source="final-cta"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 font-bold text-base bg-[#14B8A6] hover:bg-[#0D9488] text-white shadow-[0_8px_24px_rgba(20,184,166,0.35)] transition-all hover:scale-[1.02] border-transparent"
              >
                <span>Book Free 1-on-1 Counselling</span>
              </OpenModalButton>

              <a
                href={phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all text-sm sm:text-base backdrop-blur-md hover:border-[#2DD4BF]/50"
              >
                <PhoneCall className="w-4 h-4 text-[#2DD4BF]" />
                <span className="text-black">Call Admissions: {siteConfig.contact.phone}</span>
              </a>
            </div>

            {/* Trust Footer Row */}
            <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full border border-white/40 overflow-hidden relative">
                    <SiteImage image={images.avatars[0]} className="object-cover" sizes="24px" fill />
                  </div>
                  <div className="h-6 w-6 rounded-full border border-white/40 overflow-hidden relative">
                    <SiteImage image={images.avatars[1]} className="object-cover" sizes="24px" fill />
                  </div>
                  <div className="h-6 w-6 rounded-full border border-white/40 overflow-hidden relative">
                    <SiteImage image={images.avatars[2]} className="object-cover" sizes="24px" fill />
                  </div>
                </div>
                <div className="flex items-center gap-1 font-semibold text-white">
                  <Star className="h-3.5 w-3.5 fill-[#2DD4BF] text-[#2DD4BF]" />
                  <span className="text-black">4.9/5 Rating</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#2DD4BF]" />
                <span className="text-black">Zero Obligation Consultation</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#2DD4BF]" />
                <span className="text-black">Weekday & Weekend Batches</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
