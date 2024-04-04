import css from './SearchBar.module.css';

const SearchBar = ({ onSetSearchQuery, toast }) => {
  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value;
    if (value.trim() === '') {
      toast.error('Please enter search query', {
        icon: '🤔 ✍️',
        style: {
          borderRadius: '10px',
          background: '#808080',
          color: 'yellow',
        },
      });
      return;
    }
    onSetSearchQuery(value.trim());
    e.target.reset();
  };

  return (
    <header className={css.headerContainer}>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          className={css.formInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" aria-label="Search" className={css.formBtn}>
          🔍
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
