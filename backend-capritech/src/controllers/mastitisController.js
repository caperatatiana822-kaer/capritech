const {mastitisCreate} = require('../services/mastitisService');
const Response = require("../functions/response");

const getAllMastitis = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({mensaje: "Obteniendo todos los casos de mastitis"});
}

const getMastitisById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo el caso de mastitis con ID: ${id}`});
}

const createMastitis = async(req, res) => {
    const {chapeta, nombreAnimal, fechaDiagnostico, resultadoDeLaPrueba} = req.body;

    var errores = [];

    if(!chapeta || !nombreAnimal || !fechaDiagnostico || !resultadoDeLaPrueba){
        errores.push({mensaje: "Todos los campos son obligatorios"});
    }
    if(chapeta == ""){
        errores.push({mensaje: "El campo chapeta no puede estar vacio"});
    }
    if(nombreAnimal == ""){
        errores.push({mensaje: "El campo nombreAnimal no puede estar vacio"});
    }
    if(fechaDiagnostico == ""){
        errores.push({mensaje: "El campo fechaDiagnostico no puede estar vacio"});
    }
    if(resultadoDeLaPrueba == ""){
        errores.push({mensaje: "El campo resultadoDeLaPrueba no puede estar vacio"});
    }

    if(errores.length > 0){
        var response = new Response("Error en la creación del caso de mastitis", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }

    data = {chapeta, nombreAnimal, fechaDiagnostico, resultadoDeLaPrueba };
    const mastitis = await mastitisCreate(data);
    var response = new Response(true, "Caso de mastitis creado exitosamente", mastitis);
    res.status(201);
    res.json(response.json);
}

const updateMastitis = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando el caso de mastitis con ID: ${id}`});
}

const deleteMastitis = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando el caso de mastitis con ID: ${id}`});
}

module.exports = {
    getAllMastitis,
    getMastitisById,
    createMastitis,
    updateMastitis,
    deleteMastitis
};