const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
{
    author: { type: String, required: true },
    review: {type: String, required: true},
    Recommend: Boolean,
    Restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
},
{
    timestamps: true,
    createdAt: "published:"
}

);

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review;