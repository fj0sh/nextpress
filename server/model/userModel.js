const conn = require("../config/dbConfig.js");

exports.getAllCustomer = (callback) => {
    conn.query("select * from customer", callback)
}

exports.getSingleCustomer = (id, callback) =>{
    conn.query("call showCust(?)", id, callback)
}

exports.addCust = (customerData, callback) => {
    const {first_name,last_name,address} = customerData
    conn.query(" insert into customer (first_name, last_name, address) values (?,?,?)", [first_name, last_name, address], callback)
}

exports. deleteCust = (first_name, callback) => {
    conn.query("CALL deleteCustomer(?)", first_name, callback)
}

exports. updateCust = (customerData, callback) => {
    const {first_name,last_name,address,target} = customerData;
    conn.query("CALL updateCustomer(?,?,?,?)", [first_name,last_name,address,target], callback)
}


// SELECT store.store_id, store.storeName, customer.customer_id 
// FROM customer 
// INNER JOIN store 
// ON store.store_id = customer.store_id;
