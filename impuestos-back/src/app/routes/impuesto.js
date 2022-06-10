const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const impuestoController = require('../controller/impuestoController');

router.get('', auth.verifyAdministrador, impuestoController.list);
/* router.get('/:id', auth.verifyAdministrador, impuestoController.queryId); */
router.get('/industrias', auth.verifyUsuarios, impuestoController.listIndustrias);
router.get('/prediales', auth.verifyUsuarios, impuestoController.listPrediales);
router.get('/vehiculos', auth.verifyUsuarios, impuestoController.listVehiculos);

module.exports = router;