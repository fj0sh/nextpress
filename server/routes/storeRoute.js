const express = require('express');
const  router = express.Router();
const storeController = require('../controllers/storeController')

router.get("/",storeController.displayStore)
router.post("/", storeController.addStore)



module.exports  = router;