import React from "react";
import { useState } from "react";
import CarCard from "../CarCard/CarCard";
import ButtonNavigation from "../ButtonNavigation/ButtonNavigation";
import "./CarList.css";
import { Link } from "react-router-dom";
export default function CarList({ cars, onSelectCar, category }) {
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 6;
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = page * ITEMS_PER_PAGE;
  const visibleCars = cars.slice(start, end);
  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);

  return (
    <div>
      <h2 className="header-lease">Choose your car</h2>
      <ul className="car-list">
        {visibleCars.map((car) => (
          /*     <Link className="car-card" key={car.id}> */

          <li className="car-card" key={car.id}>
            {/*             <CarCard car={car} onSelectCar={onSelectCar} /> */}
            <CarCard car={car} category={category} />
          </li>
        ))}
      </ul>

      <ButtonNavigation
        cars={cars}
        visibleCars={visibleCars}
        start={start}
        end={end}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}
