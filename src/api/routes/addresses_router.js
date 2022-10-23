const express = require('express');
const router  = express.Router();
const addressesController = require('../controller/addresses_controller');

router.get('/', addressesController.getAllAddresses);
router.post('/', addressesController.createAddress);
router.delete('/:id', addressesController.deleteAddress);

router.get('/:id', addressesController.getAddressByID);
router.put('/', addressesController.updateAddress);

module.exports = router;
