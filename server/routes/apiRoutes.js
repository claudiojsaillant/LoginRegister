const userControllers = require("../controllers/userController");

module.exports = (app) => {

    // API routes using userControllers

    app.post("/user", function(req, res) {
        userControllers.createUser(req.body, res);
    });

    app.post('/login', (req, res) => {
        userControllers.logUser(req.body, res);
    });
    
}