const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const usuarioController = require('../controller/usuarioController');

router.get('', auth.verifyAdministrador, usuarioController.listUsuarios);
router.get('/:id', auth.verifyAdministrador, usuarioController.queryUsuarioId);
router.post('/add', auth.verifyAdministrador, usuarioController.addUsuario); 
router.put('/update', auth.verifyUsuarios, usuarioController.updateUsuario);

module.exports = router;