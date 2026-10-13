"use client";

import React, { useState } from "react";

export function Tabs({ tabs, defaultTabId, onChange, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

  const handleTabChange = (id) => {
    setActiveTab(id);
    if (onChange) onChange(id);
  };

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-surface border border-line mb-8">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer text-center ${
                isActive
                  ? "bg-light text-accent"
                  : "text-muted hover:text-text hover:bg-surface-2"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div>{activeContent}</div>
    </div>
  );
}
