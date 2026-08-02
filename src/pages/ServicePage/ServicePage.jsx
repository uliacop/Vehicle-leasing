import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LeaseList from "../../components/LeaseList/LeaseList";
import RulesSet from "../../components/Rules/RulesSet";
import Block from "../../components/Block/Block";
import { Slider } from "../../components/Slider/Slider";
import signs from "../../../data/signs.json";
import cars from "../../../data-car/cars-inf.json";
import VideoCar from "../../components/VideoCar/VideoCar";
import CarRules from "../../components/CarRules/CarRules";
import Loader from "../../components/Loader/Loader";
export default function ServicePage() {
  return (
    <main className="service-page">
      <Slider />
      <LeaseList items={signs} />
      <CarRules />
      <VideoCar />
      <Block items={cars} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
