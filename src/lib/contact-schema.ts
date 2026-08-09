import { z } from "zod";
import { DEPARTMENTS } from "@/lib/departments";

export const SERVICE_OPTIONS = [
  ...DEPARTMENTS.map((d) => ({ value: d.slug, label: d.name })),
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-1k", label: "Under £1,000" },
  { value: "1k-3k", label: "£1,000 – £3,000" },
  { value: "3k-10k", label: "£3,000 – £10,000" },
  { value: "10k-plus", label: "£10,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.email("Enter a valid email address."),
  business: z.string().trim().max(200).optional().or(z.literal("")),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.enum(SERVICE_OPTIONS.map((o) => o.value) as [string, ...string[]], {
    error: "Choose the service you're interested in.",
  }),
  budget: z
    .enum(BUDGET_OPTIONS.map((o) => o.value) as [string, ...string[]])
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little about what you need (10 characters min)."),
  consent: z.literal(true, {
    error: "You need to agree before we can get in touch.",
  }),
  // Honeypot — must stay empty. Bots that fill every field trip this.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
