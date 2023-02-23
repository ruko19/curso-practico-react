import React, { useState, useContext } from 'react';
import '../styles/ProductItem.scss';
import { useInitialState } from '../hooks/useInitialState';
import btnAddCart from "../assets/icons/bt_add_to_cart.svg"

const ProductItem = ({ product }) => {

    const { addToCart } = useInitialState()

    const handleCart = (item) => {
        addToCart(item);
    }
    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleCart(product)}>
                    <img src={btnAddCart} alt="" />
                </figure>

            </div>
        </div>
    );
}

export default ProductItem;
