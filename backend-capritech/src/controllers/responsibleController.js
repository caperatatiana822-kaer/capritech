const {
    responsibleCreate,
    getAllResponsible: getAllResponsibleService,
    getIdResponsible,
    updateResponsible: updateResponsibleService,
    deleteIdResponsible
} = require('../services/responsibleService');
const Response = require("../functions/response");

const getAllResponsibles = async (req, res) => {
    try {
        const responsibleList = await getAllResponsibleService();
        var response = new Response(true, "Responsables consultados exitosamente", responsibleList, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error al consultar todos los responsables", null, [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
}

const getResponsibleById = async (req, res) => {
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
        var response = new Response(false, "Error al consultar el responsable", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const responsible = await getIdResponsible(id);
    var response = new Response(true, "Responsable consultado exitosamente", responsible, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la consulta del responsable", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const createResponsible = async(req, res) => {
    try {
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
        var response = new Response(false, "Error en la creación del responsable", null, errores);
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

    var response = new Response(true, "Responsable creado exitosamente", responsible, null);
    res.status(201);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la creación de responsable", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const updateResponsible = async (req, res) => {
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
        var response = new Response(false, "Error al actualizar el responsable", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const responsible = await updateResponsibleService(id, data);
    var response = new Response(true, "Responsable actualizado exitosamente", responsible, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la actualización de responsable", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const deleteResponsible = async (req, res) => {
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
        var response = new Response(false, "Error al eliminar el responsable", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const responsible = await deleteIdResponsible(id);
    var response = new Response(true, "Responsable eliminado exitosamente", responsible, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error al eliminar responsable", null, [error.message]);
    res.status(500);
    res.json(response.json);
    }
}

module.exports = {
    getAllResponsibles,
    getResponsibleById,
    createResponsible,
    updateResponsible,
    deleteResponsible
};