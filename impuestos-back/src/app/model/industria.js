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
            const SELECT = "SELECT i.Id, i.NIT, i.NumeroPlaca, i.Direccion, i.Propietario, i.Avaluo, i.EsTienda, Date_format(i.InicioActividad, '%Y-%m-%d') AS InicioActividad, i.TipoRegimen, i.TipoPersona, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM industria AS i JOIN usuario AS p ON (i.Propietario = p.Id);";
            
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
            const SELECT = "SELECT i.Id, i.NIT, i.NumeroPlaca, i.Direccion, i.Propietario, i.Avaluo, i.EsTienda, Date_format(i.InicioActividad, '%Y-%m-%d') AS InicioActividad, i.TipoRegimen, i.TipoPersona, p.Id AS Propietario_id, CONCAT_WS(' ', p.Nombres, p.Apellidos) AS Propietario FROM industria AS i JOIN usuario AS p ON (i.Propietario = p.Id) WHERE i.Id=?;";
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
            const { NIT, NumeroPlaca, Direccion, Propietario_id, Avaluo, EsTienda, InicioActividad, TipoRegimen, TipoPersona, Id } = datos;
            const UPDATE = "UPDATE industria SET NIT=?, NumeroPlaca=?, Direccion=?, Propietario=?, Avaluo=?, EsTienda=?, InicioActividad=?, TipoRegimen=?, TipoPersona=? WHERE id=?;";
            const query = mysql.format(UPDATE, [NIT, NumeroPlaca, Direccion, Propietario_id, Avaluo, EsTienda, InicioActividad, TipoRegimen, TipoPersona, Id]);        
            
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