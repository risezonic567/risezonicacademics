"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursePlans, moduleGroups } from "@/data/courses";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { useLeadModal } from "@/components/modal/LeadModalProvider";
import { SiteImage } from "@/components/ui/SiteImage";
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
      <div className="hidden lg:block bg-[#0b1111] border-b border-white/10">
        {/* <div className="mx-auto max-w-[1600px] px-4 lg:px-4 h-11 flex items-center justify-between gap-6 text-sm font-semibold text-white">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span>Free demo class this Saturday</span>
            <span aria-hidden="true">|</span>
            <OpenModalButton
              source="utility-strip"
              variant="ghost"
              className="p-0 min-h-0 h-auto text-sm font-bold text-accent underline hover:text-accent "
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
              className="p-0 min-h-0 h-auto text-sm font-semibold text-white hover:text-accent "
            >
              Hire from us
            </OpenModalButton>
          
          </div>
        </div> */}
      </div>
      <header className="sticky top-0 z-40 w-full bg-[#0b1111] border-b border-white/10">
        <div className="mx-auto max-w-[1600px] px-4 lg:px-4 h-[80px] flex items-center justify-between gap-6">
          <Link href="/" className="ml-4 flex items-center shrink-0 xl:ml-[200px]">
            <span className="relative block h-14 w-[150px] overflow-hidden">
              <Image
                src="/images/logo/lojo%20risezonic%20academy.png"
                alt="Risezonic Academy"
                width={150}
                height={150}
                className="absolute left-0 top-[-48px] max-w-none"
                priority
              />
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav aria-label="Main" className="hidden lg:flex items-center gap-1">
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
                        aria-current={isActive ? "page" : undefined}
                        className={`relative px-3 py-2 text-base font-bold transition-colors flex items-center gap-1 cursor-pointer hover:text-white ${
                          isActive || isDropdownOpen
                            ? "text-accent"
                            : "text-white"
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
                                    <div className="flex items-center gap-3">
                                      <span className="h-14 w-14 shrink-0 overflow-hidden rounded-md">
                                        <SiteImage
                                          image={plan.image}
                                          fill
                                          className="h-full w-full rounded-md object-cover"
                                          sizes="56px"
                                        />
                                      </span>
                                      <span className="min-w-0 flex-1">
                                        <span className="flex items-center justify-between gap-3">
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
                                        </span>
                                        <span className="mt-0.5 block line-clamp-1 text-sm font-medium text-muted">
                                          {plan.targetRole}
                                        </span>
                                      </span>
                                    </div>
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
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-3 py-2 text-base font-bold transition-colors hover:text-white ${
                      isActive ? "text-accent" : "text-white"
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
            <OpenModalButton
              source="navbar"
              variant="primary"
              size="md"
              className="hidden text-base font-bold lg:inline-flex"
            >
              Book free counselling
            </OpenModalButton>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-md border border-white/20 text-white hover:border-accent transition-colors cursor-pointer"
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
