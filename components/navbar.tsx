"use client";

import { useEffect, useState, useCallback } from "react";

const NAV_ITEMS = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Testimonials",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.toLowerCase());
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
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

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <nav
      className={`navbar navbar-dark fixed-top ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundColor:
          scrolled || menuOpen
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

        {/* Hamburger toggle - visible only on small screens */}
        <button
          className="navbar-toggler border-0 d-lg-none"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Desktop nav links - always visible at lg+ */}
        <ul className="navbar-nav ms-auto align-items-center d-none d-lg-flex flex-row">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link px-3"
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  style={{
                    fontSize: "0.85rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontWeight: isActive ? 700 : 400,
                    color: isActive
                      ? "hsl(28 60% 50%)"
                      : "rgba(255,255,255,0.85)",
                    transition: "color 0.3s ease, font-weight 0.3s ease",
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
          <li className="nav-item ms-3">
            <a
              className="btn btn-outline-light btn-sm px-4 bg-transparent"
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

        {/* Mobile menu - controlled by React state */}
        <div
          className="d-lg-none"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "hsl(210 25% 22% / 0.97)",
            maxHeight: menuOpen ? "500px" : "0",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}
        >
          <ul className="navbar-nav py-3 px-4">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link py-2"
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    style={{
                      fontSize: "0.9rem",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      fontWeight: isActive ? 700 : 400,
                      color: isActive
                        ? "hsl(28 60% 50%)"
                        : "rgba(255,255,255,0.85)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
            <li className="nav-item mt-2">
              <a
                className="btn btn-outline-light btn-sm px-4 bg-transparent"
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
