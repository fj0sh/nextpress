"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Customer } from '@/interface/Customer';

const temp = axios.create({baseURL:'http://localhost:8080'})

const useUser = () => {
    const [data, setData]  = useState<Customer[]>()

    const fetchUser = async()  => {
        try {
            const res = await temp.get(`/users`);
            setData(res.data)            
        } catch (error) {
            console.log(error)
        }
    }

    
    const addUser  = async(fname?:string, lname?:string, add?:string) => {
        try {
            const res = await temp.post(`/users`,{
                first_name:fname,
                last_name:lname,
                address:add
            },{headers:{"Content-type":"application/json"}});
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }        
    }
    
    const deleteUser = async(fname:string) => {
        try {
            const res = await temp.delete(`/users`,{data: {first_name:fname}}, )
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    };
    
    const editUser  =async(fname:string, lname:string, add:string, target:string) => {
        try {
            const res = await temp.patch(`/users`, {
                first_name:fname,
                last_name:lname,
                address:add,
                target:target
            } )

            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchUser();
    }, []);
    
    return {data, addUser, deleteUser, editUser};
}

export default useUser
export {temp};