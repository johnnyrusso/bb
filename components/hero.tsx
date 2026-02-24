"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const METRICS = [
  { value: "20+", label: "Years Local Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "End-to-End", label: "Design-Build Process" },
];

export default function Hero() {
  const ref = useScrollAnimation();

  return (
    <section id="home" className="hero-bg d-flex align-items-center">
      <div
        className="hero-fallback"
        style={{ backgroundImage: "url('/images/exterior-showcase.jpg')" }}
        aria-hidden="true"
      />
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/exterior-showcase.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content" ref={ref}>
        <div className="row">
          <div className="col-lg-9 col-xl-8">
            <p data-animate="fade-up" data-delay="1" className="hero-eyebrow">
              Wilmington, NC Custom Homes &amp; Renovations
            </p>
            <h1 data-animate="fade-up" data-delay="2" className="hero-title">
              Coastal homes with staying power.
              <br />
              <span className="hero-title-accent">Built for how you live.</span>
            </h1>
            <p data-animate="fade-up" data-delay="3" className="hero-lead">
              From ground-up custom builds to high-impact renovations, Blanton
              Building delivers detail-driven craftsmanship across the Cape Fear
              region.
            </p>
            <div data-animate="fade-up" data-delay="4" className="hero-cta-group">
              <a href="#portfolio" className="btn btn-lg px-5 py-3 bb-btn-primary">
                Explore Projects
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-5 py-3 bb-btn-outline-light">
                Start Your Project
              </a>
            </div>
            <div data-animate="fade-up" data-delay="5" className="hero-metrics">
              {METRICS.map((metric) => (
                <div className="hero-metric" key={metric.label}>
                  <p className="hero-metric-value">{metric.value}</p>
                  <p className="hero-metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}
