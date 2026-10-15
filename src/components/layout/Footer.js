"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursePlans } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light";

const footerLinkClass = `text-base text-white/75 transition-colors hover:text-primary-light ${focusRing}`;
const socialLinkClass = `flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-colors hover:border-primary-light/60 hover:bg-primary-light/10 hover:text-primary-light ${focusRing}`;

export function Footer() {
  const [currentYear, setCurrentYear] = useState(null);
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`;

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto w-full overflow-hidden bg-[#071a19] text-white">
      <div className="border-b border-white/10 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.2),_transparent_55%)]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-12 sm:px-8 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-primary-light/30 bg-primary-light/10 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.12em] text-primary-light">
              Start your next chapter
            </span>
            <h2 style={{ color: "#fff" }} className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Build skills that move your career forward.
            </h2>
            <p style={{ color: "rgba(255,255,255,.72)" }} className="mt-2 text-base leading-7 sm:text-lg">
              Talk to our team about the right digital marketing program for you.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <OpenModalButton
              source="footer-counselling"
              variant="primary"
              size="lg"
              className="group px-6 py-3.5 text-base font-bold shadow-[0_8px_30px_rgba(20,184,166,0.18)] transition hover:shadow-[0_8px_36px_rgba(20,184,166,0.3)]"
            >
              Book free counselling
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </OpenModalButton>
            <a
              href={phoneHref}
              className={`inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/[0.06] ${focusRing}`}
            >
              <Phone className="mr-2 h-4 w-4 text-primary-light" />
              Call our team
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pb-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" aria-label="Risezonic Academics home" className={`inline-flex ${focusRing}`}>
              <span className="relative block h-14 w-[170px] overflow-hidden">
                <Image
                  src="/images/logo/lojo%20risezonic%20academy.png"
                  alt="Risezonic Academy"
                  width={170}
                  height={170}
                  className="absolute left-0 top-[-55px] max-w-none"
                />
              </span>
            </Link>
            <p style={{ color: "rgba(255,255,255,.72)" }} className="mt-3 max-w-sm text-base leading-7">
              Mentor-led digital marketing education built around real projects, practical skills and career support.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialLinkClass}>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
                </svg>
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialLinkClass}>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r=".75" className="fill-current stroke-none" />
                </svg>
              </a>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialLinkClass}>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 style={{ color: "#fff" }} className="mb-4 font-heading text-base font-bold uppercase tracking-[0.1em]">
              Programs
            </h3>
            <ul className="space-y-4">
              {coursePlans.slice(0, 4).map((plan) => (
                <li key={plan.slug}>
                  <Link href={`/courses/${plan.slug}`} className={footerLinkClass}>
                    {plan.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/courses" className={`inline-flex items-center gap-1 text-base font-semibold text-primary-light transition-colors hover:text-white ${focusRing}`}>
                  All courses <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 style={{ color: "#fff" }} className="mb-4 font-heading text-base font-bold uppercase tracking-[0.1em]">
              Explore
            </h3>
            <ul className="space-y-4">
              <li><Link href="/about" className={footerLinkClass}>About us</Link></li>
              <li><Link href="/placement" className={footerLinkClass}>Placements</Link></li>
              <li><Link href="/blog" className={footerLinkClass}>Blog &amp; insights</Link></li>
              <li><Link href="/contact" className={footerLinkClass}>Contact</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h3 style={{ color: "#fff" }} className="mb-4 font-heading text-base font-bold uppercase tracking-[0.1em]">
              Get in touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={phoneHref} className={`group flex items-start gap-3 ${focusRing}`}>
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-primary-light transition-colors group-hover:bg-primary-light/10">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white/55">Call admissions</span>
                    <span className="mt-0.5 block break-words text-base font-medium text-white/90 transition-colors group-hover:text-primary-light">{siteConfig.contact.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className={`group flex items-start gap-3 ${focusRing}`}>
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-primary-light transition-colors group-hover:bg-primary-light/10">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white/55">Email us</span>
                    <span className="mt-0.5 block break-words text-base font-medium text-white/90 transition-colors group-hover:text-primary-light">{siteConfig.contact.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-primary-light">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white/55">Visit us</span>
                  <span className="mt-0.5 block text-base leading-6 text-white/85">{siteConfig.contact.address}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-primary-light">
                  <Clock3 className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white/55">Office hours</span>
                  <span className="mt-0.5 block text-base text-white/85">{siteConfig.contact.hours}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <span className="text-sm text-white/55 sm:text-base">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li><Link href="/terms" className={footerLinkClass}>Terms</Link></li>
            <li><Link href="/privacy" className={footerLinkClass}>Privacy</Link></li>
            <li><Link href="/refund" className={footerLinkClass}>Refunds</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
