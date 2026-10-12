"use client";

import React from "react";
import { useLeadModal } from "@/components/modal/LeadModalProvider";
import { Button } from "./Button";

export function OpenModalButton({
  source = "cta",
  course = "",
  variant = "primary",
  size = "md",
  children = "Book Free Counselling",
  className = "",
  ...props
}) {
  const { openModal } = useLeadModal();

  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(e);
    }
    openModal({ source, course });
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}
