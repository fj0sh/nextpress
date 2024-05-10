const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const userRoute = require("./routes/customerRoute.js")
const storeRoute = require("./routes/storeRoute.js")
const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());


app.use('/users',userRoute);
app.use('/store', storeRoute);




app.listen(PORT, () =>{
    console.log("listening to port " + PORT);
})


