import React, { useEffect, useState } from "react";
import { Product } from "../domain/product";
import {ProductRenderer} from "./Main-componentes/ProductRenderer";
import { toOffer } from "../domain/offer";
import Cart from "../domain/cart";
import Fav from "../domain/Fav";
import { Category } from "../global/Header/Category";

export const Article = (props) => {

    const [products,    SetProducts]    =    useState([])

    const [cart,    setCart]   = useState([])

    const [total, setTotal] = useState (0)

    

    const [fav, setFav] = useState([])

    const [searchProducts, setSearchProducts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4500/product")
            .then(data=>data.json())
            .then((data) => {
                const newProducts = data.map(value => {
                    return new Product(value.id, value.name, value.description, value.price, value.stock, value.offer ?
                        value.offer.map(it => toOffer(it)) : null, value.category, value.img )
                })
                SetProducts(newProducts)
                setSearchProducts(newProducts)
                })
            .catch((error) => console.log(error))
    },[])

    const addToFav = (product) => {
        setFav(fav.concat(new Fav(product))) 
    }
    
    useEffect(()=>{
        let aux = 0
        fav.forEach(value =>{
            aux += value.quantity
        })
        
    },[fav])
    
    const removeFav = (id) =>{
        setFav(fav.filter(it => it.id !== id))
    }
    
    const removeElement = (id) => {
        setCart(cart.filter(it => it.id !==id))
    }
    





    


    const addToCart = (product) => {
        setTotal(0)
        let index = cart.indexOf(product)
        if(index !== -1){
            Cart[index]=1;
            setCart(new Cart) 
        }else{
            setCart(cart.concat(new Cart(product)));
        }
             
    }
    
    useEffect(()=>{
        let aux = 0
        cart.forEach(value =>{
            aux += value.product.price * value.quantity
        })
        setTotal(aux)
    },[cart])

    const filterProducts = (e) => { 
        const value = e.target.value
        let searchProducts = products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase()) ||
            product.description.toLowerCase().includes(value.toLowerCase()) ||
            product.id === value
        )
        setSearchProducts(searchProducts)
    }
    
    function filterBy(category){
       
        let searchProducts = products.filter(product =>
            product.category === category
        )
        setSearchProducts(searchProducts)
    
    }

    // function editQuantity(event, productId) {
    //     let quantity = event.target.value;
    //     let cartLine = cart.find(value => value.product.id == productId)
    
    //     cartLine.quantity = quantity
    //     document.getElementById(`priceById${productId}`).innerHTML = cartLine.product.price * quantity
    //     total = 0
    
    //     cart.forEach(cartLine => {
    //         total += cartLine.product.price * cartLine.quantity;
    //     })
    
    //     totalHolder.innerHTML = total
    // }


    return(

        <article>    
                 
            <div id="cart_de_products">
                <span id="Categorias-en-article"><Category filterBy={filterBy}/></span>

                <span><input id="serch-product-for-now" onChange={filterProducts} placeholder="Buscar en stock"/></span>
                
                

                <div id='product-holder'>
                    {
                        
                        products.length == 0 ?
                        (
                            <>
                                products in camming
                            </>
                        ):
                            (
                                searchProducts.map(product =>  

                                <ProductRenderer 

                                  
                                    
                                    incrementCounter={props.incrementCounter}

                                    product={product} addToCart={addToCart}

                                    addToFav={addToFav}
                                
                                >

                                </ProductRenderer>

                            )
                        )
                    }
                </div>
            </div>

            <div id="agregados_al_cart">
                <h3>Carrito</h3>

                <ul id="cart-holder">
                    {
                        cart.length == 0 ?
                        (
                            <>
                            Aun no hay compras
                            </>
                        ):                              
                        (
                        cart.map(value =>  {
                            return(
                                    <li>
                                        <a href="#"><img alt={value.product.name} src={value.product.img}/></a>
                                        <input  id={'quntity${value.product.id}'} value={value.quantity} />
                                        <p>{value.product.name}</p>
                                        <p  id={'priceById${value.product.id}'}>${value.product.price * value.quantity}</p>

                                        <button onClick={()=> removeElement(cart.id)} id="delete-product" className="btn btn-outline-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </button>
                                    </li>
                                                    
                                )

                            })       

                        )
                   }

                </ul>

            <div id="finalizar-compra">
                   <span ><button type="button" class="btn btn-success">Finalizar compra</button></span> 
                    <p>Total: $<span id="total-holder">{total}</span></p>
            </div>  

                
            </div>
            

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
                                    <span><button className="btn btn-outline-dark" onClick={()=> removeFav(fav.id)}
                                    >Eliminar </button></span>
                                    
                                </li>
                                )

                            })

                        )
                    }


                </ul>


            </div>

                     
        </article>
    )
}