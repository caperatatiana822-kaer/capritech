const vaccination = require('../models/vaccinationModel');

const createvaccination = async (data) => {
    try {
        const newVaccination = await vaccination.create(data);
        return newVaccination;
    } catch (error) {
        console.log(error);
    }
};

const getAllvaccinations = async () => {
    try {
        const vaccinations = await vaccination.findAll();
        return vaccinations;
    } catch (error) {
        console.log(error);
    }
};

const getIdvaccinations = async (id) => {
    try {
        const vaccinationid = await vaccination.findOne({where: {id}});
        return vaccinationid;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdvaccinations = async (id) => {
    try {
        const deleteVaccination = await vaccination.destroy({where: {id}});
        return deleteVaccination;
    } catch (error) {
        console.log(error);
    }
};

const updatevaccinations = async (id, data) => {
    try {
        const updateVaccination = await vaccination.update(data, {where: {id}}); 
        return updateVaccination;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createvaccination,
    getAllvaccinations,
    getIdvaccinations,
    deleteIdvaccinations,
    updatevaccinations
};