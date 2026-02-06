"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "hsl(40 20% 97%)" }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5">
            <p
              className="text-uppercase mb-2"
              style={{
                color: "hsl(28 60% 50%)",
                letterSpacing: "3px",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              Contact Us
            </p>
            <h2
              className="display-6 fw-bold mb-4"
              style={{
                fontFamily: "var(--font-serif), serif",
                color: "hsl(210 25% 22%)",
              }}
            >
              {"Let's Build"}
              <br />
              Something Great
            </h2>
            <p
              className="mb-5"
              style={{
                color: "hsl(210 10% 40%)",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              Ready to start your project? Reach out to discuss your vision and
              we will guide you through every step of the process.
            </p>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start gap-3">
                <i
                  className="bi bi-geo-alt-fill mt-1"
                  style={{ color: "hsl(28 60% 50%)", fontSize: "1.2rem" }}
                />
                <div>
                  <strong
                    className="d-block mb-1"
                    style={{ color: "hsl(210 25% 22%)" }}
                  >
                    Office
                  </strong>
                  <span style={{ color: "hsl(210 10% 45%)" }}>
                    1234 Market Street
                    <br />
                    Wilmington, NC 28401
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <i
                  className="bi bi-telephone-fill mt-1"
                  style={{ color: "hsl(28 60% 50%)", fontSize: "1.2rem" }}
                />
                <div>
                  <strong
                    className="d-block mb-1"
                    style={{ color: "hsl(210 25% 22%)" }}
                  >
                    Phone
                  </strong>
                  <a
                    href="tel:9105551234"
                    style={{
                      color: "hsl(210 10% 45%)",
                      textDecoration: "none",
                    }}
                  >
                    (910) 555-1234
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <i
                  className="bi bi-envelope-fill mt-1"
                  style={{ color: "hsl(28 60% 50%)", fontSize: "1.2rem" }}
                />
                <div>
                  <strong
                    className="d-block mb-1"
                    style={{ color: "hsl(210 25% 22%)" }}
                  >
                    Email
                  </strong>
                  <a
                    href="mailto:info@blantonbuilding.com"
                    style={{
                      color: "hsl(210 10% 45%)",
                      textDecoration: "none",
                    }}
                  >
                    info@blantonbuilding.com
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <i
                  className="bi bi-clock-fill mt-1"
                  style={{ color: "hsl(28 60% 50%)", fontSize: "1.2rem" }}
                />
                <div>
                  <strong
                    className="d-block mb-1"
                    style={{ color: "hsl(210 25% 22%)" }}
                  >
                    Hours
                  </strong>
                  <span style={{ color: "hsl(210 10% 45%)" }}>
                    Mon - Fri: 8:00 AM - 5:00 PM
                    <br />
                    Sat: By Appointment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              className="p-4 p-lg-5"
              style={{
                backgroundColor: "#fff",
                border: "1px solid hsl(210 15% 90%)",
              }}
            >
              {submitted ? (
                <div className="text-center py-5">
                  <i
                    className="bi bi-check-circle-fill d-block mb-3"
                    style={{ fontSize: "3rem", color: "hsl(28 60% 50%)" }}
                  />
                  <h3
                    className="h4 fw-bold mb-2"
                    style={{
                      fontFamily: "var(--font-serif), serif",
                      color: "hsl(210 25% 22%)",
                    }}
                  >
                    Thank You!
                  </h3>
                  <p style={{ color: "hsl(210 10% 45%)" }}>
                    {"We've received your message and will be in touch shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="firstName"
                        className="form-label"
                        style={{
                          fontSize: "0.8rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "hsl(210 10% 40%)",
                          fontWeight: 700,
                        }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        required
                        style={{
                          borderRadius: 0,
                          borderColor: "hsl(210 15% 88%)",
                          padding: "0.75rem 1rem",
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="lastName"
                        className="form-label"
                        style={{
                          fontSize: "0.8rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "hsl(210 10% 40%)",
                          fontWeight: 700,
                        }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        required
                        style={{
                          borderRadius: 0,
                          borderColor: "hsl(210 15% 88%)",
                          padding: "0.75rem 1rem",
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="email"
                        className="form-label"
                        style={{
                          fontSize: "0.8rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "hsl(210 10% 40%)",
                          fontWeight: 700,
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        style={{
                          borderRadius: 0,
                          borderColor: "hsl(210 15% 88%)",
                          padding: "0.75rem 1rem",
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="phone"
                        className="form-label"
                        style={{
                          fontSize: "0.8rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "hsl(210 10% 40%)",
                          fontWeight: 700,
                        }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        style={{
                          borderRadius: 0,
                          borderColor: "hsl(210 15% 88%)",
                          padding: "0.75rem 1rem",
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="projectType"
                        className="form-label"
                        style={{
                          fontSize: "0.8rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "hsl(210 10% 40%)",
                          fontWeight: 700,
                        }}
                      >
                        Project Type
                      </label>
                      <select
                        className="form-select"
                        id="projectType"
                        style={{
                          borderRadius: 0,
                          borderColor: "hsl(210 15% 88%)",
                          padding: "0.75rem 1rem",
                          color: "hsl(210 10% 40%)",
                        }}
                      >
                        <option value="">Select a project type</option>
                        <option value="custom-home">Custom Home</option>
                        <option value="renovation">Renovation</option>
                        <option value="outdoor-living">Outdoor Living</option>
                        <option value="addition">Addition</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="message"
                        className="form-label"
                        style={{
                          fontSize: "0.8rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "hsl(210 10% 40%)",
                          fontWeight: 700,
                        }}
                      >
                        Tell Us About Your Project
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={5}
                        required
                        style={{
                          borderRadius: 0,
                          borderColor: "hsl(210 15% 88%)",
                          padding: "0.75rem 1rem",
                          resize: "vertical",
                        }}
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn btn-lg w-100 text-white"
                        style={{
                          backgroundColor: "hsl(28 60% 50%)",
                          borderColor: "hsl(28 60% 50%)",
                          borderRadius: 0,
                          letterSpacing: "1.5px",
                          fontSize: "0.85rem",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          padding: "0.9rem",
                        }}
                      >
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
