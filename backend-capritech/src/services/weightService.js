const Weighing = require('../models/weigthModel');

const weigthCreate = async (data) => {
    try {
        const newWeighing = await Weighing.create(data);
        return newWeighing;
    } catch (error) {
        console.log(error);
    }
};

const getAllWeigthings = async () => {
    try {
        const weighingRecords = await Weighing.findAll();
        return weighingRecords;
    } catch (error) {
        console.log(error);
    }
};

const getIdWeigthing = async (id) => {
    try {
        const weighingRecord = await Weighing.findOne({where: {id}});
        return weighingRecord;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdWeigthing = async (id) => {
    try {
        const deletedWeighing = await Weighing.destroy({where: {id}});
        return deletedWeighing;
    } catch (error) {
        console.log(error);
    }
};

const updateWeigthing = async (id, data) => {
    try {
        const updatedWeighing = await Weighing.update(data, {where: {id}});
        return updatedWeighing;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    weigthCreate,
    getAllWeigthings,
    getIdWeigthing,
    deleteIdWeigthing,
    updateWeigthing
};