import React, { useEffect, useState } from 'react'
import useUser from './useUser';
import { Customer } from '@/interface/Customer';
import useStore from './useStore';

const useCustomerSearch = () => {
    const { data } = useUser();
    const {storeData} = useStore();
    const [search, setSearch] = useState("");
    const [isInputted, setIsInputted] = useState(false);
    const [target, setTarget] = useState<string>();
    const [filteredUsers, setFilteredUsers] = useState<Customer[]>([]);

    useEffect(() => {

          if(target === "store"){
            console.log("store");
          }else if(target === "customer"){
            console.log("customer");
            
          }

          const filteredData = data?.filter((user) => {
          const userString = `${user.first_name} ${user.last_name} ${user.address}`.toLowerCase();
          const searchInput = search.toLowerCase();
    
          return userString.includes(searchInput);
        });
        setFilteredUsers(filteredData || []);
        if (search.length != 0) {
          setIsInputted(true);
        } else {
          setIsInputted(false);
        }
      }, [data, search, target]);


    return{setSearch, isInputted, filteredUsers, target, setTarget};
}
export default useCustomerSearch
