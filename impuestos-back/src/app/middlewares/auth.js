const tokenService = require('../services/token');

module.exports = {
    verifyUsuarios: async(req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.authorization);
        if (response.Rol == 'Superadministrador' || response.Rol == 'Administrador' || response.Rol == 'Usuario') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifySuperAdministrador: async(req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.authorization);
        if (response.Rol == 'Superadministrador') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAdministrador: async(req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.authorization);
        if (response.Rol == 'Administrador' || response.Rol == 'Superadministrador') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyUsuario: async(req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.authorization);
        if (response.Rol == 'Usuario') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
}