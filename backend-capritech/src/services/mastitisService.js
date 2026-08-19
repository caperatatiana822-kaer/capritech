const Mastitis = require('../models/mastitisModel');

const mastitisCreate = async (data) => {
    try {
        console.log("Datos recibidos en servicio MASTITIS:", data);
        const newMastitis = await Mastitis.create(data);
        console.log("Mastitis creada:", newMastitis.toJSON());
        return newMastitis;
    } catch (error) {
        console.log("Error en mastitisCreate:", error);
        throw error;
    }
};

const getAllMastitis = async () => {
    try {
        const mastitisRecords = await Mastitis.findAll({
            order: [['id', 'DESC']]
        });
        console.log("Registros MASTITIS encontrados:", mastitisRecords.length);
        return mastitisRecords || [];
    } catch (error) {
        console.log("Error en getAllMastitis:", error);
        throw new Error(`Error al obtener registros MASTITIS: ${error.message}`);
    }
};

const getIdMastitis = async (id) => {
    try {
        const mastitisRecord = await Mastitis.findByPk(id);
        return mastitisRecord || null;
    } catch (error) {
        console.log("Error en getIdMastitis:", error);
        throw new Error(`Error al obtener registro MASTITIS por ID: ${error.message}`);
    }
};

const deleteIdMastitis = async (id) => {
    try {
        const deletedMastitis = await Mastitis.destroy({ where: { id: id } });
        return deletedMastitis;
    } catch (error) {
        console.log("Error en deleteIdMastitis:", error);
        throw new Error(`Error al eliminar registro MASTITIS: ${error.message}`);
    }
};

const updateMastitis = async (id, data) => {
    try {
        const updatedMastitis = await Mastitis.update(data, { where: { id: id } });
        return updatedMastitis;
    } catch (error) {
        console.log("Error en updateMastitis:", error);
        throw new Error(`Error al actualizar registro MASTITIS: ${error.message}`);
    }
};

module.exports = {
    mastitisCreate,
    getAllMastitis,
    getIdMastitis,
    deleteIdMastitis,
    updateMastitis
};