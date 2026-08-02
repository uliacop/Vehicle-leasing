import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import LeaseList from "./components/LeaseList/LeaseList";
import Block from "./components/Block/Block";
import RulesSet from "./components/Rules/RulesSet";
import Accordion from "./components/Accordion/Accordion";
import LeasingCalculator from "./components/LeasingCalculator/LeasingCalculator";
import { AiFillSun } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slider } from "./components/Slider/Slider";
import TextExpanderList from "./components/TextExpander/TextExpanderList";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer.jsx";
import CarSummary from "./components/CarSummary/CarSummary.jsx";
import CarDetails from "./components/CarDetails/CarDetails.jsx";
import SelectCarList from "./components/SelectCarList/SelectCarList.jsx";
import carsMinivan from "../data-car/car-minivan.json";
import carsTrucks from "../data-car/cars-trucks.json";
import carsCrossovers from "../data-car/crossovers.json";
import carsElectrified from "../data-car/electrified.json";
import "./App.css";
import CarList from "./components/CarList/CarList.jsx";
import Loader from "./components/Loader/Loader.jsx";
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactsPage.jsx")
);
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage.jsx"));
const PricingPage = lazy(() => import("./pages/PricingPage/PricingPage.jsx"));
const CarsPage = lazy(() => import("./pages/CarsPage/CarsPage.jsx"));
const ServicePage = lazy(() => import("./pages/ServicePage/ServicePage.jsx"));
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [buy, setBuy] = useState(() => {
    const savedCars = window.localStorage.getItem("saved-cars");
    return savedCars ? JSON.parse(savedCars) : [];
  });
  useEffect(() => {
    window.localStorage.setItem("saved-cars", JSON.stringify(buy));
  }, [buy]);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  function togleDarkMode() {
    setDarkMode(!darkMode);
  }
  function handleDeleteCar(id) {
    setBuy((buy) => buy.filter((auto) => auto.id !== id));
  }
  function handleAddBuyCar(car) {
    setBuy((prev) => [...prev, car]);
  }
  return (
    <div className="app">
      <header className="header">
        <Logo />
        <Navigation buy={buy} />
        <button
          className={`icon-mode ${darkMode ? "dark-button" : ""}`}
          onClick={togleDarkMode}
        >
          {darkMode ? <FaRegMoon /> : <AiFillSun />}
        </button>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ServicePage />} />
          <Route path="/cars" element={<CarsPage />}>
            <Route
              index
              element={
                <CarSummary
                  cars={carsMinivan}
                  buy={buy}
                  setBuy={setBuy}
                  category="cars"
                />
              }
            />
            <Route
              path="trucks"
              element={
                <CarSummary
                  buy={buy}
                  setBuy={setBuy}
                  cars={carsTrucks}
                  category="trucks"
                />
              }
            />
            <Route
              path="crossovers"
              element={
                <CarSummary
                  buy={buy}
                  setBuy={setBuy}
                  cars={carsCrossovers}
                  category="crossovers"
                />
              }
            />
            <Route
              path="electrified"
              element={
                <CarSummary
                  buy={buy}
                  setBuy={setBuy}
                  cars={carsElectrified}
                  category="electrified"
                />
              }
            />
            <Route
              path=":category/:carId"
              element={
                <CarDetails
                  buy={buy}
                  onAddBuy={handleAddBuyCar}
                  onDelete={handleDeleteCar}
                  carsData={{
                    cars: carsMinivan,
                    trucks: carsTrucks,
                    crossovers: carsCrossovers,
                    electrified: carsElectrified,
                  }}
                />
              }
            />
          </Route>
          <Route
            path="choose-car"
            element={
              <SelectCarList
                buy={buy}
                onDelete={handleDeleteCar}
                setBuy={setBuy}
              />
            }
          />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
