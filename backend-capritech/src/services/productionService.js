const Production = require('../models/producctionModel');

const productionCreate = async (data) => {
    try {
        const newProduction = await Production.create(data);
        return newProduction;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getAllProduction = async () => {
    try {
        const Production = await Production.findAll();
        return Production;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const productionGetById = async (id) => {
    try {
        const Productionid = await Production.findOne({where: {id}});
        return Productionid;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const productionDelete = async (id) => {
    try {
        const deleteProduction = await Production.destroy({where: {id}});
        return deleteProduction;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const productionUpdate = async (id, data) => {
    try {
        const updateProduction = await Production.update(data, {where: {id}}); 
        return updateProduction;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    productionCreate,
    getAllProduction,
    productionGetById,
    productionDelete,
    productionUpdate
};