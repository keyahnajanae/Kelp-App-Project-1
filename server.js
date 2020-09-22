// External modules
const express = require("express");
const methodOverride = require("method-override");

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
app.use(methodOverride("_method"));



//Routes

//index route
app.get("/", function(req, res) {
    res.render("index.ejs")
})




//Restaurant route
app.use("/restaurants", controllers.restaurant)

app.use("/reviews", controllers.review)



//server listener
app.listen(PORT, function () {
    console.log(`Live and listening at http://localhost:${PORT}`)
})

