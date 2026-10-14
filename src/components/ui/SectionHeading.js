"use client";

import React from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  highlightWord,
  subtitle,
  align = "center", // 'center' | 'left'
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) {
  let renderedTitle = title;

  const alignmentClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignmentClasses} ${className}`}>
      <Reveal>
        <h2
          className={
            titleClassName ||
            "text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-text leading-tight tracking-tight"
          }
        >
          {renderedTitle}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.08}>
          <p
            className={
              subtitleClassName ||
              "mt-4 text-base sm:text-lg text-muted font-normal leading-relaxed max-w-[65ch]"
            }
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
