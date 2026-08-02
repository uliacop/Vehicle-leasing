import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
      />
    </div>
  );
}
