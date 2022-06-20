/**
 * registration.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const registraionController = require("../../../controller/registrationController");
 const registerRouter = express.Router();
 
 // Define Register page routes
 registerRouter.get("/", (req, res) => {
     const registrationData = registraionController.getRegistrations();
     res.render("public/registration/registration",{registrations : registrationData});
 });
 
 registerRouter.post("/new", (req, res) => {
    registraionController.registerNewStudent(req, res);
    res.redirect(303,"/registration");
 });

 module.exports = registerRouter;