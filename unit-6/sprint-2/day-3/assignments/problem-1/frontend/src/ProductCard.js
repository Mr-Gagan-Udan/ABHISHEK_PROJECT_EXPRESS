import React from 'react';

const ProductCard = ({ product, onDelete }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <img src={product.imageUrl} alt={product.name} />
            <button onClick={() => onDelete(product._id)}>Delete</button>
        </div>
    );
};

export default ProductCard;
