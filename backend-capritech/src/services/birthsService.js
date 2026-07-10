const births = require('../models/birthsModel');

const birthsCreate = async (data) => {
    try {
        const newBirth = await births.create(data);
        return newBirth;
    } catch (error) {
        console.log(error);
    }
};

const getAllbirths = async () => {
    try {
        const births = await births.findAll();
        return births;
    } catch (error) {
        console.log(error);
    }
};

const getIdbirths = async (id) => {
    try {
        const birthid = await births.findOne({where: {id}});
        return birthid;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdbirths = async (id) => {
    try {
        const deleteBirth = await births.destroy({where: {id}});
        return deleteBirth;
    } catch (error) {
        console.log(error);
    }
};

const updatebirths = async (id, data) => {
    try {
        const updateBirth = await births.update(data, {where: {id}}); 
        return updateBirth;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    birthsCreate,
    getAllbirths,
    getIdbirths,
    deleteIdbirths,
    updatebirths
};