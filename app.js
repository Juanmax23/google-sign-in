require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const app= express();
const productRoutes = require('./products/product')

const Server = require('./models/server');
const server = new Server();

function cors(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

} 

//middlewares  -- metodo que se ejecuta antes de que llegue a un controlador 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Cuando reciba algun tipo de dato en un peticion la convierto en json, en cada petion

//cors, configurar cabeceras http
app.use(cors);

router.get('/',(req,res) => {
    res.send('hello world')
})

app.use('/product', productRoutes)

app.listen(2023,() => {
    console.log(`Products in camming `.blue)

})

server.listen()