import css from './ErrorMessage.module.css';
const ErrorMessage = ({
  message = 'Something went wrong, please reload the page 🤷‍♀️',
}) => {
  return <p className={css.errorMessageText}>{message}</p>;
};

export default ErrorMessage;
