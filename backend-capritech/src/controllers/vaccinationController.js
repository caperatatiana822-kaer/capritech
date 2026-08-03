const {
    createvaccination,
    getAllvaccinations: getAllVaccinationService,
    getIdvaccinations,
    updatevaccinations,
    deleteIdvaccinations
} = require("../services/vaccinationService");
const Response = require("../functions/response");

const getAllVaccination = async (req, res) => {
    try {
        const vaccinationList = await getAllVaccinationService();
        var response = new Response(true, "Vacunaciones consultadas exitosamente", vaccinationList, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error al consultar todas las vacunaciones", null, [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
};

const getVaccinationById = async (req, res) => {
    try {
    const { id } = req.params;
    var errores = [];
    if (!id) {
        errores.push({ mensaje: "El ID es obligatorio" });
    }
    if (id == "") {
        errores.push({ mensaje: "El ID no puede estar vacío" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al consultar la vacunación", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const vaccination = await getIdvaccinations(id);
    var response = new Response(true, "Vacunación consultada exitosamente", vaccination, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la consulta de la vacunación", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const createVaccination = async (req, res) => {
    try {
    const {
        chapeta,
        nombre,
        fechaVacunacion,
        horaVacunacion,
        nombreVacuna,
        responsable
    } = req.body;

    let errores = [];

    if (
        !chapeta ||
        !nombre ||
        !fechaVacunacion ||
        !horaVacunacion ||
        !nombreVacuna ||
        !responsable
    ) {
        errores.push({
            mensaje: "Todos los campos son obligatorios"
        });
    }

    if (chapeta == "") {
        errores.push({ mensaje: "El campo chapeta no puede estar vacío" });
    }

    if (nombre == "") {
        errores.push({ mensaje: "El campo nombre no puede estar vacío" });
    }

    if (fechaVacunacion == "") {
        errores.push({ mensaje: "El campo fechaVacunacion no puede estar vacío" });
    }

    if (horaVacunacion == "") {
        errores.push({ mensaje: "El campo horaVacunacion no puede estar vacío" });
    }

    if (nombreVacuna == "") {
        errores.push({ mensaje: "El campo nombreVacuna no puede estar vacío" });
    }

    if (responsable == "") {
        errores.push({ mensaje: "El campo responsable no puede estar vacío" });
    }

    if (errores.length > 0) {
        const response = new Response(false, "Error en la creación de la vacunación", null, errores);

        res.status(400);
        res.json(response.json);
        return;
    }

    const data = {
        chapeta,
        nombre,
        fechaVacunacion,
        horaVacunacion,
        nombreVacuna,
        responsable
    };

    const vaccination = await createvaccination(data);

    const response = new Response(true, "Vacunación creada exitosamente", vaccination, null);

    res.status(201);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la creación de vacunación", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const updateVaccination = async (req, res) => {
    try {
    const { id } = req.params;
    const data = req.body;
    var errores = [];
    if (!id) {
        errores.push({ mensaje: "El ID es obligatorio" });
    }
    if (id == "") {
        errores.push({ mensaje: "El ID no puede estar vacío" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al actualizar la vacunación", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const vaccination = await updatevaccinations(id, data);
    var response = new Response(true, "Vacunación actualizada exitosamente", vaccination, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error en la actualización de vacunación", null, [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const deleteVaccination = async (req, res) => {
    try {
    const { id } = req.params;
    var errores = [];
    if (!id) {
        errores.push({ mensaje: "El ID es obligatorio" });
    }
    if (id == "") {
        errores.push({ mensaje: "El ID no puede estar vacío" });
    }
    if (errores.length > 0) {
        var response = new Response(false, "Error al eliminar la vacunación", null, errores);
        res.status(400);
        res.json(response.json);
        return;
    }
    const vaccination = await deleteIdvaccinations(id);
    var response = new Response(true, "Vacunación eliminada exitosamente", vaccination, null);
    res.status(200);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response(false, "error al eliminar vacunación", null, [error.message]);
    res.status(500);
    res.json(response.json);
    }
};

module.exports = {
    getAllVaccination,
    getVaccinationById,
    createVaccination,
    updateVaccination,
    deleteVaccination
};