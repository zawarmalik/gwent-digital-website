export type Department = {
  slug: string;
  name: string;
  summary: string;
  bullets: [string, string, string];
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "web-design",
    name: "Web Design & Development",
    summary: "Marketing sites and rebuilds that are ready to host the day they ship.",
    bullets: ["Marketing sites & landing pages", "Full site rebuilds", "Hosting-ready delivery"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    summary: "Online shops that keep stock, payments and product data in sync.",
    bullets: ["Online shops & catalogues", "Payments", "Stock sync"],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    summary: "Chatbots and workflow automation that remove repetitive admin.",
    bullets: ["Chatbots & AI assistants", "Document processing", "Workflow automation"],
  },
  {
    slug: "custom-systems-erp",
    name: "Custom Systems & ERP",
    summary: "Stock control, order management and internal tools built around how you work.",
    bullets: ["Stock control & ordering", "Invoicing & admin tools", "POS integrations"],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    summary: "Sales analysis and dashboards that show you what's actually happening.",
    bullets: ["Sales & customer analysis", "Dashboards", "Reporting"],
  },
  {
    slug: "seo-local-search",
    name: "SEO & Local Search",
    summary: "Getting found on Google by the people searching for what you do, locally.",
    bullets: ["Google Business Profile", "Local ranking", "Technical SEO"],
  },
  {
    slug: "branding-design",
    name: "Branding & Design",
    summary: "Logos, brand identity and the print materials that go with them.",
    bullets: ["Logo & brand identity", "Print, menus & signage", "Social templates"],
  },
  {
    slug: "support-maintenance",
    name: "Support & Maintenance",
    summary: "Hosting, updates and monitoring, so the site keeps working after launch.",
    bullets: ["Hosting", "Updates & security", "Monthly retainers"],
  },
];
