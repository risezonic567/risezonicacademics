// // "use client";

// // import React from "react";
// // import Link from "next/link";
// // import {
// //   Phone,
// //   Mail,
// //   MapPin,
// //   Clock,
// //   Sparkles,
// // } from "lucide-react";
// // import { siteConfig } from "@/data/site";
// // import { coursePlans } from "@/data/courses";
// // import { OpenModalButton } from "@/components/ui/OpenModalButton";

// // export function Footer() {
// //   const currentYear = 2026;

// //   return (
// //     <footer className="w-full bg-surface border-t border-line mt-auto pt-16 pb-24 md:pb-16 text-text">
// //       <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
// //         {/* Top Grid: 4 Columns */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-line">
// //           {/* Column 1: Brand & Short About */}
// //           <div className="space-y-4">
// //             <Link href="/" className="flex items-center gap-2.5">
// //               <div className="w-[28px] h-[28px] rounded-lg bg-primary text-ink flex items-center justify-center font-heading font-bold text-sm">
// //                 R
// //               </div>
// //               <div className="flex items-baseline gap-1.5 font-heading text-xl font-bold text-text">
// //                 <span>{siteConfig.shortName}</span>
// //                 <span className="text-muted font-normal text-sm">
// //                   {siteConfig.subName}
// //                 </span>
// //               </div>
// //             </Link>
// //             <p className="text-sm text-muted leading-relaxed">
// //               Empowering next-generation marketers with live campaigns, real ad spend, and dedicated placement support.
// //             </p>
// //             <div className="pt-2">
// //               <OpenModalButton
// //                 source="footer-brand"
// //                 variant="primary"
// //                 size="sm"
// //                 className="w-full sm:w-auto"
// //               >
// //                 Book Free Counselling
// //               </OpenModalButton>
// //             </div>
// //           </div>

