import React from 'react';
import ReactPlayer from 'react-player';


const CameraStream = () => {
  return (
    <div>
      <ReactPlayer
        url="rtsp://cameraipaddress"
        playing
        controls
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default CameraStream;
