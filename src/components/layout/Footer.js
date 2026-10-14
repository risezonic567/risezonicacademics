"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursePlans } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const linkClass = `inline-flex py-2 text-sm font-medium text-muted transition-colors hover:text-accent sm:text-base ${focusRing}`;
const headingClass =
  "mb-5 font-heading text-base font-bold tracking-tight text-text sm:text-lg";
const socialClass = `flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg text-muted transition-colors hover:border-accent hover:text-accent ${focusRing}`;

export function Footer() {
  const currentYear = 2026;
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <footer className="mt-auto w-full border-t border-line bg-surface text-text">
      {/* Top: Quick counselling banner */}
      <section className="border-b border-line bg-light py-12 sm:py-14">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
              Have questions before you join? Talk to an expert.
            </h2>
            <p className="mt-3 text-base text-muted">
              Get detailed insights on curriculum, live projects, and career placement support.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <OpenModalButton
              source="footer-counselling"
              variant="primary"
              size="lg"
              className="px-6 py-3 text-base"
            >
              Book Free Counselling
            </OpenModalButton>
            <a
              href={phoneHref}
              className={`rounded-md border border-line px-6 py-3 text-base font-semibold text-text transition-colors hover:border-accent hover:text-accent ${focusRing}`}
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main 4-column layout */}
      <div className="py-14 sm:py-16">
        <div className="mx-auto max-w-[1150px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-x-5 gap-y-10 border-b border-line pb-12 md:grid-cols-4 md:gap-y-8">
            {/* Column 1: Recent News & Events */}
            <div>
              <h3 className={headingClass}>Recent News &amp; Events</h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className={`group block ${focusRing}`}>
                    <p className="text-base font-semibold leading-snug text-text transition-colors group-hover:text-accent">
                      Academic Seminar &amp; Tech Fest 2026
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      15 Oct, 2026 - Read full notice regarding registration guidelines.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className={`group block ${focusRing}`}>
                    <p className="text-base font-semibold leading-snug text-text transition-colors group-hover:text-accent">
                      New Semester Admissions Open
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      01 Nov, 2026 - Applications invited for upcoming batches.
                    </p>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Featured Programs */}
            <div>
              <h3 className={headingClass}>Featured Programs</h3>
              <ul className="space-y-2">
                {coursePlans.slice(0, 4).map((plan) => (
                  <li key={plan.slug}>
                    <Link href={`/courses/${plan.slug}`} className={linkClass}>
                      {plan.name} Track
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/courses"
                    className={`inline-block pt-3 text-sm font-bold text-accent hover:underline ${focusRing}`}
                  >
                    View All Programs &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Visit Campus */}
            <div>
              <h3 className={headingClass}>Visit Campus</h3>
              <div className="space-y-3 rounded-lg border border-line bg-bg p-4">
                <div className="flex h-32 w-full flex-col items-center justify-center rounded-md border border-line bg-surface-2 text-sm text-muted">
                  <MapPin className="mb-1 h-6 w-6 text-accent" aria-hidden="true" />
                  <span className="font-medium text-text">Interactive Campus Map</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {siteConfig.contact.address}
                </p>
                <Link
                  href="/contact"
                  className={`inline-block pt-1 text-sm font-bold text-accent hover:underline ${focusRing}`}
                >
                  Get Directions &rarr;
                </Link>
              </div>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className={headingClass}>Contact Us</h3>
              <div className="space-y-4 text-base text-muted">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a
                    href={phoneHref}
                    className={`font-medium transition-colors hover:text-accent ${focusRing}`}
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className={`font-medium transition-colors hover:text-accent ${focusRing}`}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <span className="mb-3 block text-sm font-bold text-text">Social Media</span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={socialClass}
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={socialClass}
                  >
                    <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className={socialClass}
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Brand */}
          <div className="mt-8 flex flex-col items-center gap-2 sm:items-start">
            <Link href="/" className={`flex items-center ${focusRing}`}>
              <span className="relative block h-16 w-[180px] overflow-hidden">
                <Image
                  src="/images/logo/lojo%20risezonic%20academy.png"
                  alt="Risezonic Academy"
                  width={180}
                  height={180}
                  className="absolute left-0 top-[-58px] max-w-none rounded-md bg-black"
                />
              </span>
            </Link>
            <p className="text-center text-sm font-medium text-muted sm:text-left">
              Excellence in Academic Learning &amp; Professional Growth
            </p>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
            <span>
              &copy; {currentYear} {siteConfig.name}. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
              <li>
                <Link href="/terms" className={`font-medium transition-colors hover:text-accent ${focusRing}`}>
                  Terms of Service
                </Link>
              </li>
              <li aria-hidden="true">•</li>
              <li>
                <Link href="/privacy" className={`font-medium transition-colors hover:text-accent ${focusRing}`}>
                  Privacy Policy
                </Link>
              </li>
              <li aria-hidden="true">•</li>
              <li>
                <Link href="/refund" className={`font-medium transition-colors hover:text-accent ${focusRing}`}>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
