const express = require('express');
const cors = require('cors');

const { dbConection } = require('../database/config');

require('colors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';
        this.productPath = '/product'

        // Conectar a base de datos de MongoDB 
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    async conectarDB() {
        await dbConection();
    }


    middlewares() {

        // CORS
        this.app.use( cors () );

        // lectura del body
        this.app.use( express.json() );

        // raiz de mi app 
        this.app.use( express.static('public') );
        
        
    }

    routes() {

       this.app.use(this.authPath, require('../routes/auth'));

       this.app.use(this.usuariosPath, require('../routes/usuarios'));

       this.app.use(this.productPath, require('../routes/product'));

    }

    listen() {
        
     this.app.listen(this.port, () => {
       console.log(`App running in this port: ${this.port}`.blue)
     });

    }
    
}


module.exports = Server;