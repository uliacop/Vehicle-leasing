import CarDetails from "../CarDetails/CarDetails";
import CarList from "../CarList/CarList";
import SelectCarList from "../SelectCarList/SelectCarList";

export default function CarSummary({ cars, category }) {
  return (
    <div>
      <CarList cars={cars} category={category} />
    </div>
  );
}
