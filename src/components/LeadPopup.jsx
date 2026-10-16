"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const OPEN_DELAY = 10000; // form opens 10 sec after page load
const STORAGE_KEY = "leadPopupSeen";

const COURSES = [
  "Digital Marketing Master Program",
  "SEO & Content Marketing",
  "Social Media Marketing",
  "Performance Marketing & Ads",
  "Digital Marketing + Gen AI",
];

const BENEFITS = [
  { icon: "🎯", text: "Live projects & real campaigns" },
  { icon: "👨‍🏫", text: "Learn from industry experts" },
  { icon: "💼", text: "100% placement support" },
  { icon: "📜", text: "Certificate on completion" },
];

const INITIAL = { name: "", phone: "", email: "", course: "" };

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Auto-open after 10 sec (once per session)
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch (e) {}

    const timer = setTimeout(() => setOpen(true), OPEN_DELAY);
    return () => clearTimeout(timer);
  }, []);

  // Close on Esc + lock background scroll
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const er = {};
    if (form.name.trim().length < 2) er.name = "Please enter your full name";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) er.phone = "Please enter a valid 10-digit mobile number";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) er.email = "Please enter a valid email address";
    if (!form.course) er.course = "Please select a course";
    return er;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;

    setLoading(true);
    try {
      // 👉 Add your API call here once the backend is ready:
      // await fetch("/api/leads", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((r) => setTimeout(r, 900)); // demo delay only
      setDone(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch (e) {}
      setTimeout(() => setOpen(false), 2800);
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (name) =>
    `w-full rounded-xl border-2 bg-gray-50 py-3 pl-11 pr-3.5 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-teal-500/15 ${
      errors[name] ? "border-red-400" : "border-gray-200 focus:border-teal-500"
    }`;

  const iconCls =
    "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Free counselling form"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="relative flex max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Close form"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-base text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
            >
              ✕
            </button>

            {/* LEFT PANEL (hidden on mobile) */}
            <div className="relative hidden w-5/12 flex-col justify-between overflow-hidden bg-gradient-to-br from-teal-500 to-teal-700 p-7 text-white md:flex">
              {/* decorative circles */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10" />

              <div className="relative">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                  🎁 Free Career Counselling
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-tight">
                  Start your Digital Marketing career today
                </h2>
              </div>

              <ul className="relative mt-6 space-y-3.5">
                {BENEFITS.map((b) => (
                  <li key={b.text} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/20 text-lg">
                      {b.icon}
                    </span>
                    <span className="text-base text-teal-50">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT PANEL (form) */}
            <div className="max-h-[92vh] flex-1 overflow-y-auto p-6 sm:p-8">
              {/* Mobile-only heading */}
              <div className="mb-5 md:hidden">
                <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                  🎁 Free Career Counselling
                </span>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-gray-900">
                  Start your Digital Marketing career today
                </h2>
              </div>

              {done ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-4xl"
                  >
                    ✅
                  </motion.div>
                  <h3 className="mt-5 text-2xl font-bold text-gray-900">
                    Thank you, {form.name.split(" ")[0]}!
                  </h3>
                  <p className="mt-1.5 text-base text-gray-600">
                    Our team will get in touch with you shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="hidden md:block">
                    <h3 className="text-xl font-bold text-gray-900">Book your free session</h3>
                    <p className="mt-1 text-base text-gray-500">
                      Our team will call you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
                    <div>
                      <div className="relative">
                        <span className={iconCls}>👤</span>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full name"
                          autoComplete="name"
                          className={inputCls("name")}
                        />
                      </div>
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <div className="relative">
                        <span className={iconCls}>📱</span>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="Mobile number"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          autoComplete="tel"
                          className={inputCls("phone")}
                        />
                      </div>
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <div className="relative">
                        <span className={iconCls}>✉️</span>
                        <input
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email address"
                          type="email"
                          autoComplete="email"
                          className={inputCls("email")}
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <div className="relative">
                        <span className={iconCls}>🎓</span>
                        <select
                          name="course"
                          value={form.course}
                          onChange={handleChange}
                          className={`${inputCls("course")} ${form.course ? "" : "text-gray-400"}`}
                        >
                          <option value="">Select a course</option>
                          {COURSES.map((c) => (
                            <option key={c} value={c} className="text-gray-900">
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.course && <p className="mt-1 text-sm text-red-500">{errors.course}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:from-teal-600 hover:to-teal-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                          Submitting...
                        </>
                      ) : (
                        "Book free counselling →"
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-500">
                      🔒 Your details are safe. We never spam.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
