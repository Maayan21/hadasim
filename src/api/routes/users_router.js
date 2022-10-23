const express = require('express');
const router  = express.Router();
const usersController = require('../controller/users_controller');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createUsers);
router.delete('/:id', usersController.deleteUsers);

router.get('/:id', usersController.getUserByID);
router.put('/', usersController.updateUser);

module.exports = router;