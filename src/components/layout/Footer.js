// "use client";

// import React from "react";
// import Link from "next/link";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Sparkles,
// } from "lucide-react";
// import { siteConfig } from "@/data/site";
// import { coursePlans } from "@/data/courses";
// import { OpenModalButton } from "@/components/ui/OpenModalButton";

// export function Footer() {
//   const currentYear = 2026;

//   return (
//     <footer className="w-full bg-surface border-t border-line mt-auto pt-16 pb-24 md:pb-16 text-text">
//       <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
//         {/* Top Grid: 4 Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-line">
//           {/* Column 1: Brand & Short About */}
//           <div className="space-y-4">
//             <Link href="/" className="flex items-center gap-2.5">
//               <div className="w-[28px] h-[28px] rounded-lg bg-primary text-ink flex items-center justify-center font-heading font-bold text-sm">
//                 R
//               </div>
//               <div className="flex items-baseline gap-1.5 font-heading text-xl font-bold text-text">
//                 <span>{siteConfig.shortName}</span>
//                 <span className="text-muted font-normal text-sm">
//                   {siteConfig.subName}
//                 </span>
//               </div>
//             </Link>
//             <p className="text-sm text-muted leading-relaxed">
//               Empowering next-generation marketers with live campaigns, real ad spend, and dedicated placement support.
//             </p>
//             <div className="pt-2">
//               <OpenModalButton
//                 source="footer-brand"
//                 variant="primary"
//                 size="sm"
//                 className="w-full sm:w-auto"
//               >
//                 Book Free Counselling
//               </OpenModalButton>
//             </div>
//           </div>

//           {/* Column 2: Programs */}
//           <div>
//             <h3 className="font-heading font-semibold text-text text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
//               <Sparkles className="w-3.5 h-3.5 text-accent" />
//               <span>Programs</span>
//             </h3>
//             <ul className="space-y-2.5 text-sm text-muted">
//               {coursePlans.map((plan) => (
//                 <li key={plan.slug}>
//                   <Link
//                     href={`/courses/${plan.slug}`}
//                     className="hover:text-accent transition-colors flex items-center justify-between"
//                   >
//                     <span>{plan.name} Track</span>
//                     <span className="text-xs text-muted/60">{plan.duration}</span>
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <Link
//                   href="/courses"
//                   className="text-accent text-xs font-semibold hover:underline inline-block pt-1"
//                 >
//                   View All Curriculum Modules &rarr;
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: Resources */}
//           <div>
//             <h3 className="font-heading font-semibold text-text text-sm uppercase tracking-wider mb-4">
//               Resources
//             </h3>
//             <ul className="space-y-2.5 text-sm text-muted">
//               <li>
//                 <Link href="/courses" className="hover:text-accent transition-colors">
//                   Syllabus & Curriculum Overview
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/placement" className="hover:text-accent transition-colors">
//                   Placement Cell & Hiring Partners
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/blog" className="hover:text-accent transition-colors">
//                   Marketing Guides & Insights
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-accent transition-colors">
//                   Mentors & Academy Mission
//                 </Link>
//               </li>
//               <li>
//                 <OpenModalButton
//                   source="footer-brochure"
//                   variant="ghost"
//                   className="p-0 text-left text-sm text-accent hover:underline hover:bg-transparent"
//                 >
//                   Download Brochure (PDF)
//                 </OpenModalButton>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4: Contact & Campus */}
//           <div className="space-y-3">
//             <h3 className="font-heading font-semibold text-text text-sm uppercase tracking-wider mb-4">
//               Campus Contact
//             </h3>
//             <div className="space-y-2.5 text-xs sm:text-sm text-muted">
//               <div className="flex items-start gap-2.5">
//                 <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
//                 <span>{siteConfig.contact.address}</span>
//               </div>
//               <div className="flex items-center gap-2.5">
//                 <Phone className="w-4 h-4 text-accent shrink-0" />
//                 <a
//                   href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
//                   className="hover:text-text transition-colors"
//                 >
//                   {siteConfig.contact.phone}
//                 </a>
//               </div>
//               <div className="flex items-center gap-2.5">
//                 <Mail className="w-4 h-4 text-accent shrink-0" />
//                 <a
//                   href={`mailto:${siteConfig.contact.email}`}
//                   className="hover:text-text transition-colors"
//                 >
//                   {siteConfig.contact.email}
//                 </a>
//               </div>
//               <div className="flex items-center gap-2.5">
//                 <Clock className="w-4 h-4 text-accent shrink-0" />
//                 <span>{siteConfig.contact.hours}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Row */}
//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
//           <div className="flex flex-wrap items-center gap-4 order-2 sm:order-1">
//             <span>&copy; {currentYear} {siteConfig.name}. All rights reserved.</span>
//             <div className="flex items-center gap-3">
//               <Link href="/terms" className="hover:text-accent transition-colors">
//                 Terms
//               </Link>
//               <span>•</span>
//               <Link href="/privacy" className="hover:text-accent transition-colors">
//                 Privacy
//               </Link>
//               <span>•</span>
//               <Link href="/refund" className="hover:text-accent transition-colors">
//                 Refund
//               </Link>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-3 order-1 sm:order-2">
//             <a
//               href={siteConfig.socials.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
//             >
//               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                 <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
//               </svg>
//             </a>
//             <a
//               href={siteConfig.socials.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
//             >
//               <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//               </svg>
//             </a>
//             <a
//               href={siteConfig.socials.youtube}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
//             >
//               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//               </svg>
//             </a>
//             <a
//               href={siteConfig.socials.twitter}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Twitter / X"
//               className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
//             >
//               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );

