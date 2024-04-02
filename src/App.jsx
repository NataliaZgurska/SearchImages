import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchForm from './components/SearchForm/SearchForm';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
// import './App.css';

function App() {
  const [images, setImages] = useState(null);
  const [imagesArray, setImagesArray] = useState(null);
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const currentOrientation = 'landscape';
  const currentPage = Number(pageNumber);

  const MY_ACCESS_KEY = 'r5X1Oa10oS9-BERhXbh0nWixL3GFYc5WhGNcDvhdj7k';
  useEffect(() => {
    if (query.length === 0) return;
    async function fetchImages() {
      const { data } = await axios.get(
        'https://api.unsplash.com/search/photos?client_id=' +
          MY_ACCESS_KEY +
          '&page=' +
          currentPage +
          '&query=' +
          query +
          '&per_page=6' +
          '&orientation=' +
          currentOrientation
      );
      setImages(data.results);
    }
    fetchImages();
  }, [query, currentPage]);

  const onSetSearchQuery = searchTerm => {
    setQuery(searchTerm);
  };

  const onPageChange = newPage => {
    setPageNumber(newPage);
    // console.log('newPage: ', newPage);
  };

  useEffect(() => {
    if (currentPage === 1) {
      setImagesArray(images);
    } else {
      setImagesArray(prevImagesArray => [...prevImagesArray, ...images]);
    }
  }, [images]);
  console.log(imagesArray);

  return (
    <>
      <h2>Search picture by name</h2>
      <SearchForm
        onSetSearchQuery={onSetSearchQuery}
        setPageNumber={setPageNumber}
        setImagesArray={setImagesArray}
      />
      <ImageGallery images={imagesArray} />
      <LoadMoreBtn pageNumber={pageNumber} onPageChange={onPageChange} />
    </>
  );
}

export default App;
