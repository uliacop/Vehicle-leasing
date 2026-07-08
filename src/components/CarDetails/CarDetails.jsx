import React from "react";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import BackButton from "../BackButton";
import defaultImg from "../../img/car.svg";
import Star from "../SelectCarList/SelectCarList";
import { useParams, useLocation } from "react-router-dom";
import { useRef } from "react";
import "./CarDetails.css";
import "../../App.css";

export default function CarDetails({ buy, onAddBuy, carsData }) {
  /*   const [selectedByCystomer, setSelectedByCystomer] = useState(false); */
  const { category, carId } = useParams();
  const location = useLocation();

  const backLink = useRef(location.state?.from || "/cars");
  const cars = carsData[category];

  const car = cars.find((item) => item.id === carId);
  const {
    name,
    photo,
    price_usd,
    engine,
    fuel_consumption_l_100km,
    max_speed_kmh,
    weight_kg,
  } = car;
  function handleAddSelectCar() {
    const newSelectCar = {
      /*       id: selectId, */
      id: car.id,
      name,
      photo,
      price_usd,
      engine,
      fuel_consumption_l_100km,
      max_speed_kmh,
      weight_kg,
    };
    onAddBuy(newSelectCar);
    /*     onClose(); */
  }
  /*   const isBuy = buy.some((auto) => auto.id === selectId); */
  const isBuy = buy.some((auto) => auto.id === car.id);
  return (
    <div>
      {/* 
      <button onClick={onClose}>&larr; </button>
 */}
      <div className="car-details">
        <BackButton to={backLink.current} />
        {!isBuy && (
          <button className="star" onClick={handleAddSelectCar}>
            <CiStar class="star-icon" />
          </button>
        )}
        <img
          src={photo || defaultImg}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = defaultImg;
          }}
        />
        <hr className="details-line" />
        <p>{name}</p>
        <p>price:{price_usd}</p>
        <p> engine:{engine}</p>
        <p> fuel consumption/100kmh:{fuel_consumption_l_100km}</p>
        <p> max speed kmh:{max_speed_kmh}</p>
        <p> weight/kg:{weight_kg}</p>
      </div>
    </div>
  );
}
