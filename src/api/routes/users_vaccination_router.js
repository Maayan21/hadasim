const express = require('express');
const router  = express.Router();
const users_vaccinationController = require('../controller/users_vaccination_controller');

router.get('/', users_vaccinationController.getAllUsers_vaccination);
router.post('/', users_vaccinationController.createUsers_vaccination);
router.delete('/:id', users_vaccinationController.deleteUsers_vaccination);

router.get('/:id', users_vaccinationController.getUsers_vaccinationByID);
router.put('/', users_vaccinationController.updateUsers_vaccination);

module.exports = router;