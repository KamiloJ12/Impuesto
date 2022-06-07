const predial = require('../model/predial');
const token = require('../services/token');

module.exports = {
    add: async(req, res, next) => {
        try {
            const reg = await predial.add(req.body);
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
            const reg = await predial.list();
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
            const reg = await predial.queryId(id);
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
            const reg = await predial.update(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
};