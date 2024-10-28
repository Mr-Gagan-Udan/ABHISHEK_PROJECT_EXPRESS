const express = require('express');
const router = express.Router();
const {appointmentController, rescheduleAppoinment,approveAppoinment } = require('../controllers/appoinment.controller');
const authenticateJWT = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');


router.post('/', authenticateJWT, appointmentController.createAppointment);
router.get('/:doctorId', appointmentController.getAppointmentsByDoctor);
router.put('/:id/approve', authenticateJWT, roleMiddleware(["Admin"]), approveAppoinment);
router.put('/:id/reschedule', authenticateJWT,rescheduleAppoinment);


module.exports = router
