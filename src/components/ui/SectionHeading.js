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
  // If highlightWord is provided, split the title and style the highlightWord with accent
  let renderedTitle = title;
  if (highlightWord && typeof title === "string" && title.includes(highlightWord)) {
    const parts = title.split(highlightWord);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-accent">{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  }

  const alignmentClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignmentClasses} ${className}`}>
      <Reveal>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-text leading-[1.15] tracking-tight">
          {renderedTitle}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={0.08}>
          <p className="mt-4 text-base sm:text-lg text-muted font-normal leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
