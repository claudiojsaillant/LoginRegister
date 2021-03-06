const db = require("../models");
const jwt = require("jsonwebtoken");
// JWT Password
const config = require("../jwtConfig/default.json");

const createUser = (userInformation, res) => {
    // Check for duplicate email
    db.Users.findOne({
            email: userInformation.email
    }).then(function(data){
            if(data != null){
                if(data.length != 0){
                    res.json({
                        message: "This email already exists in the database"
                    });
                }; 
            } else {
                // Create user
                db.Users.create(userInformation).then((userData) => {
                    res.json({
                        message: "Welcome " + userData.firstname + ", your sign up was successful"
                    });            
                }).catch(function(err){
                    res.json({message: "Database error"})
                    console.log(err);
                });
            };
        });
    };

const logUser = (userInformation, res) => {
    // Find user trying to log
    db.Users.findOne({ email: userInformation.email }).then(user => {
        if (user) {
            // Make sure password is correct
            if (user.password === userInformation.password) {
            // Set payload and expiration of the token
            jwt.sign(
                { user, id: user._id },
                config.jwtSecret,
                { expiresIn: 36000 },
                (err, token) => {
                res.json({
                    message: `LogIn Successful`,
                    token,
                    isAuthed: true
                });
                }
            );
            } else {
                res.json({
                    message: "Incorrect credentials.",
                    isAuthed: false
                });
            };
        } else {
            res.json({
                message: "Email doesn't exist."
            });
        }
    });
};


module.exports = {
    createUser,
    logUser
};
