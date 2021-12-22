const Role = require('../models/role');

const Usuario = require('../models/usuario')



const esRolValido = async(rol = '') => {
    // verificar si existe el rol
    const existeRol = await Role.findOne({ rol });
    if( !existeRol ) {
        throw new Error(`El rol no est regitrado en la Bd`)
    }

}

const emailExiste = async(correo = '') => {
    // verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
     if (existeEmail) {
        throw new Error(`El correo: ${correo} ya esta registrado`);
         
    }
 
}

const existeUsuarioPorId = async( id ) => {
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${id} `)
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}