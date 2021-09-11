const express = require('express');

const mongoose = require("mongoose");
const app = express();
const fs = require('fs');
require('dotenv').config()

const PORT = process.env.PORT; 
const MONGODB_URI = process.env.MONGODB_URI;

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse request body as JSON
app.use(express.static("public"));
// Express routes
require("./routes/apiRoutes")(app);

// Mongo / Mongoose (Object Data Mapper) settings
mongoose.connect(MONGODB_URI);


app.listen(PORT, () => {
    console.log("Server successfully listening at: http://localhost:" + PORT);
});