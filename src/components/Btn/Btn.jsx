import { NavLink } from 'react-router-dom';
import css from './Btn.module.css';

function Btn({ size, children }) {
  return (
    <NavLink to="/catalog">
      <button className={`${css.btn} ${css[size]}`} type="button">
        {children}
      </button>
    </NavLink>
  );
}

export default Btn;
