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
    surface: "bg-surface border-line",
    glass: "bg-white/[0.04] backdrop-blur-sm border-line",
    "surface-2": "bg-surface-2 border-line",
  };

  const hoverClass = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/5"
    : "";

  return (
    <div
      className={`rounded-[16px] border ${variantStyles[variant] || variantStyles.surface} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
