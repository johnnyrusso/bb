"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SERVICES = [
  {
    icon: "bi-house-door",
    title: "Custom Homes",
    description:
      "Purpose-built homes shaped around your lot, your lifestyle, and long-term performance.",
  },
  {
    icon: "bi-tools",
    title: "Renovations",
    description:
      "Targeted upgrades that improve flow, function, and resale strength without losing character.",
  },
  {
    icon: "bi-tree",
    title: "Outdoor Living",
    description:
      "Porches, decks, kitchens, and gathering spaces designed for daily coastal living.",
  },
  {
    icon: "bi-rulers",
    title: "Design-Build",
    description:
      "A single team guiding planning, pricing, and construction from first sketch to final details.",
  },
  {
    icon: "bi-water",
    title: "Coastal Construction",
    description:
      "Material and structural choices built for humidity, storms, and waterfront environments.",
  },
  {
    icon: "bi-clipboard-check",
    title: "Project Management",
    description:
      "Clear milestones, transparent decisions, and consistent communication at every phase.",
  },
];

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="bb-section-dark py-5">
      <div className="container py-5" ref={ref}>
        <div className="text-center mb-5">
          <p data-animate="fade-up" className="section-kicker">
            How We Work
          </p>
          <h2 data-animate="fade-up" data-delay="1" className="section-title">
            A streamlined process from first sketch to final walkthrough.
          </h2>
          <p data-animate="fade-up" data-delay="2" className="section-lead mx-auto">
            We combine thoughtful design decisions with disciplined execution so
            your project moves forward with clarity and confidence.
          </p>
        </div>
        <div className="row g-4">
          {SERVICES.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={service.title}>
              <article data-animate="fade-up" data-delay={index + 1} className="bb-service-card">
                <i className={`bi ${service.icon} bb-service-icon`} />
                <h3 className="bb-service-title">{service.title}</h3>
                <p className="bb-service-copy">{service.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
