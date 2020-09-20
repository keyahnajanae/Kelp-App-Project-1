// External modules
const express = require("express");
// Instanced modules
const app = express();
// configuration
const PORT = 4000;




//server listener
app.listen(PORT, function () {
    console.log(`Live and listening at http://localhost:${PORT}`)
})

