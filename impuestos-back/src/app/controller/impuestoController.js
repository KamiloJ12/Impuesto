const impuesto = require('../model/impuesto');
const industria = require('../model/industria');
const predial = require('../model/predial');
const vehiculo = require('../model/vehiculo');
const token = require('../services/token');

module.exports = {

    addImpuestosPrediales: async() => {
        try {
            
            const prediales = await predial.list();

            await Promise.all(prediales.map(async (predial) => {
                const date = new Date();
                let date2 = new Date();
                date2.setFullYear(date2.getFullYear() + 1);
                date2 = date2.getFullYear() + "/" + date2.getMonth() + "/" + date2.getDay();
                let tasa = 0;
                const valuo = predial.Avaluo;
                
                if(valuo <= 133237000){
                    tasa = 5.5;
                }else if(valuo > 133237000 && valuo <= 141983000){
                    tasa = 5.6;
                }else if(valuo > 141983000 && valuo <= 163454000){
                    tasa = 5.7;
                }else if(valuo > 163454000 && valuo <= 184927000){
                    tasa = 5.8;
                }else if(valuo > 184927000 && valuo <= 206399000){
                    tasa = 5.9;
                }else if(valuo > 206399000 && valuo <= 227871000){
                    tasa = 6;
                }else if(valuo > 227871000 && valuo <= 249343000){
                    tasa = 6.1;
                }else if(valuo > 249343000 && valuo <= 270815000){
                    tasa = 6.2;
                }else if(valuo > 270815000 && valuo <= 306602000){
                    tasa = 6.3;
                }else if(valuo > 306602000 && valuo <= 342391000){
                    tasa = 6.4;
                }else if(valuo > 342391000 && valuo <= 378175000){
                    tasa = 6.5;
                }else if(valuo > 378175000 && valuo <= 413962000){
                    tasa = 6.6;
                } else if(valuo > 413962000 && valuo <= 449750000){
                    tasa = 6.8;
                } else if(valuo > 449750000 && valuo <= 485537000){
                    tasa = 7;
                } else if(valuo > 485537000 && valuo <= 521323000){
                    tasa = 7.2;
                } else if(valuo > 521323000 && valuo <= 557111000){
                    tasa = 7.4;
                } else if(valuo > 557111000 && valuo <= 592898000){
                    tasa = 7.6;
                } else if(valuo > 592898000 && valuo <= 643000000){
                    tasa = 7.8;
                } else if(valuo > 643000000 && valuo <= 693102000){
                    tasa = 8;
                }else if(valuo > 693102000 && valuo <= 743202000){
                    tasa = 8.2;
                }else if(valuo > 743202000 && valuo <= 793306000){
                    tasa = 8.4;
                }else if(valuo > 793306000 && valuo <= 843406000){
                    tasa = 8.6;
                }else if(valuo > 843406000 && valuo <= 893508000){
                    tasa = 8.8;
                }else if(valuo > 893508000 && valuo <= 943610000){
                    tasa = 9;
                }else if(valuo > 943610000 && valuo <= 993712000){
                    tasa = 9.2;
                }else if(valuo > 993712000 && valuo <= 1172646000){
                    tasa = 9.5;
                }else if(valuo > 1172646000 && valuo <= 1351583000){
                    tasa = 10.1;
                }else if(valuo > 1351583000 && valuo <= 1530517000){
                    tasa = 10.8;
                }else if(valuo > 1530517000 && valuo <= 1717775000){
                    tasa = 11.5;
                }else if(valuo > 1717775000){
                    tasa = 12.3;
                }     

                const impuestoPredial = {
                    Vigencia: date.getFullYear(),
                    Avaluo: valuo,
                    Tasa: tasa,
                    FechaVencimiento: date2,
                    Predial_Id: predial.Id,
                    Total: tasa*valuo
                }
                const reg = await impuesto.add(impuestoPredial);
            }));
            return true;
        } catch (e) {
            console.log(e);
            return false;
            next(e);
        }
    },

    addImpuestosVehiculos: async() => {
        try {
            
            const vehiculos = await vehiculo.list();

            await Promise.all(vehiculos.map(async (vehiculo) => {
                const date = new Date();
                let date2 = new Date();
                date2.setFullYear(date2.getFullYear() + 1);
                date2 = date2.getFullYear() + "/" + date2.getMonth() + "/" + date2.getDay();
                let tasa = 0;
                const valuo = vehiculo.Avaluo;
                
                if(vehiculo.Tipo == "Servicio Particular"){
                    if(valuo <= 48029000){
                        tasa = 1.5;
                    }else if(valuo > 48029000 && valuo <= 108063000){
                        tasa = 2.5;
                    }else if(valuo > 108063000){
                        tasa = 3.5;
                    }
                }else if (vehiculo.Tipo == "Motocicleta Mayor a 125 CC"){
                    tasa = 1.5;
                }else {
                    tasa = 0.5;
                }    

                const impuestoPredial = {
                    Vigencia: date.getFullYear(),
                    Avaluo: valuo,
                    Tasa: tasa,
                    FechaVencimiento: date2,
                    Vehiculo_Id: vehiculo.Id,
                    Total: tasa*valuo
                }
                const reg = await impuesto.add(impuestoPredial);
            }));
            return true;
        } catch (e) {
            console.log(e);
            return false;
            next(e);
        }
    },

    addImpuestosIndustriales: async() => {
        try {
            
            const industrias = await industria.list();

            await Promise.all(industrias.map(async (industria) => {
                const date = new Date();
                let date2 = new Date();
                date2.setFullYear(date2.getFullYear() + 1);
                date2 = date2.getFullYear() + "/" + date2.getMonth() + "/" + date2.getDay();
                let tasa = 0;
                const valuo = industria.Avaluo;
                
                tasa = 0.27;

                const impuestoPredial = {
                    Vigencia: date.getFullYear(),
                    Avaluo: valuo,
                    Tasa: tasa,
                    FechaVencimiento: date2,
                    Industria_Id: industria.Id,
                    Total: tasa*valuo
                }
                const reg = await impuesto.add(impuestoPredial);
            }));
            return true;
        } catch (e) {
            console.log(e);
            return false;
            next(e);
        }
    },

    list: async(req, res, next) => {
        try {
            const reg = await impuesto.list();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    /* queryId: async(req, res, next) => {
        try {
            const {id} = req.params;
            const reg = await impuesto.queryId(id);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    }, */

    listIndustrias: async(req, res, next) => {
        try {
            const reg = await impuesto.listIndustrias();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },

    listPrediales: async(req, res, next) => {
        try {
            console.log("prediales");
            const reg = await impuesto.listPrediales();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },

    listVehiculos: async(req, res, next) => {
        try {
            const reg = await impuesto.listVehiculos();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        } 
    },
};