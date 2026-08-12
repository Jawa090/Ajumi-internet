import type { Metadata } from "next";
import { StubPage } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Testimonials | Ajumi Internet",
  description:
    "Feedback from residential, business and municipal Ajumi Internet customers.",
  openGraph: {
    title: "Testimonials | Ajumi Internet",
    description:
      "Feedback from residential, business and municipal Ajumi Internet customers.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <StubPage
        eyebrow="Testimonials"
        title="Testimonials"
        intro="What customers say after the install crew leaves."
        points={[
          "Residential, business and municipal customer feedback is being collected for publication here.",
          "We publish attributed feedback only with customer permission.",
          "Named references available on request for procurement review.",
          "Contact us to speak with a current customer in a comparable deployment.",
        ]}
      />
      <CtaBand />
    </>
  );
}
