const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

router.get('/', patientController.getPatients);
router.get('/filter', patientController.filterPatientsByAge);

module.exports = router
