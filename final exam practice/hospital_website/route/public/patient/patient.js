/**
 * patient.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const patientController = require("../../../controller/patientController");
 const Patient = require("../../../model/patientModel");
 const patientRouter = express.Router();
 
 // Define home page routes
 patientRouter.get("/", (req, res) => {
    const patientData = patientController.getPatientData();
    res.render("public/patient/patients", {patients: patientData});
 });
 
 patientRouter.post("/new", (req, res) => {
    const patientId = req.body.patientId;
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const dob = req.body.dob;
    const department = req.body.department;
    const outPatient = req.body.outPatient;

    const newPatient = new Patient(patientId, firstName, middleName, lastName, dob, department, outPatient);

    patientController.savePatientData(newPatient);

    res.redirect(303,"/patient");
 });



 module.exports = patientRouter;