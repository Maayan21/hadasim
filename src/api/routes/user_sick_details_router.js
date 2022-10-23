const express = require('express');
const router  = express.Router();
const user_sick_detailsController = require('../controller/user_sick_details_controller');

router.get('/', user_sick_detailsController.getAllUser_sick_details);
router.post('/', user_sick_detailsController.createUser_sick_details);
router.delete('/:id', user_sick_detailsController.deleteUser_sick_details);

router.get('/:id', user_sick_detailsController.getUser_sick_detailsByID);
router.put('/', user_sick_detailsController.updateUser_sick_details);

module.exports = router;