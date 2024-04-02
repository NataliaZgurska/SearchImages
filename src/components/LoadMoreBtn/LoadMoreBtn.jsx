const LoadMoreBtn = ({ pageNumber, onPageChange }) => {
  const handleSubmit = () => {
    onPageChange(Number(pageNumber) + 1);
  };

  return (
    <div>
      <button onClick={handleSubmit}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
