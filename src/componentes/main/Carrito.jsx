

class Carrito{
    productKey =  "product";
    card = () => localStorage.setItem('cart',JSON.stringify([{id:1},{id:2}]))
    cardGet = () => localStorage.getItem( 'cart')
}

export default Carrito;