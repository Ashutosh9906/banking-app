const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    BirthDate:{
        type:Date,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps:true})

const User = model("users", userSchema);

module.exports = User;