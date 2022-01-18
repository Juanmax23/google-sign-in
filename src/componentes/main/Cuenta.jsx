import React from "react";
import Login from "./Main-componentes/Login";
import '../../assets/style.css'


const userIsRegistered = false;


export const Cuenta = () => {
    return (
        <div id="container">
            <Login isRegistered={userIsRegistered}/>
        </div>
    );
}

