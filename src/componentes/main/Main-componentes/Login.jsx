import React, { useEffect, useState } from "react";


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
            <form id="form-login" onSubmit={handleClick}> 
                <h1>Hola {headingName}</h1> 
                <input type="fName" placeholder="Nombre:" onChange={changeName} value={sayName}/>
                {!props.isRegistered &&<input type="lName" placeholder="Apellido:" />}
                 <input type="email"  placeholder="Email:"/>
                <button 
                    style={{backgroundColor: isMouseOver? "black" : "white"}}                    
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    id="button-login" type="submit">{props.isRegistered ?                 
                    "Acceder" : "Registrate"}
                </button>
            </form>
        </div>

    );
}

export default Login;