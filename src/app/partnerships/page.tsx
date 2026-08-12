import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Partnership Opportunities | Ajumi Internet",
  description:
    "ISP partnerships, wholesale connectivity, municipal broadband initiatives and public-private collaboration with Ajumi Internet.",
  openGraph: {
    title: "Partnership Opportunities | Ajumi Internet",
    description:
      "ISP partnerships, wholesale connectivity, municipal broadband initiatives and public-private collaboration with Ajumi Internet.",
  },
};

export default function PartnershipsPage() {
  return (
    <>
      <StubPage
        eyebrow="Partnerships"
        title="Partnership Opportunities"
        intro="Infrastructure partnerships, wholesale connectivity and public-private collaboration."
        points={[
          "Wholesale connectivity and ISP partnerships for operators seeking capacity or technical capability.",
          "Municipal broadband initiatives and public-private partnerships from feasibility through operations.",
          "Property owner and developer agreements for multi-dwelling and commercial buildings.",
          "Utility and community organization collaborations for underserved service areas.",
        ]}
      />
      <CtaBand />
    </>
  );
}
