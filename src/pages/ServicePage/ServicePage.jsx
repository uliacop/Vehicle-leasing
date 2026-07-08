import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LeaseList from "../../components/LeaseList/LeaseList";
/* import LeasingWork from "../../components/Block/LeasingWork"; */
import RulesSet from "../../components/Rules/RulesSet";
import Block from "../../components/Block/Block";
import { Slider } from "../../components/Slider/Slider";
import signs from "../../../signs.json";
import cars from "../../../data-car/cars-inf.json";
import "./ServicePage.css";
import VideoCar from "../../components/VideoCar/VideoCar";
export default function ServicePage() {
  console.log("ServicePage");
  return (
    <main className="service-page">
      <Slider />
      <LeaseList items={signs} />
      {/*      <LeasingWork /> */}
      <RulesSet />
      <VideoCar />
      <Block items={cars} />

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
