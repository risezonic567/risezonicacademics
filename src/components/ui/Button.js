"use client";

import React from "react";
import Link from "next/link";

export function Button({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = "md", // 'sm' | 'md' | 'lg'
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg border transition-colors duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-primary text-ink border-primary hover:bg-accent-hover hover:border-accent-hover",
    secondary:
      "bg-surface border border-line text-text hover:border-primary hover:text-accent-hover",
    outline:
      "bg-transparent border border-line text-text hover:border-primary hover:text-accent-hover",
    ghost:
      "bg-transparent border border-transparent text-muted hover:text-text hover:bg-surface-2",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
}
