import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ajumi Internet",
  description:
    "Terms governing the use of Ajumi Internet broadband services and this website.",
  openGraph: {
    title: "Terms & Conditions | Ajumi Internet",
    description:
      "Terms governing the use of Ajumi Internet broadband services and this website.",
  },
};

export default function TermsPage() {
  return (
    <>
      <StubPage
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="The terms governing use of Ajumi Internet services and this website."
        points={[
          "Scope of service, subscription terms and billing.",
          "Customer responsibilities regarding equipment and premises access.",
          "Service availability, maintenance windows and limitations of liability.",
          "Governing law and dispute resolution.",
        ]}
      />
      <CtaBand />
    </>
  );
}
