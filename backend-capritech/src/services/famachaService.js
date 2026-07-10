const famacha = require( '../models/famachaModel' );
const famachaCreate = async ( data ) => {
    try {
        const newfamacha = await famacha.create( data );
        return newfamacha;
    } catch ( error ) {
        console.log( error );
    }
    };
const getallfamacha = async () => {
    try {
        const famachaRecords = await famacha.findAll();
        return famachaRecords;
        } catch ( error ) {
            console.log( error );
        }
        };
const getIdfamacha = async ( id ) => {
    try {
        const famachaRecord = await famacha.findByPk( id );
        return famachaRecord;
        } catch ( error ) {
            console.log( error );
        }
        };
const deleteIdfamacha = async ( id ) => {
    try {
        const deletedfamacha = await famacha.destroy( { where: { id: id } } );
        return deletedfamacha;
        } catch ( error ) {
            console.log( error );
        }
        };
const updatefamacha = async ( id, data ) => {
        try {
        const updatedfamacha = await famacha.update( data, { where: { id: id } } );
        return updatedfamacha;
        } catch ( error ) {
            console.log( error );
        }
        };
module.exports = {
    famachaCreate,
    getallfamacha,
    getIdfamacha,
    deleteIdfamacha,
    updatefamacha
};