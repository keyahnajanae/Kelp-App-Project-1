const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");


/* Base Paths */


// Register Form

router.get("/register", (req, res) => {
    res.render("auth/register")
});

//Register Post

router.post("/register", async (req, res) => {
    console.log('form data:', req.body)
    try {
        //search database for existing user
        const foundUser = await db.User.findOne({email: req.body.email})
        if(foundUser){
            //if a user is found, a message is sent back
            return res.send({message: "This email address is already registered"})
        }
        // if no user is found, hash the password
        // salt ups computation power for hash
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash;
        // create a user and redirect 
        await db.User.create(req.body)
        res.redirect("/login")
    } catch (error) {
        res.send({message: "Internal Error"})
        console.log(error)
    }
})

//Login

router.get("/login", (req, res) => {
    res.render("auth/login")
});
//login post <--- authentification

router.post("./login", async (req, res) => {
    try {
        // check if user exists via email
        const foundUser = await db.User.findOne({email: req.body.email});
        if(!foundUser){
            return res.send({message: "Email or Password is Incorrect"});
            //compare db password with entered password using bcrypt
        }
            const match = await bcrypt.compare(req.body.password, foundUser.password)
        if(!match){
            return res.send({message: "Email or Password Incorrect"})
        }
       // if passwords match, then create a section
       req.session.currentUser = {
           username: foundUser.username,
           id: foundUser._id
       } 
       res.redirect("/")
    } catch (error) {
        console.log(error),
        res.send({message: "Internal Error"})
    }
})

//logout <-- Destroy session

router.delete("/logout", async (req, res) =>{
    await req.session.destroy();
    res.redirect("/")
})

module.exports = router;