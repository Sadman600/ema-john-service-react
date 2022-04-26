import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { img, name, price } = product;
    return (
        <div class="card">
            <img src={img} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{name}</h1>
            <p class="price">$ {price}</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button>Add to Cart</button></p>
        </div>
    );
};

export default Product;