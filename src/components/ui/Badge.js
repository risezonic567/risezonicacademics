"use client";

import React from "react";

export function Badge({
  children,
  withDot = false,
  variant = "accent", // 'accent' | 'primary' | 'muted'
  className = "",
}) {
  const variantStyles = {
    accent: "bg-accent/12 border-accent/35 text-accent",
    primary: "bg-light border-primary/40 text-accent",
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
