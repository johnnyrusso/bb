"use client";

import { useEffect, useState } from "react";

const sections = ["home", "about", "services", "portfolio", "testimonials", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const obs of observers) obs.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu
    const toggler = document.querySelector<HTMLElement>(".navbar-collapse.show");
    if (toggler) {
      const bsCollapse = document.querySelector<HTMLButtonElement>(".navbar-toggler");
      bsCollapse?.click();
    }
  };

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
          onClick={(e) => handleNavClick(e, "home")}
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
              (item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <li className="nav-item" key={item}>
                    <a
                      className={`nav-link px-3 ${isActive ? "active" : ""}`}
                      href={`#${id}`}
                      onClick={(e) => handleNavClick(e, id)}
                      style={{
                        fontSize: "0.85rem",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        fontWeight: isActive ? 700 : 400,
                        color: isActive ? "hsl(28 60% 60%)" : undefined,
                        transition: "color 0.3s ease, font-weight 0.3s ease",
                      }}
                    >
                      {item}
                    </a>
                  </li>
                );
              }
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
