const {responsibleCreate} = require('../services/responsibleService');
const Response = require("../functions/response");

const getAllResponsibles = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({mensaje: "Obteniendo todos los responsables"});
}

const getResponsibleById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo el responsable con ID: ${id}`});
}

const createResponsible = async(req, res) => {
    const {
        nombre,
        documento,
        tipoderesponsables,
        actividad,
        frecuencia,
        indicareldiadelasemana,
        generarreportederesposables
    } = req.body;

    var errores = [];

    
    if(
        !nombre ||
        !documento ||
        !tipoderesponsables ||
        !actividad ||
        !frecuencia ||
        !indicareldiadelasemana ||
        !generarreportederesposables
    ){
        errores.push({mensaje: "Todos los campos son obligatorios"});
    }

    if(nombre == ""){
        errores.push({mensaje: "El campo nombre no puede estar vacio"});
    }

    if(documento == ""){
        errores.push({mensaje: "El campo documento no puede estar vacio"});
    }

    if(tipoderesponsables == ""){
        errores.push({mensaje: "El campo tipoderesponsables no puede estar vacio"});
    }

    if(actividad == ""){
        errores.push({mensaje: "El campo actividad no puede estar vacio"});
    }

    if(frecuencia == ""){
        errores.push({mensaje: "El campo frecuencia no puede estar vacio"});
    }

    if(indicareldiadelasemana == ""){
        errores.push({mensaje: "El campo indicareldiadelasemana no puede estar vacio"});
    }

    if(generarreportederesposables == ""){
        errores.push({mensaje: "El campo generarreportederesposables no puede estar vacio"});
    }

    if(errores.length > 0){
        var response = new Response("Error en la creación del responsable", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }

    data = {
        nombre,
        documento,
        tipoderesponsables,
        actividad,
        frecuencia,
        indicareldiadelasemana,
        generarreportederesposables
    };

    const responsible = await responsibleCreate(data);

    var response = new Response(true, "Responsable creado exitosamente", responsible);
    res.status(201);
    res.json(response.json);
}

const updateResponsible = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando el responsable con ID: ${id}`});
}

const deleteResponsible = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando el responsable con ID: ${id}`});
}

module.exports = {
    getAllResponsibles,
    getResponsibleById,
    createResponsible,
    updateResponsible,
    deleteResponsible
};