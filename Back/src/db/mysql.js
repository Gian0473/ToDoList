const mysql = require('mysql');
const config = require('../config');

//conexion con la base de datos 
const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}
var conexion;

function conectarBD() {
    conexion = mysql.createConnection(dbConfig);
    conexion.connect((error) => {
        if (error) {
            console.log('Error en la conexiion con la base de datos ' + error);
            setTimeout(conectarBD, 200)
        } else {
            console.log('conecion exitosa con la base de datos');
        }
    });
    conexion.on('ERROR', (error) => {
        console.error('Se ha perdido la conexion a MYSQL: ' + error);
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            conectarBD();
        } else {
            throw error; //Algo esta mal en la bd
        }
    });
}
//iniciamos la conexion haciendo un llamado a la funcion
conectarBD();

//obtener los datos de la tabla 
function obtenerDatos(tabla) {
    //vamos a creer una promesa
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return !error ? resolve(result) : reject(console.log('Algo salio mal al realizar la consulta'))
        });
    });
};

//traer un registro 
function obtenerRegistro(tabla, id) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id_todolist = ${id}`, (error, result) => {
            return !error ? resolve(result) : reject(console.log('Algo salio mal al realizar la consulta'))
        });
    });
}

//agregar registro 
function agregarRegistro(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} set ?`, data, (error, result) => {
            return !error ? resolve(result) : reject(console.log(`Algo salio mal al realizar la consulta: ${error}`));
        });
    });
}
function actualizarRegistro(tabla, id, datosActualizados) {
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} set ? WHERE id_todolist = ?`, [datosActualizados, id], (error, result) => {
            return !error ? resolve(result) : reject(console.log('Algo salio mal al realizar la consulta'))
        });
    });
}

//eliminar registro 
function eliminarRegistro(tabla, id) {
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id_todolist= ${id}`, (error, result) => {
            return !error ? resolve(result) : reject(console.log(`Algo salio mal al realizar la consulta: ${error}`));
        });
    });
}

module.exports = {
    obtenerDatos,
    obtenerRegistro,
    agregarRegistro,
    actualizarRegistro,
    eliminarRegistro,
}