import css from './ErrorMessage.module.css';
const ErrorMessage = ({ images }) => {
  let message = '';
  if (images.length === 0) {
    message = 'Nothing was found. Try to change your request 🤷‍♀️';
  } else {
    message = 'Something went wrong, please reload the page 🤷‍♀️';
  }

  return <p className={css.errorMessageText}>{message}</p>;
};

export default ErrorMessage;
