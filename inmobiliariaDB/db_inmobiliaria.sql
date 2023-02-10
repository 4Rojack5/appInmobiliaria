create database if not exists db_inmobiliaria;

use db_inmobiliaria;

create table Cpropiedades(
	id_propiedad int not null auto_increment primary key,
    imagen varchar(200),
    areatotal varchar(200),
    ncuartos int(50),
    nbanos int (50),
    nparqueaderos int(50),
    valor_propiedad int(100)
);

insert into Cpropiedades (imagen, areatotal, ncuartos, nbaños, nparqueaderos, valor_propiedad) values ('apartamento1.jpg', '70m', '4', '2', '1', '200000000');