const Patient = require('../models/patient.model');

exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.filterPatientsByAge = async (req, res) => {
    const { minAge, maxAge } = req.query;
    try {
        const patients = await Patient.find({
            age: { $gte: minAge, $lte: maxAge }
        });
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
