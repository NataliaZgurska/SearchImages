import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ closeModal, modalIsOpen, modalImage }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalImage.length > 0 && (
          <div>
            <div className={css.imgContainer}>
              <img
                className={css.modalImg}
                src={modalImage[0].urls.regular}
                alt={modalImage[0].alt_description}
              />
            </div>
            <p className={css.modalDescription}>
              {modalImage[0].alt_description}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
