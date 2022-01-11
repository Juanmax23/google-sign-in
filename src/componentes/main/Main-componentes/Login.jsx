import React, { useState } from "react";


function Login(props) {

    
    const [sayName, setSayName] = useState ("");

    const [headingName, setHeading]= useState ("");
    
    const [isMouseOver, setMouseOver] = useState (false);


    function changeName (event) {
        setSayName(event.target.value)
    }


    function  handleMouseOver (){
        setMouseOver(true)        
    }


    function handleMouseOut () {
        setMouseOver(false)
    }

    
    function handleClick (event) {
        setHeading(sayName)

        event.preventDefault();

    }

    

    return (

        
        
        <div id="container-form">
                
                           
            <form id="form-login" onSubmit={handleClick} 
                  method="POST"
                  action="http://localhost:4500/api/usuarios"
                  encType="multipart/form-data"> 
                <h1>Hola {headingName}</h1> 
                <input name="usuario" type="nombre" placeholder="Nombre:" onChange={changeName} value={sayName}/>
                <input name="usuario" type="correo"  placeholder="Email:"/>
                <input name="usuario" type="password"  placeholder="Contraseña:"/>
                
                <button 
                    style={{backgroundColor: isMouseOver? "black" : "white"}}                    
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    id="enviar" type="submit">{props.isRegistered ?                 
                    "Acceder" : "Registrate"}
                </button>
                
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

               
            </form>

            
         

            
              
            
        </div>
           
           
        

    );
}

export default Login;