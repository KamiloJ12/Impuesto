const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const vehiculoController = require('../controller/vehiculoController');

router.get('', auth.verifyAdministrador, vehiculoController.list);
router.post('/add', auth.verifyAdministrador, vehiculoController.add);
router.get('/:id', auth.verifyAdministrador, vehiculoController.queryId);
router.get('/placa/:placa', vehiculoController.queryPlaca);
router.put('/update', auth.verifyAdministrador, vehiculoController.update);

module.exports = router;