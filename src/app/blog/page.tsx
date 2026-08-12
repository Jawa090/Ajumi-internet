import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Blog & News | Ajumi Internet",
  description:
    "Broadband policy, deployment practice and network engineering notes from the Ajumi Internet team.",
  openGraph: {
    title: "Blog & News | Ajumi Internet",
    description:
      "Broadband policy, deployment practice and network engineering notes from the Ajumi Internet team.",
  },
};

export default function BlogPage() {
  return (
    <>
      <StubPage
        eyebrow="Blog & news"
        title="Blog & News"
        intro="Notes on broadband policy, deployment practice and network engineering."
        points={[
          "Articles on broadband funding, rural deployment and digital inclusion.",
          "Field notes from fiber construction, splicing and testing work.",
          "Company announcements and service area expansions.",
          "Subscribe by contacting us — the publication feed launches with the next expansion announcement.",
        ]}
      />
      <CtaBand />
    </>
  );
}
