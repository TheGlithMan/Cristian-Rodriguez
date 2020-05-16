const express = require('express'),
    app = express(),
    path = require('path');

    app.use(express.static(path.join(__dirname, "/public")));
    app.get('/', (peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/index.html`);
    });

    app.listen(8080);
    console.log('Conectado!!')