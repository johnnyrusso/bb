export default function Hero() {
  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/images/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(20, 30, 40, 0.6)" }}
      />
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-lg-8 col-xl-7">
            <p
              className="text-uppercase mb-3"
              style={{
                color: "hsl(28 60% 60%)",
                letterSpacing: "3px",
                fontSize: "0.85rem",
                fontWeight: 700,
              }}
            >
              Wilmington, NC
            </p>
            <h1
              className="display-3 fw-bold text-white mb-4"
              style={{
                fontFamily: "var(--font-serif), serif",
                lineHeight: 1.15,
              }}
            >
              Building Homes
              <br />
              <span style={{ color: "hsl(28 60% 60%)" }}>
                Built to Last
              </span>
            </h1>
            <p
              className="lead text-white mb-5"
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.7,
                opacity: 0.9,
                maxWidth: "540px",
              }}
            >
              From custom coastal residences to thoughtful renovations, Blanton
              Building brings uncompromising craftsmanship to every project in
              the Cape Fear region.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="btn btn-lg px-5 py-3"
                style={{
                  backgroundColor: "hsl(28 60% 50%)",
                  borderColor: "hsl(28 60% 50%)",
                  color: "#fff",
                  borderRadius: 0,
                  letterSpacing: "1.5px",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light btn-lg px-5 py-3"
                style={{
                  borderRadius: 0,
                  letterSpacing: "1.5px",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{
          height: "120px",
          background:
            "linear-gradient(to top, hsl(40 20% 97%), transparent)",
        }}
      />
    </section>
  );
}
