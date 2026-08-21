import { useEffect } from 'react';

/**
 * Custom hook to observe all elements with .reveal, .reveal-up, .reveal-stagger
 * and add .is-visible when they enter the viewport.
 */
export function useScrollReveal(dependencies = []) {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animated, we don't need to observe it again
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-stagger');

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, dependencies);
}
