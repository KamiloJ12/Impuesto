const mysql = require('mysql');
const connection = require('../util/database');

module.exports = {
    add: async(datos) => {
        return new Promise(function(resolve, reject){
            const {Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id} = datos;
            const INSERT = "INSERT INTO Usuario (Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?);";
            const query = mysql.format(INSERT, [Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id]);
            
            connection.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });    
    },

    addUsuario: async(datos) => {
        return new Promise(function(resolve, reject){
            const {Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono} = datos;
            const INSERT = "INSERT INTO Usuario (Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?);";
            const query = mysql.format(INSERT, [Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, 3]);
            
            connection.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });    
    },

    addAdministrador: async(datos) => {
        return new Promise(function(resolve, reject){
            const {Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id} = datos;
            const INSERT = "INSERT INTO Usuario (Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?);";
            const query = mysql.format(INSERT, [Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id]);
            
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
            const SELECT = "SELECT u.Id, u.Cedula, u.Nombres, u.Apellidos, u.Telefono, u.Usuario, u.Email, u.Password, u.Estado, r.Id as Rol_id, r.Rol as Rol FROM Usuario AS u JOIN Rol AS r ON (u.Rol_id = r.Id);";
            
            connection.query(SELECT, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    listUsuarios: async() => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT u.Id, u.Cedula, u.Nombres, u.Apellidos, u.Telefono, u.Usuario, u.Email, u.Password, u.Estado, r.Id as Rol_id, r.Id as Rol_id, r.Rol as Rol FROM Usuario AS u JOIN Rol AS r ON (u.Rol_id = r.Id) WHERE u.Rol_id = 3;";
            
            connection.query(SELECT, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    listAdministradores: async() => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT u.Id, u.Cedula, u.Nombres, u.Apellidos, u.Telefono, u.Usuario, u.Email, u.Password, u.Estado, r.Id as Rol_id, r.Rol as Rol FROM Usuario AS u JOIN Rol AS r ON (u.Rol_id = r.Id) WHERE r.Id = 1 || r.id = 2;";
            
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
            const SELECT = "SELECT u.Id, u.Cedula, u.Nombres, u.Apellidos, u.Telefono, u.Usuario, u.Email, u.Password, u.Estado, r.Id as Rol_id, r.Rol as Rol FROM Usuario AS u JOIN Rol AS r ON (u.Rol_Id = r.Id) WHERE u.Id = ?;";
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
    
    queryUsuarioId: async(id) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT u.Id, u.Cedula, u.Nombres, u.Apellidos, u.Telefono, u.Usuario, u.Email, u.Password, u.Estado, r.Id as Rol_id, r.Rol as Rol FROM Usuario AS u JOIN Rol AS r ON (u.Rol_Id = r.Id) WHERE u.Id = ? and r.Id = 3;";
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

    queryAdministradorId: async(id) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT u.Id, u.Cedula, u.Nombres, u.Apellidos, u.Telefono, u.Usuario, u.Email, u.Password, u.Estado, r.Id as Rol_id, r.Rol as Rol FROM Usuario AS u JOIN Rol AS r ON (u.Rol_Id = r.Id) WHERE u.Id = ? and r.Id = 1 || r.Id = 2;";
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

    queryEmail: async(Email) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT u.Id, u.Cedula, u.Nombres, u.Apellidos, u.Telefono, u.Usuario, u.Email, u.Password, u.Estado, r.Id as Rol_id, r.Rol as Rol FROM Usuario AS u JOIN Rol AS r ON (u.Rol_Id = r.Id) WHERE u.Email = ?;";
            const query = mysql.format(SELECT, [Email]);        
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result[0]);
                }
            });
        });
    },

    queryUsuario: async(Email) => {
        return new Promise(function(resolve, reject){
            const SELECT = "SELECT u.Id, u.Cedula, u.Nombres, u.Apellidos, u.Telefono, u.Usuario, u.Email, u.Password, u.Estado, r.Id as Rol_id, r.Rol as Rol FROM Usuario AS u JOIN Rol AS r ON (u.Rol_Id = r.Id) WHERE u.Usuario = ?;";
            const query = mysql.format(SELECT, [Email]);        
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result[0]);
                }
            });
        });
    },

    updateUsuario: async(datos) => {
        return new Promise(function(resolve, reject){
            console.log(datos);
            const {Id, Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id} = datos;
            const UPDATE = "UPDATE Usuario SET Cedula = ?, Nombres = ?, Apellidos = ?, Telefono = ?, Usuario = ?, Email = ?, Password = ?, Rol_id = ? WHERE Id = ? and Rol_id = 3;";
            const query = mysql.format(UPDATE, [Cedula, Nombres, Apellidos, Telefono, Usuario, Email, Password, Rol_id, Id]);        
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    updateAdministrador: async(datos) => {
        return new Promise(function(resolve, reject){
            console.log(datos);
            const {Id, Cedula, Nombres, Apellidos, Usuario, Email, Password, Telefono, Rol_id} = datos;
            const UPDATE = "UPDATE Usuario SET Cedula = ?, Nombres = ?, Apellidos = ?, Telefono = ?, Usuario = ?, Email = ?, Password = ?, Rol_id = ? WHERE Id = ? and (Rol_id = 1 || Rol_id = 2);";
            const query = mysql.format(UPDATE, [Cedula, Nombres, Apellidos, Telefono, Usuario, Email, Password, Rol_id, Id]);        
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    desactive: async(id) => {
        return new Promise(function(resolve, reject){        
            const UPDATE = "UPDATE Usuario SET Estado = 'Desactivo' WHERE Id = ?;";
            const query = mysql.format(UPDATE, [id]);        
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    active: async(id) => {
        return new Promise(function(resolve, reject){  
            const UPDATE = "UPDATE Usuario SET Estado = 'Activo' WHERE Id = ?;";
            const query = mysql.format(UPDATE, [id]);        
            
            connection.query(query, (err, result, fileds) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    },

    
};