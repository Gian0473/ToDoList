const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get("/", obtenerRegistros);
router.get('/consultar/:id', obtenerRegTodo);
router.post('/agregar', agregarRegTodo);
router.delete('/eliminar/:id', eliminarRegTodo);
router.put('/actualizar/:id', actualizarRegTodo);

async function obtenerRegistros(req, res) {
    try {
        const lista = await controlador.obtenerRegistros();
        respuesta.success(req, res, lista, 200);
    }
    catch (error) {
        respuesta.error(req, res, 'Error interno del servidor' + error, 500);
    }
};

async function obtenerRegTodo(req, res) {
    try {
        const lista = await controlador.obtenerRegTodo(req.params.id);
        respuesta.success(req, res, lista, 200);
    }
    catch (error) {
        respuesta.error(req, res, 'Error interno del servidor' + error, 500);
    }
};

async function agregarRegTodo(req, res) {
    try {
        const todo = await controlador.agregarRegTodo(req.body);
        respuesta.success(req, res, 'Registro agregado con exito', 201);
    }
    catch (error) {
        respuesta.error(req, res, 'Error interno del servidor' + error, 500);
    }
};

async function eliminarRegTodo(req, res) {
    try {
        const todo = await controlador.eliminarRegTodo(req.params.id);
        respuesta.success(req, res, 'Registro eliminado', 200);
    }
    catch (error) {
        respuesta.error(req, res, 'Error interno del servidor: ' + error, 500);
    }
};
async function actualizarRegTodo(req, res) {
    const id = req.params.id;
    const existe = await controlador.obtenerRegTodo(id);

    if (!existe) {
        respuesta.success(req, res, 'Registro no existe', 404);
    } else {
        try {
            const todo = await controlador.actualizarRegTodo(id, req.body);
            respuesta.success(req, res, 'Registro actualizado', 200);
        } catch (error) {
            respuesta.error(req, res, 'Error interno del servidor: ' + (error.message || error.toString()), 500);
        }
    }
};


module.exports = router; 