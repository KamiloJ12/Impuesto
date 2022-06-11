const mysql = require('mysql');
const connection = require('../util/database');

module.exports = {
    add: async(datos) => {
        return new Promise(function(resolve, reject){
            const { Vigencia, Avaluo, Tasa, FechaVencimiento, Vehiculo_Id, Predial_Id, Industria_Id, Total  } = datos;
             
            const INSERT = "INSERT INTO impuesto (Vigencia, Avaluo, Tasa, FechaVencimiento, Vehiculo_Id, Predial_Id, Industria_Id, Total) VALUES(?, ?, ?, ?, ?, ?, ?, ?);";
            const query = mysql.format(INSERT, [Vigencia, Avaluo, Tasa, FechaVencimiento, Vehiculo_Id, Predial_Id, Industria_Id, Total]);
            
            connection.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });    
    },

    list: async() => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT * FROM impuesto;";
            
            connection.query(SELECT, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    queryId: async(id) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT * FROM impuesto WHERE Id=?;";
            const query = mysql.format(SELECT, [id]);        
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result[0]);
                }
            });
        });
    },

    listIndustrias: async() => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT * FROM impuesto WHERE Industria_Id IS NOT NULL;";
            
            connection.query(SELECT, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    listPrediales: async() => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT * FROM impuesto WHERE Predial_Id IS NOT NULL;";
            
            connection.query(SELECT, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    listVehiculos: async() => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT * FROM impuesto WHERE Vehiculo_Id IS NOT NULL;";
            
            connection.query(SELECT, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    getByVehiculoId: async(id) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT * FROM impuesto WHERE Vehiculo_Id=?;";
            const query = mysql.format(SELECT, [id]);  
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    getByPredialId: async(id) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT * FROM impuesto WHERE Predial_Id=?;";
            const query = mysql.format(SELECT, [id]);  
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    getByIndustrialId: async(id) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT * FROM impuesto WHERE Industria_Id=?;";
            const query = mysql.format(SELECT, [id]);  
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },
    /* update: async(datos) => {
        return new Promise(function(resolve, reject){
            const { Vigencia, Avaluo, Tasa, FechaVencimiento, Vehiculo_Id, Predial_Id, Industria_Id } = datos;
            const UPDATE = "UPDATE vehiculo SET Placa=?, Marca=?, Modelo=?, Serie=?, Color=?, Tipo=?, Avaluo=?, Propietario=? WHERE Id=?;";
            const query = mysql.format(UPDATE, [Placa, Marca, Modelo, Serie, Color, Tipo, Avaluo, Propietario_id, Id]);        
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    } */    
};