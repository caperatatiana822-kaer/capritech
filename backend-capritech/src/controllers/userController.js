const { userCreate, userGetById, usuarioDelete, userUpdate } = require('../services/userService');
const Response = require("../functions/response");
const path = require("path");
const fs = require("fs");
const { sendEmail } = require("../services/emailService");

const getAllUsers = (req, res) => {
    const body = req.body;
    console.log("body recibido: ", body);
    res.status(201);
    res.json({ mensaje: "Obteniendo todos los usuarios" });
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        var errores = [];
        if (!id) {
            errores.push({ message: "el id es obligatorio" })
        }
        if (id == "") {
            errores.push({ mensaje: "El ID no puede estar vacío" });
        }
        if (errores.length > 0) {
            var response = new Response("Error al consultar el usuario", null, errores);
            res.status(400);
            res.json(response.json);
            return;
        }
        const user = await userGetById(id);
        var response = new Response(true, "produccion consultada exitosamente", user);
        res.status(200);
        res.json(response.json);
        res.json({ mensaje: `Obteniendo el usuario con ID: ${id}` });
    } catch (error) {
        console.log(error);
        var response = new Response("error en la consulta de usuario", [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email, password, documentId, postJob } = req.body;

        var errores = [];

        if (!name || !email || !password || !documentId || !postJob) {
            errores.push({ mensaje: "Todos los campos son obligatorios" });
        }
        if (name == "") {
            errores.push({ mensaje: "El campo name no puede estar vacio" });
        }
        if (email == "") {
            errores.push({ mensaje: "El campo email no puede estar vacio" });
        }
        if (password == "") {
            errores.push({ mensaje: "El campo password no puede estar vacio" });
        }
        if (documentId == "") {
            errores.push({ mensaje: "El campo documentId no puede estar vacio" });
        }
        if (postJob == "") {
            errores.push({ mensaje: "El campo postJob no puede estar vacio" });
        }
        if (errores.length > 0) {
            var response = new Response("Error en la creación del usuario", null, errores);
            res.status(400);
            res.json(response.json);
            return;
        }
        data = { name, email, password, documentId, postJob };
        const user = await userCreate(data);
        console.log("Usuario creado:", user);

        // PASO 1: leer configuración → plantilla envío JSON
        let templatePath = path.join(process.cwd(), "public", "templates", "configEmail.json");
        const confirmEmailTemplate = fs.readFileSync(templatePath, "utf-8");

        // PASO 2: sacar propiedades (código)
        const dataTemplate = JSON.parse(confirmEmailTemplate);

        // PASO 3: leer archivo HTML
        const htmlPath = path.join(process.cwd(), "public", "templates", dataTemplate.html);
        const templatehtml = fs.readFileSync(htmlPath, "utf-8");

        // PASO 4: reemplazar propiedades
        var htmlModificado = templatehtml.toString();
        const valores = {
            "@name": user.name,
            "@link": `http://localhost:3001/confirmar/${user.id}`,
            "@nameBtn": "Confirmar cuenta",
            "@cuentaEmpresa": "CapriTech",
        };
        for (const key in valores) {
            const regex = new RegExp(key, "g");
            htmlModificado = htmlModificado.replace(regex, valores[key]);
        }

        // PASO 5: enviar correo
        await sendEmail(user.email, dataTemplate.subject, "Confirma tu correo para activar tu cuenta", htmlModificado);

        var response = new Response(true, "Usuario creado y correo enviado exitosamente", user);
        var response = new Response(true, "Usuario creado exitosamente", user);
        res.status(201);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response("error en la creacion de usuario", [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
}
const updateUser = async (req, res) => {
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
            var response = new Response("Error al actualizar el usuario", null, errores);
            res.status(400);
            res.json(response.json);
            return;
        }
        const user = await userUpdate(id);
        var response = new Response(true, "usuario actualizado exitosamente", user);
        res.status(200);
        res.json(response.json);
        res.json({ mensaje: `Actualizando el usuario con ID: ${id}` });
    } catch (error) {
        console.log(error);
        var response = new Response("error en la actualizacion de usuario", [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
}

const deleteUser = async (req, res) => {
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
            var response = new Response("Error al eliminar el usuario", null, errores);
            res.status(400);
            res.json(response.json);
            return;
        }
        const user = await usuarioDelete(id);
        var response = new Response(true, "usuario eliminado exitosamente", user);
        res.status(200);
        res.json(response.json);
        res.json({ mensaje: `Eliminando el usuario con ID: ${id}` });
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};