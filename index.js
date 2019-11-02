const express = require("express");
const db = require('./db')
const app = express();
const cors = require("cors")
const routerCities = require('./city.routes')


app.use(cors())
app.use(routerCities)



app.listen(8080,()=>{console.log("Server is UP!")})