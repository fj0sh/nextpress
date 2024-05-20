import React, { useEffect, useState } from 'react';
import Products from '@/interface/products';
import axios from 'axios';


const template = axios.create({baseURL:"http://localhost:8080"})

const useProducts = () => {
    const [productData, setProductData] = useState<Products[]>()

    const fetchProducts = async() => {
        try {
            const res = await template.get('/products')
            setProductData(res.data)            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
            fetchProducts()
        }, []);

    return {productData};
}

export default useProducts
