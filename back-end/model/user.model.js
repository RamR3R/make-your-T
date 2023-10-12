const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    usertype: {
        type: String,
        enum: ["admin", "user"], // Use an enum to specify allowed values
        required: true
    },
    mobile: {
        type: String, // Use String for mobile numbers, as they can have leading zeros
        minlength: 10,
        maxlength: 10,
        required: true
    }
});


const UserModel = mongoose.model("user",userSchema);

module.exports = UserModel;