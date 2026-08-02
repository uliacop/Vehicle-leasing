import React from "react";
import CarChoose from "../CarChoose/CarChoose";
import BackButton from "../BackButton";
import "./SelectCarList.css";
import Button from "../Button";
export default function SelectCarList({ buy, onDelete, setBuy }) {
  function clearList() {
    setBuy([]);
  }
  if (buy.length === 0) {
    return (
      <div className="select-car-list">
        <h3 className="no-car">No selected cars! Review the section "Cars"</h3>
      </div>
    );
  }
  return (
    <>
      <div className="select-car-list-cover">
        <BackButton className="back-select button-text" />
        <h3>Total choose cars: {buy.length}</h3>
        <ul className="car-choose-list">
          {buy.map((car) => (
            <CarChoose car={car} onDelete={onDelete} />
          ))}
        </ul>
      </div>
      <Button onClick={clearList} className="button-text clear-btn">
        Clear list
      </Button>
    </>
  );
}
