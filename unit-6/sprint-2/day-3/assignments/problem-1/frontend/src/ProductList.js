import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from './api';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sort, setSort] = useState('asc');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts(page, limit, sort, search);
            setProducts(data.products);
        };

        fetchProducts();
    }, [page, limit, sort, search]);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product._id !== id));
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Search..." value={search} onChange={handleSearch} />
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} onDelete={handleDelete} />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(Math.max(1, page - 1))}>Previous</button>
                <span>Page {page}</span>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default ProductList;
