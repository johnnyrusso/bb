"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const STATS = [
  { number: "20+", label: "Years Building Locally" },
  { number: "150+", label: "Homes + Renovations" },
  { number: "1 Team", label: "Planning to Completion" },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="bb-section-light py-5">
      <div className="container py-5" ref={ref}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="bb-image-frame" data-animate="fade-left">
              <img
                src="/images/interior-showcase.jpg"
                alt="Crafted coastal interior by Blanton Building in Wilmington, NC"
                style={{ height: "520px" }}
              />
              <div className="bb-image-badge">
                <strong>20+</strong>
                <span>Years Coastal</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p data-animate="fade-right" className="section-kicker">
              Why Blanton
            </p>
            <h2 data-animate="fade-right" data-delay="1" className="section-title">
              Built with local insight. Engineered for coastal conditions.
            </h2>
            <p data-animate="fade-right" data-delay="2" className="section-body mb-4">
              We build with the realities of coastal North Carolina in mind:
              climate, codes, materials, and how homes perform through every
              season. Every decision is made to protect long-term value, not
              just first impressions.
            </p>
            <p data-animate="fade-right" data-delay="3" className="section-body mb-5">
              Our clients work with a tightly coordinated team from day one,
              bringing design, budgeting, scheduling, and craftsmanship into one
              accountable process. The result is a smoother build and a home
              that feels intentional in every room.
            </p>
            <div className="bb-stat-grid" data-animate="fade-up" data-delay="4">
              {STATS.map((stat) => (
                <div className="bb-stat-card" key={stat.label}>
                  <div className="bb-stat-value">{stat.number}</div>
                  <div className="bb-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
