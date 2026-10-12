"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Accordion({
  items,
  allowMultiple = false,
  className = "",
  glow = true,
}) {
  const [openIds, setOpenIds] = useState([]);

  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-colors ${
              isOpen
                ? `bg-surface border-accent/40 ${
                    glow ? "shadow-lg shadow-accent/5" : ""
                  }`
                : "bg-surface/60 border-line hover:border-primary/40"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent rounded-2xl"
            >
              <span className="font-heading font-semibold text-text text-base sm:text-lg">
                {item.question || item.title}
              </span>
              <span
                className={`p-1.5 rounded-full border border-line text-muted transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 text-accent border-accent/40" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-muted text-sm sm:text-base border-t border-line/40 leading-relaxed">
                    {item.answer || item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
