import { useEffect, useState } from "react";
import { dataProducts } from "../api/dataApi"

export const useGetProducts = () => {

    const [products, setProducts] = useState([]);

    const getDataProducts = async () => {
        try {
            const data = await dataProducts();
            setProducts(data);
            console.log(products);
        } catch (error) {
            console.log(error.message);
        }
    }




    useEffect(() => {
        getDataProducts();

        return () => {
            products

        }
    }, [])

    // useEffect(() => {
    //     getDataProducts();
    //     return products
    // }, [])

}