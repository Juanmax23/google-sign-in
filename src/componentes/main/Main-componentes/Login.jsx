
import React,  { useState} from "react";
import { Link } from 'react-router-dom';



function Login(props) {


    const [usuario, guardarUsuario] = useState({
        correo: '',
        password:'',
    });

    const { correo, password } = usuario;
   
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }
    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (

        
        
        <div id="container-form">

            
            <form id="iniciar-sesion" onSubmit={onSubmit} > 

                <h1>Iniciar Sesión</h1>

                <input
                    name="correo" 
                    type="correo"
                    placeholder="Email o Nombre:"
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


                <button id="iniciar-cuenta" type="submit" value="Iniciar Sesión">
                    Iniciar Sesión
                </button>


                <Link to={'/AddUser'} id="registrarte"> Crear Cuenta </Link>
                

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
           
           
        

    );
}

export default Login;




 // const addUser = (usuario) =>{ // {task:'description', priority: 'priority' }
        
    //     fetch('http://localhost:4500/api/usuarios',
    //     {
    //       method:'POST',
    //       headers:{ 
    //         'Accept': 'application/json',
    //         'Content-Type':'application/json'
    //       },
    //       body: JSON.stringify({...usuario})
    //     })
    //       .then((data) => data.json())
    //       .then((data) => {
    //         setUsuario(usuario.concat(data.usuario));
              
    //           console.log(data)
    //       }).catch(e=> console.log(e))
    //   }
