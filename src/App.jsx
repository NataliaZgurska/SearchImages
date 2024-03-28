import { useEffect, useState } from 'react';
import axios from 'axios';
// import './App.css';

function App() {
  const [images, setImages] = useState(null);

  const MY_ACCESS_KEY = 'r5X1Oa10oS9-BERhXbh0nWixL3GFYc5WhGNcDvhdj7k';
  useEffect(() => {
    async function fetchImages() {
      const { data } = await axios.get(
        'https://api.unsplash.com/photos/?client_id=' + MY_ACCESS_KEY
      );
      console.log('data: ', data);
      setImages(data);
    }
    fetchImages();
  }, []);

  return (
    <>
      <h1>hello</h1>
      <ul>
        {Array.isArray(images) &&
          images.map(item => {
            return (
              <li key={item.id}>
                <p> {item.alt_description}</p>
                <img src={item.urls.small} alt="{item.alt_description}" />
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
