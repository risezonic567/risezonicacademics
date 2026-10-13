"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { hiringPartners } from "@/data/partners";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { ArrowRight, TrendingUp, DollarSign, Building2 } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";

export function PlacementSnapshot() {
  return (
    <section className="py-20 sm:py-28 bg-bg relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Placement Cell & Salary Snapshot"
          highlightWord="Placement"
          subtitle="Our dedicated corporate relations desk connects graduates with verified marketing teams."
        />

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          <Card
            variant="surface"
            className="p-7 sm:p-9 border-accent/30 relative overflow-hidden group hover:border-primary"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-light border border-primary/30 flex items-center justify-center text-accent">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                Peak Achievement
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-heading font-bold text-text">
              {siteConfig.stats.highestPackage}
            </div>
            <p className="mt-2 text-sm text-muted">
              Highest package secured in recent campus recruitment drives.
            </p>
          </Card>

          <Card
            variant="surface"
            className="p-7 sm:p-9 border-line relative overflow-hidden group hover:border-accent"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                <DollarSign className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted">
                Cohort Median
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-heading font-bold text-text">
              {siteConfig.stats.averagePackage}
            </div>
            <p className="mt-2 text-sm text-muted">
              Average starting compensation across performance and SEO tracks.
            </p>
          </Card>
        </div>

        {/* Hiring Partners Grid */}
        <div className="mt-6 mb-12">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-muted font-semibold flex items-center justify-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-accent" />
              <span>Network Companies & Recruitment Agencies</span>
            </span>
          </div>

          <StaggerContainer
            staggerDelay={0.06}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {hiringPartners.map((partner) => (
              <StaggerItem key={partner.id}>
                <div className="p-4 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-center hover:border-accent/40 transition-colors">
                  <div className="relative h-5 w-full">
                    <SiteImage
                      image={partner.image}
                      fill
                      sizes="(max-width: 640px) 40vw, 20vw"
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA to /placement */}
        <Reveal className="text-center">
          <Link
            href="/placement"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-surface border border-accent/40 text-text hover:border-primary hover:text-accent font-semibold transition-all text-sm sm:text-base group"
          >
            <span>Explore Full Placement Statistics & Process</span>
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
