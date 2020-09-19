// External modules
const express = require("express");
// Instanced modules
const app = express();
// configuration
const PORT = 4000;
// Internal modules
const db = require("./models");


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});



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

