"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LeadForm } from "./LeadForm";

export function LeadModal({ isOpen, onClose, source, initialCourse }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/50"
              />
            </Dialog.Overlay>

            {/* Modal Dialog Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-2 pointer-events-none sm:p-4">
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="pointer-events-auto relative flex max-h-[88dvh] min-h-0 w-full max-w-[390px] flex-col overflow-hidden rounded-2xl border border-line bg-surface focus:outline-none sm:max-h-[85vh] sm:rounded-[20px]"
                  aria-describedby="lead-modal-description"
                >
                  {/* Modal Header */}
                  <div className="relative flex shrink-0 items-start justify-between border-b border-line bg-surface-2 px-4 pb-3 pt-3.5 sm:px-5 sm:pb-3.5 sm:pt-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-medium mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        <span>Free 1-on-1 Session</span>
                      </div>
                      <Dialog.Title className="pr-2 font-heading text-lg font-bold text-text sm:text-2xl">
                        Book Free Counselling
                      </Dialog.Title>
                      <Dialog.Description
                        id="lead-modal-description"
                        className="mt-1 text-xs leading-relaxed text-muted sm:text-sm"
                      >
                        Talk to our career mentors, audit course roadmaps, and reserve your seat.
                      </Dialog.Description>
                    </div>

                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Close dialog"
                        className="w-8 h-8 rounded-full bg-surface-2 border border-line text-muted hover:text-text hover:border-accent flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Modal Body */}
                  <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3.5 py-3 custom-scrollbar sm:px-4 sm:py-4">
                    <LeadForm
                      key={initialCourse || "default"}
                      source={source}
                      initialCourse={initialCourse}
                      onClose={onClose}
                      compact
                    />
                  </div>
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
