const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send(products)
})

module.exports = router;

let products = [
  {
    "id": 1,
    "name": "Chaleco",
    "description": "para verano o invierno",
    "price": 1000,
    "stock": 5,
    "offer": null,
    "category": "Ropa",
    "img": "images/chaelco-blanco-3.jpg"
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
    "name": "Chaleco",
    "description": "ponete facha",
    "price": 500,
    "stock": 100,
    "offer": [
      {
        "id": 1,
        "validUntil": "2023-11-05T03:00:00.000Z",
        "discount": 0.5,
        "limit": false,
        "description": "Mitad de precio siempre"
      },
      {
        "id": 2,
        "validUntil": "2019-11-05T03:00:00.000Z",
        "discount": 0.5,
        "limit": false,
        "description": "Mitad de precio siempre"
      }
    ],
    "category": "Descuentos",
    "img": "images/chaleco-blanco-1.jpg"
  },
  {
    "id": 4,
    "name": "Chaleco vernao",
    "description": "..",
    "price": 650,
    "stock": 10,
    "offer": null,
    "category": "Ropa",
    "img": "images/chaleco-verano.jpg"
  },
  {
    "id": 5,
    "name": "Mochila",
    "description": "pocos en stock",
    "price": 750,
    "stock": 100,
    "offer": [
      {
        "id": 3,
        "validUntil": "2014-11-05T03:00:00.000Z",
        "discount": 100,
        "limit": false,
        "description": "Mitad de precio "
      },
      {
        "id": 4,
        "validUntil": "2020-11-05T03:00:00.000Z",
        "discount": 100,
        "limit": false,
        "description": "Mitad de precio "
      },
      {
        "id": 5,
        "validUntil": "2021-11-05T03:00:00.000Z",
        "discount": 100,
        "limit": false,
        "description": "Liquidando"
      }
    ],
    "category": "Descuentos",
    "img": "images/mochila-cuero-blanco.jpg"
  },
  {
    "id": 6,
    "name": "Chaleco Negro",
    "description": "juega con una camisa",
    "price": 600,
    "stock": 10,
    "offer": null,
    "category": "Fiesta",
    "img": "images/chaleco-fiesta-negro.jpg"
  },
  {
    "id": 7,
    "name": "Mochila",
    "description": "fachera y con Accesorios ",
    "price": 750,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/mochila-cuero-rojo.jpg"
  },
  {
    "id": 8,
    "name": "Cintos",
    "description": "aprovechalos",
    "price": 500,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/cintos-1.jpg"
  },
  {
    "id": 9,
    "name": "Cintos",
    "description": "lo nuevo para el verano",
    "price": 550,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/cintos-2.jpg"
  },
  {
    "id": 10,
    "name": "Chaleco",
    "description": "lo nuevo para el verano",
    "price": 750,
    "stock": 3,
    "offer": null,
    "category": "Fiesta",
    "img": "images/chaleco-fiesta-2.jpg"
  },
  {
    "id": 11,
    "name": "Mochila",
    "description": "lo nuevo para el verano",
    "price": 900,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/mochila-cuero-negro.jpg"
  },
  {
    "id": 12,
    "name": "Chaleco",
    "description": "lo nuevo para el verano",
    "price": 750,
    "stock": 3,
    "offer": null,
    "category": "Nuevo",
    "img": "images/chaleco-blanco-2.jpg"
  },
  {
    "id": 13,
    "name": "Chalecos fiesta",
    "description": "lo nuevo para el verano",
    "price": 750,
    "stock": 3,
    "offer": null,
    "category": "Fiesta",
    "img": "images/chaleco-fiesta-1.jpg"
  },
  {
    "id": 14,
    "name": "Lentes",
    "description": "lo nuevo para el verano",
    "price": 500,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/lentes de sol-1.jpg"
  },
  {
    "id": 15,
    "name": "Matera de cuero",
    "description": "lo nuevo para el verano",
    "price": 800,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/matera-cuero-1.jpg"
  },
  {
    "id": 16,
    "name": "Mochilas",
    "description": "de cuero",
    "price": 750,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/mochila-cuero-negro-2.jpg"
  },
  {
    "id": 17,
    "name": "Accesorios",
    "description": "si se te caen los lentes",
    "price": 350,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/porta-lentes.jpg"
  },
  {
    "id": 18,
    "name": "Accesorios",
    "description": "collares",
    "price": 350,
    "stock": 3,
    "offer": null,
    "category": "Accesorios",
    "img": "images/acsesorios.jpg"
  },
  {
    "id": 19,
    "name": "Polera",
    "description": "fiesta",
    "price": 750,
    "stock": 3,
    "offer": null,
    "category": "Fiesta",
    "img": "images/polera-fiesta-2.jpg"
  },
  {
    "id": 20,
    "name": "Conjunto_varsovia",
    "description": "deportivo",
    "price": 1980,
    "stock": 3,
    "offer": null,
    "category": "Nuevo",
    "img": "images/conjunto-varsovia21.jpg"
  },
  {
    "id": 22,
    "name": "Polera",
    "description": "bien calentita",
    "price": 750,
    "stock": 4,
    "offer": null,
    "category": "Ropa",
    "img": "images/polera-blanca.jpg"
  },
  {
    "id": 23,
    "name": "Polera",
    "description": "ideal para fiesta",
    "price": 750,
    "stock": 3,
    "offer": null,
    "category": "Fiesta",
    "img": "images/polera-fiesta.jpg"
  },
  {
    "id": 24,
    "name": "Chaleco",
    "description": "..",
    "price": 750,
    "stock": 3,
    "offer": null,
    "category": "Fiesta",
    "img": "images/chaleco-bell-3.jpg"
  }
];