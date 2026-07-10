const { mortalityCreate } = require('../services/mortalityService');
const Response = require("../functions/response");

const getAllMortality = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({mensaje: "Obteniendo todas las mortalidades"});
}

const getMortalityById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo la mortalidad con ID: ${id}`});
}

const createMortality = async(req, res) => {
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
        var response = new Response("Error en la creación de la mortalidad", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    data = { fecha, chapeta, nombre, sexo, estadodeproduccion, diagnosticopresuntivo, generarreportedemortalidad };
    const mortality = await mortalityCreate(data);
    var response = new Response(true, "Mortalidad creada exitosamente", mortality );
    res.status(201);
    res.json(response.json);
}

const updateMortality = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando la mortalidad con ID: ${id}`});
}

const deleteMortality = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando la mortalidad con ID: ${id}`});
}

module.exports = {
    getAllMortality,
    getMortalityById,
    createMortality,
    updateMortality,
    deleteMortality
};