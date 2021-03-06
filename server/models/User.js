const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// MongoDB collection creation
const UserSchema = new Schema({
    firstname: {
        type: "String",
        required: true
    },
    lastname: {
        type: "String",
        required: true
    },
    password: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        required: true
    }
}, 
{
    timestamps: { 
        createdAt: 'created_at' 
    }

});

// This creates our model from the above schema, using mongoose's model method
let User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;