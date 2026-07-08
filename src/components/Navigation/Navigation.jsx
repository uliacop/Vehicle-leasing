import React from "react";
import { NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import "./Navigation.css";
export default function Navigation({ buy = {} }) {
  return (
    <nav className="nav">
      <NavLink to="/">Service</NavLink>
      <NavLink to="cars">Cars</NavLink>
      <NavLink to="pricing">Pricing</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="choose-car">
        {buy.length > 0 && <span>{buy.length}</span>}Choose Car
        <IoBagHandleOutline />
      </NavLink>
    </nav>
  );
}
