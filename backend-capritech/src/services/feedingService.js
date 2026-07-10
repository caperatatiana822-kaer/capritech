const feeding = require('../models/feedingModel');

const feedingCreate = async (data) => {
    try {
        const newFeeding = await feeding.create(data);
        return newFeeding;
    } catch (error) {
        console.log(error);
    }
};

const getAllFeeding = async () => {
    try {
        const feedingRecords = await feeding.findAll();
        return feedingRecords;
    } catch (error) {
        console.log(error);
    }
};

const getIdFeeding = async (id) => {
    try {
        const feedingRecord = await feeding.findOne({where: {id}});
        return feedingRecord;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdFeeding = async (id) => {
    try {
        const deleteFeeding = await feeding.destroy({where: {id}});
        return deleteFeeding;
    } catch (error) {
        console.log(error);
    }
};

const updateFeeding = async (id, data) => {
    try {
        const updateFeeding = await feeding.update(data, {where: {id}}); 
        return updateFeeding;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    feedingCreate,
    getAllFeeding,
    getIdFeeding,
    deleteIdFeeding,
    updateFeeding
};