"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      firm: (form.elements.namedItem("firm") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
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
          We&apos;ll get back to you shortly.
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
      {status === "error" && (
        <p className="text-sm text-red-700">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-md bg-deep-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-deep-green/90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
