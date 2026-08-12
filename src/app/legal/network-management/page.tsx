import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Network Management Policy | Ajumi Internet",
  description:
    "Ajumi Internet network management, congestion, performance and transparency disclosures.",
  openGraph: {
    title: "Network Management Policy | Ajumi Internet",
    description:
      "Ajumi Internet network management, congestion, performance and transparency disclosures.",
  },
};

export default function NetworkManagementPage() {
  return (
    <>
      <StubPage
        eyebrow="Legal"
        title="Network Management Policy"
        intro="How we manage congestion, performance and network integrity."
        points={[
          "Congestion management practices and when they apply.",
          "Performance characteristics of fiber and fixed wireless delivery.",
          "Device and equipment attachment requirements.",
          "Transparency disclosures for customers and regulators.",
        ]}
      />
      <CtaBand />
    </>
  );
}
