"use client";

import React from "react";

export function Badge({
  children,
  withDot = false,
  variant = "accent", // 'accent' | 'primary' | 'muted'
  className = "",
}) {
  const variantStyles = {
    accent: "bg-[#D1FAE5] border-[#14B8A6]/30 text-[#0F766E]",
    primary: "bg-[#14B8A6] border-transparent text-white",
    secondary: "bg-[#F0F5F3] border-line text-text",
    muted: "bg-surface-2 border-line text-muted",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-[11px] sm:text-xs font-medium ${
        variantStyles[variant] || variantStyles.accent
      } ${className}`}
    >
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
