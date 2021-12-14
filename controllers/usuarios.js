const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey,page = 1, limit}  = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit

    });
}  


const usuariosPut = (req, res = response) => {

    const { id } = req.params;


    res.json({
        msg: 'put API - usuariosPost',
        id

    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api - usuariosPatch'

    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;


    res.json({
        msg: 'post api - usuarios post',
        nombre,
        edad
    });
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'

    });
}    
module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuariosPatch,
    usuariosPost ,
    
}