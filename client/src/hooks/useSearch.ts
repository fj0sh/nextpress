import React, { useEffect, useState } from 'react'
import Products from '@/interface/products';
import useProducts from './useProducts';

const useSearch = () => {
    const {productData} = useProducts();
    const [search, setSearch] = useState("");
    const [isInputted, setIsInputted] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState<Products[]>([]);

    useEffect(() => {
          const filteredData = productData?.filter((products) => {
          const userString = `${products.product_name}`.toLowerCase();
          const searchInput = search.toLowerCase();
    
          return userString.includes(searchInput);
        })

        setFilteredUsers(filteredData || []);
        if (search.length != 0) {
          setIsInputted(true);
        } else {
          setIsInputted(false);
        }
      }, [productData, search]);


    return{setSearch, isInputted, filteredUsers};
}
export default useSearch