// }

"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursePlans } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

const linkClass = "text-base text-muted hover:text-accent transition-colors";
const headingClass = "font-heading font-semibold text-text text-lg mb-4";
const socialClass =
  "w-11 h-11 rounded-md border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-surface border-t border-line mt-auto pt-16 pb-24 md:pb-16 text-text">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-line">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-primary text-ink flex items-center justify-center font-heading font-bold text-base">
                R
              </div>
              <div className="flex items-baseline gap-2 font-heading text-xl font-bold text-text">
                <span>{siteConfig.shortName}</span>
                <span className="text-muted font-normal text-base">
                  {siteConfig.subName}
                </span>
              </div>
            </Link>
            <p className="text-base text-muted leading-relaxed max-w-sm">
              Practical digital marketing training with live mentors and real
              campaigns.
            </p>
            <div className="pt-2">
              <OpenModalButton
                source="footer-brand"
                variant="primary"
                size="sm"
                className="w-full sm:w-auto min-h-[48px]"
              >
                Book free counselling
              </OpenModalButton>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className={headingClass}>Programs</h3>
            <ul className="space-y-3">
              {coursePlans.map((plan) => (
                <li key={plan.slug}>
                  <Link
                    href={`/courses/${plan.slug}`}
                    className={`${linkClass} flex items-center justify-between gap-3`}
                  >
                    <span>{plan.name}</span>
                    <span className="text-sm text-muted">{plan.duration}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="text-base font-semibold text-accent hover:underline inline-block pt-1"
                >
                  All courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={headingClass}>Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className={linkClass}>
                  Syllabus
                </Link>
              </li>
              <li>
                <Link href="/placement" className={linkClass}>
                  Placement
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <OpenModalButton
                  source="footer-brochure"
                  variant="ghost"
                  className="p-0 text-left text-base text-accent hover:underline hover:bg-transparent"
                >
                  Download brochure
                </OpenModalButton>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={headingClass}>Contact</h3>
            <div className="space-y-3 text-base text-muted">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-text transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-text transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-sm text-muted">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 order-2 sm:order-1">
            <span>
              &copy; {currentYear} {siteConfig.name}
            </span>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/refund" className="hover:text-accent transition-colors">
              Refund
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialClass}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
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
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
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
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className={socialClass}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
