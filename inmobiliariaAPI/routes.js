const routes = require('express').Router();
const conexion = require('./config/conexion');

//Asignar las rutas
//get inmuebles
routes.get('/', (req, res)=>{
    let sql = 'select * from Cpropiedades';

    conexion.query(sql,(err, rows, fields)=>{
        if(err){
            throw err;
        }else{
            res.json(rows);
        }
    });
});

//get un inmuebles
routes.get('/:id', (req, res)=>{
    const {id} = req.params;

    let sql = 'select * from Cpropiedades where id_propiedad = ?';

    conexion.query(sql, [id], (err, rows, fields)=>{
        if(err){
            throw err;
        }else{
            res.json(rows);
        }
    });
});

//Add un Inmueble
routes.post('/', (req, res)=>{
    const {imagen, areatotal, ncuartos, nbanos, nparqueaderos, valor_propiedad} = req.body;

    let sql = `insert into Cpropiedades(imagen, areatotal, ncuartos, nbanos, nparqueaderos, valor_propiedad) 
    values ('${imagen}', '${areatotal}', '${ncuartos}', '${nbanos}', '${nparqueaderos}', '${valor_propiedad}')`;

    conexion.query(sql, (err, rows, fields)=>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Inmueble Agregado!'});
        }
    });
});

//Delete un Inmueble
routes.delete('/:id', (req, res)=>{
    const{id}=req.params;

    let sql = `delete from Cpropiedades where id_propiedad = '${id}'`;

    conexion.query(sql, (err, rows, fields)=>{
        if(err){
            throw err;
        }else{
            res.json({status: 'Inmueble Eliminado!'});
        }
    });
});

//Modify un Inmueble
routes.put('/:id', (req, res)=>{
    const{id} = req.params;
    const {imagen, areatotal, ncuartos, nbanos, nparqueaderos, valor_propiedad} = req.body;

    let sql = `update Cpropiedades set 
            imagen = '${imagen}', 
            areatotal = '${areatotal}', 
            ncuartos = '${ncuartos}', 
            nbanos = '${nbanos}', 
            nparqueaderos = '${nparqueaderos}', 
            valor_propiedad = '${valor_propiedad}' 
            where id_propiedad = '${id}'`

            conexion.query(sql, (err, rows, fields)=>{
                if(err){
                    throw err;
                }else{
                    res.json({status: 'Inmueble Editado!'});
                }
            });
});

module.exports = routes;

/* Created By: Juan Felipe Rodríguez Rendón */