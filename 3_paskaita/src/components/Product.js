import React from 'react';
import PropTypes from "prop-types";

const Product = ({category, name, price}) => {
    return (
        <div className='products'>
            <h2>{name}</h2>
            <p>{category}</p>
            <p>€{price}</p>
        </div>
    );
};

Product.propTypes = {
    category: string,
    name: string,
    price: number,
}

export default Product;