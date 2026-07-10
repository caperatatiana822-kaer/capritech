const {birthsCreate} = require('../services/birthsService');
const Response = require("../functions/response");

const getAllBirths = (req, res) => {
    const response = new Response(
        true,
        "Obteniendo todos los nacimientos",
        []
    );

    res.status(200).json(response.json);
};

const getBirthsById = (req, res) => {
    const { id } = req.params;

    if (!id) {
        const response = new Response(
            false,
            "El ID es obligatorio",
            null
        );

        return res.status(400).json(response.json);
    }

    const response = new Response(
        true,
        `Obteniendo nacimiento con ID: ${id}`,
        null
    );

    res.status(200).json(response.json);
};

const createBirths = async (req, res) => {

    const {
        chapeta,
        nombreAnimal,
        fechaNacimiento,
        raza,
        sexo,
        pesoNacer,
        fichaMadre,
        nombreMadre,
        razaMadre,
        fichaPadre,
        nombrePadre,
        razaPadre
    } = req.body;

    let errores = [];

    if (!chapeta) errores.push({ mensaje: "La chapeta es obligatoria" });
    if (!nombreAnimal) errores.push({ mensaje: "El nombre del animal es obligatorio" });
    if (!fechaNacimiento) errores.push({ mensaje: "La fecha de nacimiento es obligatoria" });
    if (!raza) errores.push({ mensaje: "La raza es obligatoria" });
    if (!sexo) errores.push({ mensaje: "El sexo es obligatorio" });
    if (!pesoNacer) errores.push({ mensaje: "El peso al nacer es obligatorio" });
    if (!fichaMadre) errores.push({ mensaje: "La ficha de la madre es obligatoria" });
    if (!nombreMadre) errores.push({ mensaje: "El nombre de la madre es obligatorio" });
    if (!razaMadre) errores.push({ mensaje: "La raza de la madre es obligatoria" });
    if (!fichaPadre) errores.push({ mensaje: "La ficha del padre es obligatoria" });
    if (!nombrePadre) errores.push({ mensaje: "El nombre del padre es obligatorio" });
    if (!razaPadre) errores.push({ mensaje: "La raza del padre es obligatoria" });

    if (errores.length > 0) {
        const response = new Response(
            false,
            "Error en la creación del nacimiento",
            errores
        );

        return res.status(400).json(response.json);
    }
    data = {chapeta, nombreAnimal, fechaNacimiento, raza, sexo, pesoNacer, fichaMadre, nombreMadre, razaMadre, fichaPadre, nombrePadre, razaPadre};
    const births = await birthsCreate(data);
        var response = new Response(true, "nacimiento creado exitosamente", births);
    res.status(201);
    res.json(response.json);
};

const updateBirths = (req, res) => {
    const { id } = req.params;

    if (!id) {
        const response = new Response(
            false,
            "El ID es obligatorio",
            null
        );

        return res.status(400).json(response.json);
    }

    const response = new Response(
        true,
        `Nacimiento actualizado con ID: ${id}`,
        null
    );

    res.status(200).json(response.json);
};

const deleteBirths = (req, res) => {
    const { id } = req.params;

    if (!id) {
        const response = new Response(
            false,
            "El ID es obligatorio",
            null
        );

        return res.status(400).json(response.json);
    }

    const response = new Response(
        true,
        `Nacimiento eliminado con ID: ${id}`,
        null
    );

    res.status(200).json(response.json);
};

module.exports = {
    getAllBirths,
    getBirthsById,
    createBirths,
    updateBirths,
    deleteBirths
};
