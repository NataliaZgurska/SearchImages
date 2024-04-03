import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore, images }) => {
  return (
    <div className={css.btnContainer}>
      {images.length > 0 && (
        <button onClick={loadMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
