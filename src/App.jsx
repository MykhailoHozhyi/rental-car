import { Route, Routes } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CarsCatalogPage from './pages/CarsCatalogPage/CarsCatalogPage';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
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
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <CarsCatalogPage
                brands={brands}
                price={price}
                carInfo={carInfo}
              />
            }
          />
          <Route
            path="/catalog/:id"
            element={<CarDetailsPage carInfo={carInfo} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
