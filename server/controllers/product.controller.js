const productModel = require("../model/product.model")

exports.displayProducts = (req, res) => {
    productModel.getProducts((err, result) => {
        if(err){
            console.log(err);
            res.status(400).send(err)
        } 
            console.log(result);
            res.send(result)
    })
}