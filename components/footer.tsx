'use client';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "hsl(210 25% 16%)",
        color: "hsl(210 15% 70%)",
      }}
    >
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="mb-3">
              <span
                className="fw-bold fs-5 text-white"
                style={{
                  fontFamily: "var(--font-serif), serif",
                  letterSpacing: "0.5px",
                }}
              >
                BLANTON
              </span>
              <span
                className="ms-2 fw-light text-uppercase"
                style={{
                  letterSpacing: "2px",
                  fontSize: "0.8rem",
                  opacity: 0.7,
                  color: "#fff",
                }}
              >
                Building
              </span>
            </div>
            <p
              style={{
                lineHeight: 1.8,
                fontSize: "0.95rem",
                maxWidth: "300px",
              }}
            >
              Building exceptional custom homes and renovations in the greater
              Wilmington, NC area for over 20 years.
            </p>
            <div className="d-flex gap-3 mt-3">
              {["facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid hsl(210 15% 30%)",
                    color: "hsl(210 15% 70%)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Visit our ${social} page`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "hsl(28 60% 50%)";
                    e.currentTarget.style.color = "hsl(28 60% 50%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "hsl(210 15% 30%)";
                    e.currentTarget.style.color = "hsl(210 15% 70%)";
                  }}
                >
                  <i className={`bi bi-${social}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h3
              className="h6 text-white fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "1.5px", fontSize: "0.75rem" }}
            >
              Quick Links
            </h3>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      style={{
                        color: "hsl(210 15% 65%)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "hsl(210 15% 65%)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h3
              className="h6 text-white fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "1.5px", fontSize: "0.75rem" }}
            >
              Services
            </h3>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                "Custom Homes",
                "Renovations",
                "Outdoor Living",
                "Design-Build",
                "Coastal Construction",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    style={{
                      color: "hsl(210 15% 65%)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "hsl(210 15% 65%)";
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3">
            <h3
              className="h6 text-white fw-bold text-uppercase mb-3"
              style={{ letterSpacing: "1.5px", fontSize: "0.75rem" }}
            >
              Contact
            </h3>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: "0.9rem" }}>
              <li>1234 Market Street</li>
              <li>Wilmington, NC 28401</li>
              <li className="mt-1">
                <a
                  href="tel:9105551234"
                  style={{ color: "hsl(210 15% 65%)", textDecoration: "none" }}
                >
                  (910) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@blantonbuilding.com"
                  style={{ color: "hsl(210 15% 65%)", textDecoration: "none" }}
                >
                  info@blantonbuilding.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="py-3"
        style={{
          borderTop: "1px solid hsl(210 15% 22%)",
        }}
      >
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0" style={{ fontSize: "0.8rem" }}>
            &copy; {new Date().getFullYear()} Blanton Building. All rights
            reserved.
          </p>
          <p className="mb-0 mt-2 mt-md-0" style={{ fontSize: "0.8rem" }}>
            Licensed General Contractor &mdash; Wilmington, NC
          </p>
        </div>
      </div>
    </footer>
  );
}
