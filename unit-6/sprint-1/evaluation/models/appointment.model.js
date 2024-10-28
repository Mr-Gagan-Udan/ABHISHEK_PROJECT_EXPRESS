const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require : true
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Doctor',
        require : true
    },
    date : {
        type: Date,
        require : true
    },
    status: {
        type:String,
        enum : ["pending", "approved","rejected"],
        default: pending
    }
})

const appointmentModel = mongoose.model('appointment', appointmentSchema);

module.exports = appointmentModel;


