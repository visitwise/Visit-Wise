import { FooterColumn } from "../types";

export const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Benefits", href: "#benefits" },
      { label: "Case Studies", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
      { label: "Compliance", href: "/legal/compliance" },
    ],
  }
  // Removed "Social Media"
];
