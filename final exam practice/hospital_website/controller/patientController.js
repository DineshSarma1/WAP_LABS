// patientController.js

const datastore = require("../datastore/datastore");

const patientController = (function() {

    const getPatientData = function() {
        return datastore.getData();
    }

    const savePatientData = function(newPatient) {
        datastore.saveData(newPatient);
    }

    // const getElderlyPatientsOnly = function() {
    //     datastore.getElderlyPatientsOnly();
    // }

    // const getOutPatientsOnly = function() {
    //     datastore.getOutPatientsOnly();
    // }

    return {
        getPatientData: getPatientData,
        savePatientData: savePatientData
    }

})();

module.exports = patientController;