const express = require('express');
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const fs = require('fs');
require('dotenv').config()

const PORT = process.env.PORT; 
const MONGODB_URI = process.env.MONGODB_URI;

// Read react's package.json
const file = './client/package.json';
let pkg = JSON.parse(fs.readFileSync(file).toString());

// Set react proxy
pkg.proxy = `${process.env.REACT_PROXY}:${process.env.PORT}`;

//Write file
fs.writeFileSync(file, JSON.stringify(pkg, null, 2));

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse request body as JSON

// Express routes
require("./routes/apiRoutes")(app);

// Mongo / Mongoose (Object Data Mapper) settings
mongoose.connect(MONGODB_URI);


app.listen(PORT, () => {
    console.log("Server successfully listening at: http://localhost:" + PORT);
});