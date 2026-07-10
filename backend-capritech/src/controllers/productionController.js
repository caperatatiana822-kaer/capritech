const {productionCreate, productionGetById, productionUpdate, productionDelete} = require('../services/productionService');
const Response = require("../functions/response");

const getAllProduction = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({mensaje: "Obteniendo todas las producciones"});
}

const getProductionById = async (req, res) => {
    try {
    const {id} = req.params;
    var errores=[];
    if(!id){
        errores.push({message: "el id es obligatorio"})
    }
    if(id == ""){
        errores.push({mensaje: "El ID no puede estar vacío"});
    }
    if(errores.length > 0){
        var response = new Response("Error al consultar la produccion", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const production = await productionGetById(id);
    var response = new Response(true, "produccion consultada exitosamente", production);
    res.status(200);
    res.json(response.json);
    res.json({mensaje: `Obteniendo la producción con ID: ${id}`});
} catch (error) {
    throw error;
    }
};

const createProduction = async(req, res) => {
    try {
    const {fecha, descripcionElemento, unidadMedida, cantidad, valorUnitario, valorTotal, fechaVencimiento, centroCosto, nombreTraslada, nombreRecibe, instructorTecnico, observaciones} = req.body;
    var errores = [];
    if(!fecha || !descripcionElemento || !unidadMedida || !cantidad || !valorUnitario || !valorTotal || !fechaVencimiento || !centroCosto || !nombreTraslada || !nombreRecibe || !instructorTecnico || !observaciones)
    {
        errores.push({mensaje: "Todos los campos son obligatorios"});
    }
    if(fecha == ""){
        errores.push({mensaje: "El campo fecha no puede estar vacio"});
    }
    if(descripcionElemento == ""){
        errores.push({mensaje: "El campo descripcion no puede estar vacio"});
    }
    if(unidadMedida == ""){
        errores.push({mensaje: "El campo unidadMedida no puede estar vacio"});
    }
    if(cantidad == ""){
        errores.push({mensaje: "El campo cantidad no puede estar vacio"});
    }
    if(valorUnitario == ""){
        errores.push({mensaje: "El campo valorUnitario no puede estar vacio"});
    }
    if(valorTotal == ""){
        errores.push({mensaje: "El campo valorTotal no puede estar vacio"});
    }
    if(fechaVencimiento == ""){
        errores.push({mensaje: "El campo fechaVencimiento no puede estar vacio"});
    }
    if(nombreTraslada == ""){
        errores.push({mensaje: "El campo nombreTraslada no puede estar vacio"});
    }
    if(nombreRecibe == ""){
        errores.push({mensaje: "El campo nombreRecibe no puede estar vacio"});
    }
    if(instructorTecnico == ""){
        errores.push({mensaje: "El campo instructorTecnico no puede estar vacio"});
    }
    if(observaciones == ""){
        errores.push({mensaje: "El campo observaciones no puede estar vacio"});
    }
    if(errores.length > 0){
        var response = new Response("Error en la creación de la producción", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }

    data = {fecha, descripcionElemento, unidadMedida, cantidad, valorUnitario, valorTotal, fechaVencimiento, centroCosto, nombreTraslada, nombreRecibe, instructorTecnico, observaciones};
    const production = await productionCreate(data);
    var response = new Response(true, "Producción creada exitosamente", production);
    res.status(201);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response("error en la creacion de produccion", [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const updateProduction = (req, res) => {
    try {
    const {id} = req.params;
    var errores = [];
    if(!id){
        errores.push({mensaje: "El ID es obligatorio"});
    }
    if(id == ""){
        errores.push({mensaje: "El ID no puede estar vacío"});
    }
    if(errores.length > 0){
        var response = new Response("Error al actualizar la produccion", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const production = productionUpdate(id);
    var response = new Response(true, "produccion actualizada exitosamente", production);
    res.status(200);
    res.json(response.json);
    res.json({mensaje: `Actualizando la producción con ID: ${id}`});
} catch (error) {
    console.log(error);
    var response = new Response("error en la actualizacion de produccion", [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const deleteProduction = async(req, res) => {
    try {
    const {id} = req.params;
    var errores = [];
    if(!id){
        errores.push({mensaje: "El ID es obligatorio"});
    }
    if(id == ""){
        errores.push({mensaje: "El ID no puede estar vacío"});
    }
    if(errores.length > 0){
        var response = new Response("Error al eliminar la produccion", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const production = await productionDelete(id);
    var response = new Response(true, "Semoviente eliminado exitosamente", production);
    res.status(200);
    res.json(response.json);
    res.json({mensaje: `Eliminando la producción con ID: ${id}`});
} catch (error){
    throw error;
    }
};

module.exports = {
    getAllProduction,
    getProductionById,
    createProduction,
    updateProduction,
    deleteProduction
};