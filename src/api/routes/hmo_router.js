const express = require('express');
const router  = express.Router();
const hmoController = require('../controller/hmo_controller');

router.get('/', hmoController.getAllHmo);
router.post('/', hmoController.createHmo);
router.delete('/:id', hmoController.deleteHmo);

router.get('/:id', hmoController.getHmoByID);
router.put('/', hmoController.updateHmo);

module.exports = router;