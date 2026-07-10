const Responsible = require('../models/responsibleModels');

const responsibleCreate = async (data) => {
    try {
        const newResponsible = await Responsible.create(data);
        return newResponsible;
    } catch (error) {
        console.log(error);
    }
};

const getAllResponsible = async () => {
    try {
        const responsible = await Responsible.findAll();
        return responsible;
    } catch (error) {
        console.log(error);
    }
};

const getIdResponsible = async (id) => {
    try {
        const responsible = await Responsible.findOne({where: {id}});
        return responsible;
    } catch (error) {
        console.log(error);
    }
};

const deleteIdResponsible = async (id) => {
    try {
        const deleteResponsible = await Responsible.destroy({where: {id}});
        return deleteResponsible;
    } catch (error) {
        console.log(error);
    }
};

const updateResponsible = async (id, data) => {
    try {
        const updateResponsible = await Responsible.update(data, {where: {id}}); 
        return updateResponsible;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    responsibleCreate,
    getAllResponsible,
    getIdResponsible,
    deleteIdResponsible,
    updateResponsible
};