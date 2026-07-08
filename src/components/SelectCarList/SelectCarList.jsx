import React from "react";
import CarChoose from "../CarChoose/CarChoose";
import BackButton from "../BackButton";
import "./SelectCarList.css";
export default function SelectCarList({ buy, onDelete }) {
  return (
    <>
      <BackButton /> <h3>{buy.length}</h3>
      <ul className="car-choose-list">
        {buy.map((car) => (
          <CarChoose car={car} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
