import React from "react";
import "./ChooseD&M.css";
export default function ChooseDM() {
  return (
    <div className="choose-cover">
      <div className="text-choose">
        <h3>Why Choose D&M?</h3>
        <p className="choose-text">
          Join our satisfied customers who trust us for their journeys. We serve
          with a lot of values that you can feel directly.
        </p>
      </div>
      <div className="car-wrapper">
        <img className="car-img" src="/img/car-choose.png" />
        <ul className="choose-list">
          <li className="choose-unit__item choose-unit__item--1">
            <h4>Easy lizing</h4>
            <p>Reserve your car in just a few clicks</p>
          </li>
          <li className="choose-unit__item choose-unit__item--2">
            <h4>Quality & Variety</h4>
            <p>Explore our diverse range of vehicles</p>
          </li>
          <li className="choose-unit__item choose-unit__item--3">
            <h4>Affordable Rates</h4>
            <p>Enjoy competitive prices without hidden fees</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
