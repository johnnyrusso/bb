"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe the container and all children with data-animate
    const animatedChildren = el.querySelectorAll("[data-animate]");
    for (const child of animatedChildren) {
      observer.observe(child);
    }
    // Also observe the container itself if it has data-animate
    if (el.hasAttribute("data-animate")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
