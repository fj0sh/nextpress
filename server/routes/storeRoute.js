const express = require('express');
const  router = express.Router();
const storeController = require('../controllers/storeController')

router.get("/",storeController.displayStore);


module.exports  = router;