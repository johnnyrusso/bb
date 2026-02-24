"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TESTIMONIALS = [
  {
    quote:
      "Blanton Building turned our vision into a home that feels effortless to live in and built for the long haul. Every detail had a reason behind it.",
    name: "Sarah & David Mitchell",
    location: "Wrightsville Beach",
  },
  {
    quote:
      "We always knew what came next. Their team communicated clearly, solved issues quickly, and delivered exactly the level of quality we expected.",
    name: "Dr. James Patterson",
    location: "Landfall",
  },
  {
    quote:
      "They brought structure to every decision while still listening to how our family actually lives. The process was calm, transparent, and incredibly well run.",
    name: "The Reynolds Family",
    location: "Figure Eight Island",
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section id="testimonials" className="bb-section-muted py-5">
      <div className="container py-5" ref={ref}>
        <div className="text-center mb-5">
          <p data-animate="fade-up" className="section-kicker">
            Testimonials
          </p>
          <h2 data-animate="fade-up" data-delay="1" className="section-title">
            Trusted with the most personal investment our clients make.
          </h2>
        </div>
        <div className="row g-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <div className="col-lg-4" key={testimonial.name}>
              <article data-animate="fade-up" data-delay={index + 1} className="bb-testimonial-card">
                <div className="bb-testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={`${testimonial.name}-${i}`} className="bi bi-star-fill me-1" />
                  ))}
                </div>
                <p className="bb-testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="pt-3 border-top">
                  <p className="bb-testimonial-author">{testimonial.name}</p>
                  <span className="bb-testimonial-location">{testimonial.location}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
