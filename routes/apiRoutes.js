const userControllers = require("../controllers/userController");

module.exports = (app) => {

    app.post("/user", function(req, res) {
        userControllers.createUser(req.body, res);
    });

    app.get('/', (req, res) => {
        res.send("Hit main route");
    });
    
}