import { useState } from 'react';
import axios from './utils/http';
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const fetch = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.paylaod);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1>React App</h1>
      {products && products.map((product, index) => {
        return (
          <div key={index}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        )
      } )}
    </>
  )
}

export default App
