const {
    mortalityCreate,
    getAllMortality: getAllMortalityService,
    getIdMortality,
    updateMortality: updateMortalityService,
    deleteIdMortality
} = require('../services/mortalityService');
const Response = require("../functions/response");

const getAllMortality = async (req, res) => {
    try {
        const mortalityList = await getAllMortalityService();
        var response = new Response(true, "Mortalidades consultadas exitosamente", mortalityList, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error al consultar todas las mortalidades", null, [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
}

const getMortalityById = async (req, res) => {
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
        var response = new Response(false, "Error al consultar la mortalidad", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const mortality = await getIdMortality(id);
    var response = new Response(true, "Mortalidad consultada exitosamente", mortality, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la consulta de la mortalidad", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const createMortality = async(req, res) => {
    try {
    const {fecha, chapeta, nombre, sexo, estadodeproduccion, diagnosticopresuntivo, generarreportedemortalidad} = req.body;
    var errores = [];
    if(
        !fecha ||
        !chapeta ||
        !nombre ||
        !sexo ||
        !estadodeproduccion ||
        !diagnosticopresuntivo ||
        !generarreportedemortalidad
    ){
        errores.push({mensaje: "Todos los campos son obligatorios"});
    }

    if(fecha == ""){
        errores.push({mensaje: "El campo fecha no puede estar vacio"});
    }

    if(chapeta == ""){
        errores.push({mensaje: "El campo chapeta no puede estar vacio"});
    }

    if(nombre == ""){
        errores.push({mensaje: "El campo nombre no puede estar vacio"});
    }

    if(sexo == ""){
        errores.push({mensaje: "El campo sexo no puede estar vacio"});
    }

    if(estadodeproduccion == ""){
        errores.push({mensaje: "El campo estadodeproduccion no puede estar vacio"});
    }

    if(diagnosticopresuntivo == ""){
        errores.push({mensaje: "El campo diagnosticopresuntivo no puede estar vacio"});
    }

    if(generarreportedemortalidad == ""){
        errores.push({mensaje: "El campo generarreportedemortalidad no puede estar vacio"});
    }

    if(errores.length > 0){
        var response = new Response(false, "Error en la creación de la mortalidad", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    data = { fecha, chapeta, nombre, sexo, estadodeproduccion, diagnosticopresuntivo, generarreportedemortalidad };
    const mortality = await mortalityCreate(data);
    var response = new Response(true, "Mortalidad creada exitosamente", mortality, null );
    res.status(201);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la creación de mortalidad", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const updateMortality = async (req, res) => {
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
        var response = new Response(false, "Error al actualizar la mortalidad", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const mortality = await updateMortalityService(id, data);
    var response = new Response(true, "Mortalidad actualizada exitosamente", mortality, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la actualización de mortalidad", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const deleteMortality = async (req, res) => {
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
        var response = new Response(false, "Error al eliminar la mortalidad", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const mortality = await deleteIdMortality(id);
    var response = new Response(true, "Mortalidad eliminada exitosamente", mortality, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error al eliminar mortalidad", null, [error.message]);
    res.status(500);
    res.json(response.json);
    }
}

module.exports = {
    getAllMortality,
    getMortalityById,
    createMortality,
    updateMortality,
    deleteMortality
};