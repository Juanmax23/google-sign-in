import React, { useEffect, useState }  from "react";
import mujeres from "../../../assets/images/7.jpg"
import mujeres2 from "../../../assets/images/9.jpg"
import mujeres3 from "../../../assets/images/10.jpeg"
import mujeres6 from "../../../assets/images/17.jpeg"
import mujeres7 from "../../../assets/images/18.jpeg"
import mujeres8 from "../../../assets/images/19.jpeg"
import mujeres9  from "../../../assets/images/20.jpeg"
import mujeres10 from "../../../assets/images/22.jpg"
import mujeres11 from "../../../assets/images/23.jpg"

export const Woman = () =>{


    return(
        <div id="conteiner-woman">
            <h2>Acá podras ver Novedades y como se ven nuestras prendas </h2>
            <div id="top-woman">
                <div>
                    <img src={mujeres} alt="" />
                </div>
                <div>
                    <img src={mujeres6} alt="" />
                </div>
                <div>
                    <img src={mujeres2} alt="" />
                </div>
            </div>
            <div id="middle-pic">
                <img src={mujeres3} alt="" />

            </div>
            <div id="botton-woman">
                <div>
                    <img src={mujeres7} alt="" />
                </div>
                <div>
                    <img src={mujeres9} alt="" />
                </div>
                <div>
                    <img src={mujeres8} alt="" />
                </div>
            </div>
            <div id="botton-publicity">
            <div>
                    <img src={mujeres10} alt="" />
                </div>
                <div>
                    <img src={mujeres11} alt="" />
                </div>

            </div>


        </div>

    );
}