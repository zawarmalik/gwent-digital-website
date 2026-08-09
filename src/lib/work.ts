export type ClientProject = {
  slug: string;
  name: string;
  sector: string;
  description: string;
  url?: string;
};

export type Capability = {
  slug: string;
  name: string;
  description: string;
};

// Named client work. Kept deliberately short — one factual line each, no invented
// problem/outcome narrative, per the no-fabrication rule (PRD v2 §8.3). Expand into
// full write-ups once the owner supplies real detail and (where needed) permission.
export const CLIENT_PROJECTS: ClientProject[] = [
  {
    slug: "fonetech-solutions",
    name: "Fonetech Solutions",
    sector: "Website build",
    description: "Website build for Fonetech Solutions.",
    url: "https://techandsolutions.co.uk",
  },
  {
    slug: "azi-phones",
    name: "Azi Phones",
    sector: "Mobile phone retail",
    description: "Website and systems work for a mobile phone retailer.",
  },
  {
    slug: "mypunjab",
    name: "Mypunjab",
    sector: "Restaurant",
    description: "Website build for a Newport restaurant.",
  },
  {
    slug: "erp-system",
    name: "ERP System",
    sector: "South Wales retailer",
    description:
      "A custom stock and ordering system built for a South Wales retailer. Client name withheld at their request.",
  },
];

// Capabilities without a named client attached — not case studies, just what we
// build. No status badge (Live/In development/Concept) shown until that's confirmed.
export const CAPABILITIES: Capability[] = [
  {
    slug: "automations",
    name: "Automations",
    description: "Workflow automation that removes repetitive admin — reporting, reminders, data entry.",
  },
  {
    slug: "ai-chat-voice",
    name: "AI chat & voice assistants",
    description: "AI-powered chat and voice assistants for handling customer enquiries and bookings.",
  },
];
