import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {Array.isArray(images) &&
        images.map(item => {
          return (
            <li className={css.galleryItem} key={item.id}>
              <img src={item.urls.small} alt="{item.alt_description}" />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
