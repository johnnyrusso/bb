"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PROJECTS = [
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
    category: "Interior Remodel",
    location: "Porters Neck",
  },
  {
    image: "/images/project-6.jpg",
    title: "Inlet View Outdoor Living",
    category: "Outdoor Living",
    location: "Masonboro Sound",
  },
];

export default function Portfolio() {
  const ref = useScrollAnimation();

  return (
    <section id="portfolio" className="bb-section-light py-5">
      <div className="container py-5" ref={ref}>
        <div className="text-center mb-5">
          <p data-animate="fade-up" className="section-kicker">
            Selected Work
          </p>
          <h2 data-animate="fade-up" data-delay="1" className="section-title">
            Homes and spaces built around real life.
          </h2>
          <p data-animate="fade-up" data-delay="2" className="section-lead mx-auto">
            Each project reflects a shared process with the homeowner, balancing
            architecture, comfort, and durable execution.
          </p>
        </div>
        <div className="row g-4">
          {PROJECTS.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <article data-animate="scale-in" data-delay={index + 1} className="bb-portfolio-card">
                <div className="bb-portfolio-media">
                  <img
                    src={project.image}
                    alt={`${project.title}, a ${project.category.toLowerCase()} in ${project.location}`}
                  />
                </div>
                <div className="p-4">
                  <div className="bb-portfolio-meta">
                    <span className="bb-portfolio-category">{project.category}</span>
                    <span className="bb-portfolio-location">{project.location}</span>
                  </div>
                  <h3 className="bb-portfolio-title">{project.title}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
