const db = require("../models");

const createUser = (userInformation, res) => {
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
                db.Users.create(userInformation).then((userData) => {
                    console.log(userData);
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

module.exports = {
    createUser
};
