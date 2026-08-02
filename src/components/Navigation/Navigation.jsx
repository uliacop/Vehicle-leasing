import React from "react";
import { NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import "./Navigation.css";
export default function Navigation({ buy = {} }) {
  return (
    <nav className="nav">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Service
        </NavLink>
        <NavLink to="cars" className="nav-link">
          Cars
        </NavLink>
        <NavLink to="pricing" className="nav-link">
          Pricing
        </NavLink>
        <NavLink to="about" className="nav-link">
          About
        </NavLink>
        <NavLink to="contacts" className="nav-link">
          Contact us
        </NavLink>
      </div>
      <div className="nav-actions">
        <NavLink to="choose-car" className="cart-link">
          {buy.length > 0 && <span className="cart-count">{buy.length}</span>}
          <IoBagHandleOutline className="cart-icon" />
        </NavLink>
      </div>
    </nav>
  );
}
