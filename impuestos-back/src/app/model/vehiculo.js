const mysql = require('mysql');
const connection = require('../util/database');

module.exports = {
    add: async(datos) => {
        return new Promise(function(resolve, reject){
            const { Placa, Marca, Modelo, Serie, Color, Tipo, Avaluo, Propietario } = datos;
             
            const INSERT = "INSERT INTO vehiculo (Placa, Marca, Modelo, Serie, Color, Tipo, Avaluo, Propietario) VALUES(?, ?, ?, ?, ?, ?, ?, ?);";
            const query = mysql.format(INSERT, [Placa, Marca, Modelo, Serie, Color, Tipo, Avaluo, Propietario]);
            
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
            const SELECT = "SELECT v.Id, v.Placa, v.Marca, v.Modelo, v.Serie, v.Color, v.Tipo, v.Avaluo, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM vehiculo AS v JOIN usuario AS p ON (v.Propietario = p.Id);";
            
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
            const SELECT = "SELECT v.Id, v.Placa, v.Marca, v.Modelo, v.Serie, v.Color, v.Tipo, v.Avaluo, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM vehiculo AS v JOIN usuario AS p ON (v.Propietario = p.Id) WHERE v.Id=?;";
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

    update: async(datos) => {
        return new Promise(function(resolve, reject){
            const { Id, Placa, Marca, Modelo, Serie, Color, Tipo, Avaluo, Propietario_id } = datos;
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
    }    
};