const express = require('express');
const path = require("path")
const mongoose = require("mongoose");
let app = express();

// Goes inside .env; hardcoded for testing purposes.
const PORT = process.env.PORT || 5000; 
const MONGODB_URI = "mongodb+srv://claudiodb:123321@gamedesigndb.hicaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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