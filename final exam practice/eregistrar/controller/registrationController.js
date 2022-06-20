
// registraionController.js

"use strict";

const dataStore = require("../datastore/datastore");
const Student = require("../model/student");

const registraionController = (function() {

    const getRegistrations = function(req,res) {
        return dataStore.getData();
    }

    const registerNewStudent = function(req, res) {
        const studentId = req.body.studentId;
        const fullName = req.body.fullName;
        const levelOfStudy = req.body.levelOfStudy;

        const newStudent = new Student(studentId, fullName, levelOfStudy);
        dataStore.setData(newStudent);
    }

    return {
        getRegistrations : getRegistrations,
        registerNewStudent : registerNewStudent
    }

})();

module.exports = registraionController;