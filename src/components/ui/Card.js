"use client";

import React from "react";

export function Card({
  children,
  className = "",
  hoverEffect = true,
  variant = "surface", // 'surface' | 'glass' | 'surface-2'
  ...props
}) {
  const variantStyles = {
    surface: "bg-surface border border-line",
    glass: "bg-surface border border-line",
    "surface-2": "bg-surface-2 border border-line",
  };

  const hoverClass = hoverEffect
    ? "transition-colors duration-200 hover:border-primary/40"
    : "";

  return (
    <div
      className={`rounded-xl border ${variantStyles[variant] || variantStyles.surface} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
