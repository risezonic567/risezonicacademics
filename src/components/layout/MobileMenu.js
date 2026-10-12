"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { coursePlans } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

export function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();
  const onCloseRef = useRef(onClose);

  // Always keep the latest onClose without re-running the route effect
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Lock body scroll when the menu is open
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

  // Close the menu only when the route changes
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
            className="fixed inset-0 z-50 bg-black/60 lg:hidden"
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
                  <div className="w-9 h-9 rounded-md bg-primary text-bg flex items-center justify-center font-heading font-bold text-lg">
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

              {/* Links */}
              <nav className="p-5">
                <div className="space-y-1">
                  {siteConfig.navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className={`flex items-center justify-between px-3 py-3 rounded-md text-lg font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-accent"
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
                        className="flex items-center justify-between px-3 py-2.5 rounded-md text-base text-muted hover:text-text hover:bg-surface-2 transition-colors"
                      >
                        <span>{plan.name}</span>
                        <span className="text-sm text-muted">{plan.level}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Phone */}
                <div className="pt-5 mt-5 border-t border-line px-3">
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 text-base text-text hover:text-accent transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </nav>
            </div>

            {/* Bottom call to action */}
            <div className="p-5 border-t border-line">
              <OpenModalButton
                source="mobile-menu"
                variant="primary"
                className="w-full py-3"
                onClick={onClose}
              >
                Book free counselling
              </OpenModalButton>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
