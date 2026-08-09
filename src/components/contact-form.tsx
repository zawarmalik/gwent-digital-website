"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactFormValues, SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Props = {
  defaultService?: string;
};

export function ContactForm({ defaultService }: Props) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      service:
        defaultService && SERVICE_OPTIONS.some((o) => o.value === defaultService)
          ? (defaultService as ContactFormValues["service"])
          : undefined,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok) {
        setSubmitError(json.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Couldn't reach the server. Check your connection and try again.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded border border-border bg-card p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto size-10 text-oxide" aria-hidden />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Message sent</h3>
        <p className="mt-2 text-ink/70">
          Thanks — we&rsquo;ll reply within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, visible to naive bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="business">Business name</Label>
          <Input id="business" autoComplete="organization" {...register("business")} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </div>
        <div>
          <Label htmlFor="service">Service needed *</Label>
          <select
            id="service"
            {...register("service")}
            aria-invalid={!!errors.service}
            className="mt-1 flex h-8 w-full min-w-0 cursor-pointer rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30"
          >
            <option value="">Choose one&hellip;</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="budget">Budget range (optional)</Label>
          <select
            id="budget"
            {...register("budget")}
            className="mt-1 flex h-8 w-full min-w-0 cursor-pointer rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30"
          >
            <option value="">Prefer not to say&hellip;</option>
            {BUDGET_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          {...register("consent")}
          aria-invalid={!!errors.consent}
          className="mt-1 size-4 rounded border-input"
        />
        <Label htmlFor="consent" className="text-sm font-normal text-ink/80">
          I agree to Gwent Digital contacting me about my enquiry, in line with the{" "}
          <a href="/privacy" className="underline transition-colors hover:text-oxide">
            Privacy Policy
          </a>
          . *
        </Label>
      </div>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}

      {submitError && (
        <p className="rounded border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-oxide text-paper hover:bg-oxide/90 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending&hellip;
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
