require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const productRoute = require("./routes/product.route.js")
const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/products', productRoute)

app.listen(PORT, () =>{
    console.log("listening to port " + PORT);
    console.log('sdfsdf');

})


