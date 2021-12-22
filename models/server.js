const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');

require('colors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar a base de datos
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

       this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {
        
     this.app.listen(this.port, () => {
       console.log(`app running in this link: http://localhost: ${this.port}`.blue)
     });
    }
}


module.exports= Server;