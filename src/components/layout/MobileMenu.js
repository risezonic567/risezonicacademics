"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { coursePlans } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { SiteImage } from "@/components/ui/SiteImage";

export function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    onCloseRef.current();
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 z-50 flex w-[88%] max-w-[380px] flex-col justify-between overflow-y-auto border-l border-white/10 bg-[#0b1111] text-white lg:hidden"
            aria-label="Mobile navigation"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <Link href="/" onClick={onClose} className="flex items-center">
                  <span className="relative block h-14 w-[150px] overflow-hidden">
                    <Image
                      src="/images/logo/lojo%20risezonic%20academy.png"
                      alt="Risezonic Academy"
                      width={150}
                      height={150}
                      className="absolute left-0 top-[-48px] max-w-none"
                    />
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="p-5">
                <div className="space-y-1">
                  {siteConfig.navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className={`flex items-center justify-between px-3 py-3 rounded-md text-lg font-bold transition-colors ${
                          isActive
                            ? "bg-white/10 text-accent"
                            : "text-white hover:bg-white/10 hover:text-accent"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="h-5 w-5 text-white/60" />
                      </Link>
                    );
                  })}
                </div>

                {/* Programs */}
                <div className="mt-5 border-t border-white/10 pt-5">
                  <div className="mb-2 px-3 text-base font-semibold text-white">
                    Programs
                  </div>
                  <div className="space-y-1">
                    {coursePlans.map((plan) => (
                      <Link
                        key={plan.slug}
                        href={`/courses/${plan.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <span className="h-10 w-10 shrink-0 overflow-hidden rounded-md">
                          <SiteImage
                            image={plan.image}
                            fill
                            className="h-full w-full rounded-md object-cover"
                            sizes="40px"
                          />
                        </span>
                        <span className="min-w-0 flex-1 font-semibold">{plan.name}</span>
                        <span className="text-sm text-white/60">{plan.level}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Utility links */}
                <div className="mt-5 border-t border-white/10 px-3 pt-5">
                  <div className="flex flex-col">
                    <OpenModalButton
                      source="hire-from-us-mobile"
                      variant="ghost"
                      onClick={onClose}
                      className="w-full justify-start px-0 py-3 text-base font-semibold text-white hover:bg-transparent hover:text-accent"
                    >
                      Hire from us
                    </OpenModalButton>
                    <Link
                      href="#"
                      onClick={onClose}
                      className="py-3 text-base font-semibold text-white hover:text-accent"
                    >
                      Login
                    </Link>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="py-3 text-base font-semibold text-white hover:text-accent"
                    >
                      Call us
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            {/* Bottom call to action */}
            <div className="border-t border-white/10 p-5">
              <div className="flex gap-2">
                <OpenModalButton
                  source="mobile-menu"
                  variant="primary"
                  className="min-h-[56px] flex-1 px-2 py-2 text-sm font-bold leading-tight"
                  onClick={onClose}
                >
                  Book free counselling
                </OpenModalButton>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="inline-flex min-h-[56px] flex-1 items-center justify-center rounded-lg border border-white/20 px-2 py-2 text-center text-sm font-bold leading-tight text-white transition-colors hover:border-accent hover:text-accent"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
