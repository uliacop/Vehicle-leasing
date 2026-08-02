import React from "react";
import defaultImg from "/../img/car.svg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./CarChoose.css";

export default function CarChoose({ car, onDelete }) {
  return (
    <>
      <li className="select-car">
        <button className="btn-delete" onClick={() => onDelete(car.id)}>
          <IoIosCloseCircleOutline className="delete-icon" />
        </button>
        <h3>{car.length}</h3>
        <img
          src={car.photo || defaultImg}
          onError={(e) => {
            e.currentTarget.src = defaultImg;
          }}
        />
        <p className="car-card-bold">{car.name}</p>
        <p>
          <span className="car-card-bold">price, $:</span>
          {car.price_usd}
        </p>
        <p>
          <span className="car-card-bold">engine:</span>
          {car.engine}
        </p>
        <p>
          <span className="car-card-bold">fuel consumption/100kmh:</span>
          {car.fuel_consumption_l_100km}
        </p>
        <p>
          <span className="car-card-bold">max speed kmh:</span>
          {car.max_speed_kmh}
        </p>
        <p>
          <span className="car-card-bold">weight/kg:</span>
          {car.weight_kg}
        </p>
      </li>
    </>
  );
}
