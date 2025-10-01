import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../../assets/images/hero.png";
import ButtonArrow from "../../assets/svgs/svg-image-4.svg";

// --- Animation Variants ---

// This parent container orchestrates the two main child animations.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // Time between the heading and the bottom block animating in
      delayChildren: 0.3,
    },
  },
};

// This variant controls the H1 block and staggers the lines of text inside it.
const headingBlockVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time between "Welcome to" and "Harbor."
    },
  },
};

// This defines the animation for each individual line of text.
const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// This defines the animation for the entire bottom block (paragraph and button).
const bottomBlockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// --- Component ---

const HeroSection = () => {
  return (
    <div className="relative mx-4 max-h-[50rem] overflow-hidden">
      <img
        src={HeroImg}
        alt="hero image"
        className="w-full relative brightness-75 min-h-[90vh] object-cover object-top"
        loading="lazy"
      />

      {/* This invisible motion div covers the entire area and orchestrates the animations. */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First animated child: The heading */}
        <motion.h1
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] xl:translate-x-0 xl:translate-y-0 xl:top-20 xl:left-36 text-center xl:text-left text-4xl md:text-6xl xl:text-8xl font-kaisei w-full xl:max-w-[35rem] text-white leading-tighter"
          variants={headingBlockVariants}
        >
          <motion.span className="block" variants={lineVariants}>
            Welcome to
          </motion.span>
          <motion.span className="block xl:ml-16" variants={lineVariants}>
            Harbor.
          </motion.span>
        </motion.h1>

        {/* Second animated child: The bottom content block */}
        <motion.div
          className="max-xl:top-1/2 max-xl:left-1/2 -translate-x-1/2 xl:translate-x-0 xl:translate-y-0 w-full md:w-[40rem]  px-6 xl:px-2 text-center xl:text-left  xl:max-w-[30rem] text-white absolute xl:bottom-16 xl:right-28 leading-relaxed flex flex-col gap-8"
          variants={bottomBlockVariants}
        >
          <p>
            We are committed to empowering students with world-class education
            cutting-edge research opportunities, and a vibran inclusive
            communit Whether you're here.
          </p>

          <motion.button
            className="bg-[#151515] px-6 py-3 flex gap-1 w-fit mx-auto xl:mx-0 duration-500 ease-in-out hover:bg-red-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <img src={ButtonArrow} alt="arrow" loading="lazy" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

