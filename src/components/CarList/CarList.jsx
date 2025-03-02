import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';

function CarList({ carInfo }) {
  return (
    <ul className={css.carList}>
      {carInfo.map(car => (
        <li className={css.carItem} key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
}

export default CarList;
