"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";
type Variant = "inquiry" | "callback";

export default function ContactForm({ variant = "inquiry" }: { variant?: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const isCallback = variant === "callback";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null)?.value ?? "";

    const data = isCallback
      ? {
          type: "callback",
          name: get("name"),
          email: get("email"),
          firm: get("firm"),
          message: `Preferred time to call: ${get("preferredTime") || "No preference given"}${
            get("phone") ? `\nPhone: ${get("phone")}` : ""
          }`,
        }
      : {
          type: "inquiry",
          name: get("name"),
          email: get("email"),
          firm: get("firm"),
          message: get("message"),
        };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Something went wrong.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-cream p-8 text-center">
        <p className="font-display text-lg font-semibold text-deep-green">
          Thank you — your message has been received.
        </p>
        <p className="mt-2 text-sm text-ink/70">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${variant}-name`} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/55">
            Name
          </label>
          <input
            id={`${variant}-name`}
            name="name"
            type="text"
            required
            className="rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition focus:border-deep-green focus:bg-white focus:ring-4 focus:ring-deep-green/10"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${variant}-email`} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/55">
            Email
          </label>
          <input
            id={`${variant}-email`}
            name="email"
            type="email"
            required
            className="rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition focus:border-deep-green focus:bg-white focus:ring-4 focus:ring-deep-green/10"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${variant}-firm`} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/55">
            Firm name (optional)
          </label>
          <input
            id={`${variant}-firm`}
            name="firm"
            type="text"
            className="rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition focus:border-deep-green focus:bg-white focus:ring-4 focus:ring-deep-green/10"
          />
        </div>
        {isCallback && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${variant}-phone`} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/55">
              Phone (optional)
            </label>
            <input
              id={`${variant}-phone`}
              name="phone"
              type="tel"
              className="rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition focus:border-deep-green focus:bg-white focus:ring-4 focus:ring-deep-green/10"
            />
          </div>
        )}
      </div>

      {isCallback ? (
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${variant}-preferredTime`} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/55">
            Preferred day &amp; time (your time zone)
          </label>
          <input
            id={`${variant}-preferredTime`}
            name="preferredTime"
            type="text"
            placeholder="e.g. Tuesday afternoon, EST"
            className="rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition focus:border-deep-green focus:bg-white focus:ring-4 focus:ring-deep-green/10"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${variant}-message`} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/55">
            Message
          </label>
          <textarea
            id={`${variant}-message`}
            name="message"
            rows={4}
            required
            className="rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition focus:border-deep-green focus:bg-white focus:ring-4 focus:ring-deep-green/10"
          />
        </div>
      )}

      {status === "error" && <p className="text-sm text-red-700">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-full bg-deep-green px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-moss disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : isCallback ? "Request a call" : "Send message"}
      </button>
    </form>
  );
}
