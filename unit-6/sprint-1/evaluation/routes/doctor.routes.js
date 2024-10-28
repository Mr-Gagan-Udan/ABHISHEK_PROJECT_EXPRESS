const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');
const authMiddleware = require('../middlewares/auth.middleware')
const roleMiddleware = require('../middlewares/role.middleware')

router.get('/', doctorController.getDoctors);
router.get('/filter', doctorController.filterDoctors);
router.post('/update' ,authMiddleware,roleMiddleware("Admin"), doctorController.addDoctor);
router.put("/:id", authMiddleware, roleMiddleware(['Admin']), doctorController.updateDoctor);
router.post('/:id', authMiddleware,roleMiddleware(['Admin']), doctorController.deleteDoctor);
module.exports = router
