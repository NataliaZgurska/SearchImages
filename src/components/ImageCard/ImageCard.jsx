import css from './ImageCard.module.css';

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={css.imgContainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image.id)}
        className={css.imgPicture}
      />
    </div>
  );
};

export default ImageCard;
