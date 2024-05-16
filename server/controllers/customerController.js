const userModel = require("../model/userModel")

exports.showAll = (req,res) =>{
    userModel.getAllCustomer((err, result) => {
        if (err) {
            console.error("Error:", err);
            res.status(500).send("error");
        }
        console.log(result);
        res.status(200).json(result);
    })
};

exports.showOne = (req, res) =>{
    userModel.getSingleCustomer(req.params.id, (err, result) => {
        if (err) {
            console.error("Error:", err);
            res.status(500).send("error");
        }
        console.log(result);
        res.status(200).json(result);
    });
};

exports.addUser = (req, res) => {
    userModel.addCust(req.body, (err, result) => {
     if(err){
        console.log(err);
        res.status(500).send("error")
     }  
        console.log("User Added");
        res.status(201).json(result);
     
    })
}

exports.deleteUser = (req, res) => {
    userModel.deleteCust(req.body.first_name, (err, result) =>{
    if(err){
        console.log(err);
        res.status(500).send("error")
     }  
        console.log("User Deleted");
        res.status(201).json(result);
     
    })
}

exports.updateCustomer = (req, res) => {
    userModel.updateCust(req.body, (err, result) =>{       
        if(err){
           console.log(err);
           res.status(500).send("error")
        }  
           console.log("User Deleted");
           res.status(201).json(result);
        
       })    
}