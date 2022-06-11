const vehiculo = require('../model/vehiculo');
const token = require('../services/token');

module.exports = {
    add: async(req, res, next) => {
        try {
            console.log(req.body);
            const reg = await vehiculo.add(req.body);
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
            const reg = await vehiculo.list();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    queryId: async(req, res, next) => {
        try {
            const {id} = req.params;
            const reg = await vehiculo.queryId(id);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },

    queryPlaca: async(req, res, next) => {
        try {
            const {placa} = req.params;
            const reg = await vehiculo.queryByPlaca(placa);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },

    update: async(req, res, next) => {
        try {
            const reg = await vehiculo.update(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
};