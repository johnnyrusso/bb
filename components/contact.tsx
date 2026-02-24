"use client";

import { useState, type FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bb-section-light py-5">
      <div className="container py-5" ref={ref}>
        <div className="row g-5">
          <div className="col-lg-5">
            <p data-animate="fade-right" className="section-kicker">
              Contact Us
            </p>
            <h2 data-animate="fade-right" data-delay="1" className="section-title">
              Tell us what you&apos;re planning.
            </h2>
            <p data-animate="fade-right" data-delay="2" className="section-body mb-5">
              Share project goals, budget range, and timing. We&apos;ll follow
              up with practical next steps within one business day.
            </p>

            <div className="d-flex flex-column gap-4 bb-contact-info" data-animate="fade-right" data-delay="3">
              <div className="d-flex align-items-start gap-3">
                <i className="bi bi-geo-alt-fill mt-1" style={{ color: "var(--bb-accent)", fontSize: "1.2rem" }} />
                <div>
                  <strong className="d-block mb-1">Office</strong>
                  <span>
                    1234 Market Street
                    <br />
                    Wilmington, NC 28401
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <i className="bi bi-telephone-fill mt-1" style={{ color: "var(--bb-accent)", fontSize: "1.2rem" }} />
                <div>
                  <strong className="d-block mb-1">Phone</strong>
                  <a href="tel:9105551234">(910) 555-1234</a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <i className="bi bi-envelope-fill mt-1" style={{ color: "var(--bb-accent)", fontSize: "1.2rem" }} />
                <div>
                  <strong className="d-block mb-1">Email</strong>
                  <a href="mailto:info@blantonbuilding.com">info@blantonbuilding.com</a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <i className="bi bi-clock-fill mt-1" style={{ color: "var(--bb-accent)", fontSize: "1.2rem" }} />
                <div>
                  <strong className="d-block mb-1">Hours</strong>
                  <span>
                    Mon - Fri: 8:00 AM - 5:00 PM
                    <br />
                    Sat: By Appointment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div data-animate="fade-left" data-delay="2" className="bb-contact-panel">
              {submitted ? (
                <div className="text-center py-5">
                  <i
                    className="bi bi-check-circle-fill d-block mb-3"
                    style={{ fontSize: "3rem", color: "var(--bb-accent)" }}
                  />
                  <h3 className="h4 fw-bold mb-2" style={{ fontFamily: "var(--font-serif), serif", color: "var(--bb-ink)" }}>
                    Thank You
                  </h3>
                  <p style={{ color: "var(--bb-ink-soft)" }}>
                    We&apos;ve received your message and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bb-contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input type="text" className="form-control" id="firstName" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input type="text" className="form-control" id="lastName" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input type="tel" className="form-control" id="phone" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="budget" className="form-label">
                        Budget Range
                      </label>
                      <select className="form-select" id="budget" defaultValue="">
                        <option value="" disabled>
                          Select budget range
                        </option>
                        <option value="150-300">$150k - $300k</option>
                        <option value="300-600">$300k - $600k</option>
                        <option value="600-1000">$600k - $1M</option>
                        <option value="1000+">$1M+</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="timeline" className="form-label">
                        Desired Timeline
                      </label>
                      <select className="form-select" id="timeline" defaultValue="">
                        <option value="" disabled>
                          Select timeline
                        </option>
                        <option value="asap">As soon as possible</option>
                        <option value="3-6">3-6 months</option>
                        <option value="6-12">6-12 months</option>
                        <option value="planning">Still planning</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="projectType" className="form-label">
                        Project Type
                      </label>
                      <select className="form-select" id="projectType" defaultValue="">
                        <option value="" disabled>
                          Select a project type
                        </option>
                        <option value="custom-home">Custom Home</option>
                        <option value="renovation">Renovation</option>
                        <option value="outdoor-living">Outdoor Living</option>
                        <option value="addition">Addition</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Tell Us About Your Project
                      </label>
                      <textarea className="form-control" id="message" rows={5} required />
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-lg w-100 text-white bb-btn-primary py-3">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
