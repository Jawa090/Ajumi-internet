import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Industries We Serve | Ajumi Internet",
  description:
    "Technology, government, education, healthcare, real estate, construction, manufacturing, hospitality, retail, finance, agriculture and nonprofit connectivity.",
  openGraph: {
    title: "Industries We Serve | Ajumi Internet",
    description:
      "Technology, government, education, healthcare, real estate, construction, manufacturing, hospitality, retail, finance, agriculture and nonprofit connectivity.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <StubPage
        eyebrow="Industries"
        title="Industries We Serve"
        intro="Broadband and network infrastructure across the sectors that depend on it most."
        points={[
          "Government, education and healthcare — dedicated access, compliance-aware deployments and campus connectivity.",
          "Real estate, construction and hospitality — structured cabling, managed Wi-Fi and multi-dwelling connectivity.",
          "Manufacturing, retail, finance and professional services — business bandwidth, failover and multi-site networks.",
          "Agriculture, nonprofit, telecommunications and public infrastructure — rural coverage and partnership deployments.",
        ]}
      />
      <CtaBand />
    </>
  );
}
