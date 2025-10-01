import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import video from "../../assets/video/video.mp4";
import playBtn from "../../assets/svgs/svg-image-5.svg";
import pauseBtn from "../../assets/svgs/pause-btn.svg";

// Define the animation variants for the buttons
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } },
};

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="pt-20 lg:pt-24">
      <div
        className="relative w-full mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={video}
          className="w-full"
          onClick={togglePlay}
          // When the video ends, reset the state to show the play button again
          onEnded={() => setIsPlaying(false)}
        />

        {/* Wrap the conditional buttons in AnimatePresence */}
        <AnimatePresence mode="wait">
          {/* Play button (only when video is paused) */}
          {!isPlaying && (
            <motion.button
              key="play" // Add a unique key for AnimatePresence to track
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md z-10"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img src={playBtn} alt="Play" className="w-8 h-8" loading="lazy" />
            </motion.button>
          )}

          {/* Pause button (only show when playing AND hovering) */}
          {isPlaying && isHovered && (
            <motion.button
              key="pause" // Add a unique key
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md z-10"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img src={pauseBtn} alt="Pause" className="w-8 h-8" loading="lazy" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideoSection;

