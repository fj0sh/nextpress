const express = require('express')
const router = express.Router();
const userController = require("../controllers/customerController.js");

router.get("/",userController.showAll);
router.get("/:id", userController.showOne);
router.post("/",userController.addUser);
router.delete("/", userController.deleteUser);
router.patch("/", userController.updateCustomer);


module.exports = router;