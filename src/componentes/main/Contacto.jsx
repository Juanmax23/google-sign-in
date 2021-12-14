import React from "react";
import pic from "../../assets/images/pic.png"

export const Contacto = () => {
    
  return (
        <div id="conteiner-card">
          <div className="card-contact">
            <div className="top-contact">
              <h2 className="name-contact">_Varsovia_21</h2>
              <img className="circle-img" src={pic} />
            </div>
            <div className="bottom-contact">
              <p className="info-contact">091 495 495</p>
              <p className="info-contact">Varsovia_21@gmail.com</p>
            </div>
          </div> 
      </div>
  )


 
}
