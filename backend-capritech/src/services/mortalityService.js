const mortality = require('../models/mortalityModel');

const mortalityCreate = async (data) => {
    try {
        const newMortality = await mortality.create(data);
        return newMortality;
    } catch (error) {
        console.log(error);
    }
};

const getAllMortality = async () => {
    try {
        const mortalityRecords = await mortality.findAll();
        return mortalityRecords;
    } catch (error) {
        console.log(error);
    }
};

const getIdMortality = async (id) => {
    try {
        const mortalityRecord = await mortality.findOne({where: {id}});
        return mortalityRecord;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdMortality = async (id) => {
    try {
        const deleteMortality = await mortality.destroy({where: {id}});
        return deleteMortality;
    } catch (error) {
        console.log(error);
    }
};

const updateMortality = async (id, data) => {
    try {
        const updateMortality = await mortality.update(data, {where: {id}}); 
        return updateMortality;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    mortalityCreate,
    getAllMortality,
    getIdMortality,
    deleteIdMortality,
    updateMortality
};