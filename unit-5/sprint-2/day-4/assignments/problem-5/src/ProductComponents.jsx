import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching products');
      setLoading(false);
    }
  };

  // Fetch product details by ID
  const fetchProductDetails = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching product details');
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        productDetails,
        fetchProductDetails,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
