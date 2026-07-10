const {weigthCreate} = require('../services/weightService');
const Response = require("../functions/response");

const getAllWeigth = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({mensaje: "Obteniendo todos los pesajes"});
}

const getWeigthById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo el pesaje con ID: ${id}`});
}

const createWeigth = async(req, res) => {
    const {
        fechaPesaje,
        chapeta,
        nombre,
        peso,
        etapaProduccion
    } = req.body;

    var errores = [];

    if(!fechaPesaje || !chapeta || !nombre || !peso || !etapaProduccion){
        errores.push({mensaje: "Todos los campos son obligatorios"});
    }

    if(fechaPesaje == ""){
        errores.push({mensaje: "El campo fechaPesaje no puede estar vacio"});
    }

    if(chapeta == ""){
        errores.push({mensaje: "El campo chapeta no puede estar vacio"});
    }

    if(nombre == ""){
        errores.push({mensaje: "El campo nombre no puede estar vacio"});
    }

    if(peso == ""){
        errores.push({mensaje: "El campo peso no puede estar vacio"});
    }

    if(etapaProduccion == ""){
        errores.push({mensaje: "El campo etapaProduccion no puede estar vacio"});
    }

    if(errores.length > 0){
        var response = new Response("Error en la creación del pesaje", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }

    data = {
        fechaPesaje,
        chapeta,
        nombre,
        peso,
        etapaProduccion
    };

    const weighing = await weigthCreate(data);

    var response = new Response(true, "Pesaje creado exitosamente", weighing);
    res.status(201);
    res.json(response.json);
}

const updateWeigth = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando el pesaje con ID: ${id}`});
}

const deleteWeigth = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando el pesaje con ID: ${id}`});
}

module.exports = {
    getAllWeigth,
    getWeigthById,
    createWeigth,
    updateWeigth,
    deleteWeigth
};