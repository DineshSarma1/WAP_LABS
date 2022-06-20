// accountController.js

"use strict";

const dataStore = require("../datastore/datastore");
const Account = require("../model/accountModel");

const accountController = (function() {

    const getAccounts = function(req,res) {
        return dataStore.getData();
    }

    const createAccount = function(req, res) {
        const accountNumber = req.body.accountNumber;
        const fullName = req.body.fullName;
        const accountType = req.body.accountType;

        const account = new Account(accountNumber, fullName, accountType);
        dataStore.setData(account);
    }

    return {
        getAccounts: getAccounts
    }
})();

module.exports = accountController;