const express  = require('express');
const router = express.Router();
const storeController = require('../controllers/product.controller');

router.get("/", storeController.displayProducts);

module.exports = router;