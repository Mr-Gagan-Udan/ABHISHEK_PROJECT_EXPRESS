import React from "react";

interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean;  
}

type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
};

const ObjectComponent: React.FC = () => {
    const user: User = {
        id: 1,
        name: "Jane Doe",
        email: "jane@example.com"
    };

    const product: Product = {
        id: 101,
        name: "Laptop",
        price: 1299.99,
        inStock: true
    };

    return (
        <div>
            <h3>Object Types</h3>
            <p>User: {user.name}, Email: {user.email}, Admin: {user.isAdmin ? "Yes" : "No"}</p>
            <p>Product: {product.name}, Price: ${product.price}, In Stock: {product.inStock ? "Yes" : "No"}</p>
        </div>
    );
};

export default ObjectComponent;
