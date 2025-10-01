import React, { useRef, useState } from "react";
import video from "../../assets/video/video.mp4";
import playBtn from "../../assets/svgs/svg-image-5.svg";
import pauseBtn from "../../assets/svgs/pause-btn.svg";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      <div className="relative w-full mx-auto group">
        {/* Video */}
        <video
          ref={videoRef}
          src={video}
          className="w-full"
          onClick={togglePlay}
        />

        {/* Play button (only when video is paused) */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         transition-all duration-500 ease-in-out 
                       bg-white p-8 shadow-md z-10"
          >
            <img src={playBtn} alt="Play" className="w-8 h-8" />
          </button>
        )}

        {/* Pause button (only show on hover while playing) */}
        {isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        transition-all duration-500 ease-in-out
                       bg-white p-8 shadow-md z-10 opacity-0 group-hover:opacity-100"
          >
            <img src={pauseBtn} alt="Pause" className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
