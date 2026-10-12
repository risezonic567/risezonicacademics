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
                className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            {/* Modal Dialog Content */}
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none overflow-y-auto">
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="pointer-events-auto relative w-full sm:max-w-[520px] max-h-[92vh] sm:max-h-[90vh] flex flex-col bg-surface border border-accent/35 rounded-t-[24px] sm:rounded-[20px] shadow-2xl overflow-hidden focus:outline-none"
                  aria-describedby="lead-modal-description"
                >
                  {/* Modal Header */}
                  <div className="px-6 pt-6 pb-4 border-b border-line flex items-start justify-between relative bg-surface-2/60">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-light text-xs font-medium mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        <span>Free 1-on-1 Session</span>
                      </div>
                      <Dialog.Title className="text-xl sm:text-2xl font-bold font-heading text-text">
                        Book Free Counselling
                      </Dialog.Title>
                      <Dialog.Description
                        id="lead-modal-description"
                        className="text-xs sm:text-sm text-muted mt-1"
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
                  <div className="p-6 overflow-y-auto max-h-[calc(92vh-100px)] sm:max-h-[calc(90vh-110px)] custom-scrollbar">
                    <LeadForm
                      key={initialCourse || "default"}
                      source={source}
                      initialCourse={initialCourse}
                      onClose={onClose}
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
