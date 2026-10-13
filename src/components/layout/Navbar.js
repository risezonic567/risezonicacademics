"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursePlans, moduleGroups } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { useLeadModal } from "@/components/modal/LeadModalProvider";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useLeadModal();

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:block bg-light border-b border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-11 flex items-center justify-between gap-6 text-sm font-semibold text-text">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span>Free demo class this Saturday</span>
            <span aria-hidden="true">|</span>
            <OpenModalButton
              source="utility-strip"
              variant="ghost"
              className="p-0 min-h-0 h-auto text-sm font-bold text-accent underline hover:text-accent hover:bg-transparent"
            >
              Reserve a seat
            </OpenModalButton>
          </div>
          <div className="flex items-center gap-6 whitespace-nowrap">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="hover:text-accent"
            >
              {siteConfig.contact.phone}
            </a>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              WhatsApp
            </a>
            <OpenModalButton
              source="hire-from-us"
              variant="ghost"
              className="p-0 min-h-0 h-auto text-sm font-semibold text-text hover:text-accent hover:bg-transparent"
            >
              Hire from us
            </OpenModalButton>
            <a href="#" className="hover:text-accent">
              Login
            </a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 w-full bg-bg border-b border-line">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-6">
          {/* Left: logo + navigation links */}
          <div className="flex items-center gap-8 xl:gap-12">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-md bg-primary text-ink flex items-center justify-center font-heading font-bold text-lg">
                R
              </div>
              <div className="flex items-baseline gap-2 font-heading text-xl font-bold text-text">
                <span>{siteConfig.shortName}</span>
                <span className="hidden text-muted font-semibold text-base sm:inline">
                  {siteConfig.subName}
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {siteConfig.navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        aria-expanded={isDropdownOpen}
                        className={`relative px-3 py-2 text-base font-bold transition-colors flex items-center gap-1 cursor-pointer hover:text-text ${
                          isActive || isDropdownOpen
                            ? "text-accent"
                            : "text-muted"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent" />
                        )}
                      </button>

                      {/* Courses dropdown */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 pt-3 w-[600px] z-50">
                          <div className="bg-surface border border-line rounded-lg p-6 grid grid-cols-2 gap-8">
                            {/* Plans */}
                            <div>
                              <div className="text-base font-bold text-text mb-3">
                                Programs
                              </div>
                              <div className="space-y-1">
                                {coursePlans.map((plan) => (
                                  <Link
                                    key={plan.slug}
                                    href={`/courses/${plan.slug}`}
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="group/item block p-3 rounded-md hover:bg-surface-2 transition-colors"
                                  >
                                    <div className="flex items-center justify-between gap-3">
                                      <span className="text-base font-bold text-text group-hover/item:text-accent transition-colors">
                                        {plan.name}
                                      </span>
                                      {plan.isPopular ? (
                                        <span className="text-sm font-medium text-accent">
                                          Most popular
                                        </span>
                                      ) : (
                                        <span className="text-sm font-medium text-muted">
                                          {plan.duration}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm font-medium text-muted line-clamp-1 mt-0.5">
                                      {plan.targetRole}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Topics */}
                            <div>
                              <div className="text-base font-bold text-text mb-3">
                                Topics
                              </div>
                              <div className="space-y-1">
                                {moduleGroups.map((group) => (
                                  <Link
                                    key={group.id}
                                    href={`/courses#${group.id}`}
                                    onClick={() => setIsDropdownOpen(false)}
                                    className="group/item block p-3 rounded-md hover:bg-surface-2 transition-colors"
                                  >
                                    <div className="text-base font-bold text-text group-hover/item:text-accent transition-colors">
                                      {group.title}
                                    </div>
                                    <p className="text-sm font-medium text-muted line-clamp-1 mt-0.5">
                                      {group.topics.slice(0, 3).join(", ")}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                              <Link
                                href="/courses"
                                onClick={() => setIsDropdownOpen(false)}
                                className="inline-block mt-3 px-3 text-base font-semibold text-accent hover:underline"
                              >
                                All courses
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-base font-bold transition-colors hover:text-text ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: call to action */}
          <div className="flex items-center gap-5">
            <OpenModalButton
              source="navbar"
              variant="primary"
              size="sm"
              className="hidden text-base font-bold sm:inline-flex"
            >
              Book free counselling
            </OpenModalButton>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-md border border-line text-text hover:border-accent transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
