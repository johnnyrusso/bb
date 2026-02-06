"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundColor: scrolled
          ? "hsl(210 25% 22% / 0.97)"
          : "transparent",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#home"
          style={{ fontFamily: "var(--font-serif), serif" }}
        >
          <span className="fw-bold fs-4" style={{ letterSpacing: "0.5px" }}>
            BLANTON
          </span>
          <span
            className="ms-2 fw-light fs-6 text-uppercase"
            style={{ letterSpacing: "2px", opacity: 0.85 }}
          >
            Building
          </span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link px-3"
                    href={`#${item.toLowerCase()}`}
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                className="btn btn-outline-light btn-sm px-4"
                href="tel:9105551234"
                style={{
                  letterSpacing: "1px",
                  fontSize: "0.8rem",
                  borderRadius: "0",
                }}
              >
                (910) 555-1234
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
