import { NavLink } from 'react-router-dom';
import Btn from '../Btn/Btn';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import css from './CarCard.module.css';

function CarCard({ car }) {
  const [, city, country] = car.address.split(', ');

  return (
    <div className={css.carCard}>
      <FavoriteBtn isFavorite={true} />
      <img
        className={css.carImg}
        src={car.img}
        alt={`${car.brand} ${car.model}`}
      />

      <div className={css.carTitleBox}>
        <h3 className={css.carTitle}>
          {car.brand} <span className={css.carModel}>{car.model}</span>,{' '}
          {car.year}
        </h3>
        <p className={css.carPrice}>${car.rentalPrice}</p>
      </div>

      <div className={css.carInfoBox}>
        <p className={css.carInfo}>{city}</p>
        <span className={css.carInfo}>|</span>
        <p className={css.carInfo}>{country}</p>
        <span className={css.carInfo}>|</span>
        <p className={css.carInfo}>{car.rentalCompany}</p>
        <span className={css.carInfo}>|</span>
      </div>

      <div className={css.carInfoBox}>
        <p className={css.carInfo}>{car.type}</p>
        <span className={css.carInfo}>|</span>
        <p className={css.carInfo}>{car.mileage.toLocaleString('uk-UA')} km</p>
      </div>

      <NavLink className={css.readMoreBtn} to="/catalog/:id">
        <Btn size="large" type="button">
          Read more
        </Btn>
      </NavLink>
    </div>
  );
}

export default CarCard;
