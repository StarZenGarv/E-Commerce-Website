import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="h-[40vw] w-full"
      ></video>
    </div>
  );
};

export default VideoPlayer;
