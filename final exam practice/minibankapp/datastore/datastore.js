/**
 * datastore.js
 * 
 * @author 
 * @since 
 */
"use strict";

const dataStore = (function(){
    const accountData = [
        {accountNumber: "01-123-0010", fullName: "Anna Lynn Smith", accountType: "Saving"},
        {accountNumber: "02-234-0020", fullName: "Bob K. Jones", accountType: "Checking"}
    ];

    const getData = function() {
        return accountData;
    }

    const setData = function(newAccount) {
        accountData.push(newAccount);
    }

    return {
        getData: getData,
        setData: setData
    }

})();

module.exports = dataStore;