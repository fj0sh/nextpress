const conn = require("../config/dbConfig");

exports.addStore = (req, res) => {
    const Name = req.body.storeName;
    conn.query("INSERT INTO store (storeName) VALUES (?)", [Name], (err, result) =>{
        if(err){
            console.error(err);
            return res.status(400).send("Error occurred while adding store");
        }
        console.log(result);
        res.status(200).send("Store added successfully");
    });
};

exports.displayStore = (req,res) => {
    conn.query("SELECT * FROM store", (err, result) =>{
        if(err){
            console.log(err);
            res.status(400).send(err)
        } 
            res.send(result)
    })
}