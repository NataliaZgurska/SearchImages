import { useEffect, useState } from 'react';

import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchForm from './components/SearchForm/SearchForm';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { getImagesByQuery } from './services/api';
import ImageModal from './components/ImageModal/ImageModal';
// import './App.css';

function App() {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [btnLoadMore, setBtnLoadMore] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    if (query.length === 0) return;

    const fetchImages = async () => {
      try {
        const data = await getImagesByQuery(query, page);
        setImages(prevImages => [...prevImages, ...data.results]);
        setBtnLoadMore(data.total_pages > page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = searchTerm => {
    setQuery(searchTerm);
    setIsLoading(true);
    setIsError(false);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = id => {
    setModalImage(images.filter(image => image.id === id));
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchForm onSetSearchQuery={onSetSearchQuery} />
      {isError && <ErrorMessage />}

      <ImageGallery images={images} openModal={openModal} />
      {/* {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )} */}

      {isLoading && <Loader />}
      {btnLoadMore && <LoadMoreBtn loadMore={loadMore} images={images} />}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        modalImage={modalImage}
      />
    </>
  );
}

export default App;
