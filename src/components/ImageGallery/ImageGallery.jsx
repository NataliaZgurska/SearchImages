import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {Array.isArray(images) &&
        images.map(item => {
          return (
            <li className={css.galleryItem} key={item.id}>
              <ImageCard image={item} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
