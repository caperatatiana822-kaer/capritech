const mastitis = require( '../models/mastitsModel' );
const mastitisCreate = async ( data ) => {
    try {
        const newMastitis = await mastitis.create( data );
        return newMastitis;
    } catch ( error ) {
        console.log( error );
    }
};
const getAllMastitis = async () => {
    try {
        const mastitisRecords = await mastitis.findAll();
        return mastitisRecords;
    } catch ( error ) {
        console.log( error );
    }
};
const getIdMastitis = async ( id ) => {
    try {
        const mastitisRecord = await mastitis.findByPk( id );
        return mastitisRecord;
    } catch ( error ) {
        console.log( error );
    }
};
const deleteIdMastitis = async ( id ) => {
    try {
        const deletedMastitis = await mastitis.destroy( { where: { id: id } } );
        return deletedMastitis;
    } catch ( error ) {
        console.log( error );
    }
};
const updateMastitis = async ( id, data ) => {
    try {
        const updatedMastitis = await mastitis.update( data, { where: { id: id } } );
        return updatedMastitis;
    } catch ( error ) {
        console.log( error );
    }
};
module.exports = {
    mastitisCreate,
    getAllMastitis,
    getIdMastitis,
    deleteIdMastitis,
    updateMastitis
};