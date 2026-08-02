import React from "react";
import "./CarCard.css";
import defaultImg from "../../img/car.svg";
import { Link, useLocation } from "react-router-dom";
export default function CarCard({ car, category }) {
  const { name, photo, price_usd } = car;
  const location = useLocation();
  console.log(defaultImg);
  return (
    <div>
      <img
        className="car-img"
        src={photo || defaultImg}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = defaultImg;
        }}
      />
      <p className="car-card-bold">{name}</p>
      <p>
        <span className="car-card-bold">price,$:</span>
        {price_usd}
      </p>
      <Link to={`/cars/${category}/${car.id}`} state={{ from: location }}>
        <button className="button-text"> See more details</button>
      </Link>
    </div>
  );
}
