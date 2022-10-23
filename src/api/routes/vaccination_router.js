const express = require('express');
const router  = express.Router();
const vaccinationController = require('../controller/vaccination_controller');

router.get('/', vaccinationController.getAllVaccination);
router.post('/', vaccinationController.createVaccination);
router.delete('/:id', vaccinationController.deleteVaccination);

router.get('/:id', vaccinationController.getVaccinationByID);
router.put('/', vaccinationController.updateVaccination);

module.exports = router;