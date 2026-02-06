'use client';

export default function Services() {
  const services = [
    {
      icon: "bi-house-door",
      title: "Custom Homes",
      description:
        "From concept to completion, we design and build one-of-a-kind residences tailored to your lifestyle and the coastal landscape.",
    },
    {
      icon: "bi-tools",
      title: "Renovations",
      description:
        "Breathe new life into your existing home with thoughtful renovations that blend modern comfort with timeless character.",
    },
    {
      icon: "bi-tree",
      title: "Outdoor Living",
      description:
        "Expand your living space with custom decks, porches, outdoor kitchens, and landscaping designed for the Carolina coast.",
    },
    {
      icon: "bi-rulers",
      title: "Design-Build",
      description:
        "Streamline your project with our integrated design-build approach, providing a single point of contact from start to finish.",
    },
    {
      icon: "bi-water",
      title: "Coastal Construction",
      description:
        "Specialized expertise in building for coastal environments, including flood-zone compliance and hurricane-resistant construction.",
    },
    {
      icon: "bi-clipboard-check",
      title: "Project Management",
      description:
        "Transparent timelines, detailed budgets, and consistent communication ensure your project runs smoothly every step of the way.",
    },
  ];

  return (
    <section
      id="services"
      className="py-5"
      style={{ backgroundColor: "hsl(210 25% 22%)" }}
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <p
            className="text-uppercase mb-2"
            style={{
              color: "hsl(28 60% 60%)",
              letterSpacing: "3px",
              fontSize: "0.8rem",
              fontWeight: 700,
            }}
          >
            What We Do
          </p>
          <h2
            className="display-6 fw-bold text-white mb-3"
            style={{ fontFamily: "var(--font-serif), serif" }}
          >
            Our Services
          </h2>
          <p
            className="mx-auto"
            style={{
              maxWidth: "600px",
              color: "hsl(210 15% 70%)",
              lineHeight: 1.7,
            }}
          >
            Every home we build is a testament to quality craftsmanship and
            thoughtful design, tailored to thrive in coastal Carolina.
          </p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.title}>
              <div
                className="h-100 p-4 p-lg-5"
                style={{
                  backgroundColor: "hsl(210 25% 26%)",
                  border: "1px solid hsl(210 20% 30%)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "hsl(28 60% 50%)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(210 20% 30%)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i
                  className={`bi ${service.icon} mb-4 d-block`}
                  style={{ fontSize: "2.5rem", color: "hsl(28 60% 60%)" }}
                />
                <h3
                  className="h5 fw-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-serif), serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-0"
                  style={{
                    color: "hsl(210 15% 65%)",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
