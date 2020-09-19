// External modules
const express = require("express");
// Instanced modules
const app = express();
// configuration
const PORT = 4000;
app.set("view engine", "ejs")

//Internal module
const db = require("./models");
const controllers = require("./controllers")

//Middleware
app.use(express.urlencoded({ extended: true }));




//Routes 

//index route
app.get("/", function(req, res) {
    res.render("index.ejs")
})




//Restaurant route
app.use("/restaurants", controllers.restaurant)



//server listener
app.listen(PORT, function () {
    console.log(`Live and listening at http://localhost:${PORT}`)
})

