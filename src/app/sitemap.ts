import type { MetadataRoute } from "next";
import { DEPARTMENTS } from "@/lib/departments";

const BASE_URL = "https://gwentdigital.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/services",
    ...DEPARTMENTS.map((d) => `/services/${d.slug}`),
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
  ];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "yearly",
    priority: route === "" ? 1 : 0.5,
  }));
}
