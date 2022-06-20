// census-form-app-.js

"use-strict";

console.log("hello census form")

window.onload = function() {

    const censusForm = document.getElementById("censusForm");

    censusForm.addEventListener("submit", event => {
        event.preventDefault();
        const fullName = document.getElementById("fullName");
        const citizenId = document.getElementById("citizenId");
        const ssn = document.getElementById("ssn");
        const state = document.getElementById("state");
        const snrCitizen = censusForm.elements["radBtnSnrCitizen"];

        const formData = "Full Name: " + fullName.value + 
            "Citizen ID: " + citizenId.value + 
            "Social Sec No: " + ssn.value + 
            "State : " + state.value + 
            "Is a Senior Citizen: " + snrCitizen.value;

        alert(formData)

        //setting blank value
        fullName.value = "";
        citizenId.value = "";
    })
    
}
