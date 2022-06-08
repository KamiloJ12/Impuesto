const mysql = require('mysql');
const connection = require('../util/database');

module.exports = {
    add: async(datos) => {
        return new Promise(function(resolve, reject){
            const { NIT, NumeroPlaca, Direccion, Propietario, Avaluo, EsTienda, InicioActividad, TipoRegimen, TipoPersona } = datos;
             
            const INSERT = "INSERT INTO industria (NIT, NumeroPlaca, Direccion, Propietario, Avaluo, EsTienda, InicioActividad, TipoRegimen, TipoPersona) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);";
            const query = mysql.format(INSERT, [NIT, NumeroPlaca, Direccion, Propietario, Avaluo, EsTienda, InicioActividad, TipoRegimen, TipoPersona]);
            
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
            const SELECT = "SELECT i.Id, i.NIT, i.NumeroPlaca, i.Direccion, i.Propietario, i.Avaluo, i.EsTienda, i.InicioActividad, i.TipoRegimen, i.TipoPersona, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM industria AS i JOIN usuario AS p ON (i.Propietario = p.Id);";
            
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
            const SELECT = "SELECT i.Id, i.NIT, i.NumeroPlaca, i.Direccion, i.Propietario, i.Avaluo, i.EsTienda, i.InicioActividad, i.TipoRegimen, i.TipoPersona, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM industria AS i JOIN usuario AS p ON (i.Propietario = p.Id) WHERE id=?;";
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