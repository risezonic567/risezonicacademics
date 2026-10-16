"use client";

import { useState } from "react";

// 👉 Apne real details yahan daalo
const PHONE = "+919999999999";
const WHATSAPP = "919999999999"; // country code ke saath, + ke bina
const EMAIL = "info@risezonic.com";

const ITEMS = [
  {
    label: "Call us",
    href: `tel:${PHONE}`,
    bg: "bg-sky-500",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1C10.6 21 3 13.4 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.57 3.6a1 1 0 01-.25 1l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20want%20to%20know%20about%20your%20courses`,
    bg: "bg-green-500",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
 {
  label: "Email us",
  href: `mailto:${EMAIL}`,
  bg: "bg-orange-500",
  icon: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
},
];

export default function ContactSidebar() {
  const [open, setOpen] = useState(true); // true = shuru se khula rahega

  return (
    <div
      className={`fixed right-0 top-1/2 z-[9998] flex -translate-y-1/2 items-center transition-transform duration-500 ease-out ${
        open ? "translate-x-0" : "translate-x-14"
      }`}
    >
      {/* Handle: khula hone par ✕, band hone par chat icon */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        className="relative flex h-14 w-10 items-center justify-center rounded-l-xl bg-teal-500 text-white shadow-lg transition hover:bg-teal-600"
      >
        {/* attention pulse, sirf band hone par */}
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-l-xl bg-teal-400/40" />
        )}

        {open ? (
          <svg
            viewBox="0 0 24 24"
            className="relative h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="relative h-5 w-5" fill="currentColor">
            <path d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2H9l-5 4v-4a2 2 0 01-2-2V6a2 2 0 012-2z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      <div className="flex w-14 flex-col gap-3 rounded-l-2xl bg-white p-2.5 shadow-2xl ring-1 ring-black/5">
        {ITEMS.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-label={item.label}
            style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
            className={`group relative flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110 ${item.bg} ${
              open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            }`}
          >
            {item.icon}

            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}