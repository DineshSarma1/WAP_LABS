// accountModel.js

"use strict";

function Account (accountNumber, fullName, accountType) {
    this.accountNumber = accountNumber;
    this.fullName = fullName;
    this.accountType = accountType;

}

module.exports = Account;