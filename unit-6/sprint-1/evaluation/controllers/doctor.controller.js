const Doctor = require('../models/doctor.model');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({ availability: true });
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.filterDoctors = async (req, res) => {
    const { specialization } = req.query;
    try {
        const doctors = await Doctor.find({ specialization, availability: true });
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addDoctor = async(req,res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json(doctor);
    }catch(err){
        res.status(500).json({message : err.message});
    }
};

exports.updateDoctor = async(req,res) => { 
    await Doctor.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.json(doctor)
};

exports.deleteDoctor = async(req,res) => { 
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message : 'Doctor removed successfully'});
};
