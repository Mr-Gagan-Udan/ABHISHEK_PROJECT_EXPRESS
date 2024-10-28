const Appointment = require('../models/appointment.model');

exports.createAppointment = async (req, res) => {
    const { patientName, doctorName, appointmentTime, reason } = req.body;
    try {
        const appointment = new Appointment({ patientName, doctorName, appointmentTime, reason });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAppointmentsByDoctor = async (req, res) => {
    const { doctorId } = req.params;
    try {
        const appointments = await Appointment.find({ doctorName: doctorId }).sort({ appointmentTime: 1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.approveAppoinment = async (req,res) => {
    try { 
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            {status : "approved"},
            {new : true}

        );
        res.status(200).json(appointment);

    }catch(err){
        res.status(500).json({message : err.message});
    }
};


exports.rescheduleAppoinment = async(req,res)=>{
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, {date: req.body.date},{new : true});
    res.json(appointment);
}