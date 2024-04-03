import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './SearchForm.module.css';

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Search term is required!'),
});

const FORM_INITIAL_VALUES = {
  searchTerm: '',
};

const SearchForm = ({ onSetSearchQuery }) => {
  const handleSubmit = (values, actions) => {
    onSetSearchQuery(values.searchTerm);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={searchFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <Field
            type="text"
            name="searchTerm"
            placeholder="Enter search query..."
          />
        </label>
        <button type="submit" aria-label="Search">
          🔍
        </button>
        <ErrorMessage component="p" name="searchTerm" />
      </Form>
    </Formik>
  );
};

export default SearchForm;
