import css from './SearchForm.module.css';
import { useId } from 'react';
import Btn from '../Btn/Btn';
import CustomSelect from '../CustomSelect/CustomSelect';

const carBrands = [
  'Aston Martin',
  'Audi',
  'BMW',
  'Bentley',
  'Buick',
  'Chevrolet',
  'Chrysler',
  'GMC',
  'HUMMER',
  'Hyundai',
  'Kia',
  'Lamborghini',
  'Land Rover',
  'Lincoln',
  'MINI',
  'Mercedes-Benz',
  'Mitsubishi',
  'Nissan',
  'Pontiac',
  'Subaru',
  'Volvo',
];
const brands = carBrands.map(brand => ({
  value: brand.toLowerCase().replace(/\s+/g, '-'),
  label: brand,
}));

const carPrices = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);
const price = carPrices.map(price => ({
  value: `${price}`,
  label: `${price}`,
}));

function SearchForm() {
  const carBrandId = useId();
  const carPriceId = useId();
  const carMileageFromId = useId();
  const carMileageToId = useId();

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <div className={css.fieldBox}>
        <label className={css.fieldLabel} htmlFor={carBrandId}>
          Car brand
        </label>
        <CustomSelect
          id={carBrandId}
          options={brands}
          placeholder="Choose a brand"
        />
      </div>

      <div className={css.fieldBox}>
        <label className={css.fieldLabel} htmlFor={carPriceId}>
          Price/ 1 hour
        </label>
        <CustomSelect
          id={carPriceId}
          options={price}
          placeholder="Choose a price"
        />
      </div>

      <div className={css.fieldBox}>
        <label className={css.fieldLabel} htmlFor={carMileageFromId}>
          Car mileage / km
        </label>
        <div>
          <input
            className={css.fieldMileage}
            name="carMileageFrom"
            id={carMileageFromId}
            placeholder="From"
          />
          <input
            className={css.fieldMileage}
            name="carMileageTo"
            id={carMileageToId}
            placeholder="To"
          />
        </div>
      </div>

      <Btn size="small" type="submit">
        Search
      </Btn>
    </form>
  );
}

export default SearchForm;
