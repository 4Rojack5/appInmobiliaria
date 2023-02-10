//Se importa conexion.js
require('./config/conexion');

//Aqui se importa el framework express para facilitar la creación de la API
const express = require('express');
const port = (process.env.port || 3000);

//Express y cors para que no brinde problemas
const app = express();
var cors = require('cors');

app.use(cors({origin: '*'}));

//Permisos para .json
app.use(express.json());

//config
app.set('port', port);

//Se importan routes.js
app.use('/api', require('./routes'));

//Iniciar express y comprobación
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('Error al iniciar servidor: '+error);
    }else{
        console.log('Servidor iniciado en el puerto: '+port)
    }
});

/* Created By: Juan Felipe Rodríguez Rendón */