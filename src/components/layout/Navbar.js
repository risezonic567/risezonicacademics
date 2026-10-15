"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { useLeadModal } from "@/components/modal/LeadModalProvider";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useLeadModal();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-colors duration-300 ${
          isHomePage ? "-mb-20" : ""
        } ${
          isHomePage && !isScrolled
            ? "border-transparent bg-transparent"
            : "border-white/10 bg-[#0b1111]"
        }`}
      >
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
