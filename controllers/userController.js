const db = require("../models");

const createUser = (userInformation, res) => {
    db.Users.findOne({
        $or: [
            {username: userInformation.username},
            {email: userInformation.email}
        ]
    }).then(function(data){
            if(data != null){
                if(data.length != 0){
                    res.json({
                        message: "This username or email already exists in the database"
                    })
                } 
            } else {
                db.Users.create(userInformation).then((userData) => {
                    res.json({
                        message: "Sign up successful, username:" + userData.username
                    })
            
                }).catch(function(err){
                    res.json({message: "Database error"})
                    console.log(err);
                });
            }
        });
    }

module.exports = {
    createUser
}
