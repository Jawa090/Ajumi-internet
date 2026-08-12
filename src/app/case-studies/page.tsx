import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Case Studies | Ajumi Internet",
  description:
    "Broadband deployment case studies across residential, business, municipal and rural projects.",
  openGraph: {
    title: "Case Studies | Ajumi Internet",
    description:
      "Broadband deployment case studies across residential, business, municipal and rural projects.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <StubPage
        eyebrow="Case studies"
        title="Case Studies"
        intro="Deployment write-ups covering scope, constraints and outcomes."
        points={[
          "Detailed project write-ups are being prepared for publication.",
          "Each will cover the service area, delivery method, engineering constraints and measured outcome.",
          "Named references are available now for procurement and partnership review.",
          "Contact us to request project references relevant to your deployment.",
        ]}
      />
      <CtaBand />
    </>
  );
}
