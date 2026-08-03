const {
    mastitisCreate,
    getAllMastitis: getAllMastitisService,
    getIdMastitis,
    updateMastitis: updateMastitisService,
    deleteIdMastitis
} = require('../services/mastitisService');
const Response = require("../functions/response");

const getAllMastitis = async (req, res) => {
    try {
        const mastitisList = await getAllMastitisService();
        var response = new Response(true, "Casos de mastitis consultados exitosamente", mastitisList, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error al consultar todos los casos de mastitis", null, [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
}

const getMastitisById = async (req, res) => {
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
        var response = new Response(false, "Error al consultar el caso de mastitis", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const mastitis = await getIdMastitis(id);
    var response = new Response(true, "Caso de mastitis consultado exitosamente", mastitis, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la consulta del caso de mastitis", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const createMastitis = async(req, res) => {
    try {
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
        var response = new Response(false, "Error en la creación del caso de mastitis", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }

    data = {chapeta, nombreAnimal, fechaDiagnostico, resultadoDeLaPrueba };
    const mastitis = await mastitisCreate(data);
    var response = new Response(true, "Caso de mastitis creado exitosamente", mastitis, null);
    res.status(201);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la creación del caso de mastitis", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const updateMastitis = async (req, res) => {
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
        var response = new Response(false, "Error al actualizar el caso de mastitis", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const mastitis = await updateMastitisService(id, data);
    var response = new Response(true, "Caso de mastitis actualizado exitosamente", mastitis, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la actualización del caso de mastitis", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
}

const deleteMastitis = async (req, res) => {
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
        var response = new Response(false, "Error al eliminar el caso de mastitis", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const mastitis = await deleteIdMastitis(id);
    var response = new Response(true, "Caso de mastitis eliminado exitosamente", mastitis, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error al eliminar el caso de mastitis", null, [error.message]);
    res.status(500);
    res.json(response.json);
    }
}

module.exports = {
    getAllMastitis,
    getMastitisById,
    createMastitis,
    updateMastitis,
    deleteMastitis
};