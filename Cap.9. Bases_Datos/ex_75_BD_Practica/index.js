/*Aquí va el código JavaScript para comunicarse con la base de datos.

Instalar correctamente las dependencias express y mysql.
npm init -y
npm install express
npm install mysql

Iniciar el servidor:
node index.js

Conceptualización.

npm init -y: 
Esto creó el archivo package.json con los valores predeterminados.

npm install express: 
Instala Express, que es un framework para Node.js utilizado para crear aplicaciones web.

npm install mysql: 
Instala el paquete de MySQL para interactuar con bases de datos MySQL desde tu aplicación Node.js

En MySQL Ejecutar este script:
CREATE DATABASE base_001;
Use base_001;
CREATE TABLE clientes (
    idCliente INT PRIMARY KEY,
    nombre VARCHAR(30),
    genero INT,
    telefono VARCHAR(10),
    direccion VARCHAR(100)
    );
*/

//Configurar con expressJS el servidor de la app

const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000);

//Llamar al componente de MySql

var mysql = require('mysql');

//Establecer los parámetros de la conexión
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'base_001'
});

//Establecer conexión a la base de datos
conexion.connect();

//Agregar nuevo registro a la tabla
conexion.query('insert into clientes values (1,"Daniel Martinez",1,"2724410", "Calle 34 # 31 - 20")', function(error,resultado){
    if(error) throw error;
    console.log(resultado);
});

//Realizar consulta a la tabla
conexion.query('select * from clientes', function(error,filas){
    if(error) throw error;
    console.log(filas);
});

//Actualizar o modificar registros en la tabla
conexion.query('update clientes set direccion = "No tiene" where idCliente = 1', function(error,resultado){
    if(error) throw error;
    console.log(resultado);
});

//Realizar consulta a la tabla
conexion.query('select * from clientes', function(error,filas){
    if(error) throw error;
    console.log(filas);
});

//Eliminar un registro en la tabla
conexion.query('delete from clientes where idCliente = 1', function(error,resultado){
    if(error) throw error;
    console.log(resultado);
});

//Realizar consulta a la tabla
conexion.query('select * from clientes', function(error,filas){
    if(error) throw error;
    console.log(filas);
});

//Finalizar conexión a la base de datos
conexion.end();

/* Resultados:

PS C:\Users\dhany\Desktop\ex_75_BD_Practica> npm init -y
Wrote to C:\Users\dhany\Desktop\ex_75_BD_Practica\package.json:

{
  "name": "ex_75_bd_practica",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
}

PS C:\Users\dhany\Desktop\ex_75_BD_Practica>

                                             npm install express
added 69 packages, and audited 70 packages in 6s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\dhany\Desktop\ex_75_BD_Practica> npm install mysql  
added 12 packages, and audited 82 packages in 3s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\dhany\Desktop\ex_75_BD_Practica> node index.js
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
[
  RowDataPacket {
    idCliente: 1,
    nombre: 'Daniel Martinez',
    genero: 1,
    telefono: '2724410',
    direccion: 'Calle 34 # 31 - 20'
  }
]
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '(Rows matched: 1  Changed: 1  Warnings: 0',
  protocol41: true,
  changedRows: 1
}
[
  RowDataPacket {
    idCliente: 1,
    nombre: 'Daniel Martinez',
    genero: 1,
    telefono: '2724410',
    direccion: 'No tiene'
  }
]
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
[]
*/

//Iniciar el proyecto según la ruta:
//cd Bases_Datos
//cd ex_75_BD_Practica
//node index.js 
//Ctrl+C Para finalizar