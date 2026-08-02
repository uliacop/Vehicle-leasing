import React from "react";
import CarList from "../../components/CarList/CarList";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Link, NavLink, Route, Routes, Outlet } from "react-router-dom";
import "./CarsPage.css";
export default function CarsPage() {
  return (
    <main>
      <h2 className="header-lease">Choose your car</h2>
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
      </ul>
      <Outlet />
    </main>
  );
}
