"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { coursePlans } from "@/data/courses";
import { submitLead } from "@/lib/submitLead";

const leadSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
  phone: z
    .string()
    .regex(/^[6-9][0-9]{9}$/, { message: "Please enter a valid 10-digit mobile number" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  city: z
    .string()
    .min(1, { message: "City is required" }),
  course: z
    .string()
    .min(1, { message: "Please select a course option" }),
  preferredMode: z
    .enum(["Online", "Offline"], { message: "Please select a preferred mode" }),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

export function LeadForm({
  source = "modal",
  initialCourse = "",
  onClose,
  standalone = false,
  compact = false,
}) {
  const [submissionState, setSubmissionState] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [submittedName, setSubmittedName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const defaultCourse = initialCourse || "pro";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      city: "",
      course: defaultCourse,
      preferredMode: "Online",
      message: "",
      honeypot: "",
    },
  });


  const onSubmit = async (data) => {
    setSubmissionState("submitting");
    setErrorMessage("");
    try {
      const payload = {
        ...data,
        source,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        submittedAt: new Date().toISOString(),
      };

      const result = await submitLead(payload);
      if (result.ok) {
        setSubmittedName(data.fullName);
        setSubmissionState("success");
      } else {
        setErrorMessage("Something went wrong while submitting. Please try again.");
        setSubmissionState("error");
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again.");
      setSubmissionState("error");
    }
  };

  if (submissionState === "success") {
    return (
      <div className="py-8 px-2 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-light border border-primary flex items-center justify-center text-accent mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-heading text-text mb-2">
          {standalone ? "Message sent" : "Counselling Requested"}
        </h3>
        <p className="text-muted text-sm max-w-sm mb-6">
          {standalone
            ? `Thanks, ${submittedName || "there"}. We will be in touch soon.`
            : `Thanks, ${submittedName || "there"}. We will call you within [24 hours] to confirm your free demo class.`}
        </p>
        <button
          type="button"
          onClick={() => {
            if (standalone) {
              reset();
              setSubmissionState("idle");
              setSubmittedName("");
            } else {
              onClose?.();
            }
          }}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-on-primary font-bold hover:bg-accent-hover transition-colors"
        >
          {standalone ? "Send another message" : "Close"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_hp">Leave empty</label>
        <input
          id="website_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      {submissionState === "error" && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className={`block ${compact ? "text-base font-semibold" : "text-xs font-medium uppercase tracking-wider"} text-muted mb-1.5`}>
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Rahul Sharma"
          {...register("fullName")}
          className={`w-full px-3.5 py-2.5 ${compact ? "min-h-12 text-[17px]" : "text-sm"} rounded-xl bg-bg border border-line text-text placeholder-muted/50 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-colors`}
        />
        {errors.fullName && (
          <p className={`mt-1 ${compact ? "text-sm" : "text-xs"} text-red-700`}>{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone & Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={`block ${compact ? "text-base font-semibold" : "text-xs font-medium uppercase tracking-wider"} text-muted mb-1.5`}>
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            {...register("phone")}
            className={`w-full px-3.5 py-2.5 ${compact ? "min-h-12 text-[17px]" : "text-sm"} rounded-xl bg-bg border border-line text-text placeholder-muted/50 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-colors`}
          />
          {errors.phone && (
            <p className={`mt-1 ${compact ? "text-sm" : "text-xs"} text-red-700`}>{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className={`block ${compact ? "text-base font-semibold" : "text-xs font-medium uppercase tracking-wider"} text-muted mb-1.5`}>
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            {...register("email")}
            className={`w-full px-3.5 py-2.5 ${compact ? "min-h-12 text-[17px]" : "text-sm"} rounded-xl bg-bg border border-line text-text placeholder-muted/50 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-colors`}
          />
          {errors.email && (
            <p className={`mt-1 ${compact ? "text-sm" : "text-xs"} text-red-700`}>{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* City & Course Program Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className={`block ${compact ? "text-base font-semibold" : "text-xs font-medium uppercase tracking-wider"} text-muted mb-1.5`}>
            City <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. New Delhi"
            {...register("city")}
            className={`w-full px-3.5 py-2.5 ${compact ? "min-h-12 text-[17px]" : "text-sm"} rounded-xl bg-bg border border-line text-text placeholder-muted/50 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-colors`}
          />
          {errors.city && (
            <p className={`mt-1 ${compact ? "text-sm" : "text-xs"} text-red-700`}>{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className={`block ${compact ? "text-base font-semibold" : "text-xs font-medium uppercase tracking-wider"} text-muted mb-1.5`}>
            Interested Program <span className="text-accent">*</span>
          </label>
          <select
            {...register("course")}
            className={`w-full px-3.5 py-2.5 ${compact ? "min-h-12 text-[17px]" : "text-sm"} rounded-xl bg-bg border border-line text-text focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none transition-colors`}
          >
            {coursePlans.map((plan) => (
              <option key={plan.slug} value={plan.slug} className="bg-surface text-text">
                {plan.name} ({plan.level})
              </option>
            ))}
            <option value="not-sure" className="bg-surface text-text">
              {compact ? "Not sure yet" : "Not sure yet (Guidance needed)"}
            </option>
          </select>
          {errors.course && (
            <p className={`mt-1 ${compact ? "text-sm" : "text-xs"} text-red-700`}>{errors.course.message}</p>
          )}
        </div>
      </div>

      {/* Preferred Mode */}
      <div>
        <label className={`block ${compact ? "text-base font-semibold" : "text-xs font-medium uppercase tracking-wider"} text-muted mb-1.5`}>
          Preferred Learning Mode <span className="text-accent">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-2 border border-line cursor-pointer hover:border-primary/50 transition-colors">
            <input
              type="radio"
              value="Online"
              {...register("preferredMode")}
              className="accent-primary"
            />
            <span className={compact ? "text-base font-medium text-text" : "text-sm font-medium text-text"}>Live Online</span>
          </label>
          <label className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-2 border border-line cursor-pointer hover:border-primary/50 transition-colors">
            <input
              type="radio"
              value="Offline"
              {...register("preferredMode")}
              className="accent-primary"
            />
            <span className={compact ? "text-base font-medium text-text" : "text-sm font-medium text-text"}>Classroom (Offline)</span>
          </label>
        </div>
        {errors.preferredMode && (
          <p className={`mt-1 ${compact ? "text-sm" : "text-xs"} text-red-700`}>{errors.preferredMode.message}</p>
        )}
      </div>

      {/* Message (Optional) */}
      <div>
        <label className={`block ${compact ? "text-base font-semibold" : "text-xs font-medium uppercase tracking-wider"} text-muted mb-1.5`}>
          Questions or Notes (Optional)
        </label>
        <textarea
          rows={2}
          placeholder="Tell us about your learning goals or questions..."
          {...register("message")}
          className={`w-full px-3.5 py-2 ${compact ? "min-h-12 text-[17px]" : "text-sm"} rounded-xl bg-bg border border-line text-text placeholder-muted/50 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none resize-none transition-colors`}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submissionState === "submitting"}
        className="w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-bold text-base flex items-center justify-center gap-2 hover:bg-accent-hover transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {submissionState === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-on-primary" />
            <span>{standalone ? "Sending message..." : "Submitting details..."}</span>
          </>
        ) : (
          <span>{standalone ? "Send message" : "Book Free Demo & Counselling"}</span>
        )}
      </button>

      <p className="text-center text-[11px] text-muted/80">
        By continuing, you agree to receive program details via call, email, or WhatsApp.
      </p>
    </form>
  );
}
