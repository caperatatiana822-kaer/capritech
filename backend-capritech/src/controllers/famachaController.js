const {famachaCreate} = require('../services/famachaService');
const Response = require("../functions/response");

const getAllFamacha = (req, res) => {
    const response = new Response("Obteniendo todas las evaluaciones Famacha", { total: 10 }, false);
    return res.json(response.json);
};

const getFamachaById = (req, res) => {
    const { id } = req.params;

    if (!id || String(id).trim() === "") {
        const response = new Response("Error al obtener la evaluación Famacha", null, "El ID es obligatorio para obtener una evaluación Famacha");
        return res.status(400).json(response.json);
    }

    const response = new Response(`Obteniendo la evaluación Famacha con ID: ${id}`, { id }, false);
    return res.json(response.json);
};

const createFamacha = async (req, res) => {
    const { chapeta, resultado, observaciones } = req.body;
    const errores = [];

    if (!chapeta || String(chapeta).trim() === "") {
        errores.push("La chapeta es obligatoria");
    }

    if (!resultado || String(resultado).trim() === "") {
        errores.push("El resultado es obligatorio");
    }

    if (!observaciones || String(observaciones).trim() === "") {
        errores.push("Las observaciones son obligatorias");
    }

    if (errores.length > 0) {
        const response = new Response("Faltan datos para crear la evaluación Famacha", null, errores.join(", "));
        return res.status(400).json(response.json);
    }
    data = {chapeta, resultado, observaciones};
    const famacha = await famachaCreate(data);
        var response = new Response(true, "famacha creada exitosamente", famacha);
    res.status(201);
    res.json(response.json);
};

const updateFamacha = (req, res) => {
    const { id } = req.params;
    const { chapeta, resultado, observaciones } = req.body;

    if (!id || String(id).trim() === "") {
        const response = new Response("Error al actualizar la evaluación Famacha", null, "El ID es obligatorio para actualizar una evaluación Famacha");
        return res.status(400).json(response.json);
    }
    const response = new Response(`Actualizando la evaluación Famacha con ID: ${id}`, { chapeta, resultado, observaciones }, false);
    return res.json(response.json);
};

const deleteFamacha = (req, res) => {
    const { id } = req.params;

    if (!id || String(id).trim() === "") {
        const response = new Response("Error al eliminar la evaluación Famacha", null, "El ID es obligatorio para eliminar una evaluación Famacha");
        return res.status(400).json(response.json);
    }

    const response = new Response(`Eliminando la evaluación Famacha con ID: ${id}`, { id }, false);
    return res.json(response.json);
};

module.exports = {
    getAllFamacha,
    getFamachaById,
    createFamacha,
    updateFamacha,
    deleteFamacha
};