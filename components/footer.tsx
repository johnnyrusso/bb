export default function Footer() {
  return (
    <footer className="bb-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="mb-3 d-flex align-items-center gap-2">
              <span className="bb-footer-brand">BLANTON</span>
              <span className="bb-footer-sub">Building</span>
            </div>
            <p style={{ lineHeight: 1.85, fontSize: "0.95rem", maxWidth: "340px" }}>
              Building exceptional custom homes and renovations across the
              Wilmington region with a focus on durability, detail, and
              everyday livability.
            </p>
            <div className="d-flex gap-3 mt-3">
              {["facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="bb-footer-social"
                  aria-label={`Visit our ${social} page`}
                >
                  <i className={`bi bi-${social}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h3 className="bb-footer-heading mb-3">Quick Links</h3>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="bb-footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h3 className="bb-footer-heading mb-3">Services</h3>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                "Custom Homes",
                "Renovations",
                "Outdoor Living",
                "Design-Build",
                "Coastal Construction",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="bb-footer-link">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h3 className="bb-footer-heading mb-3">Contact</h3>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: "0.9rem" }}>
              <li>1234 Market Street</li>
              <li>Wilmington, NC 28401</li>
              <li className="mt-1">
                <a href="tel:9105551234" className="bb-footer-link">
                  (910) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@blantonbuilding.com" className="bb-footer-link">
                  info@blantonbuilding.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.14)" }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0" style={{ fontSize: "0.8rem" }}>
            &copy; {new Date().getFullYear()} Blanton Building. All rights reserved.
          </p>
          <p className="mb-0 mt-2 mt-md-0" style={{ fontSize: "0.8rem" }}>
            Licensed General Contractor &mdash; Wilmington, NC
          </p>
        </div>
      </div>
    </footer>
  );
}
