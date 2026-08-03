const { userCreate, userGetById, usuarioDelete, userUpdate, getAllUsers: getAllUsersService } = require('../services/userService');
const Response = require("../functions/response");
const path = require("path");
const fs = require("fs");
const { sendEmail } = require("../services/emailService");

const getAllUsers = async (req, res) => {
    try {
        const usersList = await getAllUsersService();
        var response = new Response(true, "Usuarios consultados exitosamente", usersList, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error al consultar todos los usuarios", null, [
            error.message,
        ])
        res.status(500);
        res.json(response.json);
    }
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
            var response = new Response(false, "Error al consultar el usuario", null, errores);
            res.status(400);
            res.json(response.json);
            return;
        }
        const user = await userGetById(id);
        var response = new Response(true, "Usuario consultado exitosamente", user, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error en la consulta de usuario", null, [
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
            var response = new Response(false, "Error en la creación del usuario", null, errores);
            res.status(400);
            res.json(response.json);
            return;
        }
        data = { name, email, password, documentId, postJob };
        const user = await userCreate(data);
        console.log("Usuario creado:", user);

        // crear configuracion 
        let templatePath = path.join(process.cwd(), "public", "templates", "configEmail.json");
        const confirmEmailTemplate = fs.readFileSync(templatePath, "utf-8");

        // leerla y sacar prop 
        const dataTemplate = JSON.parse(confirmEmailTemplate);

        // leer archivo html
        const htmlPath = path.join(process.cwd(), "public", "templates", dataTemplate.html);
        const templatehtml = fs.readFileSync(htmlPath, "utf-8");

        // reemplaza propiedades
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

        // envio del correo
        await sendEmail(user.email, dataTemplate.subject, "Confirma tu correo para activar tu cuenta", htmlModificado);

        var response = new Response(true, "Usuario creado y correo enviado exitosamente", user);
        var response = new Response(true, "Usuario creado exitosamente", user, null);
        res.status(201);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error en la creacion de usuario", null, [
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
            var response = new Response(false, "Error al actualizar el usuario", null, errores);
            res.status(400);
            res.json(response.json);
            return;
        }
        const user = await userUpdate(id);
        var response = new Response(true, "usuario actualizado exitosamente", user, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error en la actualizacion de usuario", null, [
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
            var response = new Response(false, "Error al eliminar el usuario", null, errores);
            res.status(400);
            res.json(response.json);
            return;
        }
        const user = await usuarioDelete(id);
        var response = new Response(true, "usuario eliminado exitosamente", user, null);
        res.status(200);
        res.json(response.json);
    } catch (error) {
        console.log(error);
        var response = new Response(false, "error al eliminar usuario", null, [error.message]);
        res.status(500);
        res.json(response.json);
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};