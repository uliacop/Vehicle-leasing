import { useState } from "react";

import CarDetails from "../CarDetails/CarDetails";
import CarList from "../CarList/CarList";
import SelectCarList from "../SelectCarList/SelectCarList";

export default function CarSummary({ cars, buy, setBuy, onDelete, category }) {
  /*   const [motors, setMotors] = useState([]);
  const [selectId, setSelectedId] = useState(null);
  function handleSelectedCar(id) {
    return setSelectedId((prev) => (prev === id ? null : id));
  }
 
  function handleCloseCar() {
    return setSelectedId(null);
  }

  const selectedCar = cars.find((auto) => auto.id === selectId); */
  function handleAddBuyCar(car) {
    return setBuy((buy) => [...buy, car]);
  }

  return (
    <div>
      {/*   {   {selectedCar ? (
        <CarDetails
          car={selectedCar}
       onClose={handleCloseCar}  
          buy={buy}
          motors={motors}
          onAddBuy={handleAddBuyCar}
          selectId={selectId}
        />
      ) : (
        <>
          <CarList cars={cars} onSelectCar={handleSelectedCar} />
        </>
      )} } */}
      <CarList cars={cars} category={category} />
    </div>
  );
}
