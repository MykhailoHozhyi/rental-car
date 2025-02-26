import css from './Logo.module.css';

function Logo() {
  return (
    <>
      <img
        className={css.logoImg}
        src="/logo.svg"
        alt="Logo"
        width={104}
        height={16}
      />
    </>
  );
}

export default Logo;
