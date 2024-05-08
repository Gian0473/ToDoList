const db = require('../../db/mysql');

const TABLA = 'todo';

function obtenerRegistros() {
    return db.obtenerDatos(TABLA);
};

function obtenerRegTodo(id) {
    return db.obtenerRegistro(TABLA, id);
}

function agregarRegTodo(data) {
    return db.agregarRegistro(TABLA, data);
}

async function actualizarRegTodo(id, datosTarea) {
    return db.actualizarRegistro(TABLA, id, datosTarea);
}

function eliminarRegTodo(id) {
    return db.eliminarRegistro(TABLA, id);
}

module.exports = {
    obtenerRegistros,
    obtenerRegTodo,
    agregarRegTodo,
    actualizarRegTodo,
    eliminarRegTodo,
};