// //           {/* Column 2: Programs */}
// //           <div>
// //             <h3 className="font-heading font-semibold text-text text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
// //               <Sparkles className="w-3.5 h-3.5 text-accent" />
// //               <span>Programs</span>
// //             </h3>
// //             <ul className="space-y-2.5 text-sm text-muted">
// //               {coursePlans.map((plan) => (
// //                 <li key={plan.slug}>
// //                   <Link
// //                     href={`/courses/${plan.slug}`}
// //                     className="hover:text-accent transition-colors flex items-center justify-between"
// //                   >
// //                     <span>{plan.name} Track</span>
// //                     <span className="text-xs text-muted/60">{plan.duration}</span>
// //                   </Link>
// //                 </li>
// //               ))}
// //               <li>
// //                 <Link
// //                   href="/courses"
// //                   className="text-accent text-xs font-semibold hover:underline inline-block pt-1"
// //                 >
// //                   View All Curriculum Modules &rarr;
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Column 3: Resources */}
// //           <div>
// //             <h3 className="font-heading font-semibold text-text text-sm uppercase tracking-wider mb-4">
// //               Resources
// //             </h3>
// //             <ul className="space-y-2.5 text-sm text-muted">
// //               <li>
// //                 <Link href="/courses" className="hover:text-accent transition-colors">
// //                   Syllabus & Curriculum Overview
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/placement" className="hover:text-accent transition-colors">
// //                   Placement Cell & Hiring Partners
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/blog" className="hover:text-accent transition-colors">
// //                   Marketing Guides & Insights
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="/about" className="hover:text-accent transition-colors">
// //                   Mentors & Academy Mission
// //                 </Link>
// //               </li>
// //               <li>
// //                 <OpenModalButton
// //                   source="footer-brochure"
// //                   variant="ghost"
// //                   className="p-0 text-left text-sm text-accent hover:underline hover:bg-transparent"
// //                 >
// //                   Download Brochure (PDF)
// //                 </OpenModalButton>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Column 4: Contact & Campus */}
// //           <div className="space-y-3">
// //             <h3 className="font-heading font-semibold text-text text-sm uppercase tracking-wider mb-4">
// //               Campus Contact
// //             </h3>
// //             <div className="space-y-2.5 text-xs sm:text-sm text-muted">
// //               <div className="flex items-start gap-2.5">
// //                 <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
// //                 <span>{siteConfig.contact.address}</span>
// //               </div>
// //               <div className="flex items-center gap-2.5">
// //                 <Phone className="w-4 h-4 text-accent shrink-0" />
// //                 <a
// //                   href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
// //                   className="hover:text-text transition-colors"
// //                 >
// //                   {siteConfig.contact.phone}
// //                 </a>
// //               </div>
// //               <div className="flex items-center gap-2.5">
// //                 <Mail className="w-4 h-4 text-accent shrink-0" />
// //                 <a
// //                   href={`mailto:${siteConfig.contact.email}`}
// //                   className="hover:text-text transition-colors"
// //                 >
// //                   {siteConfig.contact.email}
// //                 </a>
// //               </div>
// //               <div className="flex items-center gap-2.5">
// //                 <Clock className="w-4 h-4 text-accent shrink-0" />
// //                 <span>{siteConfig.contact.hours}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Row */}
// //         <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
// //           <div className="flex flex-wrap items-center gap-4 order-2 sm:order-1">
// //             <span>&copy; {currentYear} {siteConfig.name}. All rights reserved.</span>
// //             <div className="flex items-center gap-3">
// //               <Link href="/terms" className="hover:text-accent transition-colors">
// //                 Terms
// //               </Link>
// //               <span>•</span>
// //               <Link href="/privacy" className="hover:text-accent transition-colors">
// //                 Privacy
// //               </Link>
// //               <span>•</span>
// //               <Link href="/refund" className="hover:text-accent transition-colors">
// //                 Refund
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Social Icons */}
// //           <div className="flex items-center gap-3 order-1 sm:order-2">
// //             <a
// //               href={siteConfig.socials.linkedin}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               aria-label="LinkedIn"
// //               className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
// //             >
// //               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
// //                 <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
// //               </svg>
// //             </a>
// //             <a
// //               href={siteConfig.socials.instagram}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               aria-label="Instagram"
// //               className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
// //             >
// //               <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
// //                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
// //                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
// //                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
// //               </svg>
// //             </a>
// //             <a
// //               href={siteConfig.socials.youtube}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               aria-label="YouTube"
// //               className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
// //             >
// //               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
// //                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
// //               </svg>
// //             </a>
// //             <a
// //               href={siteConfig.socials.twitter}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               aria-label="Twitter / X"
// //               className="w-8 h-8 rounded-full bg-surface-2 border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
// //             >
// //               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
// //                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
// //               </svg>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );

// // }

// "use client";

// import React from "react";
// import Link from "next/link";
// import { siteConfig } from "@/data/site";
// import { coursePlans } from "@/data/courses";
// import { OpenModalButton } from "@/components/ui/OpenModalButton";

// const linkClass =
//   "inline-flex py-1.5 text-[17px] text-muted transition-colors hover:text-accent";
// const headingClass = "font-heading font-semibold text-text text-lg mb-4";

// export function Footer() {
//   const currentYear = 2026;

//   return (
//     <footer className="mt-auto w-full text-text">
//       <section className="bg-light py-14">
//         <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
//           <h2 className="max-w-2xl font-heading text-[clamp(2rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-text">
//             Have questions before you join? Talk to a counsellor.
//           </h2>
//           <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
//             <OpenModalButton
//               source="footer-counselling"
//               variant="primary"
//               className="text-[17px] hover:bg-primary hover:border-accent"
//             >
//               Book free counselling
//             </OpenModalButton>
//             <a
//               href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
//               className="text-[17px] text-text transition-colors hover:text-accent"
//             >
//               Call {siteConfig.contact.phone}
//             </a>
//             <a
//               href={siteConfig.contact.whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[17px] text-text transition-colors hover:text-accent"
//             >
//               WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>

