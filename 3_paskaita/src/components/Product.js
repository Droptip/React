import React from 'react';

const Product = ({category, name, price}) => {
    return (
        <div className='products'>
            <h2>{name}</h2>
            <p>{category}</p>
            <p>€{price}</p>
        </div>
    );
};

export default Product;