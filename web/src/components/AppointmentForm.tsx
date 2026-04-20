"use client";

import * as React from "react";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

function messageFromFailedResponse(data: unknown, res: Response): string {
  if (typeof data === "object" && data && "error" in data) {
    const text = String((data as { error?: unknown }).error ?? "").trim();
    if (text.length > 0) return text;
  }
  if (res.status === 404) {
    return "Online booking is not available here: this deployment has no server API (common with static export / opening the built files directly). Run the dev server locally with a Resend API key, or host on a platform that runs Next.js API routes.";
  }
  if (res.status === 500) {
    return "Server email is not configured. Add RESEND_API_KEY to web/.env.local for local development.";
  }
  return `We could not send your request (HTTP ${res.status}). Please try again or call the clinic.`;
}

export function AppointmentForm() {
  const [state, setState] = React.useState<FormState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (process.env.NEXT_PUBLIC_DISABLE_APPOINTMENT_API === "1") {
      setState({
        status: "error",
        message:
          "Online booking is not available on this deployment. Please call to make an appointment.",
      });
      return;
    }

    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: unknown = await res.json().catch(() => ({}));
      if (!res.ok) {
        setState({
          status: "error",
          message: messageFromFailedResponse(data, res),
        });
        return;
      }

      setState({
        status: "success",
        message:
          "Thank you! We received your request and will contact you shortly.",
      });
      form.reset();
    } catch {
      setState({
        status: "error",
        message: "Connection unavailable. Please try again.",
      });
    }
  }

  const isBusy = state.status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
    >
      <div className="mb-4">
        <h3 className="text-base font-semibold text-[color:var(--brand-900)]">
          Book an appointment
        </h3>
        <p className="mt-1 text-sm text-black/60">
          Fill in the form and we’ll call you to confirm.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs font-medium text-black/70">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none ring-0 placeholder:text-black/30 focus:border-[color:var(--brand-600)] focus:ring-2 focus:ring-[color:var(--brand-100)]"
            placeholder="e.g. John Smith"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-medium text-black/70">Phone</span>
          <input
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none ring-0 placeholder:text-black/30 focus:border-[color:var(--brand-600)] focus:ring-2 focus:ring-[color:var(--brand-100)]"
            placeholder="07xx xxx xxx"
          />
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-medium text-black/70">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm outline-none ring-0 placeholder:text-black/30 focus:border-[color:var(--brand-600)] focus:ring-2 focus:ring-[color:var(--brand-100)]"
            placeholder="name@email.com"
          />
        </label>

        <label className="grid gap-1 sm:col-span-2">
          <span className="text-xs font-medium text-black/70">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            className="resize-none rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-black/30 focus:border-[color:var(--brand-600)] focus:ring-2 focus:ring-[color:var(--brand-100)]"
            placeholder="e.g. vaccines, checkup, lab tests, urgent care..."
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isBusy}
        className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[color:var(--brand-600)] text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--brand-700)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isBusy ? "Sending..." : "Send"}
      </button>

      {state.status === "success" ? (
        <p className="mt-3 rounded-xl bg-green-50 px-3 py-2 text-sm text-green-800">
          {state.message}
        </p>
      ) : null}
      {state.status === "error" ? (
        <p className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-800">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

