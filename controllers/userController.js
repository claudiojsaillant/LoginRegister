const db = require("../models");

const createUser = (userInformation) => {
    db.Users.findOne({
        $or: [
            {username: userInformation.username},
            {email: userInformation.email}
        ]
    }).then(function(data){
            if(data != null){
                if(data.length != 0){
                    res.json({
                        msg: "This username or email already exists in the database"
                    })
                } 
            } else {
                db.Users.create(userInformation).then((userData) => {
                    res.json({
                        msg: "Sign up successful, username:" + userData.username
                    });
                }).catch(function(err){
                    res.json({msg: "Database error"})
                    console.log(err);
                });
            }
        });
    }

module.exports = {
    createUser
}
