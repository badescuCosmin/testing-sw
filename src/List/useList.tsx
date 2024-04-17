import { useState, useEffect } from 'react';
import { getFilteredProducts } from '../api';

export const useList = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    getFilteredProducts(input)
      .then(res => setProducts(res))
      .catch(console.error);
  }, [input]);

  return {
    input,
    setInput,
    products,
  };
};
