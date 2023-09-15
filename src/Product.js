// src/Product.js
import React, { useState } from 'react';

function Product({ product, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <div className="product">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Price: ${product.category}</p>
        <div>
            <label>Quantity:</label>
            <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;
