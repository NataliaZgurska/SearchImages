import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Search term is required!'),
});

const FORM_INITIAL_VALUES = {
  searchTerm: '',
};

const SearchForm = ({ onSetSearchQuery, setPageNumber, setImagesArray }) => {
  const handleSubmit = (values, actions) => {
    onSetSearchQuery(values.searchTerm);
    setPageNumber(1);
    setImagesArray(null);
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
          <ErrorMessage component="p" name="searchTerm" />
        </label>
        <button type="submit" aria-label="Search">
          🔍
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
