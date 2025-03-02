import SearchForm from '../../components/SearchForm/SearchForm';
import CarList from '../../components/CarList/CarList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

function CarsCatalogPage({ brands, price, carInfo }) {
  return (
    <div className="container">
      <SearchForm brands={brands} price={price} />
      <CarList carInfo={carInfo} />
      <LoadMoreBtn />
    </div>
  );
}

export default CarsCatalogPage;
