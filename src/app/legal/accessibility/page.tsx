import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Accessibility Statement | Ajumi Internet",
  description:
    "Ajumi Internet's commitment to WCAG-aligned accessibility across our website and customer service channels.",
  openGraph: {
    title: "Accessibility Statement | Ajumi Internet",
    description:
      "Ajumi Internet's commitment to WCAG-aligned accessibility across our website and customer service channels.",
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <StubPage
        eyebrow="Legal"
        title="Accessibility Statement"
        intro="Our commitment to an accessible website and accessible service."
        points={[
          "We aim to conform to WCAG 2.1 Level AA across this website, including keyboard navigation, color contrast and descriptive alternative text.",
          "Accessible support channels: phone (888) 511-9194 and email info@ajumiinternet.com.",
          "Ongoing review of new pages and components as the site expands.",
          "Report an accessibility barrier to info@ajumiinternet.com and we will respond within one business day.",
        ]}
      />
      <CtaBand />
    </>
  );
}
