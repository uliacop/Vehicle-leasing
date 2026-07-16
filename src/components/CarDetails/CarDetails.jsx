import React, { useState } from "react";

import { IoIosStar } from "react-icons/io";
import BackButton from "../BackButton";
import defaultImg from "../../img/car.svg";
import Star from "../SelectCarList/SelectCarList";
import { useParams, useLocation } from "react-router-dom";
import { useRef } from "react";
import "./CarDetails.css";
import "../../App.css";
import StarButton from "../StarButton/StarButton";

export default function CarDetails({ buy, onAddBuy, carsData, onDelete }) {
  const { category, carId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || "/cars");
  const cars = carsData[category];
  const car = cars.find((item) => String(item.id) === carId);

  const {
    name,
    photo,
    price_usd,
    engine,
    fuel_consumption_l_100km,
    max_speed_kmh,
    weight_kg,
  } = car;

  console.log("buy =", buy);
  console.log("isArray =", Array.isArray(buy));
  console.log("typeof =", typeof buy);
  const isBuy = buy.some((auto) => auto.id === car.id);
  function handleToogleCar() {
    if (!isBuy) {
      onAddBuy({
        id: car.id,
        name,
        photo,
        price_usd,
        engine,
        fuel_consumption_l_100km,
        max_speed_kmh,
        weight_kg,
      });
    } else {
      onDelete(car.id);
    }
  }
  return (
    <div>
      <div className="car-details">
        <BackButton to={backLink.current} className="button-text" />
        <StarButton onClick={handleToogleCar} selected={isBuy} />

        <img
          src={photo || defaultImg}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = defaultImg;
          }}
        />
        <hr className="details-line" />
        <div className="car-details-info">
          <p>{name}</p>
          <p>price:{price_usd}</p>
          <p> engine:{engine}</p>
          <p> fuel consumption/100kmh:{fuel_consumption_l_100km}</p>
          <p> max speed kmh:{max_speed_kmh}</p>
          <p> weight/kg:{weight_kg}</p>
        </div>
      </div>
    </div>
  );
}
