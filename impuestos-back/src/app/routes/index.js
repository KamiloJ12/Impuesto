const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuario');
const predialRoutes = require('./predial');
const administradorRoutes = require('./administrador');
const industriaRoutes = require('./industria');

router.use('/usuario', usuarioRoutes);
router.use('/predial', predialRoutes);
router.use('/administrador', administradorRoutes);
router.use('/industria', industriaRoutes);

module.exports = router;