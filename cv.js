const http = require('http'); 

let controlador = (peticion, respuesta)=>{
    respuesta.end("Hoja de vida :3");
};

let servidor = http.createServer(controlador);

servidor.listen(8080); // 8080, 8000, 3000
console.log('Conectado!!');