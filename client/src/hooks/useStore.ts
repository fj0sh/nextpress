"user client"
import React, { useEffect, useState } from 'react';
import { temp } from './useUser';
import { Store } from '@/interface/store';

const useStore = () => {
    const [storeData, setStoreData] = useState<Store[]>();

    const getStore = async() => {
        try {
            const res = await temp.get("/store");
            setStoreData(res.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getStore();
    }, []);

  return {storeData, getStore};
}

export default useStore
