import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import css from './CarsCatalogPage.module.css';
import axios from 'axios';
import CarList from '../../components/CarList/CarList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

function CarsCatalogPage() {
  const [carBrands, setCarBrands] = useState([]);
  const [carInfo, setCarInfo] = useState([]);

  useEffect(() => {
    async function fetchBrands() {
      const response = await axios.get(
        'https://car-rental-api.goit.global/brands'
      );
      setCarBrands(response.data);
    }
    fetchBrands();
  }, []);

  useEffect(() => {
    async function fetchCar() {
      const response = await axios.get(
        'https://car-rental-api.goit.global/cars'
      );
      console.log(response);

      setCarInfo(response.data.cars);
    }
    fetchCar();
  }, []);

  const brands = carBrands.map(brand => ({
    value: brand.toLowerCase().replace(/\s+/g, '-'),
    label: brand,
  }));

  const carPrices = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);
  const price = carPrices.map(price => ({
    value: `${price}`,
    label: `${price}`,
  }));

  return (
    <div className="container">
      <SearchForm brands={brands} price={price} />
      <CarList carInfo={carInfo} />
      <LoadMoreBtn />
    </div>
  );
}

export default CarsCatalogPage;
