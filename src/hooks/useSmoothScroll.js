import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // The speed of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smoothTouch: true, // Enable smooth scrolling for touch devices
    });

    // 2. Setup the animation frame loop
    // This is the core of the smooth scroll effect
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 3. Cleanup on unmount
    // This is important to prevent memory leaks
    return () => {
      lenis.destroy();
    };
  }, []); // The empty dependency array ensures this runs only once on mount
};

export default useSmoothScroll;
