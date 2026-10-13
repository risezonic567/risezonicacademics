"use client";

import React from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  highlightWord,
  subtitle,
  align = "center", // 'center' | 'left'
  className = "",
}) {
  let renderedTitle = title;

  const alignmentClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignmentClasses} ${className}`}>
      <Reveal>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-text leading-tight tracking-tight">
          {renderedTitle}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.08}>
          <p className="mt-4 text-base sm:text-lg text-muted font-normal leading-relaxed max-w-[65ch]">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
