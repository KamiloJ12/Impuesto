const usuario = require('../model/usuario');
const bcrypt = require('bcryptjs');
const token = require('../services/token');

module.exports = {
    addUsuario: async(req, res, next) => {
        try {
            req.body.Password = await bcrypt.hash(toString(req.body.Password), 10);
            const reg = await usuario.addUsuario(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    addAdministrador: async(req, res, next) => {
        try {
            req.body.Password = await bcrypt.hash(toString(req.body.Password), 10);
            const reg = await usuario.addAdministrador(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    list: async(req, res, next) => {
        try {
            const reg = await usuario.list();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    listUsuarios: async(req, res, next) => {
        try {
            const reg = await usuario.listUsuarios();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    listAdministradores: async(req, res, next) => {
        try {
            const reg = await usuario.listAdministradores();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    queryUsuarioId: async(req, res, next) => {
        try {
            const {id} = req.params;
            const reg = await usuario.queryUsuarioId(id);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },

    queryAdministradorId: async(req, res, next) => {
        try {
            const {id} = req.params;
            const reg = await usuario.queryAdministradorId(id);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },

    updateUsuario: async(req, res, next) => {
        try {
            const user = await usuario.queryUsuarioId(req.body.Id); 
            let match = await bcrypt.compare(req.body.Password, user.Password);
            if (!match) {
                req.body.Password = await bcrypt.hash(req.body.Password, 10);
            }
            const reg = await usuario.updateUsuario(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    updateAdministrador: async(req, res, next) => {
        try {
            const user = await usuario.queryAdministradorId(req.body.Id); 
            let match = await bcrypt.compare(req.body.Password, user.Password);
            if (!match) {
                req.body.Password = await bcrypt.hash(req.body.Password, 10);
            }
            const reg = await usuario.updateAdministrador(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    desactive: async(req, res, next) => {
        try {
            const {id} = req.params;
            const reg = await usuario.desactive(id);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },

    active: async(req, res, next) => {
        try {
            const {id} = req.params;
            const reg = await usuario.active(id);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },

    login: async(req, res, next) => {
        try {
            let user = await usuario.queryEmail(req.body.Email);

            if(!user) {
                user = await usuario.queryUsuario(req.body.Email);
            }

            if (user) {
                let match = await bcrypt.compare(req.body.Password, user.Password);
                if (match) {
                    if(user.Estado == 'Activo'){
                        let tokenReturn = await token.encode(user.Id, user.Rol);
                        res.status(200).json({ user, tokenReturn });
                    }else{
                        res.status(404).send({
                            message: 'El usuario se encuentra desactivado'
                        });
                    }
                } else {
                    res.status(401).send({
                        message: 'Password Incorrecto'
                    });
                }
            } else {
                res.status(404).send({
                    message: 'No existe el usuario'
                });
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
};