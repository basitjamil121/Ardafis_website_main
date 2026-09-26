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
    const next = isCallback
      ? ["Request received", "A partner confirms a time within one business day", "We call you at the time you chose"]
      : ["Message received", "A partner replies within one business day", "We set up a discovery call if it helps"];
    return (
      <div className="rounded-2xl bg-cream p-8" role="status">
        <span className="tick-pop flex h-14 w-14 items-center justify-center rounded-full bg-deep-green text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <p className="mt-6 font-display text-2xl font-semibold text-deep-green">
          {isCallback ? "Thanks — we’ll call you." : "Thank you — message received."}
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage">What happens next</p>
        <ol className="relative mt-4 flex flex-col gap-4 border-l border-deep-green/15 pl-6">
          {next.map((step, i) => (
            <li key={step} className="tick-row relative text-sm text-ink/75" style={{ animationDelay: `${300 + i * 250}ms` }}>
              <span
                className={`absolute -left-[31px] top-0.5 h-3 w-3 rounded-full border-2 border-cream ${i === 0 ? "bg-deep-green" : "bg-mist"}`}
              />
              {step}
            </li>
          ))}
        </ol>
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
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-deep-green px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-moss disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <span aria-hidden="true" className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white motion-safe:animate-spin" />
            Sending…
          </>
        ) : (
          <>
            {isCallback ? "Request a call" : "Send message"}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </>
        )}
      </button>
    </form>
  );
}
