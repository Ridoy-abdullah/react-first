import React from 'react';
import './Products.css'
const Products = (props) => {
    return (
        <div className='products'>
            <h3>Product Name:{props.name}</h3>
            <h3>Product Model:{props.model}</h3>
            <h3>Product Price:{props.price}</h3>
        </div>
    );
};

export default Products;