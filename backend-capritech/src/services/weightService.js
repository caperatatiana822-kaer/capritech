const weight = require( '../models/weigthModel' );
const createweight = async ( data ) => {
    try {
        const newweight = await weight.create( data );
        return newweight;
    } catch ( error ) {
        console.log( error );
    }
};
const getallweight = async () => {
    try {
        const weightRecords = await weight.findAll();
        return weightRecords;
    } catch ( error ) {
        console.log( error );
    }
};
const getIdweight = async ( id ) => {
    try {
        const weightRecord = await weight.findByPk( id );
        return weightRecord;
    } catch ( error ) {
        console.log( error );
    }
};
const deleteIdweight = async ( id ) => {
    try {
        const deletedweight = await weight.destroy( { where: { id: id } } );
        return deletedweight;
    } catch ( error ) {
        console.log( error );
    }
};
const updateweight = async ( id, data ) => {
    try {
        const updatedweight = await weight.update( data, { where: { id: id } } );
        return updatedweight;
    } catch ( error ) {
        console.log( error );
    }
};
module.exports = {
    createweight,
    getallweight,
    getIdweight,
    deleteIdweight,
    updateweight
};