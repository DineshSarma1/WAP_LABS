/**
 * account.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const accountController = require("../../../controller/accountController");
 const accountRouter = express.Router();
 
 // Define Register page routes
 accountRouter.get("/", (req, res) => {
     const accountData = accountController.getAccounts();
     res.render("public/account/account",{accounts : accountData});
 });
 
 module.exports = accountRouter;