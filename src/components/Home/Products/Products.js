import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [pagesCount, setPagesCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);
    useEffect(() => {
        fetch('http://localhost:5000/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPagesCount(pages);
            });
    }, []);
    return (
        <div>
            <h1>{pagesCount}</h1>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='pagination'>
                {
                    [...Array(pagesCount).keys()]
                        .map(number => <button className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}>{number}</button>)

                }
                {
                    size
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value='5'>5</option>
                    <option value='10' selected>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
            </div>
        </div>
    );
};

export default Products;