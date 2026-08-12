import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Ajumi Internet",
  description:
    "Permitted and prohibited activity on the Ajumi Internet broadband network.",
  openGraph: {
    title: "Acceptable Use Policy | Ajumi Internet",
    description:
      "Permitted and prohibited activity on the Ajumi Internet broadband network.",
  },
};

export default function AcceptableUsePage() {
  return (
    <>
      <StubPage
        eyebrow="Legal"
        title="Acceptable Use Policy"
        intro="What is and isn't permitted on the Ajumi Internet network."
        points={[
          "Prohibited activity including unlawful use, network abuse and unauthorized access attempts.",
          "Restrictions on activity that degrades service for other customers.",
          "Handling of security incidents, abuse reports and copyright notices.",
          "Enforcement, notice and suspension procedures.",
        ]}
      />
      <CtaBand />
    </>
  );
}
