export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Blanton Building turned our dream of a coastal home into reality. The attention to detail and genuine care they put into our project was beyond anything we expected.",
      name: "Sarah & David Mitchell",
      location: "Wrightsville Beach",
    },
    {
      quote:
        "From the initial design meeting to handing us the keys, the entire process was seamless. Their team communicated every step of the way and delivered on time and on budget.",
      name: "Dr. James Patterson",
      location: "Landfall",
    },
    {
      quote:
        "We have worked with several builders over the years, but none compare to the level of craftsmanship and professionalism we experienced with Blanton Building.",
      name: "The Reynolds Family",
      location: "Figure Eight Island",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-5"
      style={{ backgroundColor: "hsl(40 25% 94%)" }}
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <p
            className="text-uppercase mb-2"
            style={{
              color: "hsl(28 60% 50%)",
              letterSpacing: "3px",
              fontSize: "0.8rem",
              fontWeight: 700,
            }}
          >
            Testimonials
          </p>
          <h2
            className="display-6 fw-bold mb-3"
            style={{
              fontFamily: "var(--font-serif), serif",
              color: "hsl(210 25% 22%)",
            }}
          >
            What Our Clients Say
          </h2>
        </div>
        <div className="row g-4">
          {testimonials.map((t) => (
            <div className="col-lg-4" key={t.name}>
              <div
                className="h-100 p-4 p-lg-5 d-flex flex-column"
                style={{
                  backgroundColor: "#fff",
                  borderTop: "3px solid hsl(28 60% 50%)",
                }}
              >
                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={`star-${t.name}-${i}`}
                      className="bi bi-star-fill me-1"
                      style={{ color: "hsl(28 60% 50%)", fontSize: "0.85rem" }}
                    />
                  ))}
                </div>
                <p
                  className="flex-grow-1 mb-4"
                  style={{
                    color: "hsl(210 10% 35%)",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    fontSize: "1rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  className="pt-3"
                  style={{ borderTop: "1px solid hsl(210 15% 90%)" }}
                >
                  <strong
                    className="d-block"
                    style={{
                      color: "hsl(210 25% 22%)",
                      fontFamily: "var(--font-serif), serif",
                    }}
                  >
                    {t.name}
                  </strong>
                  <span
                    style={{
                      color: "hsl(210 10% 55%)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
