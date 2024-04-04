import axios from 'axios';

const MY_ACCESS_KEY = 'r5X1Oa10oS9-BERhXbh0nWixL3GFYc5WhGNcDvhdj7k';

export const getImagesByQuery = async (query, page) => {
  const { data } = await axios.get(
    'https://api.unsplash.com/search/photos?client_id=' +
      MY_ACCESS_KEY +
      '&page=' +
      page +
      '&query=' +
      query +
      '&per_page=6'
  );
  console.log(data);
  return data;
};
