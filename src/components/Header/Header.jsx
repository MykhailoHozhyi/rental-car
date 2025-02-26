import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import '../../index.css';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.headerNav}>
          <NavLink className={css.logo} to="/">
            <Logo />
          </NavLink>
          <Navigation />
        </nav>
      </div>
    </header>
  );
}

export default Header;
