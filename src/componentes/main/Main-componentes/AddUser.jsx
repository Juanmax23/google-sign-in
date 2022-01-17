import React, { useState, useEffect } from 'react'





const AddUser = (props) => {

    return (
        <React.Fragment>

        <form 
            id="form-login" 
            method="POST"
            action="http://localhost:4500/api/usuarios"
            enctype="application/json"
            > 
            <h1></h1> 

            <input name="nombre" type="nombre"  placeholder="Nombre:"  />
            <input name="correo" type="correo" placeholder="Email:"/>
            <input name="password" type="password"  placeholder="Contraseña:"/>
                
            <button
                id="enviar" 
                type="submit"
                value='send'   
                >
                Registrate
            </button>

            <ul id="usuario-message">
               
                {

                }

            </ul>
                
               
        </form>
        </React.Fragment>
    )

}




export default AddUser;