/**
 * home.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const homepageRouter = express.Router();
 
 // Define home page routes
 homepageRouter.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "../../../views/public/home", "home.html"));
 });
 
 homepageRouter.get("/fsap", (req, res) => {
     res.sendFile(path.join(__dirname, "../../../views/public/home", "home.html"));
 });

 homepageRouter.get("/fsap/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../views/public/home", "home.html"));
});
 
 module.exports = homepageRouter;