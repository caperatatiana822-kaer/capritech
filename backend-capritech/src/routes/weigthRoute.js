const express = require('express');
const router = express.Router();

const {
    getAllWeigth,
    getWeigthById,
    createWeigth,
    updateWeigth,
    deleteWeigth
} = require("../controllers/weigthController");

/**
 * @swagger
 * tags:
 *   name: Peso
 *   description: Gestión de peso
 */

/**
 * @swagger
 * /api/weigth/weigthAll:
 *   get:
 *     summary: Obtener todos los registros de peso
 *     description: Devuelve una lista de todos los registros de peso registrados en el sistema
 *     tags:
 *       - Peso
 *     responses:
 *       200:
 *         description: Lista de registros de peso obtenida correctamente
 */
router.get("/weigthAll", getAllWeigth);

/**
 * @swagger
 * /api/weigth/weigth/{id}:
 *   get:
 *     summary: Obtener un registro de peso por ID
 *     tags:
 *       - Peso
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de peso
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Registro de peso obtenido correctamente
 *       404:
 *         description: Registro de peso no encontrado
 */
router.get("/weigth/:id", getWeigthById);

/**
 * @swagger
 * /api/weigth/weigth:
 *   post:
 *     summary: Crear registro de peso
 *     tags:
 *       - Peso
 *     responses:
 *       201:
 *         description: Registro de peso creado correctamente
 */
router.post("/weigth", createWeigth);

/**
 * @swagger
 * /api/weigth/weigth/{id}:
 *   put:
 *     summary: Actualizar registro de peso
 *     tags:
 *       - Peso
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
*         description: ID del registro de peso
*         schema:
*           type: string
*     responses:
*       200:
*         description: Registro de peso actualizado correctamente
*       404:
*         description: Registro de peso no encontrado
 */
router.put("/weigth/:id", updateWeigth);

/**
* @swagger
* /api/weigth/weigth/{id}:
*   delete:
*     summary: Eliminar registro de peso
*     tags:
*       - Peso
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID del registro de peso
*         schema:
*           type: string
*     responses:
*       200:
*         description: Registro de peso eliminado correctamente
*       404:
*         description: Registro de peso no encontrado
 */
router.delete("/weigth/:id", deleteWeigth);

module.exports = router;