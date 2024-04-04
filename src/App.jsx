import { useEffect, useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';

import { getImagesByQuery } from './services/api';

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
        if (data.total === 0) {
          setIsError(true);
        }
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
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} toast={toast} />
      {isError && <ErrorMessage images={images} />}
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {btnLoadMore && <LoadMoreBtn loadMore={loadMore} images={images} />}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        modalImage={modalImage}
      />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default App;
