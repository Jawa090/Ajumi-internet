import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "FAQ | Ajumi Internet",
  description:
    "Answers about Ajumi Internet availability, installation timelines, speeds, equipment, support and pricing.",
  openGraph: {
    title: "FAQ | Ajumi Internet",
    description:
      "Answers about Ajumi Internet availability, installation timelines, speeds, equipment, support and pricing.",
  },
};

export default function FaqPage() {
  return (
    <>
      <StubPage
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        intro="Straight answers on availability, installation, speeds, support and pricing."
        points={[
          "Availability: coverage depends on fiber routes, wireless line of sight and local partnerships — check your address to find out.",
          "Pricing: most tiers are quoted per service area because infrastructure cost varies by address.",
          "Installation: fiber installs typically schedule within 7-10 business days of serviceability confirmation.",
          "Support: technical support is handled by staff who work on the network itself.",
        ]}
      />
      <CtaBand />
    </>
  );
}
