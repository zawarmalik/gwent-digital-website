import {
  Globe,
  ShoppingCart,
  Bot,
  Database,
  BarChart3,
  Search,
  Palette,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

// Shared slug -> icon mapping, used by the homepage services grid and the
// /services index + detail pages so the same icon always represents the same
// department everywhere on the site.
export const DEPARTMENT_ICONS: Record<string, LucideIcon> = {
  "web-design": Globe,
  ecommerce: ShoppingCart,
  "ai-automation": Bot,
  "custom-systems-erp": Database,
  "data-analytics": BarChart3,
  "seo-local-search": Search,
  "branding-design": Palette,
  "support-maintenance": LifeBuoy,
};
