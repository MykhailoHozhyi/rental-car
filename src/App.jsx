import { Route, Routes } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CarsCatalogPage from './pages/CarsCatalogPage/CarsCatalogPage';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CarsCatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
