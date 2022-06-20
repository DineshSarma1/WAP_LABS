/**
 * datastore.js
 * 
 * @author 
 * @since 
 */
 "use strict";

 const dataStore = (function(){
     const patientData = [
         {patientId: "EP-111-000123", firstName: "Puskar", middleName: "K", lastName: "Sarma", dob: "1994-09-21", department:"Cardiology", outPatient:"Yes"},
         {patientId: "EP-111-000123", firstName: "Pa", middleName: "K", lastName: "Sarma", dob: "1994-09-21", department:"Cardiology", outPatient:"Yes"},
         {patientId: "EP-111-000123", firstName: "Puskar", middleName: "K", lastName: "Sarma", dob: "1994-09-21", department:"Cardiology", outPatient:"Yes"}
     ];
 
     const getData = function() {

        // sorting the data according to firstName
        patientData.sort(function(o1,o2) {
            if(o1.firstName > o2.firstName) {
                return 1;
            }
            return -1;
        });

        //  returnign sorted data
         return patientData;
     }

    //  const getElderlyPatientsOnly = function() {

    //     //  get elderly Patients record only
    //     const elderlyPatients = [];
    //     for(let i = 0; i < patientData.length ; i++) {
    //         if(patientData[i].outPatient === "No") {
    //             elderlyPatients.push(patientData[i]);
    //         }
    //     }

    //     //  returning elderly patients data
    //      return elderlyPatients;
    //  }

    //  const getOutPatientsOnly = function() {

    //     //  get elderly Patients record only
    //     const outPatients = [];
    //     for(let i = 0; i < patientData.length ; i++) {
    //         if(patientData[i].outPatient === "Yes") {
    //             outPatients.push(patientData[i]);
    //         }
    //     }

    //     //  returning out - patients data
    //      return outPatients;
    //  }

     const saveData = function(newPatient) {
        patientData.push(newPatient);
     }
 
 
     return {
         getData: getData,
         saveData: saveData
     }
 
 })();
 
 module.exports = dataStore;