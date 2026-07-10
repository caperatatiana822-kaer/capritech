const { feedingCreate } = require('../services/feedingService');
const Response = require("../functions/response");

const getAllFeeding = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);

    res.status(200);
    res.json({ mensaje: "Obteniendo todas las alimentaciones" });
};

const getFeedingById = (req, res) => {
    const { id } = req.params;

    res.json({
        mensaje: `Obteniendo la alimentación con ID: ${id}`
    });
};

const createFeeding = async (req, res) => {
    const { fecha, hora, responsable, alimento, cantidad} = req.body;

    var errores = [];

    if (!fecha || !hora || !responsable || !alimento || !cantidad) {
        errores.push({
            mensaje: "Todos los campos son obligatorios"
        });
    }

    if (fecha == "") {
        errores.push({
            mensaje: "El campo fecha no puede estar vacio"
        });
    }

    if (hora == "") {
        errores.push({
            mensaje: "El campo hora no puede estar vacio"
        });
    }

    if (responsable == "") {
        errores.push({
            mensaje: "El campo responsable no puede estar vacio"
        });
    }

    if (alimento == "") {
        errores.push({
            mensaje: "El campo alimento no puede estar vacio"
        });
    }

    if (cantidad == "") {
        errores.push({
            mensaje: "El campo cantidad no puede estar vacio"
        });
    }

    if (errores.length > 0) {
        var response = new Response("Error en la creación de la alimentación", null,  errores );
        res.status(400);
        res.json(response.json);
        return;
    }

    data = {fecha, hora, responsable, alimento, cantidad};
    const feeding = await feedingCreate(data);
    var response = new Response( true, "Alimentación creada exitosamente", feeding );
    res.status(201);
    res.json(response.json);
};

const updateFeeding = (req, res) => {
    const { id } = req.params;

    res.json({
        mensaje: `Actualizando la alimentación con ID: ${id}`
    });
};

const deleteFeeding = (req, res) => {
    const { id } = req.params;

    res.json({
        mensaje: `Eliminando la alimentación con ID: ${id}`
    });
};

module.exports = {
    getAllFeeding,
    getFeedingById,
    createFeeding,
    updateFeeding,
    deleteFeeding
};