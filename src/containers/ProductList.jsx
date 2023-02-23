import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import { dataProducts } from "../api/dataApi"


const ProductList = () => {
    const [products, setProducts] = useState([]);

    const getDataProducts = async () => {
        try {
            const data = await dataProducts();
            setProducts(data);

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getDataProducts();
    }, [])

    return (
        <section className="main-container">
            <div className="ProductList">
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />

                ))}
            </div>
        </section>
    );
}

export default ProductList;