//       <div className="bg-surface pt-16 pb-24 md:pb-16">
//         <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
//           <div className="grid grid-cols-1 gap-10 border-b border-line pb-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
//             <div className="space-y-5">
//               <Link href="/" className="flex items-center gap-2.5">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-heading text-base font-bold text-ink">
//                   R
//                 </span>
//                 <span className="font-heading text-xl font-bold text-text">
//                   {siteConfig.shortName}
//                   <span className="ml-2 text-[15px] font-normal text-muted">
//                     {siteConfig.subName}
//                   </span>
//                 </span>
//               </Link>
//               <p className="max-w-sm text-[17px] leading-relaxed text-muted">
//                 Practical digital marketing training with live mentors and real campaigns.
//               </p>
//               <div className="space-y-2 text-base leading-relaxed text-muted">
//                 <p>{siteConfig.contact.address}</p>
//                 <p>{siteConfig.contact.hours}</p>
//               </div>
//               <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
//                 <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
//                   LinkedIn
//                 </a>
//                 <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
//                   Instagram
//                 </a>
//                 <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
//                   YouTube
//                 </a>
//                 <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
//                   X
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className={headingClass}>Programs</h3>
//               <ul>
//                 {coursePlans.map((plan) => (
//                   <li key={plan.slug}>
//                     <Link href={`/courses/${plan.slug}`} className={linkClass}>
//                       {plan.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className={headingClass}>Learn</h3>
//               <ul>
//                 <li>
//                   <Link href="/courses" className={linkClass}>Syllabus</Link>
//                 </li>
//                 <li>
//                   <OpenModalButton
//                     source="footer-free-class"
//                     variant="ghost"
//                     className="px-0 py-1.5 text-left text-[17px] text-muted hover:!bg-transparent hover:text-accent"
//                   >
//                     Free class
//                   </OpenModalButton>
//                 </li>
//                 <li>
//                   <Link href="/blog" className={linkClass}>Blog</Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className={headingClass}>Company</h3>
//               <ul>
//                 <li><Link href="/about" className={linkClass}>About</Link></li>
//                 <li><Link href="/placement" className={linkClass}>Placement</Link></li>
//                 <li><Link href="/contact" className={linkClass}>Contact</Link></li>
//                 <li><Link href="/contact" className={linkClass}>Hire from us</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className={headingClass}>Support</h3>
//               <ul>
//                 <li>
//                   <a
//                     href={siteConfig.contact.whatsappLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={linkClass}
//                   >
//                     WhatsApp
//                   </a>
//                 </li>
//                 <li>
//                   <a href={`mailto:${siteConfig.contact.email}`} className={linkClass}>
//                     Email
//                   </a>
//                 </li>
//                 <li>
//                   <Link href="/refund" className={linkClass}>Refund policy</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-line py-6 text-base text-muted">
//             {["[City 1]", "[City 2]", "[City 3]"].map((city) => (
//               <Link
//                 key={city}
//                 href="/contact"
//                 className="transition-colors hover:text-accent"
//               >
//                 Best digital marketing institute in {city}
//               </Link>
//             ))}
//           </div>

//           <div className="flex flex-col gap-4 pt-6 text-[15px] text-muted sm:flex-row sm:items-center sm:justify-between">
//             <span>&copy; {currentYear} {siteConfig.name}. All rights reserved.</span>
//             <div className="flex gap-5">
//               <Link href="/terms" className="transition-colors hover:text-accent">Terms</Link>
//               <Link href="/privacy" className="transition-colors hover:text-accent">Privacy</Link>
//               <Link href="/refund" className="transition-colors hover:text-accent">Refund</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles 
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursePlans } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

