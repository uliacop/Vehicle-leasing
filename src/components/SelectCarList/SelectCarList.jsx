import React from "react";
import CarChoose from "../CarChoose/CarChoose";
import BackButton from "../BackButton";
import "./SelectCarList.css";
export default function SelectCarList({ buy, onDelete }) {
  if (buy.length === 0) {
    return (
      <h3 className="no-car">No selected cars! Review the section "Cars"</h3>
    );
  }
  return (
    <>
      <BackButton className="back-select button-text" />
      <h3>Total choose cars: {buy.length}</h3>
      <ul className="car-choose-list">
        {buy.map((car) => (
          <CarChoose car={car} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
