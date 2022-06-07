var jwt = require('jsonwebtoken');
const usuario = require('../model/usuario');

module.exports = {

    //generar el token
    encode: async(_id, rol) => {
        const token = jwt.sign({ id: _id, rol: rol }, 'secretKeyToGenerateToken', { expiresIn: '1d' });
        return token;
    },
    //permite decodificar el token
    decode: async(token) => {
        const { id } = await jwt.verify(token, 'secretKeyToGenerateToken');
        const user = usuario.queryId(id);
        if (user) {
            return user;
        } else {
            return false;
        }
    }
}