const linkClass = "inline-flex py-2 text-[15px] sm:text-base text-muted transition-colors hover:text-accent font-medium";
const headingClass = "font-heading font-bold text-text text-base sm:text-lg uppercase tracking-wider mb-5 flex items-center gap-2";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-auto w-full text-text border-t border-line bg-surface">
      {/* Top Section: Newsletter / Quick Counselling Banner */}
      <section className="bg-light py-16 border-b border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-text">
              Have questions before you join? Talk to an expert.
            </h2>
            <p className="text-base text-muted mt-2">
              Get detailed insights on curriculum, live projects, and career placement support.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <OpenModalButton
              source="footer-counselling"
              variant="primary"
              size="lg"
              className="text-base px-6 py-3"
            >
              Book Free Counselling
            </OpenModalButton>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="text-base font-semibold text-text transition-colors hover:text-accent px-5 py-3 border border-line rounded-lg hover:border-accent"
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main 4-Column Academic Layout */}
      <div className="pt-20 pb-16">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 border-b border-line pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            
            {/* Column 1: Recent News & Events */}
            <div>
              <h3 className={headingClass}>
                {/* <Sparkles className="w-4 h-4 text-accent" /> */}
                <span>Recent News & Events</span>
              </h3>
              <ul className="space-y-5 text-base text-muted">
                <li>
                  <a href="#" className="block group">
                    <p className="font-semibold text-text text-base group-hover:text-accent transition-colors leading-snug">
                      Academic Seminar & Tech Fest 2026
                    </p>
                    <p className="text-sm text-muted/80 mt-1">15 Oct, 2026 - Read full notice regarding registration guidelines.</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <p className="font-semibold text-text text-base group-hover:text-accent transition-colors leading-snug">
                      New Semester Admissions Open
                    </p>
                    <p className="text-sm text-muted/80 mt-1">01 Nov, 2026 - Applications invited for upcoming batches.</p>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Featured Programs */}
            <div>
              <h3 className={headingClass}>Featured Programs</h3>
              <ul className="space-y-3 text-base text-muted">
                {coursePlans.slice(0, 4).map((plan) => (
                  <li key={plan.slug}>
                    <Link href={`/courses/${plan.slug}`} className={linkClass}>
                      {plan.name} Track
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/courses" className="text-accent text-sm font-bold hover:underline inline-block pt-3">
                    View All Programs &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Visit Campus & Larger Map Box */}
            <div className="space-y-4">
              <h3 className={headingClass}>Visit Campus</h3>
              <div className="rounded-xl overflow-hidden border border-line bg-light p-3.5 space-y-3">
                <div className="w-full h-36 rounded-lg bg-surface/60 flex flex-col items-center justify-center text-sm text-muted border border-line/60 shadow-inner">
                  <MapPin className="w-6 h-6 text-accent mb-1" />
                  <span className="font-medium text-text">Interactive Campus Map</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {siteConfig.contact.address}
                </p>
                <Link href="/contact" className="text-sm font-bold text-accent hover:underline inline-block pt-1">
                  Get Directions &rarr;
                </Link>
              </div>
            </div>

            {/* Column 4: Contact Us & Larger Social Icons */}
            <div className="space-y-5">
              <h3 className={headingClass}>Contact Us</h3>
              <div className="space-y-3.5 text-base text-muted">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-text font-medium transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-text font-medium transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <span className="block text-sm uppercase tracking-wider text-text font-bold mb-3">
                  Social Media
                </span>
                <div className="flex items-center gap-3.5">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-light border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
                    </svg>
                  </a>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-light border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
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
                    className="w-10 h-10 rounded-full bg-light border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Center Brand Logo Row */}
          <div className="py-10 border-b border-line flex flex-col items-center justify-center text-center">
            <Link href="/" className="flex items-center gap-3 mb-2">
              <div className="w-[38px] h-[38px] rounded-xl bg-primary text-on-primary flex items-center justify-center font-heading font-bold text-lg shadow">
                R
              </div>
              <span className="font-heading text-2xl font-bold tracking-wider text-text">
                {siteConfig.shortName} <span className="text-muted font-normal text-base">{siteConfig.subName}</span>
              </span>
            </Link>
            <p className="text-sm text-muted font-medium">Excellence in Academic Learning & Professional Growth</p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
            <div className="flex flex-wrap items-center gap-4">
              <span>&copy; {currentYear} {siteConfig.name}. All Rights Reserved.</span>
            </div>
            <div className="flex items-center gap-5">
              <Link href="/terms" className="hover:text-accent transition-colors font-medium">Terms of Service</Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-accent transition-colors font-medium">Privacy Policy</Link>
              <span>•</span>
              <Link href="/refund" className="hover:text-accent transition-colors font-medium">Cookie Settings</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}