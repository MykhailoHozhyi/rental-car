import OrderForm from '../../components/OrderForm/OrderForm';
import css from './CarDetailsPage.module.css';

function CarDetailsPage() {
  return (
    <div className={css.carDetails}>
      <div className={css.carImgOrderBox}>
        <img src="" alt="" />
        <OrderForm />
      </div>
    </div>
  );
}

export default CarDetailsPage;
