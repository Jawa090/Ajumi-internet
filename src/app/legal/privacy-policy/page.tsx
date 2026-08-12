import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Privacy Policy | Ajumi Internet",
  description:
    "How Ajumi Internet collects, uses, stores and protects personal and customer information.",
  openGraph: {
    title: "Privacy Policy | Ajumi Internet",
    description:
      "How Ajumi Internet collects, uses, stores and protects personal and customer information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <StubPage
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How Ajumi Internet collects, uses and protects customer information."
        points={[
          "Information we collect when you check availability, request a quote or subscribe to service.",
          "How service and network data is used to operate, maintain and improve the network.",
          "When information is shared with installation, billing or infrastructure partners.",
          "How to request access to, correction of, or deletion of your information: info@ajumiinternet.com.",
        ]}
      />
      <CtaBand />
    </>
  );
}
