const mongoose = require("mongoose");

// Restaurant Schema 

const restaurantSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Please provide a name of the restaurant."] },
        location: { type: String, required: false },
        delivery: Boolean,
        takeOut: Boolean,
        dineIn: Boolean,
        review: [
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
            }
        ],
        user:
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
    }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;