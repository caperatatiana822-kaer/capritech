const {
    weigthCreate,
    getAllWeigthings,
    getIdWeigthing,
    updateWeigthing,
    deleteIdWeigthing
} = require('../services/weightService');
const Response = require("../functions/response");

const getAllWeigth = async (req, res) => {
    try {
        const weigthList = await getAllWeigthings();
        var response = new Response(true, "Pesajes consultados exitosamente", weigthList, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error al consultar todos los pesajes", null, [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
}

const getWeigthById = async (req, res) => {
    try {
    const {id} = req.params;
    var errores = [];
    if (!id) {
        errores.push({ mensaje: "El ID es obligatorio" });
    }
    if (id == "") {
        errores.push({ mensaje: "El ID no puede estar vacío" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al consultar el pesaje", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const weighing = await getIdWeigthing(id);
    var response = new Response(true, "Pesaje consultado exitosamente", weighing, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la consulta del pesaje", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const createWeigth = async(req, res) => {
    try {
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
        var response = new Response(false, "Error en la creación del pesaje", null, errores);
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

    var response = new Response(true, "Pesaje creado exitosamente", weighing, null);
    res.status(201);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la creación de pesaje", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const updateWeigth = async (req, res) => {
    try {
    const {id} = req.params;
    const data = req.body;
    var errores = [];
    if (!id) {
        errores.push({ mensaje: "El ID es obligatorio" });
    }
    if (id == "") {
        errores.push({ mensaje: "El ID no puede estar vacío" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al actualizar el pesaje", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const weighing = await updateWeigthing(id, data);
    var response = new Response(true, "Pesaje actualizado exitosamente", weighing, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la actualización de pesaje", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const deleteWeigth = async (req, res) => {
    try {
    const {id} = req.params;
    var errores = [];
    if (!id) {
        errores.push({ mensaje: "El ID es obligatorio" });
    }
    if (id == "") {
        errores.push({ mensaje: "El ID no puede estar vacío" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al eliminar el pesaje", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const weighing = await deleteIdWeigthing(id);
    var response = new Response(true, "Pesaje eliminado exitosamente", weighing, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error al eliminar pesaje", null, [error.message]);
    res.status(500);
    res.json(response.json);
    }
}

module.exports = {
    getAllWeigth,
    getWeigthById,
    createWeigth,
    updateWeigth,
    deleteWeigth
};