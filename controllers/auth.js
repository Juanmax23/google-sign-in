const { response } = require('express');
const bycryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req, res = response) => {

    const { correo, password} = req.body; 

    try {

        // verificar si el correo existe
        const usuario = await Usuario.findOne({ correo });
        if(!usuario){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos'
            });
        }


        // si el usuario esta activo
        if( !usuario.estado ){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - estado: false'
            });
        }

        // verificar contraseña
        const validPassword = bycryptjs.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg:'Usuario /Password no son correctas - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.id );


        res.json({
            msg: 'login okey',
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error)
         res.status(500).json({
            msg:'Hable con el admin'
        })
    }

}


module.exports = {
    login,
}