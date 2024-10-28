// components/Products.js

import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') || '';
  const minPrice = searchParams.get('minPrice') || 0;
  const maxPrice = searchParams.get('maxPrice') || 10000;

  useEffect(() => {
    setLoading(true);
    axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
      .then((response) => {
        const filteredProducts = response.data.data.filter(product => {
          return (product.category.includes(category) && product.price >= minPrice && product.price <= maxPrice);
        });
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category, minPrice, maxPrice]);

  const handleFilter = (e) => {
    e.preventDefault();
    const newCategory = e.target.category.value;
    const newMinPrice = e.target.minPrice.value;
    const newMaxPrice = e.target.maxPrice.value;
    setSearchParams({ category: newCategory, minPrice: newMinPrice, maxPrice: newMaxPrice });
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      <form onSubmit={handleFilter}>
        <input type="text" name="category" placeholder="Category" defaultValue={category} />
        <input type="number" name="minPrice" placeholder="Min Price" defaultValue={minPrice} />
        <input type="number" name="maxPrice" placeholder="Max Price" defaultValue={maxPrice} />
        <button type="submit">Filter</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name} - ${product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
