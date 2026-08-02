import React from "react";
import "./Achievements.css";
import achievements from "../../../data/achievements.json";

export default function Achievements() {
  return (
    <div className="achievements">
      <h3>Let’s See Our Celebrate Milestones</h3>
      <ul className="achievements-ul">
        {achievements.map((achievement) => (
          <li className="achievements-li">
            <img className="achievements-img" src={achievement.img} />
            <p className="achievements-text">{achievement.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
