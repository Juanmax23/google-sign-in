const express = require('express');
const router = express.Router();

router.get('/products',(req,res) => {
    res.send(products)
})


let products = [
    {
        "id": 1,
        "name": "Chaleco",
        "description": "para verano o invierno",
        "price": 1000,
        "stock": 5,
        "offer": null,
        "category": "Ropa"
        // "img": "./public/images/chaelco-blanco-3.jpg"
      },
      {
        "id": 2,
        "name": "Cintos",
        "description": "lo nuevo para el verano",
        "price": 750,
        "stock": 3,
        "offer": null,
        "category": "Accesorios",
        "img": "images/cintos-3.jpg"
      },
      {
        "id": 3,
        "name": "Chaleco vernao",
        "description": "..",
        "price": 650,
        "stock": 10,
        "offer": null,
        "category": "Ropa",
        "img": "images/chaleco-verano.jpg"
      },
      {
        "id": 4,
        "name": "Chaleco Negro",
        "description": "juega con una camisa",
        "price": 600,
        "stock": 10,
        "offer": null,
        "category": "Fiesta",
        "img": "images/chaleco-fiesta-negro.jpg"
      },
      {
        "id": 5,
        "name": "Mochila",
        "description": "fachera y con Accesorios ",
        "price": 750,
        "stock": 3,
        "offer": null,
        "category": "Accesorios",
        "img": "images/mochila-cuero-rojo.jpg"
      },
      {
        "id": 6,
        "name": "Cintos",
        "description": "aprovechalos",
        "price": 500,
        "stock": 3,
        "offer": null,
        "category": "Accesorios",
        "img": "images/cintos-1.jpg"
      }
]

module.exports = router;


// esto va en el app js
// app.use('/product', productRouter)
// const productRouter = require('./products/product')