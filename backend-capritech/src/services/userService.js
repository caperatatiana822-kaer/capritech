const User = require('../models/userModel');

const userCreate = async (data) => {
    try {
        const newUser = await User.create(data);
        return newUser;
    } catch (error) {
        console.log(error);
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.log(error);
    }
};

const userGetById = async (id) => {
    try {
        const userid = await User.findOne({where: {id}});
        return userid;
    } catch (error) {
        console.log(error);
    }
};

const usuarioDelete = async (id) => {
    try {
        const deleteUser = await User.destroy({where: {id}});
        return deleteUser;
    } catch (error) {
        console.log(error);
    }
};

const userUpdate = async (id, data) => {
    try {
        const updateUser = await User.update(data, {where: {id}}); 
        return updateUser;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    userCreate,
    getAllUsers,
    userGetById,
    usuarioDelete,
    userUpdate
};