import Btn from '../../components/Btn/Btn';
import css from './HomePage.module.css';

function HomePage() {
  return (
    <div className={css.hero}>
      <div className="container">
        <div className={css.textBox}>
          <h1 className={css.heroTitle}>Find your perfect rental car</h1>
          <p className={css.heroText}>
            Reliable and budget-friendly rentals for any journey
          </p>
        </div>
        <Btn size="large">View Catalog</Btn>
      </div>
    </div>
  );
}

export default HomePage;
