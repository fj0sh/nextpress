import React, { useEffect, useState } from 'react'
import useUser from './useUser';
import { Customer } from '@/interface/Customer';

const useSearch = () => {
    const { data } = useUser();
    const [search, setSearch] = useState("");
    const [isInputted, setIsInputted] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState<Customer[]>([]);

    useEffect(() => {
        const filteredData = data?.filter((user) => {
          const userString =
            `${user.first_name} ${user.last_name} ${user.address}`.toLowerCase();
          const searchInput = search.toLowerCase();
    
          return userString.includes(searchInput);
        });
        setFilteredUsers(filteredData || []);
        if (search.length != 0) {
          setIsInputted(true);
        } else {
          setIsInputted(false);
        }
      }, [data, search]);


    return{setSearch, isInputted, filteredUsers};
}
export default useSearch
