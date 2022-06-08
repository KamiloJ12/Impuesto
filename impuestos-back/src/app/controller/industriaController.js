const industria = require('../model/industria');
const token = require('../services/token');

module.exports = {
    add: async(req, res, next) => {
        try {
            const reg = await industria.add(req.body);
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
            const reg = await industria.list();
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
            const reg = await industria.queryId(id);
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
            const reg = await industria.update(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
};