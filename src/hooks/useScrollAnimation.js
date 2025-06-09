import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate,.scroll-animate-left");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));

    // Recheck on load in case already in viewport
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};
 