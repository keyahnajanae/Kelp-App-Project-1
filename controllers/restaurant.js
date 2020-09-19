const express = require("express")
const router = express.Router();

const db = require("../models");

//base routes

//All restaurant page
router.get("/", async (req, res) => {
try {
    const foundRestaurants = await db.Restaurant.find({});
    const context = {
        restaurants: foundRestaurants,
    }
    res.render("restaurant/index", context)
} catch (error) {
    console.log(error)
    res.send({message: "Internal Error"})
}
})


//new route
router.get("/new", (req, res) => {
    res.render("restaurant/new")
})


//create route

// show route

//edit route

//update

//delete



module.exports = router;