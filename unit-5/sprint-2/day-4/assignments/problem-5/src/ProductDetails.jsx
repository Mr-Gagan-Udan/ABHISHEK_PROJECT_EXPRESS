import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { productDetails, fetchProductDetails, loading, error } = useContext(ProductContext);

  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!productDetails) return <p>Product not found</p>;

  return (
    <div>
      <h2>{productDetails.title}</h2>
      <p>Price: ${productDetails.price}</p>
      <p>{productDetails.description}</p>
    </div>
  );
};

export default ProductDetails;
