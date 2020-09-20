// External modules
const express = require("express");
// Instanced modules
const app = express();
// configuration
const PORT = 4000;
// Internal modules
const db = require("./models");
app.set("view engine", "ejs")

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

