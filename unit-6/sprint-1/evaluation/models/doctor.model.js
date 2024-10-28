const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        require : true
    },
    specialization:{
        type:String,
        require : true
    },
    availability : {
        type: Boolean,
        default : true
    }
})

const doctorModel = mongoose.model('Doctor', doctorSchema);

module.exports = doctorModel;