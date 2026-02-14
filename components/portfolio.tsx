'use client';

export default function Portfolio() {
  const projects = [
    {
      image: "/images/project-1.jpg",
      title: "The Ashford Residence",
      category: "Custom Home",
      location: "Wrightsville Beach",
    },
    {
      image: "/images/project-2.jpg",
      title: "Marsh Landing Kitchen",
      category: "Renovation",
      location: "Landfall",
    },
    {
      image: "/images/project-3.jpg",
      title: "Palmetto Cottage",
      category: "Custom Home",
      location: "Carolina Beach",
    },
    {
      image: "/images/exterior-showcase.jpg",
      title: "The Cape Retreat",
      category: "Waterfront",
      location: "Figure Eight Island",
    },
    {
      image: "/images/interior-showcase.jpg",
      title: "Harbor Oak Great Room",
      category: "Interior",
      location: "Porters Neck",
    },
    {
      image: "/images/project-6.jpg",
      title: "Inlet View Outdoor Living",
      category: "Outdoor Living",
      location: "Masonboro Sound",
    },
  ];

  return (
    <section id="portfolio" className="py-5" style={{ backgroundColor: "hsl(40 20% 97%)" }}>
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
            Our Work
          </p>
          <h2
            className="display-6 fw-bold mb-3"
            style={{
              fontFamily: "var(--font-serif), serif",
              color: "hsl(210 25% 22%)",
            }}
          >
            Featured Projects
          </h2>
          <p
            className="mx-auto"
            style={{
              maxWidth: "600px",
              color: "hsl(210 10% 45%)",
              lineHeight: 1.7,
            }}
          >
            A selection of homes and spaces we have had the privilege of
            bringing to life across the greater Wilmington area.
          </p>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <div
                className="position-relative overflow-hidden"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.category} in ${project.location}`}
                  className="w-100"
                  style={{
                    height: "350px",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,30,40,0.85), transparent)",
                  }}
                >
                  <span
                    className="d-block text-uppercase mb-1"
                    style={{
                      color: "hsl(28 60% 60%)",
                      fontSize: "0.7rem",
                      letterSpacing: "2px",
                      fontWeight: 700,
                    }}
                  >
                    {project.category} &mdash; {project.location}
                  </span>
                  <h3
                    className="h5 text-white mb-0 fw-bold"
                    style={{ fontFamily: "var(--font-serif), serif" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
