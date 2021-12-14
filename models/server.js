
const express = require('express')
const cors = require('cors');

require('colors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi app

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors () );


        this.app.use( express.json() );

    

        this.app.use( express.static('public') );
    }

    routes() {

       this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {
        
     this.app.listen(this.port, () => {
       console.log(`app listening at http://localhost: ${this.port}`.blue)
     });
    }
}


module.exports= Server;