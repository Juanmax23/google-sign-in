import React from "react";
import { Link } from "react-router-dom";

export const Category = (props) => {

    

    let categories = ['Nuevo', 'Ropa', 'Accesorios', 'Descuentos', 'Fiesta']
   
    return(

        <div id="categorias-artice">
           
                {
                    categories.map(element => {
                       return (
                           <Link to onClick={()=>props.filterBy(element)} > {element} </Link>
                        )
                    })
                }
            
        </div>
    )
}


