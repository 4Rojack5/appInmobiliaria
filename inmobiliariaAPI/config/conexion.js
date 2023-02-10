//Se crea la conexión a la base de datos de mysql
//Se inicia el server en xampp

const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    database: 'db_inmobiliaria'
});

//Que identifique la conexión

conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrido un error: '+ err);
    }else{
        console.log('La base de datos esta conectada!');
    }
});

module.exports = conexion;

/* Created By: Juan Felipe Rodríguez Rendón */