import css from './SmallBtn.module.css';

function SmallBtn({ children }) {
  return (
    <button className={css.smallBtn} type="button">
      {children}
    </button>
  );
}

export default SmallBtn;
