import React from "react";
import defaultImg from "../../img/car.svg";
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

        <p>{car.name}</p>
        <p>price:{car.price_usd}</p>
        <p>engine:{car.engine}</p>
        <p>fuel consumption/100kmh:{car.fuel_consumption_l_100km}</p>
        <p>max speed kmh:{car.max_speed_kmh}</p>
        <p>weight/kg:{car.weight_kg}</p>
      </li>
    </>
    /*  <li className="car-choose"> */
  );
}
