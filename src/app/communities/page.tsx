import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Communities We Serve | Ajumi Internet",
  description:
    "Where Ajumi Internet delivers fiber and fixed wireless service today, and where we're expanding next.",
  openGraph: {
    title: "Communities We Serve | Ajumi Internet",
    description:
      "Where Ajumi Internet delivers fiber and fixed wireless service today, and where we're expanding next.",
  },
};

export default function CommunitiesPage() {
  return (
    <>
      <StubPage
        eyebrow="Communities"
        title="Communities We Serve"
        intro="Neighborhoods, towns, campuses and counties where we deliver or are actively expanding service."
        points={[
          "Headquartered in Ithaca, New York, serving customers across the United States and Canada.",
          "Direct deployment where infrastructure exists or construction is viable.",
          "Partnership and wholesale delivery with municipalities, utilities and local ISPs.",
          "Prioritizing areas with limited competition, unreliable access or inadequate infrastructure.",
        ]}
      />
      <CtaBand />
    </>
  );
}
