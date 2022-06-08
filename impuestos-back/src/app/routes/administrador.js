const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const usuarioController = require('../controller/usuarioController');

router.get('', auth.verifySuperAdministrador, usuarioController.listAdministradores);
router.post('/add', auth.verifySuperAdministrador, usuarioController.addAdministrador);
router.get('/:id', auth.verifyAdministrador, usuarioController.queryAdministradorId);
router.put('/update', auth.verifyAdministrador, usuarioController.updateAdministrador);
router.post('/login', usuarioController.login);

router.put('/active/:id', auth.verifySuperAdministrador, usuarioController.active); 
router.put('/desactive/:id', auth.verifySuperAdministrador, usuarioController.desactive);

module.exports = router;