"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const ref = useScrollAnimation();

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "150+", label: "Homes Built" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-5" style={{ backgroundColor: "hsl(40 20% 97%)" }}>
      <div className="container py-5" ref={ref}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="position-relative" data-animate="fade-left">
              <img
                src="/images/interior-showcase.jpg"
                alt="Luxury open-concept living space with coastal design by Blanton Building"
                className="img-fluid w-100"
                style={{ objectFit: "cover", height: "500px" }}
              />
              <div
                className="position-absolute d-none d-md-flex flex-column align-items-center justify-content-center text-white"
                style={{
                  bottom: "-30px",
                  right: "-30px",
                  width: "160px",
                  height: "160px",
                  backgroundColor: "hsl(28 60% 50%)",
                }}
              >
                <span
                  className="fw-bold"
                  style={{ fontSize: "3rem", lineHeight: 1, fontFamily: "var(--font-serif), serif" }}
                >
                  20+
                </span>
                <span style={{ fontSize: "0.75rem", letterSpacing: "2px", textTransform: "uppercase" }}>
                  Years
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p
              data-animate="fade-right"
              data-delay="1"
              className="text-uppercase mb-2"
              style={{
                color: "hsl(28 60% 50%)",
                letterSpacing: "3px",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              About Us
            </p>
            <h2
              data-animate="fade-right"
              data-delay="2"
              className="display-6 fw-bold mb-4"
              style={{
                fontFamily: "var(--font-serif), serif",
                color: "hsl(210 25% 22%)",
              }}
            >
              Craftsmanship Rooted
              <br />
              in Tradition
            </h2>
            <p
              data-animate="fade-right"
              data-delay="3"
              className="mb-4"
              style={{
                color: "hsl(210 10% 40%)",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              For over two decades, Blanton Building has been the trusted name in
              residential construction across the greater Wilmington area. We
              believe every home should reflect the character of its owners and
              the beauty of coastal North Carolina.
            </p>
            <p
              data-animate="fade-right"
              data-delay="4"
              className="mb-5"
              style={{
                color: "hsl(210 10% 40%)",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              Our team of skilled craftsmen, architects, and project managers
              work together to deliver homes that stand the test of time
              &mdash; built with integrity, attention to detail, and a deep
              respect for the land.
            </p>
            <div className="row g-4" data-animate="fade-up" data-delay="5">
              {stats.map((stat) => (
                <div className="col-4" key={stat.label}>
                  <div
                    className="text-center p-3"
                    style={{
                      borderTop: "3px solid hsl(28 60% 50%)",
                    }}
                  >
                    <div
                      className="fw-bold"
                      style={{
                        fontSize: "2rem",
                        color: "hsl(210 25% 22%)",
                        fontFamily: "var(--font-serif), serif",
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "hsl(210 10% 45%)",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
