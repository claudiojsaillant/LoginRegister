const userControllers = require("../controllers/userController");
const path = require("path");

module.exports = (app) => {

    app.post("/user", function(req, res) {
        userControllers.createUser(req.body, res);
    });

    app.post('/login', (req, res) => {
        userControllers.logUser(req.body, res);
    });
    
}