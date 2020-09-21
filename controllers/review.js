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
        res.render("review/index")
    } catch (error) {
        console.log(error)
        res.send({message: "Error"})
    }
})

//New Route
router.get("/new", (req, res) =>
{
    res.render("review/new")
})

//Create Route
router.post("/", (req, res) =>{
    if(req.body.recommend === "on"){
        req.body.recommend = true
    } else {
        req.body.recommend = false;
    }
db.Review.create(req.body, (error, createdReview) => {
    console.log(req.body)
})
res.redirect('/restaurants/show'); 
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