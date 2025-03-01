import css from './Btn.module.css';

function Btn({ size, type, children }) {
  return (
    <button className={`${css.btn} ${css[size]}`} type={type}>
      {children}
    </button>
  );
}

export default Btn;
