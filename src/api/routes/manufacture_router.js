const express = require('express');
const router  = express.Router();
const manufactureController = require('../controller/manufacture_controller');

router.get('/', manufactureController.getAllManufacture);
router.post('/', manufactureController.createManufacture);
router.delete('/:id', manufactureController.deleteManufacture);

router.get('/:id', manufactureController.getManufactureByID);
router.put('/', manufactureController.updateManufacture);

module.exports = router;