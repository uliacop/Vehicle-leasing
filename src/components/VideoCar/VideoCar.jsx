import ReactPlayer from "react-player";

import "./VideoCar.css";
export default function VideoCar() {
  return (
    <div className="video-car">
      <h3>WELCOME TO D&M LEASING</h3>
      <p>Find out how easy it is to lease from D&M</p>
      <div className="video-wrapper">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=YAFUyPp_238"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
