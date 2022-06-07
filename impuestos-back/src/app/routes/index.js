const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuario');
const predialRoutes = require('./predial');
const administradorRoutes = require('./administrador');

router.use('/usuario', usuarioRoutes);
router.use('/predial', predialRoutes);
router.use('/administrador', administradorRoutes);

module.exports = router;