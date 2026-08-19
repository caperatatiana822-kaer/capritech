const Vaccination = require('../models/vaccinationModel');

const createvaccination = async (data) => {
    try {
        console.log("Datos recibidos en servicio VACCINATION:", data);
        const newVaccination = await Vaccination.create(data);
        console.log("Vacunacion creada:", newVaccination.toJSON());
        return newVaccination;
    } catch (error) {
        console.log("Error en createvaccination:", error);
        throw error;
    }
};

const getAllvaccinations = async () => {
    try {
        const vaccinations = await Vaccination.findAll({
            order: [['id', 'DESC']]
        });
        console.log("Registros VACCINATION encontrados:", vaccinations.length);
        return vaccinations || [];
    } catch (error) {
        console.log("Error en getAllvaccinations:", error);
        throw new Error(`Error al obtener registros VACCINATION: ${error.message}`);
    }
};

const getIdvaccinations = async (id) => {
    try {
        const vaccinationid = await Vaccination.findByPk(id);
        return vaccinationid || null;
    } catch (error) {
        console.log("Error en getIdvaccinations:", error);
        throw new Error(`Error al obtener registro VACCINATION por ID: ${error.message}`);
    }
};

const deleteIdvaccinations = async (id) => {
    try {
        const deleteVaccination = await Vaccination.destroy({ where: { id: id } });
        return deleteVaccination;
    } catch (error) {
        console.log("Error en deleteIdvaccinations:", error);
        throw new Error(`Error al eliminar registro VACCINATION: ${error.message}`);
    }
};

const updatevaccinations = async (id, data) => {
    try {
        const updateVaccination = await Vaccination.update(data, { where: { id: id } });
        return updateVaccination;
    } catch (error) {
        console.log("Error en updatevaccinations:", error);
        throw new Error(`Error al actualizar registro VACCINATION: ${error.message}`);
    }
};

module.exports = {
    createvaccination,
    getAllvaccinations,
    getIdvaccinations,
    deleteIdvaccinations,
    updatevaccinations
};