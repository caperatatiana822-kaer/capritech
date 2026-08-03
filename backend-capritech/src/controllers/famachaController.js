const {
    famachaCreate,
    getallfamacha: getAllFamachaService,
    getIdfamacha,
    updatefamacha,
    deleteIdfamacha
} = require('../services/famachaService');
const Response = require("../functions/response");

const getAllFamacha = async (req, res) => {
    try {
        const famachaList = await getAllFamachaService();
        var response = new Response(true, "Evaluaciones Famacha consultadas exitosamente", famachaList, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error al consultar todas las evaluaciones Famacha", null, [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
};

const getFamachaById = async (req, res) => {
    try {
    const { id } = req.params;
    var errores = [];
    if (!id || String(id).trim() === "") {
        errores.push({ mensaje: "El ID es obligatorio para obtener una evaluación Famacha" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al obtener la evaluación Famacha", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const famacha = await getIdfamacha(id);
    var response = new Response(true, "Evaluación Famacha consultada exitosamente", famacha, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la consulta de la evaluación Famacha", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const createFamacha = async (req, res) => {
    try {
    const { chapeta, resultado, observaciones } = req.body;
    const errores = [];

    if (!chapeta || String(chapeta).trim() === "") {
        errores.push({ mensaje: "La chapeta es obligatoria" });
    }

    if (!resultado || String(resultado).trim() === "") {
        errores.push({ mensaje: "El resultado es obligatorio" });
    }

    if (!observaciones || String(observaciones).trim() === "") {
        errores.push({ mensaje: "Las observaciones son obligatorias" });
    }

    if (errores.length > 0) {
        const response = new Response(false, "Faltan datos para crear la evaluación Famacha", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    data = {chapeta, resultado, observaciones};
    const famacha = await famachaCreate(data);
    var response = new Response(true, "Evaluación Famacha creada exitosamente", famacha, null);
    res.status(201);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la creación de la evaluación Famacha", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const updateFamacha = async (req, res) => {
    try {
    const { id } = req.params;
    const data = req.body;
    var errores = [];
    if (!id || String(id).trim() === "") {
        errores.push({ mensaje: "El ID es obligatorio para actualizar una evaluación Famacha" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al actualizar la evaluación Famacha", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const famacha = await updatefamacha(id, data);
    var response = new Response(true, "Evaluación Famacha actualizada exitosamente", famacha, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la actualización de la evaluación Famacha", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const deleteFamacha = async (req, res) => {
    try {
    const { id } = req.params;
    var errores = [];
    if (!id || String(id).trim() === "") {
        errores.push({ mensaje: "El ID es obligatorio para eliminar una evaluación Famacha" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al eliminar la evaluación Famacha", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const famacha = await deleteIdfamacha(id);
    var response = new Response(true, "Evaluación Famacha eliminada exitosamente", famacha, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error al eliminar la evaluación Famacha", null, [error.message]);
    res.status(500);
    res.json(response.json);
    }
};

module.exports = {
    getAllFamacha,
    getFamachaById,
    createFamacha,
    updateFamacha,
    deleteFamacha
};