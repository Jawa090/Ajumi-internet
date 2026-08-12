import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Resources | Ajumi Internet",
  description:
    "Guides, technical documentation and reference material for Ajumi Internet customers and broadband partners.",
  openGraph: {
    title: "Resources | Ajumi Internet",
    description:
      "Guides, technical documentation and reference material for Ajumi Internet customers and broadband partners.",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <StubPage
        eyebrow="Resources"
        title="Resources"
        intro="Guides, documentation and reference material for customers and partners."
        points={[
          "Customer guides for equipment, Wi-Fi placement and troubleshooting.",
          "Technical documentation for business and enterprise deployments.",
          "Procurement and grant reference material for municipal partners.",
          "Contact us for documentation specific to your deployment.",
        ]}
      />
      <CtaBand />
    </>
  );
}
