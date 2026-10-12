"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { LeadModal } from "./LeadModal";

const LeadModalContext = createContext({
  isOpen: false,
  modalData: { source: "default", course: "" },
  openModal: () => {},
  closeModal: () => {},
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
});

export function LeadModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ source: "general", course: "" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = useCallback((data = {}) => {
    setModalData({
      source: data.source || "general",
      course: data.course || "",
    });
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        modalData,
        openModal,
        closeModal,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
      <LeadModal
        isOpen={isOpen}
        onClose={closeModal}
        source={modalData.source}
        initialCourse={modalData.course}
      />
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
