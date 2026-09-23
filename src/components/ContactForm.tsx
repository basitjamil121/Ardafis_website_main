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
      <div className="rounded-lg border border-line bg-white p-6 text-center">
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
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-md border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-deep-green"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-md border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-deep-green"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firm" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Firm name (optional)
          </label>
          <input
            id="firm"
            name="firm"
            type="text"
            className="rounded-md border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-deep-green"
          />
        </div>
        {isCallback && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wide text-ink/60">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="rounded-md border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-deep-green"
            />
          </div>
        )}
      </div>

      {isCallback ? (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="preferredTime" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Preferred day &amp; time (your time zone)
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="text"
            placeholder="e.g. Tuesday afternoon, EST"
            className="rounded-md border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-deep-green"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="rounded-md border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-deep-green"
          />
        </div>
      )}

      {status === "error" && <p className="text-sm text-red-700">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-md bg-deep-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-deep-green/90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : isCallback ? "Request a call" : "Send message"}
      </button>
    </form>
  );
}
