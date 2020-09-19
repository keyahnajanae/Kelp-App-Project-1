// External modules
const express = require("express");
// Instanced modules
const app = express();
// configuration
const PORT = 4000;


//Middleware




//Routes 

//index route
app.get("/", function(req, res) {
    res.render("index.ejs")
})

//new route
app.get("/new", function(req, res) {
    res.render("new.ejs")
})




//server listener
app.listen(PORT, function () {
    console.log(`Live and listening at http://localhost:${PORT}`)
})

