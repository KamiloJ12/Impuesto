const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuario');
const predialRoutes = require('./predial');
const administradorRoutes = require('./administrador');
const industriaRoutes = require('./industria');
const vehiculoRoutes = require('./vehiculo');

router.use('/usuario', usuarioRoutes);
router.use('/predial', predialRoutes);
router.use('/administrador', administradorRoutes);
router.use('/industria', industriaRoutes);
router.use('/vehiculo', vehiculoRoutes);

module.exports = router;