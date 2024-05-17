const storeModel = require('../model/storeModel')

exports.displayStore = (req,res) => {
    storeModel.getAllStore((err, result) => {
    if(err){
            console.log(err);
            res.status(400).send(err)
        } 
            res.send(result)
    })
}