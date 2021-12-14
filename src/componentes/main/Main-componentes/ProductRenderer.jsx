import React from "react";

export const ProductRenderer = (props) => {
    return (
        <span className="product">
            <div className="img">
                <a ><img alt={props.product.name} src={props.product.img}/></a>
            </div>
            <div className="info">
                <a className="title" href="#">{props.product.name}</a>
                <p className="description_precie">{props.product.description}</p>
                <div className="price">
                 <span className="st">Precio:</span><strong>${props.product.price}</strong>
                </div>
                <div className="actions">
                 <a  type="submit" id="head_heart" onClick={ () => props.addToFav(props.product) }><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>
                 </a>
                 <button  className="btn btn-dark" onClick={() => {props.addToCart(props.product); props.incrementCounter(props.product) }}>Add to cart</button>
                </div>
            </div>
        </span>
        
    )
}


