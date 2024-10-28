const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    age:{
        type : Number,
        require : true
    },
    email : {
        type : String,
        require: true
    }
})

const patientrModel = mongoose.model('Patient', patientSchema);

module.exports = patientrModel;