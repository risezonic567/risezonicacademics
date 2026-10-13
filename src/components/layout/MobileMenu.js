"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { coursePlans } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

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
            className="fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-[380px] bg-surface border-l border-line flex flex-col justify-between lg:hidden overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div>
              {/* Header */}
              <div className="p-5 border-b border-line flex items-center justify-between">
                <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-md bg-primary text-ink flex items-center justify-center font-heading font-bold text-lg">
                    R
                  </div>
                  <div className="flex items-baseline gap-2 font-heading text-xl font-bold text-text">
                    <span>{siteConfig.shortName}</span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-11 h-11 rounded-md border border-line text-text hover:border-accent flex items-center justify-center transition-colors"
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
                            ? "bg-light text-accent"
                            : "text-text hover:bg-surface-2"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-5 h-5 text-muted" />
                      </Link>
                    );
                  })}
                </div>

                {/* Programs */}
                <div className="pt-5 mt-5 border-t border-line">
                  <div className="px-3 mb-2 text-base font-semibold text-text">
                    Programs
                  </div>
                  <div className="space-y-1">
                    {coursePlans.map((plan) => (
                      <Link
                        key={plan.slug}
                        href={`/courses/${plan.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-semibold text-muted hover:text-text hover:bg-surface-2 transition-colors"
                      >
                        <span className="font-semibold">{plan.name}</span>
                        <span className="text-sm text-muted">{plan.level}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Utility links */}
                <div className="pt-5 mt-5 border-t border-line px-3">
                  <div className="flex flex-col">
                    <OpenModalButton
                      source="hire-from-us-mobile"
                      variant="ghost"
                      onClick={onClose}
                      className="w-full justify-start px-0 py-3 text-base font-semibold text-text hover:bg-transparent hover:text-accent"
                    >
                      Hire from us
                    </OpenModalButton>
                    <Link
                      href="#"
                      onClick={onClose}
                      className="py-3 text-base font-semibold text-text hover:text-accent"
                    >
                      Login
                    </Link>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="py-3 text-base font-semibold text-text hover:text-accent"
                    >
                      Call us
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            {/* Bottom call to action */}
            <div className="p-5 border-t border-line">
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
                  className="inline-flex min-h-[56px] flex-1 items-center justify-center rounded-lg border border-line px-2 py-2 text-center text-sm font-bold leading-tight text-text transition-colors hover:border-accent hover:text-accent"
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
