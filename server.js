const express = require('express');
const path = require("path")

let app = express();
const PORT = process.env.PORT || 5000 // Goes inside .env; hardcoded for testing purposes.

// simple route for testing

app.get('/backend', (req, res) => {
    res.send("Express server working")
    
})


app.listen(PORT, () => {
    console.log("Server successfully listening at: http://localhost:" + PORT);
});