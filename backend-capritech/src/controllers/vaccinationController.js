const { vaccinationCreate } = require("../services/vaccinationService");
const Response = require("../functions/response");

const getAllVaccination = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);

    res.status(200);
    res.json({ mensaje: "Obteniendo todas las vacunaciones" });
};

const getVaccinationById = (req, res) => {
    const { id } = req.params;

    res.json({
        mensaje: `Obteniendo la vacunación con ID: ${id}`
    });
};

const createVaccination = async (req, res) => {

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
        const response = new Response(
            "Error en la creación de la vacunación",
            null,
            errores
        );

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

    const vaccination = await vaccinationCreate(data);

    const response = new Response(
        true,
        "Vacunación creada exitosamente",
        vaccination
    );

    res.status(201);
    res.json(response.json);
};

const updateVaccination = (req, res) => {
    const { id } = req.params;

    res.json({
        mensaje: `Actualizando la vacunación con ID: ${id}`
    });
};

const deleteVaccination = (req, res) => {
    const { id } = req.params;

    res.json({
        mensaje: `Eliminando la vacunación con ID: ${id}`
    });
};

module.exports = {
    getAllVaccination,
    getVaccinationById,
    createVaccination,
    updateVaccination,
    deleteVaccination
};