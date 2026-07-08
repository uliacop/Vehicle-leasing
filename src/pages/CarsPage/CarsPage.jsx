import React from "react";
import CarList from "../../components/CarList/CarList";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Link, NavLink, Route, Routes, Outlet } from "react-router-dom";

/* import CarMinivan from "../../components/CarMinivan/CarMinivan"; */
import "./CarsPage.css";
export default function CarsPage() {
  /*   const [selectedCarId, setSelectedCarId] = useState(null); */

  console.log("CarsPage");

  return (
    <main>
      <ul className="car-list">
        <li>
          <NavLink
            to="/cars"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Car and Minivan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cars/trucks"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Trucks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cars/crossovers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Crossovers & SUVs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cars/electrified"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Electrified
          </NavLink>
        </li>
        {/*  <li>
          <NavLink
            to="/cars/choose-car"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IoBagHandleOutline />
          </NavLink>
        </li> */}
      </ul>

      <Outlet />
    </main>
  );
}
