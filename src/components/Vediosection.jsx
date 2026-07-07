import React from "react";
import "./Vediosection.css";
import FoodVideo from "../assets/foodvideo.mp4";

const Video = () => {
  return (
    <div className="video-container">
      <video
        className="video-player"
        src={FoodVideo}
        autoPlay
        muted
        loop
        controls
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;