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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
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

  const showSolidNav = scrolled || menuOpen;

  return (
    <nav
      className={`navbar navbar-dark fixed-top bb-navbar ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundColor: showSolidNav ? "rgba(8, 14, 21, 0.94)" : "transparent",
        backdropFilter: showSolidNav ? "blur(8px)" : "none",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center bb-navbar-brand"
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Go to top of page"
        >
          <span className="bb-brand-wordmark">BLANTON</span>
          <span className="bb-brand-sub">Building</span>
        </a>

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

        <ul className="navbar-nav ms-auto align-items-center d-none d-lg-flex flex-row">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link px-3 bb-nav-link ${isActive ? "active" : ""}`}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {item}
                </a>
              </li>
            );
          })}
          <li className="nav-item ms-3">
            <a className="btn btn-outline-light btn-sm px-4 bb-btn-outline-light" href="tel:9105551234">
              (910) 555-1234
            </a>
          </li>
        </ul>

        <div className={`d-lg-none bb-mobile-menu ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-nav py-3 px-4">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <li className="nav-item" key={item}>
                  <a
                    className={`nav-link py-2 bb-nav-link ${isActive ? "active" : ""}`}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
            <li className="nav-item mt-2">
              <a className="btn btn-outline-light btn-sm px-4 bb-btn-outline-light" href="tel:9105551234">
                (910) 555-1234
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
