// This file defines the animation states (variants) for our page sections.

// Parent container variants
// This controls the orchestration of the children's animations.
export const containerVariants = {
  // The 'hidden' state is not explicitly used here for the container itself,
  // but it's good practice to define it.
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // staggerChildren tells Framer Motion to animate each child
      // with a 0.3-second delay between them.
      staggerChildren: 0.3,
    },
  },
};

// Child section variants
// This defines how each individual section will animate.
export const sectionVariants = {
  // Initial state: hidden, slightly below its final position.
  hidden: { opacity: 0, y: 40 },
  // Final state: fully visible, at its original position.
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // The animation will take 0.8 seconds.
      ease: "easeOut", // A smooth easing function.
    },
  },
};
