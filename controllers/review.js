const express = require("express")
const { review } = require(".")
const router = express.Router();

const db = require("../models")


/* Base Routes */

//Index Route

router.get("/", async (req, res) => {
    try {
        const foundReview = await db.Review.find({});
        const context = {
            review: foundReview
        }
        res.render("review/index", context)
    } catch (error) {
        console.log(error)
        res.send({message: "Error"})
    }
})

//New Route
router.get("/new", (req, res) => {
    db.Restaurant.find({}, function (error, foundRestaurants) {
        if (error) return res.send(error);

        const context = {
            restaurants: foundRestaurants,
        };

        res.render("review/new", context)
    })
})

//Create Route
router.post("/", async (req, res) =>{
    console.log(req.body)
    try {
        if(req.body.recommend === "on"){
            req.body.recommend = true
        } else {
            req.body.recommend = false;
        }
        const createdReview = await db.Review.create(req.body);
        const foundRestaurant = await db.Restaurant.findById(req.body.restaurant);
    
        foundRestaurant.review.push(createdReview);
        await foundRestaurant.save();
    
        res.redirect("/restaurants");
      } catch (error) {
        console.log(error);
        res.send({ message: "Internal server error" });
      }
})


//Show Route ?
router.get("/:id", (req, res) => {
    db.Review.findById(req.params.id, (error, foundReview) => {
        if (error) {
          console.log(error);
          return res.send(error);
        }
    const context = {
        review: foundReview
    };
    res.render("restaurant/show", context)
    });
});



module.exports = router;