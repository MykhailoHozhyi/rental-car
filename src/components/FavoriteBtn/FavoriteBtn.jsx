import css from './FavoriteBtn.module.css';

function FavoriteBtn({ isFavorite }) {
  return (
    <button className={css.favoriteBtn} type="button">
      <svg className={css.favorite} width={16} height={16}>
        <use
          href={
            isFavorite
              ? 'icons/icons-sprite.svg#icon-heart-full'
              : 'icons/icons-sprite.svg#icon-heart'
          }
        ></use>
      </svg>
    </button>
  );
}

export default FavoriteBtn;
