const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
    author: { type: String, required: true },
    review: {type: String, required: true},
    recommend: Boolean,
    restaurant: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
    ],

    })

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review;