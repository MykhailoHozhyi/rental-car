import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.headerMenuLink, isActive && css.headerMenuLinkActive);
};

function Navigation() {
  return (
    <ul className={css.headerMenu}>
      <li>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
