const express = require('express');
let app = express();
const PORT = 8080 // Goes inside .env; hardcoded for testing purposes.

// simple route for testing

app.get('/', (req, res) => {
    res.send("Working route");
})

app.listen(PORT, () => {
    console.log("Server successfully listening at: http://localhost:" + PORT);
});