const conn = require("../config/dbConfig.js");
// const express = require("express");
// const app = express();

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

exports.showAll = (req,res) =>{
    conn.query("select * from customer", (err, result) => {
        if (err) {
            console.error("Error:", err);
            res.status(500).send("error");
        }
        console.log(result);  
        res.status(200).json(result);
    });
};

exports.showOne = (req, res) =>{
    conn.query("call showCust(?)",req.params.id, (err, result) => {
        if (err) {
            console.error("Error:", err);
            res.status(500).send("error");
        }
        console.log(result);
        res.status(200).json(result);
    });
};

exports.deleteCust = (req, res) => {
    conn.query("call deleteCustomer(?)", req.params.id, (err, result) =>{
        if(err){
            console.log(err);
            res.status(500).send("error")
        }
        console.log(result);
        res.status(201).json(result);
    })
}

exports.addUser = (req, res) => {
    const temp = req.body

    conn.query(" insert into customer (first_name, last_name, address) values (?,?,?)", [temp.first_name, temp.last_name, temp.address], (err, result) => {
     if(err){
        console.log(err);
        res.status(500).send("error")
     }  
        console.log("User Added");
        res.status(201).json(result);
     
    })
}

exports.deleteUser = (req, res) => {
    const temp = req.body

    conn.query("CALL deleteCustomer(?)", [temp.first_name], (err, result) => {
     if(err){
        console.log(err);
        res.status(500).send("error")
     }  
        console.log("User Deleted");
        res.status(201).json(result);
     
    })
}

exports.updateCustomer = (req, res) => {
    const temp = req.body

    conn.query("CALL updateCustomer(?,?,?,?)", [temp.first_name,temp.last_name,temp.address,temp.target], (err, result) => {
        if(err){
           console.log(err);
           res.status(500).send("error")
        }  
           console.log("User Deleted");
           res.status(201).json(result);
        
       })    
}