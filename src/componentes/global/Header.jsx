import React  from "react";
import { Navbar } from "./Header/Navbar";
import { Link } from 'react-router-dom'

export const Header = (props) => {

        return(

            <header> 

                
                <Navbar  />


                <div id="name1_center">
                    <Link id="name1" to="/">_Varsovia_21</Link>
                </div>

                                            
                <span id="buscador_compu2">

                    <div id="category_compu1_fr">
                        <span id="categorias_compu">
                        <Link to="/Woman"> Mujer</Link>
                        <Link to="/Man">Hombre</Link>
                        <Link  to="/Boy">Niño</Link>    
                        </span>
                    </div>  
               
                   
                </span>

                
                <div id="carrito_header" >
                   

                    <Link to="/Favoritos" id="head_heart_1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"                     
                            className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </Link>
                   
                    
                    <Link to="/"id="bag_header_caompras">
                        <div id="carrito_counter"> <div>{props.count}</div></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                        </svg>
                    </Link>  

                    <Link to="/Cuenta" id="iniciar_secion_header" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>             Iniciar Sesión/Regist...
                    </Link>                                
                    

                </div>
                        
                                                            

                        
            </header>
        )
}
    
