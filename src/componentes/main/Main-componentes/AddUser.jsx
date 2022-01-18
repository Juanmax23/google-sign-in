import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom';


export const AddUser = (props) => {


   
   
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        correo: '',
        password:'',
    });

    const {nombre, correo, password } = usuario;
   
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }

    const onSubmit = async(e) => {
        
    }

    

    return (
        <React.Fragment>

        <div id="crear-form">   
           

            <form onSubmit={onSubmit}
                id="form-login" 
                method="POST"
                action="http://localhost:4500/api/usuarios"
                enctype="multipart/form-data"
                > 
                
                <h1>Registrate</h1> 

                <input 
                    name="nombre" 
                    type="text"  
                    placeholder="Nombre:"
                    onChange={onChange}
                    value={nombre}
                />

                <input 
                    name="correo"
                    type="correo" 
                    placeholder="Email:" 
                    onChange={onChange}
                    value={correo}
                />


                <input
                   name="password"
                   type="password"
                   placeholder="Contraseña:" 
                   onChange={onChange} 
                   value={password}
                />
                    
                <button id="enviar" 
                    type="submit"
                    value='send'   
                    >
                    Registrarme
                </button>

                <Link to={'/Cuenta'} id="volvera-sesion"> volver a iniciar Sesión </Link>


                
            </form>


            


           

            <div id="g_id_onload"
                data-client_id="178357119578-107alh3folgpo1b9j2te1gbdgr97r85m.apps.googleusercontent.com"
                data-auto_prompt="false"
                data-callback="handleCredentialResponse">
            </div>
            
            <div className="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>

            {/* los otros datos de google estan en el inde.html */}

        </div>      
        </React.Fragment>
    )

}




export default AddUser;