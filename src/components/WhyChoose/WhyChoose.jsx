import "./WhyChoose.css";
import React from "react";
import reasons from "../../../data/reason.json";
export default function WhyChoose() {
  return (
    <div>
      <h3>Why Choose D&M?</h3>
      <ul className="whychoose-list">
        {reasons.map(({ id, img, title, text }) => (
          <li key={id}>
            <div className="whychoose-name">
              <img className="whychoose-img" src={img} />
              <h4>{title}</h4>
            </div>

            <p className="whychoose-text">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
