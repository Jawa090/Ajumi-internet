export type NavItem = { label: string; to: string };

export const serviceLinks: NavItem[] = [
  { label: "Residential Internet", to: "/residential" },
  { label: "Business Internet", to: "/business" },
  { label: "Enterprise Solutions", to: "/enterprise" },
  { label: "Dedicated Internet Access", to: "/dedicated-internet" },
  { label: "Fixed Wireless Internet", to: "/fixed-wireless" },
  { label: "Managed Wi-Fi", to: "/managed-wifi" },
  { label: "Fiber Installation & Network Engineering", to: "/network-engineering" },
  { label: "Broadband Infrastructure Consulting", to: "/broadband-consulting" },
  { label: "Rural & Community Broadband", to: "/rural-broadband" },
];

export const companyLinks: NavItem[] = [
  { label: "About Us", to: "/about" },
  { label: "Industries We Serve", to: "/industries" },
  { label: "Communities We Serve", to: "/communities" },
  { label: "Partnership Opportunities", to: "/partnerships" },
  { label: "Government & Municipal", to: "/government" },
  { label: "Careers", to: "/careers" },
];

export const resourceLinks: NavItem[] = [
  { label: "Case Studies", to: "/case-studies" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog & News", to: "/blog" },
  { label: "Resources", to: "/resources" },
  { label: "FAQ", to: "/faq" },
];

export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", to: "/legal/privacy-policy" },
  { label: "Terms & Conditions", to: "/legal/terms" },
  { label: "Acceptable Use Policy", to: "/legal/acceptable-use" },
  { label: "Network Management Policy", to: "/legal/network-management" },
  { label: "Accessibility Statement", to: "/legal/accessibility" },
];

export const CONTACT = {
  phone: "(888) 511-9194",
  phoneHref: "tel:+18885119194",
  email: "info@ajumiinternet.com",
  address: "314 E State Street, Ithaca, NY 14850",
};
