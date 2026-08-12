import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Careers at Ajumi Internet",
  description:
    "Join Ajumi Internet — roles for fiber technicians, splicers, network engineers, project managers and customer support.",
  openGraph: {
    title: "Careers at Ajumi Internet",
    description:
      "Join Ajumi Internet — roles for fiber technicians, splicers, network engineers, project managers and customer support.",
  },
};

export default function CareersPage() {
  return (
    <>
      <StubPage
        eyebrow="Careers"
        title="Careers"
        intro="Technicians, splicers, engineers and support staff building the network."
        points={[
          "Fiber technicians, splicers and installation crews.",
          "Network engineers, designers and project managers.",
          "Customer support and field operations staff.",
          "Contractor and subcontractor opportunities on active deployments — send your details through our contact form.",
        ]}
      />
      <CtaBand />
    </>
  );
}
