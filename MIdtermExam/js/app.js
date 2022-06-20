//app.js

"use strict"

console.log("testing java script");

window.onload = function() {
    const bankForm = document.getElementById("bankRegistrationForm");

    bankForm.addEventListener('submit', event => {
        event.preventDefault();
        const accountOwenership = bankForm.elements["accountType"];
        const fullName = document.getElementById("fullName");
        const address = document.getElementById("address");
        const accountNumber = document.getElementById("accountNumber");
        const accounttype = document.getElementById("typeOfAccount");

        const formData = `
            Account Ownership Type : ${accountOwenership.value}
            Customer Full Name : ${fullName.value}
            Address : ${address.value}
            Account Number : ${accountNumber.value}
            Type of Account : ${accounttype.value}
        `

        alert(formData);
    })
}