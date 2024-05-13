"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Customer } from '@/interface/Customer';

const base = "http://localhost:8080"

const useUser = () => {
    const [data, setData]  = useState<Customer[]>()

    const fetchUser = async()  => {
        try {
            const res = await axios.get(`${base}/users`);
            const data = res.data;
            setData(data)
            console.log(data);
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    const addUser  = async(fname?:string, lname?:string, add?:string) => {
        try {
            const res = await axios.post(`${base}/users`,{
                first_name:fname,
                last_name:lname,
                address:add
            },{headers:{"Content-type":"application/json"}});
            console.log(res);
        } catch (error) {
            console.log(error);
        }        
    }


    const deleteUser = async(fname:string) => {
        try {
            const res = await axios.delete(`${base}/users`,{data: {first_name:fname}})
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }


    const editUser  =async(fname:string, lname:string, add:string, target:string) => {
        try {
            const res = await axios.patch(`${base}/users`, {
                first_name:fname,
                last_name:lname,
                address:add,
                target:target
            } )

            console.log(res);
            
        } catch (error) {
            console.log(error);
        }
    }


    return {data, addUser, deleteUser, editUser};
}

export default useUser
