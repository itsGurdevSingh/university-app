import React from 'react';
import { motion } from 'framer-motion';
import {sectionVariants} from '../../utils/animationVariants.js'


{/* Simply wrap all the sections that need animation in our AnimatedList component.
          It will automatically handle animating each child as it scrolls into view. */}


const AnimatedList = ({ children }) => {
  return (
    // We use a simple React Fragment because we don't need an extra div in the DOM.
    <>
      {/*
        React.Children.map is a safe way to iterate over the children prop.
        It will loop through every direct child inside <AnimatedList>...</AnimatedList>
      */}
      {React.Children.map(children, (child) => (
        // For each child, we wrap it in a motion.div with our desired animation props.
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
};

export default AnimatedList;
