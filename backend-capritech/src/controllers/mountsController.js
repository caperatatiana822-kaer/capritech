const { mountCreate, mountDelete, mountUpdate, mountGetById} = require("../services/mountsService");
const Response = require("../functions/response");

const getAllMounts = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({mensaje: "Obteniendo todos las montas"});
}

const getMountById = async (req, res) => {
    try {
    const { id } = req.params;
    if (!id || id.trim() === "") {
        const response = new Response( "error al obtener la monta", null, "El ID es obligatorio para obtener una monta");
        return res.status(400).json(response.json);
    }
    const mount = await mountGetById(id);
    var response = new Response(true, "monta consultada exitosamente", mount);
    res.status(200);
    res.json(response.json);
    res.json({ mensaje: `Obteniendo la monta con ID: ${id}` });
} catch (error) {
    console.log(error);
    var response = new Response("error en la consulta de monta", [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const createMount = async (req, res) => {
    try {
    const {fechaMonta, numeroMonta, nombreMacho, razaMacho, chapetaMacho, nombreHembra, razaHembra, chapetaHembra, posibleFechaParto } = req.body;
    var errores = [];
    if (!fechaMonta || fechaMonta.trim() === "") {
        errores.push({ mensaje: "La fecha de la monta es obligatoria" });
    }
    if (!numeroMonta || numeroMonta == "") {
        errores.push({ mensaje: "El número de la monta es obligatorio" });
    }
    if (!nombreMacho || nombreMacho.trim() === "") {
        errores.push({ mensaje: "El nombre del macho es obligatorio" });
    }
    if (!razaMacho || razaMacho.trim() === "") {
        errores.push({ mensaje: "La raza del macho es obligatoria" });
    }
    if (!chapetaMacho || chapetaMacho == "") {
        errores.push({ mensaje: "La chapeta del macho es obligatoria" });
    }
    if (!nombreHembra || nombreHembra.trim() === "") {
        errores.push({ mensaje: "El nombre de la hembra es obligatorio" });
    }
    if (!razaHembra || razaHembra.trim() === "") {
        errores.push({ mensaje: "La raza de la hembra es obligatoria" });
    }
    if (!chapetaHembra || chapetaHembra == "") {
        errores.push({ mensaje: "La chapeta de la hembra es obligatoria" });
    }
    if (!posibleFechaParto || posibleFechaParto.trim() === "") {
        errores.push({ mensaje: "La posible fecha de parto es obligatoria" });
    }
    if (errores.length > 0) {
        var response = new Response("Error en la creación de la monta", null, errores );
        res.status(400);
        res.json(response.json);
        return;
    }
    data = {fechaMonta, numeroMonta, nombreMacho, razaMacho, chapetaMacho, nombreHembra, razaHembra, chapetaHembra, posibleFechaParto };
    const mount = await mountCreate(data);
    var response = new Response(true, "Monta creada exitosamente", mount );
    res.status(201);
    res.json(response.json);
} catch (error) {
    console.log(error);
    var response = new Response("error en la creacion de monta", [
        error.message,
    ])
    res.status(500);
    res.json(response.json);
    }
};

const updateMount = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || id.trim() === "") {
            const response = new Response("error al actualizar la monta",null,"El ID es obligatorio para actualizar una monta" );
            return res.status(400).json(response.json);
        }
        const mount = await mountUpdate(id);
        var response = new Response(true, "monta actualizada exitosamente", mount);
        res.status(200);
        res.json(response.json);
        res.json({ mensaje: `Actualizando la monta con ID: ${id}` });
    } catch (error) {
        console.log(error);
        var response = new Response("error al actualizar la monta", [
            error.message,
        ]);
        res.status(500);
        res.json(response.json);
    }
};

const deleteMount = async (req, res) => {
    try {
    const { id } = req.params;
    if (!id || id.trim() === "") {
        const response = new Response("error al eliminar la monta", null, "El ID es obligatorio para eliminar una monta" );
        return res.status(400).json(response.json);
    }
    const mount = await mountDelete(id);
    var response = new Response(true, "monta eliminada exitosamente", mount);
    res.status(200);
    res.json(response.json);
    res.json({ mensaje: `Eliminando la monta con ID: ${id}` });
} catch (error) {
    throw error;
    }
};

module.exports = {
    getAllMounts,
    getMountById,
    createMount,
    updateMount,
    deleteMount
};