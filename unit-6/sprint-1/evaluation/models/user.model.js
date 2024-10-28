const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    usename :{
        type : String,
        required: true
    },
    password : {
        type : String,
        required : true    
    },
    role : {
        type : String,
        enum : ["Admin" , "User"],
        required: true
    }
})

module.exports = mongoose.model("User" , userSchema);