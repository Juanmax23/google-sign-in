import React, { useEffect, useState } from "react";
import Fav from "../domain/Fav";


export const Favoritos = () => {

    const [fav, setFav] = useState([])

    const addToFav = (product) => {
        setFav(fav.concat(new Fav(product))) 
    }
    useEffect(()=>{
        let aux = 0
        fav.forEach(value =>{
            aux += value.quantity
        })
        
    },[fav])
    



    return(

        <div id="favoritos">
                <h3>Favoritos</h3>
                <ul id="fav-holder">
                 {
                    fav.length == 0 ?
                        (
                            <>
                            Aun no hay Favoritos
                            </>
                                ):                              
                        (
                            fav.map(value =>  {
                                return(
                                   <li>
                                       <div >
                                            <a href="#"><img alt={value.product.name} src={value.product.img}/></a>
                                        </div>
                                       <input id={'quntity${value.product.id}'} value={value.quantity}/>
                                       <span><button className="btn-black">Eliminar </button></span>
                                       
                                    </li>
                                )

                            })

                        )
                    }


                </ul>


            </div>

    );
}
