import React from "react";
import { useState } from "react";
import "./StarButton.css";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
export default function StarButton({ onClick, selected }) {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <button
        className="star-icon-btn"
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover || selected ? (
          <FaStar className="star-icon" />
        ) : (
          <CiStar className="star-icon" />
        )}
      </button>
    </div>
  );
}
