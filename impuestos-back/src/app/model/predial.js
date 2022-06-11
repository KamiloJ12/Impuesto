const mysql = require('mysql');
const connection = require('../util/database');

module.exports = {
    add: async(datos) => {
        return new Promise(function(resolve, reject){
            const { NumeroCuenta, Avaluo, Direccion, Destino, AreaTerritorio, Estrato, AreaConstruida, Propietario } = datos;
             
            const INSERT = "INSERT INTO predial (NumeroCuenta, Avaluo, Direccion, Destino, AreaTerritorio, Estrato, areaConstruida, Propietario) VALUES(?, ?, ?, ?, ?, ?, ?, ?);";
            const query = mysql.format(INSERT, [NumeroCuenta, Avaluo, Direccion, Destino, AreaTerritorio, Estrato, AreaConstruida, Propietario]);
            
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
            const SELECT = "SELECT pr.Id, pr.NumeroCuenta, pr.Avaluo, pr.Direccion, pr.Destino, pr.AreaTerritorio, pr.Estrato, pr.AreaConstruida, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM predial AS pr JOIN usuario AS p ON (pr.Propietario = p.Id);";
            
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
            const SELECT = "SELECT pr.Id, pr.NumeroCuenta, pr.Avaluo, pr.Direccion, pr.Destino, pr.AreaTerritorio, pr.Estrato, pr.AreaConstruida, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM predial AS pr JOIN usuario AS p ON (pr.Propietario = p.Id) WHERE pr.id = ?;";
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

    queryNit: async(nit) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT pr.Id, pr.NumeroCuenta, pr.Avaluo, pr.Direccion, pr.Destino, pr.AreaTerritorio, pr.Estrato, pr.AreaConstruida, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM predial AS pr JOIN usuario AS p ON (pr.Propietario = p.Id) WHERE pr.NumeroCuenta = ?;";
            const query = mysql.format(SELECT, [nit]);        
            
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
            const { Id, NumeroCuenta, Avaluo, Direccion, Destino, AreaTerritorio, Estrato, AreaConstruida, Propietario_id } = datos;
            const UPDATE = "UPDATE predial SET NumeroCuenta=?, Avaluo=?, Direccion=?, Destino=?, AreaTerritorio=?, Estrato=?, AreaConstruida=?, Propietario=? WHERE Id=?;";
            const query = mysql.format(UPDATE, [NumeroCuenta, Avaluo, Direccion, Destino, AreaTerritorio, Estrato, AreaConstruida, Propietario_id, Id]);        
            
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